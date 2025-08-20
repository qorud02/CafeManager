import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendEmail } from "./sendgrid";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, company, email, phone, message, inquiryType } = req.body;

      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ error: "필수 필드가 누락되었습니다." });
      }

      const inquiryTypeText = inquiryType === "franchise" ? "가맹" : "제휴";
      
      // Email content
      const emailSubject = `[유니컵컴퍼니] ${inquiryTypeText} 문의 - ${name}`;
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1F3B83 0%, #4A90E2 100%); padding: 30px; border-radius: 12px; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">
              🏢 유니컵컴퍼니 ${inquiryTypeText} 문의
            </h1>
            <p style="color: #E8F2FF; margin: 10px 0 0 0; font-size: 16px;">
              새로운 ${inquiryTypeText} 문의가 접수되었습니다
            </p>
          </div>
          
          <div style="background: #f8fafc; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #1F3B83; margin: 0 0 20px 0; font-size: 18px; border-bottom: 2px solid #E2E8F0; padding-bottom: 10px;">
              📋 문의자 정보
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4A5568; width: 100px;">담당자명:</td>
                <td style="padding: 8px 0; color: #2D3748;">${name}</td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4A5568;">회사명:</td>
                <td style="padding: 8px 0; color: #2D3748;">${company}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4A5568;">이메일:</td>
                <td style="padding: 8px 0; color: #2D3748;">
                  <a href="mailto:${email}" style="color: #1F3B83; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4A5568;">연락처:</td>
                <td style="padding: 8px 0; color: #2D3748;">${phone}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4A5568;">문의 유형:</td>
                <td style="padding: 8px 0;">
                  <span style="background: #1F3B83; color: white; padding: 4px 12px; border-radius: 20px; font-size: 14px;">
                    ${inquiryTypeText} 문의
                  </span>
                </td>
              </tr>
            </table>
          </div>
          
          <div style="background: #f8fafc; padding: 25px; border-radius: 8px; margin-bottom: 30px;">
            <h2 style="color: #1F3B83; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #E2E8F0; padding-bottom: 10px;">
              💬 문의 내용
            </h2>
            <div style="background: white; padding: 20px; border-radius: 6px; border-left: 4px solid #1F3B83; line-height: 1.6; color: #2D3748;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; background: #E8F2FF; border-radius: 8px;">
            <p style="margin: 0; color: #4A5568; font-size: 14px;">
              📧 이 메일은 유니컵컴퍼니 웹사이트 문의 양식을 통해 자동으로 발송되었습니다.<br>
              빠른 시일 내에 담당자가 연락드릴 예정입니다.
            </p>
          </div>
        </div>
      `;

      const emailText = `
        [유니컵컴퍼니 ${inquiryTypeText} 문의]
        
        담당자명: ${name}
        ${company ? `회사명: ${company}` : ''}
        이메일: ${email}
        ${phone ? `연락처: ${phone}` : ''}
        문의 유형: ${inquiryTypeText} 문의
        
        문의 내용:
        ${message}
        
        ---
        이 메일은 유니컵컴퍼니 웹사이트를 통해 자동으로 발송되었습니다.
      `;

      // 개발 환경에서도 콘솔 로그와 함께 실제 이메일 전송
      if (process.env.NODE_ENV === 'development') {
        // 개발 환경에서는 콘솔에 이메일 내용 출력
        console.log('=== 📧 이메일 전송 (개발 환경) ===');
        console.log('To:', 'official@unicupcoffee.com');
        console.log('Subject:', emailSubject);
        console.log('Content:');
        console.log(emailText);
        console.log('================================');
      }

      // 실제 이메일 전송 (개발/프로덕션 공통)
      const emailSent = await sendEmail({
        to: "official@unicupcoffee.com",
        from: "noreply@unicupcoffee.com", // This should be a verified sender in SendGrid
        subject: emailSubject,
        text: emailText,
        html: emailHtml
      });

      if (emailSent) {
        const message = process.env.NODE_ENV === 'development' 
          ? "문의가 성공적으로 전송되었습니다. (실제 이메일 전송됨)" 
          : "문의가 성공적으로 전송되었습니다.";
        res.json({ success: true, message });
      } else {
        res.status(500).json({ error: "이메일 전송에 실패했습니다." });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "서버 오류가 발생했습니다." });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

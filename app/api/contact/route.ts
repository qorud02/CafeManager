import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    // Basic validation
    if (!data.name || !data.phone || !data.email || !data.interest || !data.message || !data.privacy) {
      return NextResponse.json(
        { error: "필수 항목을 모두 입력해주세요." },
        { status: 400 }
      );
    }

    // Honeypot check for spam protection
    if (data.honeypot) {
      return NextResponse.json(
        { error: "Spam detected" },
        { status: 403 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "유효한 이메일 주소를 입력해주세요." },
        { status: 400 }
      );
    }

    // Rate limiting could be implemented here
    
    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    // TODO: Store in database or send to Notion/Webhook
    
    console.log("Contact form submission:", {
      name: data.name,
      company: data.company || "N/A",
      phone: data.phone,
      email: data.email,
      interest: data.interest,
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json({ 
      success: true, 
      message: "문의가 성공적으로 접수되었습니다." 
    });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다. 다시 시도해주세요." },
      { status: 500 }
    );
  }
}
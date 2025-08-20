import { Router } from 'express';
import { sendContactEmail } from '../email';

const router = Router();

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

router.post('/contact', async (req, res) => {
  try {
    const { name, email, company, phone, message }: ContactFormData = req.body;

    // 입력 검증
    if (!name || !email || !message) {
      return res.status(400).json({
        error: '필수 필드가 누락되었습니다. (이름, 이메일, 문의내용)',
      });
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: '올바른 이메일 형식이 아닙니다.',
      });
    }

    // 메일 전송
    const success = await sendContactEmail({
      name,
      email,
      company,
      phone,
      message,
    });

    if (success) {
      res.status(200).json({
        message: '문의가 성공적으로 전송되었습니다.',
      });
    } else {
      res.status(500).json({
        error: '메일 전송 중 오류가 발생했습니다.',
      });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      error: '서버 오류가 발생했습니다.',
    });
  }
});

export default router;
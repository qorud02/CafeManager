import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
  privacy: boolean;
  honeypot: string; // For spam protection
}

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
    privacy: false,
    honeypot: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check for spam protection
    if (formData.honeypot) {
      return; // Silent fail for bots
    }

    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.interest || !formData.message || !formData.privacy) {
      toast({
        title: "입력 오류",
        description: "필수 항목을 모두 입력해주세요.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Here you would integrate with Formspree or similar service
      // For now, we'll simulate form submission
      const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL || process.env.FORMSPREE_URL || "#";
      
      if (formspreeUrl !== "#") {
        const response = await fetch(formspreeUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            company: formData.company,
            phone: formData.phone,
            email: formData.email,
            interest: formData.interest,
            message: formData.message,
          }),
        });

        if (response.ok) {
          toast({
            title: "문의 접수 완료",
            description: "문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.",
          });
          
          // Reset form
          setFormData({
            name: "",
            company: "",
            phone: "",
            email: "",
            interest: "",
            message: "",
            privacy: false,
            honeypot: "",
          });
        } else {
          throw new Error("Form submission failed");
        }
      } else {
        // Simulate successful submission for development
        await new Promise(resolve => setTimeout(resolve, 1000));
        toast({
          title: "문의 접수 완료",
          description: "문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.",
        });
        
        // Reset form
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          interest: "",
          message: "",
          privacy: false,
          honeypot: "",
        });
      }
    } catch (error) {
      toast({
        title: "전송 실패",
        description: "문의 전송 중 오류가 발생했습니다. 다시 시도해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-uc-accent mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-uc-deep mb-4">
            문의하기
          </h2>
          <p className="text-xl text-uc-gray">
            프랜차이즈 가맹 및 제휴 관련 문의를 남겨주세요
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Honeypot field for spam protection */}
          <input
            type="text"
            name="_honey"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
            value={formData.honeypot}
            onChange={(e) => handleInputChange("honeypot", e.target.value)}
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="block text-sm font-semibold text-uc-deep mb-2">
                성함 *
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-uc-accent focus:border-transparent transition-all duration-200"
                placeholder="홍길동"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="company" className="block text-sm font-semibold text-uc-deep mb-2">
                회사·점포명
              </Label>
              <Input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-uc-accent focus:border-transparent transition-all duration-200"
                placeholder="(주)예시회사"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="phone" className="block text-sm font-semibold text-uc-deep mb-2">
                연락처 *
              </Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-uc-accent focus:border-transparent transition-all duration-200"
                placeholder="010-1234-5678"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="email" className="block text-sm font-semibold text-uc-deep mb-2">
                이메일 *
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-uc-accent focus:border-transparent transition-all duration-200"
                placeholder="contact@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="interest" className="block text-sm font-semibold text-uc-deep mb-2">
              관심 분야 *
            </Label>
            <Select
              value={formData.interest}
              onValueChange={(value) => handleInputChange("interest", value)}
              required
            >
              <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-uc-accent focus:border-transparent transition-all duration-200">
                <SelectValue placeholder="선택해주세요" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="franchise">가맹점 개설</SelectItem>
                <SelectItem value="partnership">사업 제휴</SelectItem>
                <SelectItem value="supply">공급업체 등록</SelectItem>
                <SelectItem value="other">기타</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message" className="block text-sm font-semibold text-uc-deep mb-2">
              문의 내용 *
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-uc-accent focus:border-transparent transition-all duration-200 resize-vertical"
              placeholder="문의하고 싶은 내용을 자세히 작성해주세요."
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
            />
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="privacy"
              name="privacy"
              required
              checked={formData.privacy}
              onCheckedChange={(checked) => handleInputChange("privacy", !!checked)}
              className="mt-1 h-4 w-4 text-uc-accent border-gray-300 rounded focus:ring-uc-accent"
            />
            <Label htmlFor="privacy" className="text-sm text-uc-gray">
              개인정보 수집 및 이용에 동의합니다.{" "}
              <a href="#" className="text-uc-blue hover:underline">
                자세히 보기
              </a>
            </Label>
          </div>

          <div className="text-center pt-6">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-uc-blue text-white px-12 py-4 rounded-2xl hover:bg-uc-deep transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "전송 중..." : "문의 보내기"}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

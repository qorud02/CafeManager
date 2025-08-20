import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { X, Mail, Phone, Building, MessageSquare } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    inquiryType: "franchise" // 가맹 or 제휴
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "문의가 성공적으로 전송되었습니다!",
          description: "빠른 시일 내에 연락드리겠습니다.",
        });
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
          inquiryType: "franchise"
        });
        onClose();
      } else {
        throw new Error("전송에 실패했습니다.");
      }
    } catch (error) {
      toast({
        title: "전송에 실패했습니다",
        description: "잠시 후 다시 시도해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-[#9d9dc2]">
        <DialogHeader className="space-y-3 pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-uc-blue/10 rounded-2xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-uc-blue" />
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold text-uc-deep">
                  가맹·제휴 문의
                </DialogTitle>
                <DialogDescription className="text-uc-gray">
                  유니컵컴퍼니와 함께 성장할 파트너를 찾습니다
                </DialogDescription>
              </div>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 문의 유형 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm font-medium text-uc-deep mb-2 block">
                문의 유형
              </Label>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={formData.inquiryType === "franchise" ? "default" : "outline"}
                  className={`flex-1 ${formData.inquiryType === "franchise" 
                    ? "bg-uc-blue text-white" 
                    : "border-uc-blue text-uc-blue hover:bg-uc-blue hover:text-white"
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, inquiryType: "franchise" }))}
                >
                  가맹 문의
                </Button>
                <Button
                  type="button"
                  variant={formData.inquiryType === "partnership" ? "default" : "outline"}
                  className={`flex-1 ${formData.inquiryType === "partnership" 
                    ? "bg-uc-blue text-white" 
                    : "border-uc-blue text-uc-blue hover:bg-uc-blue hover:text-white"
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, inquiryType: "partnership" }))}
                >
                  제휴 문의
                </Button>
              </div>
            </div>
          </div>

          {/* 기본 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-uc-deep flex items-center gap-2">
                <Building className="w-4 h-4" />
                담당자명 *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="담당자명을 입력하세요"
                className="border-uc-light focus:border-uc-blue"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium text-uc-deep flex items-center gap-2">
                <Building className="w-4 h-4" />
                회사명
              </Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="회사명을 입력하세요"
                className="border-uc-light focus:border-uc-blue"
              />
            </div>
          </div>

          {/* 연락처 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-uc-deep flex items-center gap-2">
                <Mail className="w-4 h-4" />
                이메일 *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="이메일을 입력하세요"
                className="border-uc-light focus:border-uc-blue"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-uc-deep flex items-center gap-2">
                <Phone className="w-4 h-4" />
                연락처
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="연락처를 입력하세요"
                className="border-uc-light focus:border-uc-blue"
              />
            </div>
          </div>

          {/* 문의 내용 */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-uc-deep flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              문의 내용 *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="문의 내용을 상세히 입력해주세요"
              className="border-uc-light focus:border-uc-blue min-h-[120px] resize-none"
              required
            />
          </div>

          {/* 제출 버튼 */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-uc-light text-uc-gray hover:bg-uc-light/10"
            >
              취소
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-uc-blue hover:bg-uc-deep text-white font-medium"
            >
              {isLoading ? "전송 중..." : "문의하기"}
            </Button>
          </div>
        </form>

        {/* 연락처 안내 */}
        <div className="border-t border-uc-light/20 pt-6 mt-6">
          <p className="text-sm text-uc-gray text-center">
            급하신 문의는{" "}
            <span className="font-medium text-uc-blue">official@unicupcoffee.com</span>으로 
            직접 연락해주세요
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
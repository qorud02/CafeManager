import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if running on iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);

    // Check if already installed (standalone mode)
    const standalone = window.matchMedia('(display-mode: standalone)').matches;
    setIsStandalone(standalone);

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowInstallBanner(false);
    }
  };

  const handleDismiss = () => {
    setShowInstallBanner(false);
    // Hide for this session
    localStorage.setItem('pwa-install-dismissed', 'true');
  };

  // Don't show if already installed or dismissed
  const dismissed = localStorage.getItem('pwa-install-dismissed');
  if (isStandalone || dismissed) return null;

  // iOS instructions
  if (isIOS && !isStandalone) {
    return (
      <div className="fixed bottom-4 left-4 right-4 bg-uc-primary text-white p-4 rounded-lg shadow-lg z-50 max-w-sm mx-auto">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-semibold text-sm">앱으로 설치하기</h4>
          <button onClick={handleDismiss} className="text-white/80 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs mb-3 text-white/90">
          Safari에서 공유 버튼 <span className="font-mono">↗</span>을 눌러 
          "홈 화면에 추가"를 선택하세요.
        </p>
      </div>
    );
  }

  // Android/Desktop install prompt
  if (showInstallBanner && deferredPrompt) {
    return (
      <div className="fixed bottom-4 left-4 right-4 bg-uc-primary text-white p-4 rounded-lg shadow-lg z-50 max-w-sm mx-auto">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-semibold text-sm">앱으로 설치하기</h4>
          <button onClick={handleDismiss} className="text-white/80 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs mb-3 text-white/90">
          유니컵컴퍼니 앱을 홈 화면에 추가하여 빠르게 접근하세요.
        </p>
        <button
          onClick={handleInstallClick}
          className="w-full bg-white text-uc-primary px-4 py-2 rounded font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
        >
          <Download className="w-4 h-4" />
          앱 설치하기
        </button>
      </div>
    );
  }

  return null;
}
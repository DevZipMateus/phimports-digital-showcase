
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const WhatsAppFloat = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const openWhatsApp = () => {
    const phoneNumber = "5561982865902";
    const message = "Olá! Vim pelo site e gostaria de saber mais sobre os produtos Apple disponíveis.";
    const encodedMessage = encodeURIComponent(message);
    
    // Detectar se é dispositivo móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    console.log('Dispositivo móvel detectado:', isMobile);
    console.log('Tentando abrir WhatsApp para:', phoneNumber);
    console.log('Mensagem:', message);
    
    let whatsappUrl;
    
    if (isMobile) {
      // Para dispositivos móveis - tenta abrir o app do WhatsApp
      whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
      console.log('URL móvel:', whatsappUrl);
      
      // Tenta abrir o app
      const link = document.createElement('a');
      link.href = whatsappUrl;
      link.click();
      
      // Fallback para WhatsApp Web após 1 segundo se o app não abrir
      setTimeout(() => {
        const webUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        console.log('Fallback para Web URL:', webUrl);
        window.open(webUrl, '_blank', 'noopener,noreferrer');
      }, 1000);
      
    } else {
      // Para desktop - usa WhatsApp Web diretamente
      whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      console.log('URL desktop:', whatsappUrl);
      
      try {
        const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        if (!newWindow) {
          console.warn('Pop-up bloqueado, tentando método alternativo');
          // Fallback se pop-up for bloqueado
          window.location.href = whatsappUrl;
        }
      } catch (error) {
        console.error('Erro ao abrir WhatsApp:', error);
        // Último fallback
        window.location.href = whatsappUrl;
      }
    }
  };

  const hideTooltip = () => {
    setShowTooltip(false);
  };

  return (
    <>
      {/* Botão Principal */}
      <div className="fixed bottom-6 right-6 z-50">
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-16 right-0 bg-white shadow-lg rounded-lg p-3 w-64 border animate-bounce-in">
              <button 
                onClick={hideTooltip}
                className="absolute top-1 right-1 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <MessageCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">PH IMPORTS BRASÍLIA</h4>
                  <p className="text-gray-600 text-xs mt-1">
                    Oi! 👋 Como posso te ajudar hoje?
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    iPhone • Assistência • Troca
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 right-4 w-3 h-3 bg-white transform rotate-45 translate-y-2 border-r border-b border-gray-200"></div>
            </div>
          )}

          {/* Botão com imagem do WhatsApp */}
          <button
            onClick={openWhatsApp}
            className={`
              relative w-16 h-16 rounded-full shadow-lg 
              transition-all duration-300 transform hover:scale-110
              ${isHovered ? 'shadow-2xl' : 'shadow-lg'}
              overflow-hidden
            `}
            aria-label="Falar no WhatsApp"
          >
            <img 
              src="/lovable-uploads/b15d7acd-bf24-44a3-bde8-37a5546c00fa.png" 
              alt="WhatsApp" 
              className="w-full h-full object-cover"
            />
          </button>

          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        </div>
      </div>

      {/* Versão Mobile - Mais visível */}
      <div className="fixed bottom-4 right-4 z-40 md:hidden">
        <div className="bg-green-500 text-white px-3 py-2 rounded-full shadow-lg text-xs font-medium animate-bounce">
          Fale Conosco!
        </div>
      </div>
    </>
  );
};

export default WhatsAppFloat;


import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const WhatsAppFloat = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const openWhatsApp = () => {
    const phoneNumber = "5561982865902";
    const message = "Olá! Vim pelo site e gostaria de saber mais sobre os produtos Apple disponíveis.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
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

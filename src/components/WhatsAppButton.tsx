
const WhatsAppButton = () => {
  const phoneNumber = '5561982865902'; // Número da PH IMPORTS BRASILIA
  const message = 'Olá! Gostaria de saber mais sobre os produtos e serviços da PH IMPORTS.';
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce"
      aria-label="Entrar em contato via WhatsApp"
    >
      <img 
        src="/lovable-uploads/cbdb6c1d-2b4d-4b10-a430-891e07ce63f1.png" 
        alt="WhatsApp" 
        className="w-16 h-16 rounded-full"
      />
    </button>
  );
};

export default WhatsAppButton;

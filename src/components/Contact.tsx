
import { Phone, Mail, MessageCircle, Instagram, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'WhatsApp',
      info: '(61) 98286-5902',
      description: 'Atendimento rápido e personalizado',
      action: () => window.open('https://wa.me/5561982865902?text=Olá! Gostaria de mais informações sobre os produtos Apple.', '_blank'),
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      buttonColor: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'phimports.matriz@gmail.com',
      description: 'Para dúvidas e orçamentos',
      action: () => window.open('mailto:phimports.matriz@gmail.com?subject=Interesse em produtos Apple', '_blank'),
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      buttonColor: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      info: '@phimports.brasilia',
      description: 'Novidades e produtos disponíveis',
      action: () => window.open('https://www.instagram.com/phimports.brasilia/', '_blank'),
      bgColor: 'bg-pink-100',
      iconColor: 'text-pink-600',
      buttonColor: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
            Entre em <span className="text-blue-400">Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender você! Escolha a forma de contato que preferir 
            e tire todas as suas dúvidas sobre nossos produtos e serviços.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`${method.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`h-8 w-8 ${method.iconColor}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <p className="text-blue-200 font-semibold mb-2">{method.info}</p>
                  <p className="text-gray-300 text-sm mb-4">{method.description}</p>
                  
                  <Button 
                    onClick={method.action}
                    className={`w-full ${method.buttonColor} text-white border-0`}
                  >
                    Entrar em Contato
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <MapPin className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold">Nossa Loja</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                  <strong className="text-white">Endereço:</strong><br />
                  SIA TRECHO 7 LOJA A269<br />
                  Feira dos Importados<br />
                  Brasília - DF, CEP: 71200-100
                </p>
                <Button 
                  onClick={() => window.open('https://share.google/Y9hA3XPjzcuHg0bii', '_blank')}
                  variant="outline"
                  className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                >
                  Ver no Google Maps
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold">Horário de Funcionamento</h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span className="text-white font-semibold">8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="text-white font-semibold">8h às 17h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="text-white font-semibold">8h às 13h</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-white/10 backdrop-blur-md border-white/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Pronto para adquirir seu iPhone?</h3>
          <p className="text-gray-300 mb-6 text-lg">
            Entre em contato agora mesmo e garante o melhor preço da Feira dos Importados!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              size="lg"
              onClick={() => window.open('https://wa.me/5561982865902?text=Olá! Quero comprar um iPhone. Qual o melhor preço disponível?', '_blank')}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
            <Button 
              size="lg"
              onClick={() => window.open('tel:+5561982865902', '_blank')}
              variant="outline"
              className="flex-1 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
            >
              <Phone className="mr-2 h-5 w-5" />
              Ligar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

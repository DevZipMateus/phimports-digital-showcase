import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Location = () => {
  const openMap = () => {
    window.open('https://share.google/Y9hA3XPjzcuHg0bii', '_blank');
  };

  return (
    <section 
      id="localizacao" 
      className="py-20 relative"
      style={{
        background: 'linear-gradient(135deg, #1e40af 0%, #dc2626 100%)'
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
            Nossa <span className="text-yellow-300">Localização</span>
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Visite nossa loja na Feira dos Importados. Fácil acesso, estacionamento gratuito 
            e atendimento personalizado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="border-l-4 border-l-yellow-400 shadow-lg bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Endereço</h3>
                    <p className="text-gray-600 leading-relaxed">
                      SIA TRECHO 7 LOJA A269<br />
                      Feira dos Importados<br />
                      Brasília - DF<br />
                      CEP: 71200-100
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-400 shadow-lg bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Horário de Funcionamento</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Segunda: Online das 9h às 18h</p>
                      <p>Terça a Domingo: Loja física das 9h às 18h</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-400 shadow-lg bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Contato</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>WhatsApp: (61) 98286-5902</p>
                      <p>Email: phimports.matriz@gmail.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={openMap}
                className="flex-1 bg-white hover:bg-gray-100 text-primary border-2 border-white"
              >
                <Navigation className="mr-2 h-4 w-4" />
                Ver no Google Maps
              </Button>
              <Button 
                onClick={() => window.open('https://wa.me/5561982865902', '_blank')}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white"
              >
                <Phone className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.5698894847894!2d-47.94607808573147!3d-15.792999889034443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2df49cdd8e79%3A0x3a79c9dee3e7b8f0!2sFeira%20dos%20Importados!5e0!3m2!1spt-BR!2sbr!4v1699472834567!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização PH IMPORTS BRASÍLIA"
              ></iframe>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-full shadow-lg">
              <MapPin className="h-8 w-8 text-accent" />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Por que nos visitar?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-white">Localização Estratégica</h4>
              <p className="text-gray-100 text-sm">Feira dos Importados - fácil acesso</p>
            </div>
            <div className="space-y-2">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-white">Horário Amplo</h4>
              <p className="text-gray-100 text-sm">Terça a domingo na loja física</p>
            </div>
            <div className="space-y-2">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-white">Atendimento Rápido</h4>
              <p className="text-gray-100 text-sm">WhatsApp sempre disponível</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

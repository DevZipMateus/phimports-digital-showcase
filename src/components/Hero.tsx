
import { ArrowRight, Star, Shield, CreditCard, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-red-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <Badge className="mb-6 bg-accent text-white px-4 py-2 text-sm font-medium">
              🥇 Melhor Preço da Feira dos Importados
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-poppins leading-tight">
              <span className="text-primary">iPhone</span> no boleto
              <br />até <span className="text-accent">24x</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Especialista em produtos Apple com assistência técnica especializada. 
              Aceitamos seu iPhone na troca!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
                onClick={scrollToContact}
              >
                Falar no WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nossos Serviços
              </Button>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <CreditCard className="h-5 w-5 text-primary" />
                <span className="text-sm">Parcelamento até 24x</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">Assistência Especializada</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Smartphone className="h-5 w-5 text-primary" />
                <span className="text-sm">Troca de Aparelhos</span>
              </div>
            </div>
          </div>

          <div className="relative animate-bounce-in">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8">
              <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-6 text-white text-center">
                <Smartphone className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">iPhone 15 Pro</h3>
                <p className="text-blue-100 mb-4">A partir de R$ 5.999</p>
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Button 
                  className="w-full bg-white text-primary hover:bg-gray-100"
                  onClick={scrollToContact}
                >
                  Consultar Preço
                </Button>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

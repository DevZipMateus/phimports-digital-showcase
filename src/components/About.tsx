
import { Award, Users, Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Especialistas em Apple',
      description: 'Conhecimento técnico especializado em todos os produtos Apple'
    },
    {
      icon: Users,
      title: 'Atendimento Premium',
      description: 'Atendimento personalizado e de qualidade superior'
    },
    {
      icon: Clock,
      title: 'Agilidade',
      description: 'Rapidez na assistência técnica e negociação'
    },
    {
      icon: MapPin,
      title: 'Localização Estratégica',
      description: 'Feira dos Importados - fácil acesso e estacionamento'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Sobre a <span className="text-primary">PH IMPORTS BRASÍLIA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos especialistas em assistência técnica e comércio de produtos Apple, 
            oferecendo troca, compra e venda com os melhores preços da Feira dos Importados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nossa História</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A PH IMPORTS BRASÍLIA nasceu com o objetivo de oferecer produtos Apple de qualidade 
              com preços acessíveis e condições de pagamento facilitadas. Localizada no coração 
              da Feira dos Importados, nos tornamos referência em assistência técnica especializada.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nosso diferencial está no atendimento personalizado, conhecimento técnico aprofundado 
              e na flexibilidade de negociação, sempre priorizando a satisfação do cliente.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
              <p className="text-primary font-semibold text-lg">
                "Loja completa, atendimento 1000%, melhor preço da feira dos importados!"
              </p>
              <p className="text-gray-600 text-sm mt-2">- Depoimento de Cliente</p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=800&q=80" 
              alt="Assistência técnica Apple" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-2xl shadow-xl">
              <p className="font-bold text-2xl">24x</p>
              <p className="text-sm">Parcelamento</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;

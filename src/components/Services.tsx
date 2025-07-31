
import { Smartphone, Settings, RefreshCw, ShoppingCart, Wrench, Battery } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: 'Assistência Técnica',
      description: 'Reparo completo em iPhone, iPad e outros dispositivos Apple',
      features: ['Troca de tela', 'Reparo de placa', 'Problemas de software', 'Atualização iOS']
    },
    {
      icon: RefreshCw,
      title: 'Troca de Aparelhos',
      description: 'Aceitamos seu iPhone usado na troca por um mais novo',
      features: ['Avaliação gratuita', 'Melhor valor de troca', 'Processo rápido', 'Documentação completa']
    },
    {
      icon: ShoppingCart,
      title: 'Compra e Venda',
      description: 'Comercialização de iPhone e acessórios Apple originais',
      features: ['iPhone novos e seminovos', 'Garantia inclusa', 'Parcelamento até 24x', 'Produtos originais']
    },
    {
      icon: Wrench,
      title: 'Manutenção Preventiva',
      description: 'Cuidados para prolongar a vida útil do seu dispositivo',
      features: ['Limpeza interna', 'Verificação geral', 'Backup de dados', 'Orientações de uso']
    },
    {
      icon: Battery,
      title: 'Troca de Bateria',
      description: 'Substituição de bateria com peças originais',
      features: ['Baterias originais', 'Garantia de 6 meses', 'Teste completo', 'Instalação profissional']
    },
    {
      icon: Smartphone,
      title: 'Desbloqueio',
      description: 'Serviços de desbloqueio e liberação de operadora',
      features: ['Todos os modelos', 'Processo seguro', 'Garantia total', 'Suporte pós-serviço']
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas para todo o nicho de celulares, 
            especializados em produtos Apple com qualidade e garantia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-primary to-accent w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Precisa de um orçamento?</h3>
          <p className="text-gray-600 mb-6">
            Entre em contato conosco para receber um orçamento personalizado e sem compromisso.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

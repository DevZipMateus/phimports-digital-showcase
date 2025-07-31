
import { Check, Star, Smartphone, CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Plans = () => {
  const plans = [
    {
      name: 'iPhone SE',
      price: 'A partir de R$ 2.499',
      originalPrice: 'R$ 2.999',
      image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=400&q=80',
      features: [
        'Tela 4.7" Retina HD',
        'Chip A15 Bionic',
        'Câmera 12MP',
        'Parcelamento até 24x',
        '6 meses de garantia',
        'Troca aceita'
      ],
      badge: 'Mais Vendido'
    },
    {
      name: 'iPhone 13',
      price: 'A partir de R$ 4.299',
      originalPrice: 'R$ 4.999',
      image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=400&q=80',
      features: [
        'Tela 6.1" Super Retina XDR',
        'Chip A15 Bionic',
        'Sistema câmera dupla 12MP',
        'Parcelamento até 24x',
        '12 meses de garantia',
        'Troca aceita'
      ],
      badge: 'Recomendado'
    },
    {
      name: 'iPhone 15 Pro',
      price: 'A partir de R$ 7.999',
      originalPrice: 'R$ 9.499',
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=400&q=80',
      features: [
        'Tela 6.1" Super Retina XDR',
        'Chip A17 Pro',
        'Sistema câmera Pro 48MP',
        'Parcelamento até 24x',
        '12 meses de garantia',
        'Troca aceita'
      ],
      badge: 'Lançamento'
    }
  ];

  return (
    <section id="planos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Nossos <span className="text-primary">Planos</span> e Ofertas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            iPhone no boleto parcelado em até 24x. Ofertas especiais e os melhores preços da região.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20">
              {plan.badge && (
                <Badge className="absolute top-4 right-4 bg-accent text-white z-10">
                  {plan.badge}
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <img 
                    src={plan.image} 
                    alt={plan.name}
                    className="w-32 h-32 object-cover rounded-2xl mx-auto shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-primary">{plan.price}</p>
                  <p className="text-lg text-gray-500 line-through">{plan.originalPrice}</p>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Comprar Agora
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Mais Informações
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-r from-primary to-blue-600 text-white overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <CreditCard className="h-8 w-8 mr-3" />
                <h3 className="text-2xl font-bold">Parcelamento Facilitado</h3>
              </div>
              <p className="text-blue-100 mb-4 text-lg">
                iPhone no boleto parcelado em até 24x sem juros. 
                Entrada a partir de R$ 299.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  Sem consulta ao SPC/Serasa
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  Aprovação na hora
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  Primeira parcela para 30 dias
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-accent to-red-600 text-white overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Smartphone className="h-8 w-8 mr-3" />
                <h3 className="text-2xl font-bold">Troca do Seu iPhone</h3>
              </div>
              <p className="text-red-100 mb-4 text-lg">
                Aceitamos seu iPhone usado na troca. 
                Avaliação gratuita e imediata.
              </p>
              <ul className="space-y-2 text-red-100">
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  Avaliação em 10 minutos
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  Melhor valor de troca
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-2" />
                  Troca com qualquer estado
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Plans;

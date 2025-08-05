
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Cliente Satisfeita',
      content: 'Loja completa, atendimento 1000%, melhor preço da feira dos importados! Comprei meu iPhone 13 e ficou perfeito.',
      rating: 5
    },
    {
      name: 'João Santos',
      role: 'Cliente Fidelizado',
      content: 'Assistência técnica impecável! Consertaram meu iPhone que estava com a tela quebrada. Ficou como novo!',
      rating: 5
    },
    {
      name: 'Ana Costa',
      role: 'Cliente Premium',
      content: 'Parcelaram meu iPhone em 24x sem juros. Atendimento diferenciado e produtos originais. Recomendo!',
      rating: 5
    },
    {
      name: 'Carlos Oliveira',
      role: 'Cliente Frequente',
      content: 'Melhor lugar para comprar iPhone em Brasília. Preço justo, qualidade garantida e ótimo atendimento.',
      rating: 5
    },
    {
      name: 'Fernanda Lima',
      role: 'Cliente Satisfeita',
      content: 'Troquei meu iPhone antigo por um mais novo. O processo foi rápido e consegui um ótimo desconto.',
      rating: 5
    },
    {
      name: 'Ricardo Mendes',
      role: 'Cliente Recomenda',
      content: 'Assistência técnica de primeira qualidade. Resolveram um problema que outros lugares não conseguiram.',
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            O que nossos <span className="text-primary">clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mais de 1000 clientes satisfeitos confiam na PH IMPORTS BRASÍLIA. 
            Veja alguns depoimentos reais de quem já comprou conosco.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Junte-se aos nossos clientes satisfeitos!
            </h3>
            <p className="text-gray-600 mb-6">
              Siga nosso Instagram @phimports.brasilia e veja mais depoimentos e novidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.instagram.com/phimports.brasilia/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Seguir no Instagram
              </a>
              <button 
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                Falar Conosco
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

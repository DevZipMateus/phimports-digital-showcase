
import { Smartphone, MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary text-white p-2 rounded-lg">
                <Smartphone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">PH IMPORTS</h3>
                <p className="text-xs text-gray-400">BRASÍLIA</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              🥇 iPhone no boleto até 24x<br />
              👨🏻‍💻 Especialista em Produtos Apple<br />
              🔄 Aceitamos o seu iPhone na troca<br />
              🧑🏻‍🔧 Assistência técnica especializada
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Nossos Serviços</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Assistência Técnica</li>
              <li>• Compra e Venda</li>
              <li>• Troca de Aparelhos</li>
              <li>• Reparo de Tela</li>
              <li>• Troca de Bateria</li>
              <li>• Desbloqueio</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Contato</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-500" />
                <span>(61) 98286-5902</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-500" />
                <span>phimports.matriz@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="h-4 w-4 text-pink-500" />
                <span>@phimports.brasilia</span>
              </div>
            </div>
          </div>

          {/* Localização */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Localização</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span>
                  SIA TRECHO 7 LOJA A269<br />
                  Feira dos Importados<br />
                  Brasília - DF<br />
                  CEP: 71200-100
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-yellow-500" />
                <span>Seg-Sex: 8h-18h | Sáb: 8h-17h | Dom: 8h-13h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha separadora */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 PH IMPORTS BRASÍLIA. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://www.instagram.com/phimports.brasilia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/5561982865902"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors duration-200"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a 
                href="mailto:phimports.matriz@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

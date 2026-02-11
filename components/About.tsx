import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    'Equipe de especialistas mestres e doutores',
    'Equipamentos de Raio-X Digital (menor radiação)',
    'Protocolos rigorosos de biossegurança',
    'Ambiente climatizado e relaxante',
    'Estacionamento gratuito no local',
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
             <div className="absolute inset-0 bg-primary-600 rounded-[2rem] rotate-3 transform translate-y-4"></div>
             <img 
               src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
               alt="Equipe odontológica moderna" 
               className="relative rounded-[2rem] shadow-2xl z-10 w-full h-[500px] object-cover"
             />
             <div className="absolute -bottom-8 -right-8 z-20 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
               <p className="text-4xl font-bold text-primary-600 mb-1">15+</p>
               <p className="text-gray-600 font-medium">Anos transformando sorrisos com excelência.</p>
             </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Nossa Clínica</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mais que uma clínica, um espaço de cuidado e bem-estar
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Na Lumina Odontologia, acreditamos que ir ao dentista deve ser uma experiência positiva. Nossa arquitetura foi pensada para reduzir a ansiedade, combinando design acolhedor com a mais alta tecnologia disponível no mercado.
              </p>
            </div>

            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
               <a href="#contact" className="px-8 py-3 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-colors shadow-lg">
                 Conheça Nossa Equipe
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
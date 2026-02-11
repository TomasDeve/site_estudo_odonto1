import React from 'react';
import { Smile, Zap, Crown, UserCheck, HeartPulse, Activity } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Clareamento Dental',
    description: 'Tecnologia a laser para um sorriso até 8 tons mais branco em sessões rápidas e seguras.',
    icon: Zap,
  },
  {
    id: '2',
    title: 'Invisalign & Ortodontia',
    description: 'Alinhadores transparentes e aparelhos modernos para corrigir seu sorriso com discrição.',
    icon: Smile,
  },
  {
    id: '3',
    title: 'Implantes Dentários',
    description: 'Recupere sua mastigação e autoestima com implantes de titânio de última geração.',
    icon: Crown,
  },
  {
    id: '4',
    title: 'Lentes de Contato',
    description: 'Transforme o formato e a cor dos seus dentes com facetas de porcelana ultra-finas.',
    icon: UserCheck,
  },
  {
    id: '5',
    title: 'Endodontia (Canal)',
    description: 'Tratamento de canal sem dor, utilizando microscopia para máxima precisão.',
    icon: HeartPulse,
  },
  {
    id: '6',
    title: 'Check-up Digital',
    description: 'Prevenção completa com câmera intraoral e diagnóstico por imagem de alta definição.',
    icon: Activity,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Nossas Especialidades</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tratamentos Completos para Você</h3>
          <p className="text-gray-600 text-lg">
            Reunimos todas as especialidades odontológicas em um só lugar. Tecnologia avançada para resultados precisos e duradouros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 hover:border-primary-100"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                Saiba mais <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
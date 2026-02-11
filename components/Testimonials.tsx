import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    id: '1',
    name: 'Mariana Souza',
    role: 'Empresária',
    content: 'O tratamento com Invisalign foi a melhor escolha que fiz. A equipe da Lumina foi super atenciosa e o resultado superou minhas expectativas. Recomendo de olhos fechados!',
    image: 'https://picsum.photos/100/100?random=20',
  },
  {
    id: '2',
    name: 'Carlos Oliveira',
    role: 'Advogado',
    content: 'Fiz implantes dentários e fiquei impressionado com a tecnologia e o cuidado. Não senti dor alguma e a recuperação foi super rápida. Profissionais excelentes.',
    image: 'https://picsum.photos/100/100?random=21',
  },
  {
    id: '3',
    name: 'Fernanda Lima',
    role: 'Estudante',
    content: 'Amei o clareamento! Meu sorriso ficou radiante para a minha formatura. O ambiente da clínica é lindo e super aconchegante.',
    image: 'https://picsum.photos/100/100?random=22',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Depoimentos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">O Que Dizem Nossos Pacientes</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-50 p-8 rounded-3xl relative hover:shadow-xl transition-shadow duration-300">
              <Quote className="absolute top-8 right-8 text-primary-200 w-12 h-12 rotate-180" />
              
              <div className="flex text-yellow-400 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
              </div>

              <p className="text-gray-700 italic mb-8 relative z-10 leading-relaxed">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-100" />
                <div>
                  <h5 className="font-bold text-gray-900">{t.name}</h5>
                  <span className="text-sm text-gray-500">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
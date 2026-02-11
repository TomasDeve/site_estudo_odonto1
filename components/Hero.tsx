import React from 'react';
import { CalendarCheck, ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent hidden lg:block"></div>
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 -right-20 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary-700 text-xs font-bold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
            Tecnologia de Ponta & Atendimento Humanizado
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
            Sorrisos que <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
              Iluminam o Mundo
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Experimente a odontologia moderna. Tratamentos indolores, resultados estéticos incríveis e uma equipe dedicada a cuidar da sua saúde e autoestima.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary-600 rounded-full shadow-xl shadow-primary-500/30 hover:bg-primary-700 hover:scale-105 transition-all duration-300"
            >
              <CalendarCheck className="mr-2 w-5 h-5" />
              Agendar Avaliação
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
            >
              Conhecer Tratamentos
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 border-t border-gray-200/60">
            <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://picsum.photos/100/100?random=${i+10}`} alt="Paciente" />
               ))}
               <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">+2k</div>
            </div>
            <div className="flex flex-col">
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-sm font-medium text-gray-600">Pacientes Satisfeitos</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200 hidden md:block">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/20">
             <img 
               src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
               alt="Dentista sorrindo com paciente" 
               className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
             />
             
             {/* Floating Cards */}
             <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg flex items-center gap-3 max-w-xs animate-bounce-slow">
               <div className="bg-green-100 p-2 rounded-full text-green-600">
                 <CalendarCheck size={24} />
               </div>
               <div>
                 <p className="font-bold text-gray-800 text-sm">Disponibilidade Hoje</p>
                 <p className="text-xs text-gray-500">Agende sua visita agora</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
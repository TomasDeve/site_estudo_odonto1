import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-primary-400 font-semibold tracking-wide uppercase text-sm mb-3">Entre em Contato</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Agende Sua Avaliação Hoje</h3>
              <p className="text-slate-400 text-lg">
                Estamos prontos para cuidar do seu sorriso. Preencha o formulário ou entre em contato pelos canais diretos.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-primary-400" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Localização</h5>
                  <p className="text-slate-300">Av. Paulista, 1000 - Bela Vista<br/>São Paulo, SP - 01310-100</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="text-primary-400" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Telefone / WhatsApp</h5>
                  <p className="text-slate-300">(11) 99999-8888</p>
                  <p className="text-slate-300">(11) 3333-4444</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="text-primary-400" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Horário de Atendimento</h5>
                  <p className="text-slate-300">Seg - Sex: 08:00 - 20:00</p>
                  <p className="text-slate-300">Sáb: 09:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h4>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Nome</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none text-gray-900 transition-all" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Telefone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none text-gray-900 transition-all" placeholder="(11) 99999-9999" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">E-mail</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none text-gray-900 transition-all" placeholder="seu@email.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Interesse</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none text-gray-900 transition-all">
                  <option>Avaliação Geral</option>
                  <option>Implantes</option>
                  <option>Ortodontia (Aparelho/Invisalign)</option>
                  <option>Estética (Clareamento/Lentes)</option>
                  <option>Outros</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Mensagem</label>
                <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none text-gray-900 transition-all" placeholder="Como podemos ajudar?"></textarea>
              </div>

              <button type="button" className="w-full py-4 bg-primary-600 text-white font-bold rounded-xl shadow-lg shadow-primary-500/30 hover:bg-primary-700 transition-all transform hover:-translate-y-1">
                Solicitar Agendamento
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
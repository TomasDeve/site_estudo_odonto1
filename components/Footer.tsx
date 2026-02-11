import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white">
                Lumina<span className="text-primary-500">Odonto</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Transformando vidas através de sorrisos saudáveis e bonitos. Tecnologia, conforto e excelência em um só lugar.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-primary-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-primary-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Tratamentos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Implantes Dentários</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Invisalign</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Clareamento</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lentes de Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Próteses</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Agendar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Responsável Técnico</a></li>
              <li className="pt-2 text-xs text-slate-500">CRO-SP 123456</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Lumina Odontologia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
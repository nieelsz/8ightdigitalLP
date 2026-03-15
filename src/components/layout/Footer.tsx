import React from 'react';
import { Container } from '../ui/Container';
import { Mail, ArrowUpRight, Instagram } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-900 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/projects/favicon.svg" 
                alt="Eight Digital" 
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold text-white tracking-tight leading-none">
                Eight Digital
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-xs">
              Software sob medida para cortar retrabalho, automatizar processos e aumentar margem.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Navegação</h4>
            <ul className="space-y-3">
              {[
                { label: 'Provas', href: '#projetos' },
                { label: 'Soluções', href: '#servicos' },
                { label: 'Quem Executa', href: '#sobre' },
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-violet-300 transition-colors flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:suporte@8ightdigital.com.br" 
                  className="text-gray-300 hover:text-violet-300 transition-colors flex items-center gap-3"
                >
                  <Mail className="w-5 h-5 text-violet-400" />
                  <span>suporte@8ightdigital.com.br</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/8ight.digital" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-violet-300 transition-colors flex items-center gap-3"
                >
                  <Instagram className="w-5 h-5 text-violet-400" />
                  <span>@8ight.digital</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5585987495079?text=Olá!%20Vim%20pelo%20site%20da%20Eight%20Digital%20e%20quero%20saber%20como%20vocês%20podem%20criar%20uma%20solução%20digital%20para%20meu%20negócio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-violet-300 transition-colors flex items-center gap-3"
                >
                  <WhatsAppIcon className="w-5 h-5 text-violet-400" />
                  <span>WhatsApp Comercial</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {currentYear} Eight Digital. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <span className="cursor-not-allowed opacity-50">Termos de Uso</span>
            <span className="cursor-not-allowed opacity-50">Privacidade</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

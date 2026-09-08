import React from 'react';
import { ExternalLink, X, HeartHandshake, ShieldCheck, Newspaper } from 'lucide-react';

interface SupportSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportSection: React.FC<SupportSectionProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#E63946] text-white border-4 border-black rounded-2xl p-6 max-w-md w-full shadow-[8px_8px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center justify-between pb-3 border-b-2 border-white/30">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-6 h-6 text-white" />
            <h3 className="text-xl font-black uppercase tracking-tight">
              Apoie a Agência Mural
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border-2 border-black bg-white text-black hover:bg-gray-100 flex items-center justify-center font-bold"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="my-5 space-y-3 text-xs sm:text-sm text-white/95 leading-relaxed font-medium">
          <p>
            A <strong>Agência Mural de Jornalismo das Periferias</strong> é a primeira agência de notícias e checagem focada nas quebradas de São Paulo e da Região Metropolitana.
          </p>
          <p>
            Seu apoio garante que mais correspondentes locais investiguem a verdade sobre obras, transporte, saúde e combatam a desinformação onde ela mais machuca.
          </p>
        </div>

        <div className="bg-white text-black p-4 rounded-xl border-2 border-black mb-5 shadow-[3px_3px_0px_rgba(0,0,0,1)]">
          <div className="font-black text-sm uppercase mb-1 flex items-center gap-1.5 text-[#E63946]">
            <ShieldCheck className="w-4 h-4" />
            <span>Por que apoiar?</span>
          </div>
          <ul className="text-xs space-y-1.5 text-gray-800 font-semibold">
            <li>• Jornalismo hiperlocal 100% independente</li>
            <li>• Checagem de fatos com o olhar de quem vive no território</li>
            <li>• Formação de novos jornalistas das periferias</li>
          </ul>
        </div>

        <div className="space-y-2">
          <a
            href="https://agenciamural.org.br/apoie"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white text-[#E63946] font-black text-xs sm:text-sm uppercase rounded-lg border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:bg-[#FAF9F5] transition-all"
          >
            <span>Conhecer Planos em agenciamural.org.br/apoie</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href="https://agenciamural.org.br"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 w-full py-2 px-3 bg-black/20 text-white font-bold text-xs rounded-lg hover:bg-black/30 transition-colors"
          >
            <Newspaper className="w-3.5 h-3.5" />
            <span>Visitar portal de notícias da Mural</span>
          </a>
        </div>
      </div>
    </div>
  );
};

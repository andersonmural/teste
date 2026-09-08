import React from 'react';
import { ExternalLink, X, HeartHandshake, Award } from 'lucide-react';

interface CreditsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreditsModal: React.FC<CreditsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#FFFDF9] border-4 border-black rounded-2xl p-6 max-w-lg w-full shadow-[8px_8px_0px_rgba(0,0,0,1)] max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b-2 border-black/20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#E63946] text-white rounded-lg flex items-center justify-center font-bold">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-black uppercase text-black">
                Expediente & Créditos
              </h3>
              <span className="text-[11px] font-bold text-gray-600">
                Eleições nas Periferias • 2026
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border-2 border-black bg-white hover:bg-gray-100 flex items-center justify-center font-bold"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Project description */}
        <div className="my-4 space-y-3 text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
          <div className="bg-[#D8F3DC] p-3.5 rounded-xl border-2 border-black">
            <p className="font-bold text-[#1B4332]">
              Este guia foi desenvolvido no âmbito do projeto{' '}
              <strong>Google Lab Novas Vozes da Notícia</strong>, com base em uma entrevista com{' '}
              <strong>Evelyn Fagundes</strong>, jornalista da Agência Lupa e correspondente da Mural em Guarulhos.
            </p>
          </div>

          <p>
            O <strong>Google Gemini</strong> foi utilizado no apoio à transcrição do áudio e na revisão da primeira versão do texto.
          </p>
        </div>

        {/* Team Credits Grid */}
        <div className="space-y-3 py-3 border-y-2 border-black/20">
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-[#FAF9F5] p-2.5 rounded-lg border border-black/40">
              <span className="text-[10px] font-black uppercase text-gray-500 block">Texto</span>
              <span className="font-extrabold text-black">Brenda Machado e Simony Maia</span>
            </div>
            <div className="bg-[#FAF9F5] p-2.5 rounded-lg border border-black/40">
              <span className="text-[10px] font-black uppercase text-gray-500 block">Edição</span>
              <span className="font-extrabold text-black">Sarah Fernandes</span>
            </div>
            <div className="bg-[#FAF9F5] p-2.5 rounded-lg border border-black/40">
              <span className="text-[10px] font-black uppercase text-gray-500 block">Design Gráfico</span>
              <span className="font-extrabold text-black">Janaína Oliveira</span>
            </div>
            <div className="bg-[#FAF9F5] p-2.5 rounded-lg border border-black/40">
              <span className="text-[10px] font-black uppercase text-gray-500 block">Ilustrações</span>
              <span className="font-extrabold text-black">Magno Borges</span>
            </div>
          </div>

          <div className="bg-[#FAF9F5] p-3 rounded-lg border border-black/40 text-xs">
            <span className="text-[10px] font-black uppercase text-gray-500 block">Desenvolvimento da Página</span>
            <span className="font-extrabold text-black">Paulo Talarico e Amanda Gedra</span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-black text-white text-xs font-bold">
            <span>Apoio Institucional:</span>
            <span className="font-black tracking-wider text-base">icci</span>
          </div>
        </div>

        {/* Support Call */}
        <div className="mt-5 text-center">
          <p className="text-xs text-gray-700 font-bold mb-3">
            Gostou do projeto? Apoie o jornalismo independente feito pelas periferias:
          </p>
          <a
            href="https://agenciamural.org.br/apoie"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#E63946] text-white font-black text-xs uppercase rounded-lg border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:bg-[#D90429] transition-all"
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Acessar agenciamural.org.br/apoie</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Share2, 
  BookOpen, 
  Layers, 
  Sparkles, 
  Info, 
  HeartHandshake,
  CheckCircle2,
  Copy
} from 'lucide-react';
import { speechController } from '../utils/audioSpeech';

interface HeaderProps {
  currentView: 'stories' | 'guide' | 'tools';
  onViewChange: (view: 'stories' | 'guide' | 'tools') => void;
  onOpenCredits: () => void;
  onOpenSupport: () => void;
  fontSize: 'normal' | 'large';
  onToggleFontSize: () => void;
  activeCardTitle?: string;
  activeCardNarration?: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onViewChange,
  onOpenCredits,
  onOpenSupport,
  fontSize,
  onToggleFontSize,
  activeCardNarration
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const unsubscribe = speechController.subscribe(setIsSpeaking);
    return () => {
      unsubscribe();
    };
  }, []);

  const toggleNarration = () => {
    if (isSpeaking) {
      speechController.stop();
    } else if (activeCardNarration) {
      speechController.speak(activeCardNarration);
    } else {
      speechController.speak(
        'Eleições nas Periferias: Como identificar, verificar e não espalhar desinformação em tempos de Inteligência Artificial. Guia produzido pela Agência Mural de Jornalismo das Periferias.'
      );
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      'Olha este guia interativo da Agência Mural sobre Eleições nas Periferias e como combater desinformação e IAs nas eleições de 2026: ' +
        window.location.href
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b-2 border-black/80 px-3 sm:px-6 py-2.5 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://agenciamural.org.br"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 group focus:outline-none"
              title="Acessar site da Agência Mural"
            >
              <div className="w-8 h-8 bg-[#E63946] border-2 border-black rounded flex items-center justify-center text-white font-black text-xs shadow-[2px_2px_0px_rgba(0,0,0,1)] group-hover:-translate-y-0.5 transition-transform">
                M
              </div>
              <div className="hidden sm:flex flex-col text-left leading-tight">
                <span className="font-extrabold text-sm tracking-tight text-black group-hover:text-[#E63946] transition-colors">
                  AGÊNCIA MURAL
                </span>
                <span className="text-[10px] font-semibold text-gray-700 tracking-wider uppercase">
                  Jornalismo das Periferias
                </span>
              </div>
            </a>
            
            <div className="h-6 w-px bg-black/30 mx-1 hidden sm:block" />
            
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-black text-[#1B4332] uppercase tracking-wide">
                Eleições nas Periferias
              </span>
              <span className="text-[10px] sm:text-xs text-gray-700 font-medium hidden md:block">
                Guia contra desinformação em tempos de IA
              </span>
            </div>
          </div>

          {/* View Mode Navigation Switcher */}
          <nav aria-label="Modos de navegação" className="flex items-center bg-[#E5ECE7] p-1 rounded-lg border-2 border-black/80 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            <button
              onClick={() => {
                speechController.stop();
                onViewChange('stories');
              }}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-bold transition-all ${
                currentView === 'stories'
                  ? 'bg-[#E63946] text-white shadow-sm'
                  : 'text-gray-800 hover:text-black hover:bg-black/5'
              }`}
              title="Modo Cards / Histórias"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Cards</span>
            </button>

            <button
              onClick={() => {
                speechController.stop();
                onViewChange('guide');
              }}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-bold transition-all ${
                currentView === 'guide'
                  ? 'bg-[#1B4332] text-white shadow-sm'
                  : 'text-gray-800 hover:text-black hover:bg-black/5'
              }`}
              title="Modo Leitura Completa"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Guia Completo</span>
              <span className="sm:hidden">Guia</span>
            </button>

            <button
              onClick={() => {
                speechController.stop();
                onViewChange('tools');
              }}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-bold transition-all ${
                currentView === 'tools'
                  ? 'bg-[#52B788] text-black shadow-sm'
                  : 'text-gray-800 hover:text-black hover:bg-black/5'
              }`}
              title="Simulador de Zap, Resposta e Quiz"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Ferramentas</span>
              <span className="sm:hidden">Quiz/Zap</span>
            </button>
          </nav>

          {/* Utility Actions */}
          <div className="flex items-center gap-1.5">
            {/* Narration toggle */}
            <button
              onClick={toggleNarration}
              className={`p-1.5 sm:px-2 sm:py-1 rounded border-2 border-black/80 font-bold text-xs flex items-center gap-1 shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all ${
                isSpeaking
                  ? 'bg-[#E63946] text-white animate-pulse'
                  : 'bg-white text-gray-800 hover:bg-[#F3F4F6]'
              }`}
              title={isSpeaking ? 'Parar leitura por voz' : 'Ouvir narração deste conteúdo'}
            >
              {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span className="hidden lg:inline">{isSpeaking ? 'Ouvindo...' : 'Ouvir'}</span>
            </button>

            {/* Font Size Toggle */}
            <button
              onClick={onToggleFontSize}
              className="px-2 py-1 bg-white rounded border-2 border-black/80 font-bold text-xs shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-[#F3F4F6] transition-all hidden sm:flex items-center"
              title={fontSize === 'large' ? 'Tamanho de texto normal' : 'Aumentar tamanho do texto'}
            >
              <span className="text-[10px]">A</span>
              <span className="text-sm font-black">A</span>
            </button>

            {/* Share Trigger */}
            <button
              onClick={() => setShowShareModal(true)}
              className="p-1.5 sm:px-2.5 sm:py-1 bg-[#2D6A4F] text-white rounded border-2 border-black/80 font-bold text-xs flex items-center gap-1.5 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-[#1B4332] transition-all"
              title="Compartilhar guia"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden md:inline">Compartilhar</span>
            </button>

            {/* Support button */}
            <button
              onClick={onOpenSupport}
              className="p-1.5 sm:px-2.5 sm:py-1 bg-[#E63946] text-white rounded border-2 border-black/80 font-bold text-xs flex items-center gap-1.5 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-[#D90429] transition-all"
              title="Apoie a Agência Mural"
            >
              <HeartHandshake className="w-4 h-4" />
              <span className="hidden xl:inline">Apoie</span>
            </button>

            {/* Credits */}
            <button
              onClick={onOpenCredits}
              className="p-1.5 bg-white text-gray-700 rounded border-2 border-black/80 font-bold text-xs hover:bg-[#F3F4F6] shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all"
              title="Ver expediente e créditos"
            >
              <Info className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>
      </header>

      {/* Share Modal Dialog */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-fadeIn">
          <div className="bg-[#FFFDF9] border-3 border-black rounded-xl p-5 max-w-md w-full shadow-[6px_6px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-between pb-3 border-b-2 border-black/20">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-[#E63946] text-white rounded flex items-center justify-center font-bold">
                  <Share2 className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-black uppercase text-black">
                  Compartilhe este Guia
                </h3>
              </div>
              <button
                onClick={() => setShowShareModal(false)}
                className="w-8 h-8 rounded-full border-2 border-black bg-white hover:bg-gray-100 flex items-center justify-center font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-gray-700 my-4 leading-relaxed font-medium">
              Ajude a fortalecer quem mora na periferia com informação verificada e dicas práticas para combater boatos nas eleições de 2026.
            </p>

            <div className="space-y-3">
              <button
                onClick={handleShareWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] text-black font-extrabold rounded-lg border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:bg-[#20bd5a] transition-colors"
              >
                <span className="text-lg">💬</span>
                <span>Enviar para Grupos no WhatsApp</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white text-black font-bold rounded-lg border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:bg-gray-50 transition-colors"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="text-green-700">Link copiado com sucesso!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar Link da Página</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

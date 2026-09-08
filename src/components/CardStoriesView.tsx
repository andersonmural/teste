import React, { useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Share2, 
  Volume2, 
  VolumeX, 
  ExternalLink,
  Sparkles,
  CheckSquare
} from 'lucide-react';
import { GUIDE_SLIDES } from '../data/guideData';
import { GuideIllustration, GridProgressBlock } from './GuideIllustration';
import { speechController } from '../utils/audioSpeech';

interface CardStoriesViewProps {
  currentSlideIndex: number;
  onSlideChange: (index: number) => void;
  fontSize: 'normal' | 'large';
  onNavigateToTool: (toolId: string) => void;
}

export const CardStoriesView: React.FC<CardStoriesViewProps> = ({
  currentSlideIndex,
  onSlideChange,
  fontSize,
  onNavigateToTool
}) => {
  const currentSlide = GUIDE_SLIDES[currentSlideIndex];
  const totalSlides = GUIDE_SLIDES.length;

  const [isSpeaking, setIsSpeaking] = React.useState(false);

  useEffect(() => {
    const unsub = speechController.subscribe(setIsSpeaking);
    return () => unsub();
  }, []);

  const handlePrev = useCallback(() => {
    speechController.stop();
    onSlideChange(currentSlideIndex > 0 ? currentSlideIndex - 1 : totalSlides - 1);
  }, [currentSlideIndex, onSlideChange, totalSlides]);

  const handleNext = useCallback(() => {
    speechController.stop();
    onSlideChange(currentSlideIndex < totalSlides - 1 ? currentSlideIndex + 1 : 0);
  }, [currentSlideIndex, onSlideChange, totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight' || e.key === ' ') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  const toggleNarration = () => {
    if (isSpeaking) {
      speechController.stop();
    } else {
      speechController.speak(currentSlide.audioNarrationText);
    }
  };

  const shareCardOnWhatsApp = () => {
    let msg = `*${currentSlide.title}*\n\n`;
    if (currentSlide.cardNumber) {
      msg += `💡 Dica ${currentSlide.cardNumber} do Guia de Eleições nas Periferias (Agência Mural):\n`;
    }
    if (currentSlide.highlight) {
      msg += `"${currentSlide.highlight}"\n\n`;
    }
    msg += `Confira o guia interativo completo: ${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // Background style based on slide theme
  const getSlideBackground = () => {
    if (currentSlide.themeColor === 'red') {
      return 'bg-[#E63946] text-white';
    }
    if (currentSlide.themeColor === 'mint') {
      return 'bg-[#D8F3DC] text-[#1B4332]';
    }
    return 'bg-[#FFFDF9] text-[#1E293B]';
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 py-4 flex flex-col items-center">
      {/* Top progress indicator row */}
      <div className="w-full max-w-md flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
          {GUIDE_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => {
                speechController.stop();
                onSlideChange(idx);
              }}
              className={`h-2 rounded-full transition-all duration-200 ${
                idx === currentSlideIndex
                  ? 'w-6 bg-[#E63946]'
                  : idx < currentSlideIndex
                  ? 'w-2 bg-[#2D6A4F]'
                  : 'w-2 bg-gray-300'
              }`}
              title={`Ir para tela ${idx + 1}: ${slide.title}`}
            />
          ))}
        </div>
        <span className="text-xs font-mono font-bold text-gray-700 whitespace-nowrap">
          {currentSlideIndex + 1} / {totalSlides}
        </span>
      </div>

      {/* Main Authentic Card Container with bold red outline matching original artwork */}
      <div className="relative w-full max-w-md bg-[#FFFDF9] rounded-2xl border-4 border-[#E63946] shadow-[8px_8px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-300">
        {/* Card Header Info */}
        <div className="bg-[#FAF9F5] border-b-2 border-black/80 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {currentSlide.cardNumber && (
              <span className="w-7 h-7 bg-[#E63946] text-white text-sm font-black rounded-md flex items-center justify-center border-2 border-black shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                {currentSlide.cardNumber}
              </span>
            )}
            <span className="text-xs font-black uppercase tracking-wider text-black">
              {currentSlide.badge || 'Eleições nas Periferias'}
            </span>
          </div>

          {/* Authentic 10-block progress square */}
          {currentSlide.cardNumber ? (
            <GridProgressBlock currentCard={currentSlide.cardNumber} totalCards={12} />
          ) : (
            <div className="w-8 h-4 bg-[#52B788] rounded-sm border border-black" />
          )}
        </div>

        {/* Card Body with specific theme */}
        <div
          className={`p-5 sm:p-6 min-h-[510px] flex flex-col justify-between transition-colors duration-200 ${getSlideBackground()}`}
        >
          {/* Top Section: Title & Content */}
          <div>
            {/* Slide Title */}
            <h2
              className={`font-black uppercase tracking-tight leading-tight mb-4 ${
                currentSlide.type === 'cover'
                  ? 'text-2xl sm:text-3xl text-[#1B4332] text-center'
                  : currentSlide.themeColor === 'red'
                  ? 'text-xl sm:text-2xl text-white'
                  : 'text-lg sm:text-xl text-black'
              }`}
            >
              {currentSlide.title}
            </h2>

            {/* Subtitle if any */}
            {currentSlide.subtitle && (
              <div
                className={`inline-block px-3 py-1.5 rounded-md font-bold mb-4 ${
                  currentSlide.type === 'cover'
                    ? 'bg-[#52B788] text-[#081C15] text-sm text-center border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]'
                    : 'bg-black/10 text-current text-xs'
                }`}
              >
                {currentSlide.subtitle}
              </div>
            )}

            {/* Illustration Graphic */}
            <div className="my-3">
              <GuideIllustration
                type={currentSlide.illustrationType}
                className="w-full max-h-[190px] mx-auto"
              />
            </div>

            {/* Main Text Content */}
            <div
              className={`space-y-2.5 mt-4 ${
                fontSize === 'large' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
              } leading-relaxed font-medium`}
            >
              {currentSlide.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Highlight Box in Red (faithful to original slides) */}
            {currentSlide.highlight && (
              <div
                className={`mt-4 p-3 rounded-lg border-2 border-black font-bold text-sm sm:text-base leading-snug shadow-[2px_2px_0px_rgba(0,0,0,1)] ${
                  currentSlide.themeColor === 'red'
                    ? 'bg-white text-black'
                    : 'bg-[#E63946] text-white'
                }`}
              >
                {currentSlide.highlight}
              </div>
            )}

            {/* Bullet Points if any */}
            {currentSlide.bulletPoints && (
              <ul className="mt-3.5 space-y-2">
                {currentSlide.bulletPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm leading-relaxed">
                    <span
                      className={`inline-block w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 border border-black ${
                        currentSlide.themeColor === 'red' ? 'bg-white' : 'bg-[#E63946]'
                      }`}
                    />
                    <span className="font-semibold">{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Card 16 Call to Action */}
            {currentSlide.type === 'support' && (
              <div className="mt-5 text-center">
                <a
                  href="https://agenciamural.org.br/apoie"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 py-3 px-6 bg-white text-[#E63946] font-black rounded-lg border-3 border-black text-sm uppercase tracking-wider shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#F8F9FA] hover:scale-105 transition-all"
                >
                  Acessar agenciamural.org.br/apoie
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>

          {/* Interactive Tool Short-cut triggers tied to specific cards */}
          <div className="mt-5 pt-3 border-t border-current/20 flex flex-col gap-2">
            {currentSlide.cardNumber === 7 && (
              <button
                onClick={() => onNavigateToTool('checklist')}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-white text-black font-bold text-xs rounded-lg border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-gray-50 transition-colors"
              >
                <CheckSquare className="w-4 h-4 text-[#2D6A4F]" />
                <span>Abrir Checklist Interativo dos 4 Passos</span>
              </button>
            )}

            {currentSlide.cardNumber === 10 && (
              <button
                onClick={() => onNavigateToTool('zap')}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-white text-black font-bold text-xs rounded-lg border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-gray-50 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-[#E63946]" />
                <span>Gerar Resposta Educada para o Grupo do Zap</span>
              </button>
            )}

            {/* Bottom Card Actions: Audio + Share Card on WhatsApp */}
            <div className="flex items-center justify-between gap-2">
              <button
                onClick={toggleNarration}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border-2 border-black text-xs font-bold shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-colors ${
                  isSpeaking
                    ? 'bg-white text-[#E63946] animate-pulse'
                    : currentSlide.themeColor === 'red'
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
                title="Ouvir áudio deste card"
              >
                {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                <span>{isSpeaking ? 'Parar voz' : 'Ouvir card'}</span>
              </button>

              <button
                onClick={shareCardOnWhatsApp}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] text-black rounded-lg border-2 border-black text-xs font-extrabold shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-[#20bd5a] transition-colors"
                title="Compartilhar dica deste card no WhatsApp"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Mandar no Zap</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Nav Bar of the Card */}
        <div className="bg-[#FAF9F5] border-t-2 border-black/80 px-4 py-2.5 flex items-center justify-between">
          <button
            onClick={handlePrev}
            className="flex items-center gap-1 text-xs font-black uppercase text-black hover:text-[#E63946] py-1 px-2 rounded hover:bg-black/5 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          <span className="text-[11px] font-bold text-gray-600">
            Dica: use setas do teclado ← →
          </span>

          <button
            onClick={handleNext}
            className="flex items-center gap-1 text-xs font-black uppercase text-black hover:text-[#E63946] py-1 px-2 rounded hover:bg-black/5 transition-colors"
          >
            <span>Próximo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Slide quick jump thumbnail strip */}
      <div className="w-full max-w-xl mt-6 px-2">
        <h4 className="text-xs font-black uppercase tracking-wider text-gray-600 mb-2 text-center">
          Índice Visual dos Cards
        </h4>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
          {GUIDE_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => {
                speechController.stop();
                onSlideChange(index);
              }}
              className={`p-1.5 text-center rounded border-2 font-bold text-[11px] transition-all ${
                index === currentSlideIndex
                  ? 'border-black bg-[#E63946] text-white shadow-[2px_2px_0px_rgba(0,0,0,1)] scale-105'
                  : 'border-black/30 bg-white text-gray-700 hover:border-black hover:bg-gray-50'
              }`}
            >
              {slide.cardNumber ? `Card ${slide.cardNumber}` : slide.type === 'cover' ? 'Capa' : slide.type === 'intro' ? 'Intro' : slide.type === 'credits' ? 'Créditos' : 'Apoie'}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

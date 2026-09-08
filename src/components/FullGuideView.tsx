import React, { useState } from 'react';
import { 
  Search, 
  Share2, 
  Volume2, 
  VolumeX, 
  CheckSquare, 
  Sparkles, 
  ArrowUpRight,
  ExternalLink,
  Info
} from 'lucide-react';
import { GUIDE_SLIDES, TRUSTED_SOURCES } from '../data/guideData';
import { GuideIllustration, GridProgressBlock } from './GuideIllustration';
import { speechController } from '../utils/audioSpeech';

interface FullGuideViewProps {
  fontSize: 'normal' | 'large';
  onSelectCard: (index: number) => void;
  onNavigateToTool: (toolId: string) => void;
}

export const FullGuideView: React.FC<FullGuideViewProps> = ({
  fontSize,
  onSelectCard,
  onNavigateToTool
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [speakingId, setSpeakingId] = useState<number | null>(null);

  const filteredSlides = GUIDE_SLIDES.filter((slide) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      slide.title.toLowerCase().includes(term) ||
      slide.content.some((c) => c.toLowerCase().includes(term)) ||
      (slide.highlight && slide.highlight.toLowerCase().includes(term)) ||
      (slide.bulletPoints && slide.bulletPoints.some((b) => b.toLowerCase().includes(term)))
    );
  });

  const handleSpeak = (slideId: number, text: string) => {
    if (speakingId === slideId) {
      speechController.stop();
      setSpeakingId(null);
    } else {
      speechController.speak(text);
      setSpeakingId(slideId);
    }
  };

  const handleShareCard = (title: string, highlight?: string) => {
    let msg = `*${title}*\n\n`;
    if (highlight) {
      msg += `"${highlight}"\n\n`;
    }
    msg += `Do Guia de Eleições nas Periferias da Agência Mural: ${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Header Banner */}
      <div className="bg-[#D8F3DC] border-4 border-black rounded-2xl p-6 sm:p-8 mb-8 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="inline-block bg-[#E63946] text-white px-3 py-1 rounded font-black text-xs uppercase tracking-wider mb-2 border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)]">
              Agência Mural de Jornalismo das Periferias
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1B4332] uppercase leading-tight mb-3">
              Eleições nas Periferias
            </h1>
            <p className="text-base sm:text-lg font-bold text-gray-800 leading-snug">
              Como identificar, verificar e não espalhar desinformação em tempos de Inteligência Artificial.
            </p>
            <p className="text-xs text-gray-700 font-medium mt-2">
              Desenvolvido no projeto Google Lab Novas Vozes da Notícia, com base em entrevista com Evelyn Fagundes (Agência Lupa / Mural).
            </p>
          </div>

          <div className="w-48 shrink-0">
            <GuideIllustration type="cover_urna" className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Quick Interactive Tool Banners */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        <button
          onClick={() => onNavigateToTool('checklist')}
          className="flex items-center gap-3 p-3.5 bg-white border-2 border-black rounded-xl shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:bg-[#D8F3DC] transition-colors text-left group"
        >
          <div className="w-10 h-10 rounded-lg bg-[#52B788] text-black flex items-center justify-center font-bold shrink-0 border border-black group-hover:scale-105 transition-transform">
            <CheckSquare className="w-5 h-5" />
          </div>
          <div>
            <div className="font-extrabold text-xs uppercase text-black">Simulador de Mensagem</div>
            <div className="text-[11px] text-gray-700">Recebeu no Zap? Cheque o risco</div>
          </div>
        </button>

        <button
          onClick={() => onNavigateToTool('zap')}
          className="flex items-center gap-3 p-3.5 bg-white border-2 border-black rounded-xl shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:bg-[#FFE5D9] transition-colors text-left group"
        >
          <div className="w-10 h-10 rounded-lg bg-[#E63946] text-white flex items-center justify-center font-bold shrink-0 border border-black group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="font-extrabold text-xs uppercase text-black">Resposta Gentil pro Zap</div>
            <div className="text-[11px] text-gray-700">Responda sem brigar no grupo</div>
          </div>
        </button>

        <button
          onClick={() => onNavigateToTool('quiz')}
          className="flex items-center gap-3 p-3.5 bg-white border-2 border-black rounded-xl shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:bg-[#D8F3DC] transition-colors text-left group"
        >
          <div className="w-10 h-10 rounded-lg bg-[#2D6A4F] text-white flex items-center justify-center font-bold shrink-0 border border-black group-hover:scale-105 transition-transform">
            <span className="text-base font-black">?</span>
          </div>
          <div>
            <div className="font-extrabold text-xs uppercase text-black">Quiz de Fixação</div>
            <div className="text-[11px] text-gray-700">Teste seu olhar crítico</div>
          </div>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#FAF9F5] p-3 rounded-xl border-2 border-black/80 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar assunto no guia (ex: IA, zap, creche)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-white border border-black/60 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#E63946]"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-500 hover:text-black"
            >
              ✕
            </button>
          )}
        </div>

        <span className="text-xs font-bold text-gray-700">
          Exibindo {filteredSlides.length} de {GUIDE_SLIDES.length} seções do guia
        </span>
      </div>

      {/* Cards List in Full Scroll View */}
      <div className="space-y-8">
        {filteredSlides.map((slide, index) => {
          const originalIndex = GUIDE_SLIDES.findIndex((s) => s.id === slide.id);
          const isCard = slide.type === 'card' || slide.type === 'steps';
          const isCoverOrIntro = slide.type === 'cover' || slide.type === 'intro';
          const isCreditsOrSupport = slide.type === 'credits' || slide.type === 'support';

          return (
            <article
              key={slide.id}
              className={`rounded-2xl border-3 border-black shadow-[5px_5px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-200 ${
                slide.themeColor === 'red'
                  ? 'bg-[#E63946] text-white'
                  : slide.themeColor === 'mint'
                  ? 'bg-[#D8F3DC] text-[#1B4332]'
                  : 'bg-white text-gray-900'
              }`}
            >
              {/* Card Header Bar */}
              <div
                className={`px-5 py-2.5 border-b-2 border-black flex items-center justify-between ${
                  slide.themeColor === 'red' ? 'bg-[#D90429] text-white' : 'bg-[#FAF9F5] text-black'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {slide.cardNumber && (
                    <span className="w-7 h-7 bg-[#E63946] text-white text-sm font-black rounded flex items-center justify-center border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                      {slide.cardNumber}
                    </span>
                  )}
                  <span className="text-xs font-black uppercase tracking-wider">
                    {slide.badge || `Seção ${slide.pageNumber}`}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {slide.cardNumber && (
                    <GridProgressBlock currentCard={slide.cardNumber} totalCards={12} />
                  )}
                  <button
                    onClick={() => onSelectCard(originalIndex)}
                    className="text-xs font-extrabold flex items-center gap-1 hover:underline ml-2"
                    title="Ver este card no modo tela cheia / Stories"
                  >
                    <span>Modo Card</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-7">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Text Column */}
                  <div className="flex-1">
                    <h3
                      className={`font-black uppercase tracking-tight leading-tight mb-3 ${
                        isCoverOrIntro ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                      } ${slide.themeColor === 'red' ? 'text-white' : 'text-black'}`}
                    >
                      {slide.title}
                    </h3>

                    {slide.subtitle && (
                      <div className="inline-block bg-black/10 px-2.5 py-1 rounded text-xs font-bold mb-3">
                        {slide.subtitle}
                      </div>
                    )}

                    <div
                      className={`space-y-3 font-medium leading-relaxed ${
                        fontSize === 'large' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
                      }`}
                    >
                      {slide.content.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>

                    {/* Highlight Box */}
                    {slide.highlight && (
                      <div
                        className={`mt-4 p-3.5 rounded-lg border-2 border-black font-bold text-sm sm:text-base leading-snug shadow-[2px_2px_0px_rgba(0,0,0,1)] ${
                          slide.themeColor === 'red'
                            ? 'bg-white text-black'
                            : 'bg-[#E63946] text-white'
                        }`}
                      >
                        {slide.highlight}
                      </div>
                    )}

                    {/* Bullet Points */}
                    {slide.bulletPoints && (
                      <ul className="mt-4 space-y-2">
                        {slide.bulletPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold">
                            <span
                              className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 border border-black ${
                                slide.themeColor === 'red' ? 'bg-white' : 'bg-[#E63946]'
                              }`}
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Bottom CTA for Support Slide */}
                    {slide.type === 'support' && (
                      <div className="mt-6">
                        <a
                          href="https://agenciamural.org.br/apoie"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 py-2.5 px-5 bg-white text-[#E63946] font-black rounded-lg border-2 border-black uppercase text-xs sm:text-sm shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:bg-gray-100 transition-transform"
                        >
                          <span>Apoie a Agência Mural</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Illustration Column */}
                  <div className="w-full md:w-56 shrink-0 flex flex-col items-center justify-center p-2 rounded-xl bg-black/5 border border-black/20">
                    <GuideIllustration
                      type={slide.illustrationType}
                      className="w-full max-h-[160px]"
                    />
                  </div>
                </div>

                {/* Footer of Card in Full View */}
                <div className="mt-6 pt-4 border-t border-current/20 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleSpeak(slide.id, slide.audioNarrationText)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border-2 border-black text-xs font-bold shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-colors ${
                        speakingId === slide.id
                          ? 'bg-white text-[#E63946] animate-pulse'
                          : 'bg-white text-black hover:bg-gray-100'
                      }`}
                    >
                      {speakingId === slide.id ? (
                        <VolumeX className="w-3.5 h-3.5" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5" />
                      )}
                      <span>{speakingId === slide.id ? 'Parar voz' : 'Ouvir seção'}</span>
                    </button>

                    <button
                      onClick={() => handleShareCard(slide.title, slide.highlight)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] text-black rounded-lg border-2 border-black text-xs font-extrabold shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-[#20bd5a] transition-colors"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Compartilhar no Zap</span>
                    </button>
                  </div>

                  {slide.cardNumber === 7 && (
                    <button
                      onClick={() => onNavigateToTool('checklist')}
                      className="text-xs font-extrabold underline flex items-center gap-1"
                    >
                      <span>Abrir Simulador dos 4 Passos</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {slide.cardNumber === 10 && (
                    <button
                      onClick={() => onNavigateToTool('zap')}
                      className="text-xs font-extrabold underline flex items-center gap-1"
                    >
                      <span>Abrir Gerador de Resposta Gentil</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Directory of Trusted Sources */}
      <section className="mt-12 bg-white border-3 border-black rounded-2xl p-6 sm:p-8 shadow-[5px_5px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-[#2D6A4F] text-white rounded-lg border border-black flex items-center justify-center font-bold">
            <Info className="w-4 h-4" />
          </div>
          <h3 className="text-xl font-black uppercase text-black">
            Onde Checar: Fontes Confiáveis & Hiperlocais
          </h3>
        </div>
        <p className="text-sm text-gray-700 font-medium mb-6">
          Conforme orienta o guia, quando receber uma notícia suspeita sobre candidatos ou sobre sua quebrada, confirme em iniciativas de jornalismo profissional e canais oficiais:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TRUSTED_SOURCES.map((source) => (
            <a
              key={source.name}
              href={source.url}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl border-2 border-black bg-[#FAF9F5] hover:bg-[#D8F3DC] transition-all flex flex-col justify-between group shadow-[2px_2px_0px_rgba(0,0,0,1)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-extrabold text-sm text-black group-hover:text-[#1B4332]">
                    {source.name}
                  </span>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-black/10 text-black">
                    {source.badge}
                  </span>
                </div>
                <p className="text-xs text-gray-700 font-medium leading-relaxed">
                  {source.description}
                </p>
              </div>
              <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-[#E63946] group-hover:underline">
                <span>Acessar portal</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { CardStoriesView } from './components/CardStoriesView';
import { FullGuideView } from './components/FullGuideView';
import { ZapChecklistTool } from './components/ZapChecklistTool';
import { GentleReplyGenerator } from './components/GentleReplyGenerator';
import { PeripheryQuiz } from './components/PeripheryQuiz';
import { CreditsModal } from './components/CreditsModal';
import { SupportSection } from './components/SupportSection';
import { GUIDE_SLIDES } from './data/guideData';
import { 
  CheckSquare, 
  Sparkles, 
  HelpCircle, 
  Layers, 
  BookOpen, 
  HeartHandshake,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'stories' | 'guide' | 'tools'>('stories');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [activeTool, setActiveTool] = useState<'checklist' | 'zap' | 'quiz'>('checklist');
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [showCreditsModal, setShowCreditsModal] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);

  const activeCard = GUIDE_SLIDES[currentSlideIndex];

  const handleNavigateToTool = (toolId: string) => {
    if (toolId === 'checklist') setActiveTool('checklist');
    else if (toolId === 'zap') setActiveTool('zap');
    else if (toolId === 'quiz') setActiveTool('quiz');
    setCurrentView('tools');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFontSize = () => {
    setFontSize((prev) => (prev === 'normal' ? 'large' : 'normal'));
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E293B] flex flex-col font-sans selection:bg-[#E63946] selection:text-white">
      {/* Top Main Navigation */}
      <Header
        currentView={currentView}
        onViewChange={(v) => {
          setCurrentView(v);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenCredits={() => setShowCreditsModal(true)}
        onOpenSupport={() => setShowSupportModal(true)}
        fontSize={fontSize}
        onToggleFontSize={toggleFontSize}
        activeCardTitle={activeCard?.title}
        activeCardNarration={activeCard?.audioNarrationText}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {currentView === 'stories' && (
          <CardStoriesView
            currentSlideIndex={currentSlideIndex}
            onSlideChange={setCurrentSlideIndex}
            fontSize={fontSize}
            onNavigateToTool={handleNavigateToTool}
          />
        )}

        {currentView === 'guide' && (
          <FullGuideView
            fontSize={fontSize}
            onSelectCard={(index) => {
              setCurrentSlideIndex(index);
              setCurrentView('stories');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToTool={handleNavigateToTool}
          />
        )}

        {currentView === 'tools' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
            {/* Tools Sub-tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8 bg-[#E5ECE7] p-1.5 rounded-xl border-2 border-black max-w-lg mx-auto shadow-[3px_3px_0px_rgba(0,0,0,1)]">
              <button
                onClick={() => setActiveTool('checklist')}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-black transition-all ${
                  activeTool === 'checklist'
                    ? 'bg-[#2D6A4F] text-white shadow-sm'
                    : 'text-gray-800 hover:text-black hover:bg-white/40'
                }`}
              >
                <CheckSquare className="w-4 h-4" />
                <span>Simulador de Mensagem</span>
              </button>

              <button
                onClick={() => setActiveTool('zap')}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-black transition-all ${
                  activeTool === 'zap'
                    ? 'bg-[#E63946] text-white shadow-sm'
                    : 'text-gray-800 hover:text-black hover:bg-white/40'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Resposta pro Zap</span>
              </button>

              <button
                onClick={() => setActiveTool('quiz')}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-black transition-all ${
                  activeTool === 'quiz'
                    ? 'bg-[#52B788] text-black shadow-sm'
                    : 'text-gray-800 hover:text-black hover:bg-white/40'
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                <span>Quiz de Fixação</span>
              </button>
            </div>

            {/* Active Tool View */}
            {activeTool === 'checklist' && (
              <ZapChecklistTool onOpenReplyGenerator={() => setActiveTool('zap')} />
            )}

            {activeTool === 'zap' && <GentleReplyGenerator />}

            {activeTool === 'quiz' && <PeripheryQuiz />}

            {/* Bottom jump back to guide */}
            <div className="mt-8 text-center">
              <button
                onClick={() => {
                  setCurrentView('guide');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-[#1B4332] hover:underline"
              >
                <span>Voltar à leitura completa do guia</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Global Footer */}
      <footer className="bg-[#1B4332] text-white border-t-4 border-black py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 bg-[#E63946] text-white font-black text-xl flex items-center justify-center rounded-lg border-2 border-white shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              M
            </div>
            <div>
              <div className="font-black text-base uppercase tracking-tight">
                Agência Mural de Jornalismo das Periferias
              </div>
              <p className="text-xs text-white/80 max-w-md mt-0.5">
                Eleições nas Periferias: Como identificar, verificar e não espalhar desinformação em tempos de IA.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setShowCreditsModal(true)}
              className="px-3 py-1.5 rounded-lg border border-white/40 text-xs font-bold hover:bg-white/10 transition-colors"
            >
              Expediente & Equipe
            </button>

            <button
              onClick={() => setShowSupportModal(true)}
              className="px-3 py-1.5 rounded-lg bg-[#E63946] text-white text-xs font-extrabold flex items-center gap-1 border border-black hover:bg-[#D90429] transition-colors"
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Apoie a Mural</span>
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-6 pt-4 border-t border-white/20 text-center text-[11px] text-white/60">
          Desenvolvido no âmbito do projeto Google Lab Novas Vozes da Notícia • Apoio: ICCI
        </div>
      </footer>

      {/* Modals */}
      <CreditsModal isOpen={showCreditsModal} onClose={() => setShowCreditsModal(false)} />
      <SupportSection isOpen={showSupportModal} onClose={() => setShowSupportModal(false)} />
    </div>
  );
}

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  Award,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/guideData';

export const PeripheryQuiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (optionId: string) => {
    if (hasAnswered) return;
    setSelectedOptionId(optionId);
    setHasAnswered(true);

    const option = currentQuestion.options.find((o) => o.id === optionId);
    if (option?.isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setHasAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionId(null);
    setHasAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="bg-white border-3 border-black rounded-2xl p-5 sm:p-7 shadow-[5px_5px_0px_rgba(0,0,0,1)]">
      <div className="flex items-center justify-between pb-4 border-b-2 border-black/20">
        <div>
          <span className="text-xs font-black uppercase text-[#2D6A4F] tracking-wider">
            Desafio Interativo
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-black uppercase">
            Quiz: Olhar Crítico nas Periferias
          </h2>
        </div>
        {!isFinished && (
          <div className="text-xs font-mono font-bold bg-[#D8F3DC] border border-black px-2.5 py-1 rounded">
            Pergunta {currentQuestionIndex + 1} de {QUIZ_QUESTIONS.length}
          </div>
        )}
      </div>

      {!isFinished ? (
        <div className="mt-5">
          {/* Question Tag & Scenario */}
          <div className="bg-[#FAF9F5] border-2 border-black/80 rounded-xl p-4 mb-5">
            <span className="inline-block bg-[#E63946] text-white text-[10px] font-black uppercase px-2 py-0.5 rounded border border-black mb-2">
              {currentQuestion.tag}
            </span>
            <h3 className="font-extrabold text-base sm:text-lg text-black leading-snug">
              {currentQuestion.scenario}
            </h3>
          </div>

          <div className="text-xs font-black uppercase text-gray-600 mb-2">
            Qual é a atitude correta segundo o Guia da Agência Mural?
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedOptionId === option.id;
              let btnStyle = 'bg-white border-black/40 hover:border-black text-gray-800';

              if (hasAnswered) {
                if (option.isCorrect) {
                  btnStyle = 'bg-[#D8F3DC] border-[#2D6A4F] text-[#081C15] font-bold shadow-[2px_2px_0px_rgba(0,0,0,1)]';
                } else if (isSelected && !option.isCorrect) {
                  btnStyle = 'bg-[#FFE5D9] border-[#E63946] text-[#9D0208]';
                } else {
                  btnStyle = 'bg-gray-100 border-gray-300 opacity-60 text-gray-500';
                }
              } else if (isSelected) {
                btnStyle = 'bg-blue-50 border-blue-500';
              }

              return (
                <button
                  key={option.id}
                  disabled={hasAnswered}
                  onClick={() => handleSelectOption(option.id)}
                  className={`w-full text-left p-3.5 rounded-xl border-2 transition-all flex items-start gap-3 ${btnStyle}`}
                >
                  <span className="w-6 h-6 rounded-full border border-black font-black text-xs flex items-center justify-center shrink-0 bg-white">
                    {option.id.toUpperCase()}
                  </span>
                  <div className="flex-1 text-xs sm:text-sm leading-relaxed">
                    {option.text}
                  </div>
                  {hasAnswered && option.isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-[#2D6A4F] shrink-0" />
                  )}
                  {hasAnswered && isSelected && !option.isCorrect && (
                    <XCircle className="w-5 h-5 text-[#E63946] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box when answered */}
          {hasAnswered && (
            <div className="mt-5 p-4 rounded-xl border-2 border-black bg-[#FAF9F5] animate-fadeIn">
              <div className="flex items-center gap-1.5 font-black text-xs uppercase mb-1 text-black">
                <HelpCircle className="w-4 h-4 text-[#E63946]" />
                <span>Explicação do Guia</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
                {currentQuestion.options.find((o) => o.id === selectedOptionId)?.explanation ||
                  currentQuestion.options.find((o) => o.isCorrect)?.explanation}
              </p>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleNext}
                  className="flex items-center gap-1.5 py-2 px-4 bg-[#E63946] text-white font-black text-xs uppercase rounded-lg border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-[#D90429] transition-all"
                >
                  <span>{currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? 'Próxima Pergunta' : 'Ver Resultado'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Completion Screen */
        <div className="py-8 text-center max-w-md mx-auto">
          <div className="w-16 h-16 bg-[#D8F3DC] border-3 border-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-[3px_3px_0px_rgba(0,0,0,1)]">
            <Award className="w-8 h-8 text-[#2D6A4F]" />
          </div>

          <h3 className="text-2xl font-black uppercase text-black mb-1">
            Quiz Concluído!
          </h3>
          <p className="text-sm font-bold text-gray-700 mb-4">
            Você acertou <span className="text-[#E63946] text-lg font-black">{score}</span> de{' '}
            <span className="text-black font-black">{QUIZ_QUESTIONS.length}</span> situações.
          </p>

          <div className="p-4 bg-[#FAF9F5] border-2 border-black rounded-xl text-xs text-gray-800 leading-relaxed mb-6 font-medium">
            {score === QUIZ_QUESTIONS.length ? (
              'Sensacional! Você dominou os 4 passos e está pronto para ser a pessoa que desconfia, pesquisa e dialoga com respeito no grupo da sua quebrada!'
            ) : score >= 2 ? (
              'Muito bem! Você já reconhece os principais truques da desinformação em periferias. Lembre-se sempre de parar, respirar e checar antes de repassar.'
            ) : (
              'Vale a pena reler os Cards 1, 4 e 10 do Guia. Em ano de eleição e IA, a pausa antes de compartilhar é a nossa maior defesa.'
            )}
          </div>

          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 py-2.5 px-5 bg-[#52B788] text-black font-black text-xs uppercase rounded-lg border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-[#40916C] transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Fazer Quiz Novamente</span>
          </button>
        </div>
      )}
    </div>
  );
};

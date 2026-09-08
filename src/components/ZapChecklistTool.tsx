import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Sparkles, 
  RotateCcw,
  Copy,
  Check
} from 'lucide-react';

interface ZapChecklistToolProps {
  onOpenReplyGenerator: () => void;
}

export const ZapChecklistTool: React.FC<ZapChecklistToolProps> = ({ onOpenReplyGenerator }) => {
  const [flags, setFlags] = useState<{ [key: string]: boolean }>({
    urgency: false,
    peripheryViolence: false,
    miracleNumbers: false,
    aiMedia: false,
    blindAIProof: false,
    noOfficialSource: false,
    verifiedByJournalism: false
  });

  const [copied, setCopied] = useState(false);

  const toggleFlag = (key: string) => {
    setFlags((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const resetAll = () => {
    setFlags({
      urgency: false,
      peripheryViolence: false,
      miracleNumbers: false,
      aiMedia: false,
      blindAIProof: false,
      noOfficialSource: false,
      verifiedByJournalism: false
    });
  };

  // Calculate risk level
  const redFlagsCount = [
    flags.urgency,
    flags.peripheryViolence,
    flags.miracleNumbers,
    flags.aiMedia,
    flags.blindAIProof,
    flags.noOfficialSource
  ].filter(Boolean).length;

  const isVerified = flags.verifiedByJournalism && redFlagsCount === 0;
  const isHighRisk = redFlagsCount >= 2;
  const isMediumRisk = redFlagsCount === 1;

  const getDiagnosis = () => {
    if (isVerified) {
      return {
        title: 'SINAL VERDE: Informação Verificada',
        badge: '✅ Confiável',
        bgColor: 'bg-[#D8F3DC]',
        borderColor: 'border-[#2D6A4F]',
        textColor: 'text-[#1B4332]',
        description:
          'A mensagem foi confirmada por veículos jornalísticos confiáveis ou órgãos oficiais. Ao compartilhar, lembre-se do 4º passo do Guia: envie sempre acompanhada do link da fonte original!',
        actionText: 'Compartilhe citando a fonte da apuração.'
      };
    }
    if (isHighRisk) {
      return {
        title: 'ALERTA MÁXIMO: Alto Risco de Desinformação',
        badge: '🚨 Não Compartilhe',
        bgColor: 'bg-[#FFE5D9]',
        borderColor: 'border-[#E63946]',
        textColor: 'text-[#9D0208]',
        description:
          'Essa mensagem possui múltiplos sinais clássicos de boato ou manipulação (urgência artificial, estigmas territoriais, inteligência artificial ou números sem comprovação). Segure o dedo e não encaminhe!',
        actionText: 'Use o Gerador de Resposta Gentil para alertar o grupo com educação.'
      };
    }
    if (isMediumRisk) {
      return {
        title: 'ATENÇÃO REDOBRADA: Faça uma Pausa',
        badge: '⚠️ Suspeita',
        bgColor: 'bg-[#FFF3CD]',
        borderColor: 'border-[#D4A373]',
        textColor: 'text-[#7F4F24]',
        description:
          'Existe ao menos um elemento suspeito. Conforme o Card 1 do Guia: Pare, leia e desconfie. Faça uma busca no Google ou em agências de jornalismo local antes de repassar.',
        actionText: 'Pesquise em portais confiáveis antes de acreditar.'
      };
    }
    return {
      title: 'Aguardando verificação dos itens acima',
      badge: '🔍 Em Análise',
      bgColor: 'bg-[#FAF9F5]',
      borderColor: 'border-black',
      textColor: 'text-gray-800',
      description:
        'Marque acima as características da mensagem ou vídeo que você recebeu no WhatsApp ou nas redes para receber a orientação da Agência Mural.',
      actionText: 'Selecione os itens para avaliar o risco.'
    };
  };

  const diagnosis = getDiagnosis();

  const handleCopySummary = () => {
    const text = `Análise do Guia de Eleições nas Periferias (Agência Mural):\nDiagnóstico: ${diagnosis.title}\n${diagnosis.description}\nSaiba mais em: ${window.location.href}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border-3 border-black rounded-2xl p-5 sm:p-7 shadow-[5px_5px_0px_rgba(0,0,0,1)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b-2 border-black/20">
        <div>
          <span className="text-xs font-black uppercase text-[#E63946] tracking-wider">
            Ferramenta Prática
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-black uppercase">
            Recebi no Zap: É Confiável?
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 font-medium">
            Marque os sinais presentes na mensagem para saber como agir de acordo com o Guia.
          </p>
        </div>
        <button
          onClick={resetAll}
          className="self-start sm:self-center flex items-center gap-1 text-xs font-bold text-gray-600 hover:text-black px-2.5 py-1 rounded border border-black/30 hover:border-black"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Limpar</span>
        </button>
      </div>

      {/* Checklist Items */}
      <div className="mt-5 space-y-3">
        <label
          className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
            flags.urgency
              ? 'bg-[#FFE5D9] border-[#E63946]'
              : 'bg-[#FAF9F5] border-black/40 hover:border-black'
          }`}
        >
          <input
            type="checkbox"
            checked={flags.urgency}
            onChange={() => toggleFlag('urgency')}
            className="w-5 h-5 mt-0.5 accent-[#E63946] rounded"
          />
          <div>
            <div className="font-black text-xs sm:text-sm text-black flex items-center gap-1.5">
              <span>Tem palavras como "URGENTE!", "COMPARTILHE JÁ" ou "ESTÃO ESCONDENDO ISSO"?</span>
              <span className="text-[10px] bg-[#E63946] text-white px-1.5 py-0.5 rounded font-bold">
                Card 1
              </span>
            </div>
            <p className="text-xs text-gray-700 mt-0.5 leading-relaxed">
              O senso de urgência é a estratégia mais comum da desinformação para provocar medo, ansiedade e fazer as pessoas repassarem sem pensar.
            </p>
          </div>
        </label>

        <label
          className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
            flags.peripheryViolence
              ? 'bg-[#FFE5D9] border-[#E63946]'
              : 'bg-[#FAF9F5] border-black/40 hover:border-black'
          }`}
        >
          <input
            type="checkbox"
            checked={flags.peripheryViolence}
            onChange={() => toggleFlag('peripheryViolence')}
            className="w-5 h-5 mt-0.5 accent-[#E63946] rounded"
          />
          <div>
            <div className="font-black text-xs sm:text-sm text-black flex items-center gap-1.5">
              <span>Vídeo de armas ou violência na comunidade sem data, local e contexto?</span>
              <span className="text-[10px] bg-[#E63946] text-white px-1.5 py-0.5 rounded font-bold">
                Card 2
              </span>
            </div>
            <p className="text-xs text-gray-700 mt-0.5 leading-relaxed">
              Muitas vezes são cenas de bastidores de filmes, séries ou videoclipes requentadas para reforçar estereótipos sobre a periferia.
            </p>
          </div>
        </label>

        <label
          className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
            flags.miracleNumbers
              ? 'bg-[#FFE5D9] border-[#E63946]'
              : 'bg-[#FAF9F5] border-black/40 hover:border-black'
          }`}
        >
          <input
            type="checkbox"
            checked={flags.miracleNumbers}
            onChange={() => toggleFlag('miracleNumbers')}
            className="w-5 h-5 mt-0.5 accent-[#E63946] rounded"
          />
          <div>
            <div className="font-black text-xs sm:text-sm text-black flex items-center gap-1.5">
              <span>Números bombásticos sobre creches, escolas, hospitais ou obras do bairro?</span>
              <span className="text-[10px] bg-[#E63946] text-white px-1.5 py-0.5 rounded font-bold">
                Card 11 & 12
              </span>
            </div>
            <p className="text-xs text-gray-700 mt-0.5 leading-relaxed">
              Em época eleitoral, é comum exagerar ou inventar números de realizações governamentais. Isso deve ser checado em portais de transparência.
            </p>
          </div>
        </label>

        <label
          className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
            flags.aiMedia
              ? 'bg-[#FFE5D9] border-[#E63946]'
              : 'bg-[#FAF9F5] border-black/40 hover:border-black'
          }`}
        >
          <input
            type="checkbox"
            checked={flags.aiMedia}
            onChange={() => toggleFlag('aiMedia')}
            className="w-5 h-5 mt-0.5 accent-[#E63946] rounded"
          />
          <div>
            <div className="font-black text-xs sm:text-sm text-black flex items-center gap-1.5">
              <span>Vídeo ou áudio estranho (voz robótica, lábios fora de sincronia, candidato falando absurdos)?</span>
              <span className="text-[10px] bg-[#E63946] text-white px-1.5 py-0.5 rounded font-bold">
                Card 4
              </span>
            </div>
            <p className="text-xs text-gray-700 mt-0.5 leading-relaxed">
              Ferramentas de Inteligência Artificial produzem deepfakes e clones de voz para fabricar situações que nunca aconteceram.
            </p>
          </div>
        </label>

        <label
          className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
            flags.blindAIProof
              ? 'bg-[#FFE5D9] border-[#E63946]'
              : 'bg-[#FAF9F5] border-black/40 hover:border-black'
          }`}
        >
          <input
            type="checkbox"
            checked={flags.blindAIProof}
            onChange={() => toggleFlag('blindAIProof')}
            className="w-5 h-5 mt-0.5 accent-[#E63946] rounded"
          />
          <div>
            <div className="font-black text-xs sm:text-sm text-black flex items-center gap-1.5">
              <span>Alguém colou resposta do ChatGPT ou Gemini como "prova definitiva"?</span>
              <span className="text-[10px] bg-[#E63946] text-white px-1.5 py-0.5 rounded font-bold">
                Card 6
              </span>
            </div>
            <p className="text-xs text-gray-700 mt-0.5 leading-relaxed">
              IAs geram respostas convincentes, mas podem alucinar e inventar fatos, especialmente em eleições e políticas públicas.
            </p>
          </div>
        </label>

        <label
          className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
            flags.noOfficialSource
              ? 'bg-[#FFE5D9] border-[#E63946]'
              : 'bg-[#FAF9F5] border-black/40 hover:border-black'
          }`}
        >
          <input
            type="checkbox"
            checked={flags.noOfficialSource}
            onChange={() => toggleFlag('noOfficialSource')}
            className="w-5 h-5 mt-0.5 accent-[#E63946] rounded"
          />
          <div>
            <div className="font-black text-xs sm:text-sm text-black flex items-center gap-1.5">
              <span>Não cita qual foi o veículo de imprensa profissional ou canal oficial?</span>
              <span className="text-[10px] bg-[#E63946] text-white px-1.5 py-0.5 rounded font-bold">
                Card 8
              </span>
            </div>
            <p className="text-xs text-gray-700 mt-0.5 leading-relaxed">
              Textos anônimos sem assinatura ou fontes checadas costumam ser criados exclusivamente para manipulação.
            </p>
          </div>
        </label>

        <div className="pt-2">
          <label
            className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
              flags.verifiedByJournalism
                ? 'bg-[#D8F3DC] border-[#2D6A4F]'
                : 'bg-[#FAF9F5] border-black/40 hover:border-black'
            }`}
          >
            <input
              type="checkbox"
              checked={flags.verifiedByJournalism}
              onChange={() => toggleFlag('verifiedByJournalism')}
              className="w-5 h-5 mt-0.5 accent-[#2D6A4F] rounded"
            />
            <div>
              <div className="font-black text-xs sm:text-sm text-[#1B4332] flex items-center gap-1.5">
                <span>Pesquisei e encontrei a notícia na Agência Mural ou veículo jornalístico reconhecido</span>
                <span className="text-[10px] bg-[#2D6A4F] text-white px-1.5 py-0.5 rounded font-bold">
                  Card 3 & 7
                </span>
              </div>
              <p className="text-xs text-gray-700 mt-0.5 leading-relaxed">
                Outros veículos profissionais também cobriram a história com contexto, dados e apuração.
              </p>
            </div>
          </label>
        </div>
      </div>

      {/* Diagnosis Outcome Box */}
      <div
        className={`mt-6 p-5 rounded-xl border-3 ${diagnosis.borderColor} ${diagnosis.bgColor} shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all`}
      >
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded bg-black text-white">
            {diagnosis.badge}
          </span>
          <span className="text-xs font-mono font-bold text-gray-700">
            {redFlagsCount} alerta(s) identificado(s)
          </span>
        </div>

        <h3 className={`text-lg font-black uppercase mb-1.5 ${diagnosis.textColor}`}>
          {diagnosis.title}
        </h3>

        <p className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed mb-4">
          {diagnosis.description}
        </p>

        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-black/20">
          <button
            onClick={onOpenReplyGenerator}
            className="flex items-center gap-1.5 py-2 px-3 bg-[#E63946] text-white text-xs font-extrabold rounded-lg border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-[#D90429] transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Gerar Mensagem para Responder no Grupo</span>
          </button>

          <button
            onClick={handleCopySummary}
            className="flex items-center gap-1.5 py-2 px-3 bg-white text-black text-xs font-bold rounded-lg border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-gray-100 transition-all"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copiado!' : 'Copiar Diagnóstico'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

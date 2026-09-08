import React, { useState } from 'react';
import { 
  MessageSquare, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  HeartHandshake,
  AlertCircle
} from 'lucide-react';
import { ZAP_TEMPLATES } from '../data/guideData';

export const GentleReplyGenerator: React.FC = () => {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(ZAP_TEMPLATES[0].id);
  const [tone, setTone] = useState<'gentil' | 'didatico' | 'curto'>('gentil');
  const [recipientName, setRecipientName] = useState('');
  const [customLink, setCustomLink] = useState('');
  const [copied, setCopied] = useState(false);

  const currentTemplate = ZAP_TEMPLATES.find((t) => t.id === selectedTemplateId) || ZAP_TEMPLATES[0];

  const generateMessage = () => {
    const greeting = recipientName.trim()
      ? `Oi ${recipientName.trim()}!`
      : tone === 'curto'
      ? 'Oi gente,'
      : 'Oi pessoal, tudo bem?';

    let body = currentTemplate.templateText;

    if (tone === 'curto') {
      if (selectedTemplateId === 'ai_deepfake') {
        body = `Esse vídeo/áudio tem cara de ser montagem feita por inteligência artificial. Como não saiu em nenhum jornal sério, melhor a gente não repassar para não espalhar boato.`;
      } else if (selectedTemplateId === 'bairro_obra') {
        body = `Fui checar nos canais oficiais da prefeitura e do bairro e não há nada confirmado sobre isso. É bom a gente segurar e não passar adiante sem confirmação.`;
      } else if (selectedTemplateId === 'urgente_alarme') {
        body = `Cuidado com mensagem que pede "compartilhe urgente". Dei uma olhada nas notícias e é boato. Vamos segurar o dedo!`;
      } else {
        body = `Pesquisei nas agências de checagem e não tem prova sobre essa acusação. Em ano eleitoral rola muita mentira, melhor não repassar.`;
      }
    } else if (tone === 'didatico') {
      body += `\n\nLembrei dos 4 passos do Guia da Agência Mural para época de eleição: 1. Desconfiar da urgência; 2. Pesquisar em jornais; 3. Confirmar se outros publicaram; 4. Só passar com a fonte.`;
    }

    let linkAttachment = customLink.trim()
      ? `\n\nAqui o link com a checagem / informação correta: ${customLink.trim()}`
      : `\n\n(Dica do Guia "Eleições nas Periferias" da Agência Mural)`;

    return `${greeting} ${body}${linkAttachment}`;
  };

  const finalMessage = generateMessage();

  const handleCopy = () => {
    navigator.clipboard.writeText(finalMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(finalMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white border-3 border-black rounded-2xl p-5 sm:p-7 shadow-[5px_5px_0px_rgba(0,0,0,1)]">
      <div className="pb-4 border-b-2 border-black/20">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-6 h-6 bg-[#E63946] text-white rounded text-xs font-black flex items-center justify-center border border-black">
            10
          </span>
          <span className="text-xs font-black uppercase text-[#E63946] tracking-wider">
            Card 10 na Prática
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-black uppercase">
          Gerador de Resposta Gentil para o Grupo do Zap
        </h2>
        <p className="text-xs sm:text-sm text-gray-700 font-medium">
          "Converse com respeito, sem atacar quem enviou a mensagem. O diálogo costuma ser muito mais eficaz do que confrontos."
        </p>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Controls Column */}
        <div className="md:col-span-6 space-y-4">
          <div>
            <label className="block text-xs font-black uppercase text-black mb-1.5">
              1. Qual tipo de boato enviaram no grupo?
            </label>
            <div className="space-y-2">
              {ZAP_TEMPLATES.map((tmpl) => (
                <button
                  key={tmpl.id}
                  onClick={() => setSelectedTemplateId(tmpl.id)}
                  className={`w-full text-left p-3 rounded-xl border-2 transition-all ${
                    selectedTemplateId === tmpl.id
                      ? 'bg-[#FFE5D9] border-[#E63946] shadow-[2px_2px_0px_rgba(0,0,0,1)]'
                      : 'bg-[#FAF9F5] border-black/40 hover:border-black'
                  }`}
                >
                  <div className="font-black text-xs text-black">{tmpl.title}</div>
                  <div className="text-[11px] text-gray-700 leading-snug mt-0.5">
                    {tmpl.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-black uppercase text-black mb-1.5">
              2. Escolha o tom da resposta:
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setTone('gentil')}
                className={`py-2 px-2 text-xs font-bold rounded-lg border-2 text-center transition-all ${
                  tone === 'gentil'
                    ? 'bg-[#52B788] text-black border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]'
                    : 'bg-white text-gray-700 border-black/40 hover:border-black'
                }`}
              >
                Amigável
              </button>
              <button
                onClick={() => setTone('didatico')}
                className={`py-2 px-2 text-xs font-bold rounded-lg border-2 text-center transition-all ${
                  tone === 'didatico'
                    ? 'bg-[#52B788] text-black border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]'
                    : 'bg-white text-gray-700 border-black/40 hover:border-black'
                }`}
              >
                Com os 4 Passos
              </button>
              <button
                onClick={() => setTone('curto')}
                className={`py-2 px-2 text-xs font-bold rounded-lg border-2 text-center transition-all ${
                  tone === 'curto'
                    ? 'bg-[#52B788] text-black border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]'
                    : 'bg-white text-gray-700 border-black/40 hover:border-black'
                }`}
              >
                Direto & Curto
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-black uppercase text-black mb-1">
                Nome da pessoa (opcional):
              </label>
              <input
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                placeholder="Ex: Tio João, Dona Maria"
                className="w-full text-xs p-2 rounded-lg border-2 border-black/60 bg-[#FAF9F5] focus:outline-none focus:border-black font-medium"
              />
            </div>
            <div>
              <label className="block text-xs font-black uppercase text-black mb-1">
                Link da checagem (opcional):
              </label>
              <input
                type="text"
                value={customLink}
                onChange={(e) => setCustomLink(e.target.value)}
                placeholder="https://..."
                className="w-full text-xs p-2 rounded-lg border-2 border-black/60 bg-[#FAF9F5] focus:outline-none focus:border-black font-medium"
              />
            </div>
          </div>
        </div>

        {/* Message Preview Column */}
        <div className="md:col-span-6 flex flex-col justify-between bg-[#EFEAE2] p-4 rounded-xl border-3 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]">
          <div>
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-black/20">
              <span className="text-xs font-black uppercase text-gray-700 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                Prévia da Mensagem (Estilo Zap)
              </span>
              <span className="text-[10px] font-bold bg-[#25D366] text-black px-2 py-0.5 rounded-full border border-black">
                Pronto para enviar
              </span>
            </div>

            {/* Simulated WhatsApp Chat Bubble */}
            <div className="bg-[#DCF8C6] text-black p-3.5 rounded-xl rounded-tr-none border-2 border-black/70 shadow-sm text-xs sm:text-sm font-sans leading-relaxed whitespace-pre-line">
              {finalMessage}
              <div className="text-[10px] text-gray-500 text-right mt-1 font-mono">
                ✓✓ Agora
              </div>
            </div>

            <div className="mt-4 p-3 bg-white/80 rounded-lg border border-black/30 text-[11px] text-gray-700 leading-snug">
              💡 <strong>Regra de Ouro:</strong> Nunca chame a pessoa de "mentirosa" ou confronte com raiva. O objetivo é proteger a família e o bairro com carinho e informação.
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <button
              onClick={handleSendWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] text-black font-black text-xs uppercase rounded-lg border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-[#20bd5a] transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Abrir no WhatsApp e Escolher Contato</span>
            </button>

            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-white text-black font-bold text-xs rounded-lg border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-gray-100 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Mensagem copiada!' : 'Copiar Texto para Colar'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

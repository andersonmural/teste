import React from 'react';

interface IllustrationProps {
  type: string;
  className?: string;
}

export const GridProgressBlock: React.FC<{ currentCard?: number; totalCards?: number }> = ({
  currentCard = 1,
  totalCards = 12
}) => {
  // Grid inspired by original editorial design: 2 rows of 5 or 6 cells
  const cells = Array.from({ length: 10 }, (_, i) => {
    const isFilled = i < Math.min(10, Math.ceil((currentCard / totalCards) * 10));
    return isFilled;
  });

  return (
    <div 
      className="inline-flex flex-col border border-black/80 bg-white/90 shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-sm overflow-hidden"
      title={`Progresso: Tópico ${currentCard} de ${totalCards}`}
    >
      <div className="grid grid-cols-5 border-b border-black/60">
        {cells.slice(0, 5).map((filled, i) => (
          <div
            key={`top-${i}`}
            className={`w-3.5 h-3 border-r border-black/40 last:border-r-0 transition-colors duration-200 ${
              filled ? 'bg-[#E63946]' : 'bg-[#2A9D8F]'
            }`}
          />
        ))}
      </div>
      <div className="grid grid-cols-5">
        {cells.slice(5, 10).map((filled, i) => (
          <div
            key={`bot-${i}`}
            className={`w-3.5 h-3 border-r border-black/40 last:border-r-0 transition-colors duration-200 ${
              filled ? 'bg-[#E63946]' : 'bg-[#2A9D8F]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export const GuideIllustration: React.FC<IllustrationProps> = ({ type, className = "w-full max-w-[280px] h-auto mx-auto" }) => {
  switch (type) {
    case 'cover_urna':
      return (
        <div className={`relative flex items-center justify-center p-2 ${className}`}>
          <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
            {/* Background node network */}
            <circle cx="270" cy="50" r="10" fill="#1B4332" stroke="#000" strokeWidth="2.5" />
            <circle cx="295" cy="85" r="7" fill="#1B4332" stroke="#000" strokeWidth="2" />
            <circle cx="245" cy="80" r="8" fill="#1B4332" stroke="#000" strokeWidth="2" />
            <line x1="270" y1="50" x2="295" y2="85" stroke="#1B4332" strokeWidth="3" />
            <line x1="270" y1="50" x2="245" y2="80" stroke="#1B4332" strokeWidth="3" />

            {/* Red alert bubble with eye on top */}
            <rect x="135" y="40" width="70" height="60" rx="4" fill="#E63946" stroke="#000" strokeWidth="3" />
            <path d="M140 100 L160 120 L165 100 Z" fill="#E63946" stroke="#000" strokeWidth="2.5" />
            {/* Eye inside red bubble */}
            <path d="M145 70 C155 55, 185 55, 195 70 C185 85, 155 85, 145 70 Z" fill="#FFF" stroke="#000" strokeWidth="2.5" />
            <circle cx="170" cy="70" r="11" fill="#780000" stroke="#000" strokeWidth="2" />
            <circle cx="170" cy="70" r="5" fill="#000" />
            <path d="M162 66 L178 74" stroke="#000" strokeWidth="1.5" />
            <path d="M178 66 L162 74" stroke="#000" strokeWidth="1.5" />

            {/* Periphery house in backdrop */}
            <rect x="35" y="80" width="55" height="45" fill="#2D6A4F" stroke="#000" strokeWidth="3" />
            <path d="M30 80 L62 55 L95 80 Z" fill="#1B4332" stroke="#000" strokeWidth="3" />
            <rect x="45" y="90" width="12" height="12" fill="#D8F3DC" stroke="#000" strokeWidth="2" />
            <rect x="68" y="90" width="12" height="12" fill="#D8F3DC" stroke="#000" strokeWidth="2" />

            {/* Candidate avatar right */}
            <rect x="235" y="70" width="50" height="50" fill="#E5989B" stroke="#000" strokeWidth="2.5" />
            <path d="M235 90 C250 85, 270 85, 285 90" stroke="#000" strokeWidth="2" />
            <rect x="252" y="98" width="16" height="22" fill="#780000" stroke="#000" strokeWidth="2" />

            {/* The Electronic Ballot screen (Urna Eletrônica) on head */}
            <rect x="90" y="70" width="140" height="95" rx="6" fill="#74C69D" stroke="#000" strokeWidth="3.5" />
            {/* Urna box inside */}
            <rect x="110" y="82" width="100" height="70" rx="4" fill="#F8F9FA" stroke="#000" strokeWidth="3" />
            <rect x="120" y="92" width="40" height="45" fill="#E9ECEF" stroke="#000" strokeWidth="2" />
            <rect x="168" y="92" width="34" height="48" fill="#212529" stroke="#000" strokeWidth="2" />
            {/* Keypad dots */}
            <circle cx="175" cy="100" r="2.5" fill="#74C69D" />
            <circle cx="185" cy="100" r="2.5" fill="#74C69D" />
            <circle cx="195" cy="100" r="2.5" fill="#74C69D" />
            <circle cx="175" cy="110" r="2.5" fill="#FFF" />
            <circle cx="185" cy="110" r="2.5" fill="#FFF" />
            <circle cx="195" cy="110" r="2.5" fill="#FFF" />
            <circle cx="175" cy="120" r="2.5" fill="#FFF" />
            <circle cx="185" cy="120" r="2.5" fill="#FFF" />
            <circle cx="195" cy="120" r="2.5" fill="#FFF" />
            <rect x="172" y="128" width="8" height="6" fill="#FFF" />
            <rect x="183" y="128" width="8" height="6" fill="#E63946" />
            <rect x="194" y="128" width="8" height="6" fill="#52B788" />

            {/* Person body with red regata */}
            <path d="M120 165 C120 190, 200 190, 200 165" stroke="#000" strokeWidth="3" fill="#F4A261" />
            {/* Arms & Torso */}
            <path d="M25 240 C35 180, 110 168, 140 175 L180 175 C210 168, 285 180, 295 240 L260 270 C240 210, 220 200, 205 205 L205 290 L115 290 L115 205 C100 200, 80 210, 60 270 Z" fill="#F4A261" stroke="#000" strokeWidth="3.5" />
            {/* Red regata top */}
            <path d="M115 205 C130 220, 190 220, 205 205 L215 290 L105 290 Z" fill="#E63946" stroke="#000" strokeWidth="3" />
            {/* Chest muscle/definition line */}
            <path d="M160 225 L160 260" stroke="#780000" strokeWidth="2.5" />
          </svg>
        </div>
      );

    case 'pen_hand':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 240 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow">
            {/* Hand with green stylus/pen */}
            <path d="M230 140 C210 120, 170 125, 150 145 L130 165 C120 175, 100 180, 80 175 L50 200 C80 215, 120 210, 150 195 L220 180 Z" fill="#FFCDB2" stroke="#000" strokeWidth="3" />
            {/* Thumb & fingers */}
            <path d="M170 125 C160 115, 145 120, 140 135 L125 155" stroke="#000" strokeWidth="3" fill="#E5989B" />
            {/* The Green Pen */}
            <rect x="140" y="40" width="22" height="130" rx="4" transform="rotate(35 140 40)" fill="#52B788" stroke="#000" strokeWidth="3" />
            {/* Pen cap & tip */}
            <path d="M72 178 L55 202 L85 190 Z" fill="#000" />
            <rect x="180" y="45" width="16" height="30" rx="2" transform="rotate(35 180 45)" fill="#1B4332" stroke="#000" strokeWidth="2.5" />
            <line x1="160" y1="75" x2="148" y2="92" stroke="#FFF" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'phone_broken':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <div className="w-48 h-48 bg-[#E63946] rounded-md border-3 border-black p-3 relative shadow-[4px_4px_0px_rgba(0,0,0,1)] flex items-center justify-center">
            {/* Torn paper / broken phone card graphic */}
            <svg viewBox="0 0 160 160" className="w-full h-full" fill="none">
              {/* Profile silhouette on left */}
              <circle cx="28" cy="40" r="14" fill="#FFF" stroke="#000" strokeWidth="2.5" />
              <path d="M12 75 C12 60, 24 54, 38 56 L42 85 L12 85 Z" fill="#FFF" stroke="#000" strokeWidth="2.5" />
              {/* Phone torn in two halves */}
              <path d="M50 30 L85 30 L78 65 L88 95 L68 135 L40 135 Z" fill="#FFF" stroke="#000" strokeWidth="3" />
              <path d="M92 30 L130 30 L120 135 L75 135 L92 95 L82 65 Z" fill="#FFF" stroke="#000" strokeWidth="3" />
              {/* Hand holding it */}
              <path d="M100 45 C120 40, 145 55, 140 75 L120 85" stroke="#000" strokeWidth="3" fill="#B56576" />
              <path d="M90 70 C100 75, 115 95, 95 110" stroke="#000" strokeWidth="3" fill="#B56576" />
              {/* Flash / crack effect */}
              <path d="M80 50 L86 65 L76 80 L88 105" stroke="#E63946" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      );

    case 'periphery_houses':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 280 180" fill="none" className="w-full h-full">
            {/* Red target dot / sun */}
            <circle cx="95" cy="55" r="16" fill="#E63946" stroke="#000" strokeWidth="3" />
            <circle cx="95" cy="55" r="6" fill="#FFF" />
            {/* Green and deep green houses stacked on hill */}
            <rect x="25" y="115" width="70" height="55" fill="#40916C" stroke="#000" strokeWidth="3" />
            <path d="M20 115 L60 90 L100 115 Z" fill="#1B4332" stroke="#000" strokeWidth="3" />
            <rect x="40" y="125" width="16" height="18" fill="#95D5B2" stroke="#000" strokeWidth="2" />
            <rect x="68" y="125" width="16" height="18" fill="#95D5B2" stroke="#000" strokeWidth="2" />
            {/* Middle house */}
            <rect x="90" y="95" width="85" height="75" fill="#2D6A4F" stroke="#000" strokeWidth="3" />
            <path d="M85 95 L132 68 L180 95 Z" fill="#081C15" stroke="#000" strokeWidth="3" />
            <rect x="105" y="110" width="18" height="20" fill="#D8F3DC" stroke="#000" strokeWidth="2" />
            <rect x="140" y="110" width="18" height="20" fill="#D8F3DC" stroke="#000" strokeWidth="2" />
            {/* Third house right */}
            <rect x="170" y="80" width="75" height="90" fill="#1B4332" stroke="#000" strokeWidth="3" />
            <path d="M165 80 L208 55 L250 80 Z" fill="#2D6A4F" stroke="#000" strokeWidth="3" />
            <rect x="185" y="95" width="16" height="18" fill="#74C69D" stroke="#000" strokeWidth="2" />
            <rect x="215" y="95" width="16" height="18" fill="#74C69D" stroke="#000" strokeWidth="2" />
            <rect x="195" y="130" width="22" height="40" fill="#081C15" stroke="#000" strokeWidth="2" />
          </svg>
        </div>
      );

    case 'eye_feed':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 220 180" fill="none" className="w-full h-full">
            {/* Bold Eyebrow */}
            <path d="M40 45 C70 30, 150 30, 180 45 C150 40, 70 40, 40 45 Z" fill="#1B4332" stroke="#000" strokeWidth="3" />
            {/* Eye Outline */}
            <path d="M25 90 C60 50, 160 50, 195 90 C160 130, 60 130, 25 90 Z" fill="#FFF" stroke="#000" strokeWidth="4" />
            {/* Segmented Iris (wheel of attention/engagement) */}
            <circle cx="110" cy="90" r="36" fill="#E63946" stroke="#000" strokeWidth="3.5" />
            {/* Iris Segments */}
            <line x1="110" y1="54" x2="110" y2="126" stroke="#000" strokeWidth="2.5" />
            <line x1="74" y1="90" x2="146" y2="90" stroke="#000" strokeWidth="2.5" />
            <line x1="85" y1="65" x2="135" y2="115" stroke="#000" strokeWidth="2.5" />
            <line x1="85" y1="115" x2="135" y2="65" stroke="#000" strokeWidth="2.5" />
            {/* Alternating white slice accents */}
            <path d="M110 90 L135 65 A36 36 0 0 0 110 54 Z" fill="#FFCCD5" />
            <path d="M110 90 L146 90 A36 36 0 0 0 135 65 Z" fill="#E63946" />
            <path d="M110 90 L85 115 A36 36 0 0 0 110 126 Z" fill="#FFCCD5" />
            {/* Pupil */}
            <circle cx="110" cy="90" r="14" fill="#000" />
            <circle cx="106" cy="86" r="4" fill="#FFF" />
          </svg>
        </div>
      );

    case 'ai_face':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 240 220" fill="none" className="w-full h-full">
            {/* Green cap on top */}
            <path d="M65 85 C65 50, 115 40, 155 45 L185 85 Z" fill="#52B788" stroke="#000" strokeWidth="3" />
            <path d="M135 85 L205 85 C215 85, 220 92, 205 98 L125 98 Z" fill="#2D6A4F" stroke="#000" strokeWidth="3" />
            {/* Striped badge on cap */}
            <rect x="90" y="55" width="40" height="22" rx="3" fill="#F4A261" stroke="#000" strokeWidth="2" />
            <line x1="97" y1="60" x2="97" y2="72" stroke="#000" strokeWidth="2" />
            <line x1="104" y1="60" x2="104" y2="72" stroke="#000" strokeWidth="2" />
            <line x1="111" y1="60" x2="111" y2="72" stroke="#000" strokeWidth="2" />
            <line x1="118" y1="60" x2="118" y2="72" stroke="#000" strokeWidth="2" />
            {/* Cubist Face Fragments */}
            <path d="M50 120 L95 95 L145 115 L115 155 Z" fill="#FFAAA6" stroke="#000" strokeWidth="3" />
            <circle cx="85" cy="115" r="10" fill="#FFF" stroke="#000" strokeWidth="2.5" />
            <circle cx="85" cy="115" r="4" fill="#000" />
            {/* Computer screen with code */}
            <rect x="130" y="100" width="75" height="40" fill="#E63946" stroke="#000" strokeWidth="2.5" />
            <text x="134" y="115" fill="#FFF" fontSize="6.5" fontFamily="monospace" fontWeight="bold">var getResponse = 830</text>
            <text x="134" y="126" fill="#FFF" fontSize="6.5" fontFamily="monospace" fontWeight="bold">const loadQueue = 12</text>
            {/* Pop lips & computer user */}
            <path d="M100 160 C110 150, 130 150, 140 160 C130 172, 110 172, 100 160 Z" fill="#E63946" stroke="#000" strokeWidth="2.5" />
            <rect x="95" y="175" width="90" height="35" rx="3" fill="#E9ECEF" stroke="#000" strokeWidth="3" />
            <line x1="105" y1="185" x2="175" y2="185" stroke="#000" strokeWidth="2" />
            <line x1="105" y1="195" x2="175" y2="195" stroke="#000" strokeWidth="2" />
          </svg>
        </div>
      );

    case 'tech_gear':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 220 180" fill="none" className="w-full h-full">
            {/* Eye / Gear graphic */}
            <circle cx="110" cy="90" r="55" fill="#FFF" stroke="#000" strokeWidth="3.5" />
            {/* Spokes / Gear teeth */}
            {Array.from({ length: 12 }).map((_, i) => (
              <line
                key={i}
                x1="110"
                y1="90"
                x2={110 + 52 * Math.cos((i * Math.PI) / 6)}
                y2={90 + 52 * Math.sin((i * Math.PI) / 6)}
                stroke="#000"
                strokeWidth="2.5"
              />
            ))}
            <circle cx="110" cy="90" r="22" fill="#52B788" stroke="#000" strokeWidth="3" />
            <circle cx="110" cy="90" r="10" fill="#000" />
            {/* Heavy Red Diagonal Ban/Warning bar */}
            <rect x="35" y="80" width="150" height="20" rx="3" transform="rotate(-38 110 90)" fill="#E63946" stroke="#000" strokeWidth="3.5" />
          </svg>
        </div>
      );

    case 'ai_circuit':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 280 120" fill="none" className="w-full h-full">
            {/* Horizontal flow line with circuits and houses */}
            <path d="M15 60 L265 60" stroke="#000" strokeWidth="3" />
            {/* Nodes */}
            <circle cx="40" cy="60" r="24" fill="#74C69D" stroke="#000" strokeWidth="3" />
            <path d="M30 60 C35 50, 45 50, 50 60 C45 70, 35 70, 30 60 Z" fill="#FFF" stroke="#000" strokeWidth="2" />
            <circle cx="40" cy="60" r="4" fill="#000" />

            {/* Gear in middle */}
            <circle cx="105" cy="60" r="22" fill="#E9ECEF" stroke="#000" strokeWidth="2.5" />
            <circle cx="105" cy="60" r="8" fill="#F4A261" stroke="#000" strokeWidth="2" />

            {/* House block */}
            <rect x="145" y="40" width="40" height="35" fill="#B56576" stroke="#000" strokeWidth="2.5" />
            <path d="M140 40 L165 25 L190 40 Z" fill="#6D597A" stroke="#000" strokeWidth="2.5" />

            {/* Arrow flow to target */}
            <path d="M195 60 L245 60 L235 48 M245 60 L235 72" stroke="#E63946" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );

    case 'four_steps':
      return (
        <div className={`grid grid-cols-2 gap-3 p-3 max-w-[320px] mx-auto ${className}`}>
          <div className="bg-white p-3 rounded-lg border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center">
            <span className="w-10 h-10 rounded-full bg-[#52B788] text-black font-black flex items-center justify-center text-lg border-2 border-black mb-1">
              1
            </span>
            <span className="font-extrabold text-sm text-[#E63946]">Desconfie</span>
            <span className="text-[11px] text-gray-700 leading-tight mt-0.5">Urgente? Emocional demais?</span>
          </div>
          <div className="bg-white p-3 rounded-lg border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center">
            <span className="w-10 h-10 rounded-full bg-[#52B788] text-black font-black flex items-center justify-center text-lg border-2 border-black mb-1">
              2
            </span>
            <span className="font-extrabold text-sm text-[#E63946]">Pesquise</span>
            <span className="text-[11px] text-gray-700 leading-tight mt-0.5">Veículos & fontes oficiais</span>
          </div>
          <div className="bg-white p-3 rounded-lg border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center">
            <span className="w-10 h-10 rounded-full bg-[#52B788] text-black font-black flex items-center justify-center text-lg border-2 border-black mb-1">
              3
            </span>
            <span className="font-extrabold text-sm text-[#E63946]">Confirme</span>
            <span className="text-[11px] text-gray-700 leading-tight mt-0.5">Outros também publicaram?</span>
          </div>
          <div className="bg-white p-3 rounded-lg border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center">
            <span className="w-10 h-10 rounded-full bg-[#52B788] text-black font-black flex items-center justify-center text-lg border-2 border-black mb-1">
              4
            </span>
            <span className="font-extrabold text-sm text-[#E63946]">Compartilhe</span>
            <span className="text-[11px] text-gray-700 leading-tight mt-0.5">Com fonte e responsabilidade</span>
          </div>
        </div>
      );

    case 'check_neighborhood':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 240 200" fill="none" className="w-full h-full">
            {/* Hand pointing to houses */}
            <path d="M210 20 L165 95 L145 110 L130 90 L160 30 Z" fill="#FFAAA6" stroke="#000" strokeWidth="3" />
            {/* Green Pen pointing */}
            <rect x="160" y="25" width="18" height="110" rx="3" transform="rotate(-30 160 25)" fill="#52B788" stroke="#000" strokeWidth="3" />
            <polygon points="120,135 110,150 135,145" fill="#000" />
            {/* Community Houses */}
            <rect x="25" y="110" width="60" height="50" fill="#2D6A4F" stroke="#000" strokeWidth="3" />
            <polygon points="20,110 55,85 90,110" fill="#1B4332" stroke="#000" strokeWidth="3" />
            <rect x="40" y="125" width="15" height="15" fill="#D8F3DC" stroke="#000" strokeWidth="2" />
            {/* Light pole */}
            <line x1="105" y1="80" x2="105" y2="160" stroke="#000" strokeWidth="3" />
            <ellipse cx="105" cy="78" rx="8" ry="4" fill="#F4A261" stroke="#000" strokeWidth="2" />
          </svg>
        </div>
      );

    case 'watermark_eyes':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <div className="relative w-48 h-36 bg-[#D8F3DC] rounded-xl border-3 border-black p-3 flex flex-col items-center justify-center shadow-[3px_3px_0px_rgba(0,0,0,1)]">
            <svg viewBox="0 0 120 70" className="w-28 h-16" fill="none">
              <path d="M10 35 C30 15, 90 15, 110 35 C90 55, 30 55, 10 35 Z" fill="#FFF" stroke="#000" strokeWidth="3" />
              <circle cx="60" cy="35" r="16" fill="#E63946" stroke="#000" strokeWidth="2.5" />
              <circle cx="60" cy="35" r="6" fill="#000" />
            </svg>
            <span className="text-xs font-black uppercase tracking-wider text-[#1B4332] mt-1 bg-white/80 px-2 py-0.5 rounded border border-black">
              Território sob Alerta
            </span>
          </div>
        </div>
      );

    case 'dialogue_mouth':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 240 180" fill="none" className="w-full h-full">
            {/* Pop Art Talking Mouth */}
            <path d="M45 90 C70 50, 170 50, 195 90 C165 140, 75 140, 45 90 Z" fill="#E63946" stroke="#000" strokeWidth="4" />
            <path d="M60 90 C85 80, 155 80, 180 90 C155 105, 85 105, 60 90 Z" fill="#FFF" stroke="#000" strokeWidth="3" />
            <line x1="50" y1="90" x2="190" y2="90" stroke="#000" strokeWidth="3" />
            {/* Two messenger birds (talking and listening) */}
            <g transform="translate(15, 15) scale(0.7)">
              <rect x="0" y="0" width="45" height="45" fill="#E5989B" stroke="#000" strokeWidth="3" />
              <path d="M10 35 C15 20, 30 20, 35 35" stroke="#000" strokeWidth="2.5" fill="#FFF" />
              <circle cx="28" cy="24" r="3" fill="#000" />
              <polygon points="35,24 45,22 37,28" fill="#F4A261" stroke="#000" strokeWidth="2" />
            </g>
            <g transform="translate(180, 85) scale(0.7)">
              <rect x="0" y="0" width="45" height="45" fill="#B56576" stroke="#000" strokeWidth="3" />
              <path d="M10 35 C15 20, 30 20, 35 35" stroke="#000" strokeWidth="2.5" fill="#FFF" />
              <circle cx="28" cy="24" r="3" fill="#000" />
              <polygon points="35,24 45,22 37,28" fill="#F4A261" stroke="#000" strokeWidth="2" />
            </g>
          </svg>
        </div>
      );

    case 'cyber_eye':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 200 160" fill="none" className="w-full h-full">
            <path d="M30 80 C60 40, 140 40, 170 80 C140 120, 60 120, 30 80 Z" fill="#FFF" stroke="#000" strokeWidth="3.5" />
            <circle cx="100" cy="80" r="28" fill="#E63946" stroke="#000" strokeWidth="3" />
            <circle cx="100" cy="80" r="12" fill="#000" />
            <path d="M85 70 L115 90 M115 70 L85 90" stroke="#FFF" strokeWidth="2" />
            {/* Tech scanner lines */}
            <path d="M20 50 L50 20 L150 20 L180 50" stroke="#1B4332" strokeWidth="3" strokeDasharray="6 4" />
            <path d="M20 110 L50 140 L150 140 L180 110" stroke="#1B4332" strokeWidth="3" strokeDasharray="6 4" />
          </svg>
        </div>
      );

    case 'screen_watching':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 220 180" fill="none" className="w-full h-full">
            {/* Monitor */}
            <rect x="30" y="30" width="160" height="95" rx="6" fill="#F8F9FA" stroke="#000" strokeWidth="3.5" />
            <line x1="110" y1="125" x2="110" y2="150" stroke="#000" strokeWidth="4" />
            <line x1="75" y1="150" x2="145" y2="150" stroke="#000" strokeWidth="4" strokeLinecap="round" />
            {/* Eye on screen */}
            <path d="M60 75 C80 55, 140 55, 160 75 C140 95, 80 95, 60 75 Z" fill="#E63946" stroke="#000" strokeWidth="2.5" />
            <circle cx="110" cy="75" r="10" fill="#FFF" stroke="#000" strokeWidth="2" />
            <circle cx="110" cy="75" r="4" fill="#000" />
            {/* Person watching with cap in corner */}
            <path d="M140 170 C140 140, 160 135, 185 135 L215 170 Z" fill="#1B4332" stroke="#000" strokeWidth="3" />
            <path d="M165 130 C170 115, 195 115, 205 130 Z" fill="#E63946" stroke="#000" strokeWidth="2.5" />
            <path d="M195 125 L218 128" stroke="#000" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'green_cap':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 200 140" fill="none" className="w-full h-full">
            {/* Green Cap */}
            <path d="M45 80 C45 35, 120 25, 160 35 L175 80 Z" fill="#52B788" stroke="#000" strokeWidth="3.5" />
            {/* Visor */}
            <path d="M140 80 L195 80 C205 80, 205 88, 190 94 L115 94 Z" fill="#2D6A4F" stroke="#000" strokeWidth="3" />
            {/* Patch with stripes */}
            <rect x="75" y="45" width="45" height="26" rx="3" fill="#F4A261" stroke="#000" strokeWidth="2.5" />
            <line x1="84" y1="50" x2="84" y2="65" stroke="#000" strokeWidth="2.5" />
            <line x1="92" y1="50" x2="92" y2="65" stroke="#000" strokeWidth="2.5" />
            <line x1="100" y1="50" x2="100" y2="65" stroke="#000" strokeWidth="2.5" />
            <line x1="108" y1="50" x2="108" y2="65" stroke="#000" strokeWidth="2.5" />
          </svg>
        </div>
      );

    case 'mural_support':
      return (
        <div className={`relative flex flex-col items-center justify-center text-center ${className}`}>
          <div className="flex items-center gap-2 mb-2">
            {/* Mural Star Logo */}
            <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
              <circle cx="10" cy="20" r="5" fill="#FFF" stroke="#000" strokeWidth="2" />
              <circle cx="28" cy="8" r="4" fill="#FFF" stroke="#000" strokeWidth="2" />
              <circle cx="32" cy="28" r="5" fill="#FFF" stroke="#000" strokeWidth="2" />
              <line x1="10" y1="20" x2="28" y2="8" stroke="#FFF" strokeWidth="3" />
              <line x1="10" y1="20" x2="32" y2="28" stroke="#FFF" strokeWidth="3" />
              <line x1="28" y1="8" x2="32" y2="28" stroke="#FFF" strokeWidth="3" />
            </svg>
            <span className="text-3xl font-black tracking-tight text-white font-sans">
              MURAL
            </span>
          </div>
          <span className="text-xs uppercase tracking-widest text-white/90 font-bold">
            Agência de Jornalismo das Periferias
          </span>
        </div>
      );

    default:
      return null;
  }
};

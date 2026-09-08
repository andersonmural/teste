export interface SlideItem {
  id: number;
  pageNumber: number;
  type: 'cover' | 'intro' | 'card' | 'steps' | 'checklist' | 'credits' | 'support';
  cardNumber?: number; // 1 to 12
  title: string;
  subtitle?: string;
  badge?: string;
  content: string[];
  highlight?: string;
  bulletPoints?: string[];
  illustrationType: 
    | 'cover_urna'
    | 'pen_hand'
    | 'phone_broken'
    | 'periphery_houses'
    | 'eye_feed'
    | 'ai_face'
    | 'tech_gear'
    | 'ai_circuit'
    | 'four_steps'
    | 'check_neighborhood'
    | 'watermark_eyes'
    | 'dialogue_mouth'
    | 'cyber_eye'
    | 'screen_watching'
    | 'green_cap'
    | 'mural_support';
  themeColor: 'mint' | 'red' | 'cream';
  audioNarrationText: string;
}

export interface QuizQuestion {
  id: number;
  title: string;
  scenario: string;
  tag: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
}

export interface ZapMessageTemplate {
  id: string;
  title: string;
  category: string;
  description: string;
  templateText: string;
}

export interface FactCheckSource {
  name: string;
  description: string;
  category: 'hiperlocal' | 'checagem' | 'oficial';
  url: string;
  badge: string;
}

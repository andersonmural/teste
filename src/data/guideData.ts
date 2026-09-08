import { SlideItem, QuizQuestion, ZapMessageTemplate, FactCheckSource } from '../types';

export const GUIDE_SLIDES: SlideItem[] = [
  {
    id: 1,
    pageNumber: 1,
    type: 'cover',
    title: 'ELEIÇÕES NAS PERIFERIAS',
    subtitle: 'Como identificar, verificar e não espalhar desinformação em tempos de IA',
    badge: 'Agência Mural de Jornalismo das Periferias',
    content: [
      'Um guia prático e essencial para navegar nas eleições com senso crítico, protegendo sua comunidade e seu voto contra boatos, deepfakes e mentiras digitais.'
    ],
    illustrationType: 'cover_urna',
    themeColor: 'mint',
    audioNarrationText: 'Eleições nas Periferias: Como identificar, verificar e não espalhar desinformação em tempos de Inteligência Artificial. Um guia da Agência Mural de Jornalismo das Periferias.'
  },
  {
    id: 2,
    pageNumber: 2,
    type: 'intro',
    title: 'O QUE VOCÊ PRECISA SABER ANTES DE COMPARTILHAR',
    badge: 'Contexto Eleitoral',
    content: [
      'Da mensagem recebida no WhatsApp aos vídeos manipulados nas redes sociais, as eleições de 2026 podem ser influenciadas por ferramentas de Inteligência Artificial.',
      'Em ano eleitoral, grupos de família, comunidades e redes sociais circulam dúvidas, denúncias, pesquisas, vídeos, áudios e informações sobre candidatos.',
      'Parte desse conteúdo pode ser verdadeira, outra parte pode estar fora de contexto, manipulada ou ser completamente falsa.',
      'Nas periferias, a atenção precisa ser redobrada. Informações falsas podem não apenas influenciar o voto, mas também reforçar estigmas sobre territórios e moradores. Nesse cenário, como saber no que confiar?'
    ],
    highlight: 'Pensando nisso, a Agência Mural criou um guia sobre tudo que você precisa saber antes de compartilhar uma informação.',
    illustrationType: 'pen_hand',
    themeColor: 'red',
    audioNarrationText: 'Da mensagem recebida no WhatsApp aos vídeos manipulados nas redes sociais, as eleições de 2026 podem ser influenciadas por inteligência artificial. Nas periferias, a atenção precisa ser redobrada para não reforçar estigmas sobre territórios e moradores.'
  },
  {
    id: 3,
    pageNumber: 3,
    type: 'card',
    cardNumber: 1,
    title: 'ANTES DE COMPARTILHAR: PARE, LEIA E DESCONFIE',
    badge: 'Card 01 de 12',
    content: [
      'Mensagens com palavras como "urgente", "compartilhe agora" ou "é verdade, estão escondendo isso" merecem atenção redobrada.',
      'Esse senso de urgência é uma estratégia comum da desinformação para provocar medo, ansiedade ou indignação e fazer com que as pessoas compartilhem o conteúdo sem verificar.'
    ],
    highlight: 'Ao receber um texto, vídeo ou áudio desse tipo, faça uma pausa.',
    bulletPoints: [
      'Pesquise a informação em buscadores antes de repassar.',
      'Procure se ela foi publicada por veículos jornalísticos confiáveis antes de acreditar ou encaminhar.'
    ],
    illustrationType: 'phone_broken',
    themeColor: 'cream',
    audioNarrationText: 'Card 1: Antes de compartilhar, pare, leia e desconfie. Mensagens com palavras como urgente ou compartilhe agora merecem atenção redobrada. Ao receber esse tipo de conteúdo, faça uma pausa e pesquise antes de encaminhar.'
  },
  {
    id: 4,
    pageNumber: 4,
    type: 'card',
    cardNumber: 2,
    title: 'DESINFORMAÇÃO TAMBÉM TEM ENDEREÇO: COMO AS PERIFERIAS SÃO RETRATADAS',
    badge: 'Card 02 de 12',
    content: [
      'Conteúdos falsos frequentemente reforçam estereótipos sobre as periferias.',
      'Um exemplo recorrente são vídeos que mostram pessoas armadas em comunidades e circulam nas redes como se retratassem situações reais de violência.',
      'Na prática, muitas dessas imagens são retiradas de bastidores de filmes, séries ou videoclipes e publicadas fora de contexto.'
    ],
    highlight: 'Antes de compartilhar conteúdos sobre um bairro ou comunidade, vale a pena verificar a origem das imagens.',
    bulletPoints: [
      'Desconfie de narrativas que reforçam preconceitos sem apresentar contexto ou comprovação.',
      'Lembre-se de que a desinformação afeta a dignidade dos bairros e de seus moradores.'
    ],
    illustrationType: 'periphery_houses',
    themeColor: 'cream',
    audioNarrationText: 'Card 2: Desinformação também tem endereço. Vídeos de armas ou violência frequentemente são cenas de bastidores de séries ou clipes tiradas de contexto para reforçar preconceitos sobre as periferias.'
  },
  {
    id: 5,
    pageNumber: 5,
    type: 'card',
    cardNumber: 3,
    title: 'SEU FEED NÃO É SINÔNIMO DE VERDADE',
    badge: 'Card 03 de 12',
    content: [
      'As redes sociais não organizam o conteúdo com base na sua veracidade, mas sim no potencial de gerar engajamento.',
      'Uma forma de equilibrar o que aparece no seu feed é seguir veículos jornalísticos, projetos de checagem de fatos e organizações reconhecidas pela produção de informação confiável.',
      'Assim, você amplia o acesso a conteúdos verificados e reduz o impacto da desinformação.'
    ],
    highlight: 'Publicações que despertam medo, surpresa ou indignação costumam receber mais comentários e compartilhamentos e, por isso, aparecem para mais pessoas.',
    bulletPoints: [
      'Algoritmos priorizam a reação emocional sobre a verdade.',
      'Siga ativamente veículos jornalísticos locais e checadores profissionais.'
    ],
    illustrationType: 'eye_feed',
    themeColor: 'mint',
    audioNarrationText: 'Card 3: Seu feed não é sinônimo de verdade. Redes sociais organizam conteúdo pelo engajamento e emoção, não pela veracidade. Siga veículos de checagem para equilibrar o que você recebe.'
  },
  {
    id: 6,
    pageNumber: 6,
    type: 'card',
    cardNumber: 4,
    title: 'É VÍDEO REAL OU FOI CRIADO POR IA?',
    badge: 'Card 04 de 12',
    content: [
      'A inteligência artificial pode ser uma ferramenta útil para criar conteúdos, mas seu uso se torna problemático quando produz materiais que enganam ou simulam acontecimentos reais.',
      'Vídeos, áudios e imagens gerados por IA podem ser utilizados para criar falsas declarações, alterar falas de candidatos ou fabricar situações que nunca aconteceram.'
    ],
    highlight: 'Por isso, antes de acreditar em um conteúdo impactante, procure confirmar sua autenticidade em fontes confiáveis.',
    bulletPoints: [
      'Preste atenção em movimentos estranhos de lábios e voz robótica.',
      'Verifique se a fala bombástica foi noticiada na imprensa profissional.'
    ],
    illustrationType: 'ai_face',
    themeColor: 'cream',
    audioNarrationText: 'Card 4: É vídeo real ou foi criado por inteligência artificial? Imagens e áudios gerados por IA podem simular falsas falas de candidatos. Confirme a autenticidade antes de acreditar.'
  },
  {
    id: 7,
    pageNumber: 7,
    type: 'card',
    cardNumber: 5,
    title: 'IA: FERRAMENTA OU DESINFORMAÇÃO?',
    badge: 'Card 05 de 12',
    content: [
      'A inteligência artificial pode facilitar diversas tarefas, mas não substitui a apuração jornalística.',
      'Ferramentas de IA podem reproduzir informações incorretas porque utilizam diferentes bases de dados, que nem sempre são confiáveis ou atualizadas.',
      'Usar IA para organizar informações pode ser útil, mas ela não deve ser considerada uma fonte definitiva para confirmar fatos.'
    ],
    highlight: 'Sempre complemente a busca consultando veículos de imprensa, órgãos oficiais e serviços especializados em checagem.',
    illustrationType: 'tech_gear',
    themeColor: 'mint',
    audioNarrationText: 'Card 5: IA, ferramenta ou desinformação? A inteligência artificial organiza tarefas, mas não substitui a apuração jornalística e pode reproduzir dados incorretos.'
  },
  {
    id: 8,
    pageNumber: 8,
    type: 'card',
    cardNumber: 6,
    title: 'CHATGPT, GEMINI E OUTRAS IAS TAMBÉM PODEM ERRAR',
    badge: 'Card 06 de 12',
    content: [
      'Ferramentas como ChatGPT, Gemini e outros assistentes virtuais podem fornecer respostas convincentes, mas isso não significa que estejam sempre corretas.',
      'Esses sistemas geram respostas a partir de grandes volumes de informações disponíveis na internet, incluindo conteúdos que podem estar desatualizados, incompletos ou incorretos.'
    ],
    highlight: 'Por isso, especialmente em temas como eleições, saúde ou políticas públicas, nunca confie apenas na resposta da IA. Sempre confirme as informações em fontes confiáveis.',
    illustrationType: 'ai_circuit',
    themeColor: 'cream',
    audioNarrationText: 'Card 6: ChatGPT, Gemini e outras IAs também podem errar. Elas fornecem respostas convincentes, mas podem alucinar dados em saúde, eleições e políticas públicas. Sempre confirme com dados oficiais.'
  },
  {
    id: 9,
    pageNumber: 9,
    type: 'steps',
    cardNumber: 7,
    title: 'O GUIA DOS 4 PASSOS ANTES DE ENCAMINHAR',
    badge: 'Card 07 de 12 • Método Prático',
    content: [
      'Antes de apertar o botão de encaminhar no WhatsApp ou redes sociais, siga este protocolo simples de proteção comunitária:'
    ],
    bulletPoints: [
      '1. Desconfie: Pergunte: essa mensagem parece exagerada, urgente ou emocional demais?',
      '2. Pesquise: Procure a informação em veículos jornalísticos e fontes oficiais.',
      '3. Confirme: Verifique se outros veículos confiáveis também publicaram o conteúdo.',
      '4. Compartilhe com responsabilidade: Se a informação for verdadeira, prefira enviá-la acompanhada da fonte utilizada para a verificação.'
    ],
    illustrationType: 'four_steps',
    themeColor: 'mint',
    audioNarrationText: 'Card 7: O guia dos 4 passos antes de encaminhar: 1, desconfie da urgência e do exagero; 2, pesquise em veículos de confiança; 3, confirme se outros veículos também publicaram; 4, compartilhe com responsabilidade incluindo o link da fonte.'
  },
  {
    id: 10,
    pageNumber: 10,
    type: 'card',
    cardNumber: 8,
    title: 'COMO CHECAR UMA NOTÍCIA SOBRE O SEU BAIRRO',
    badge: 'Card 08 de 12 • Foco Hiperlocal',
    content: [
      'Quando a informação envolve seu bairro ou comunidade, procure verificar se ela já foi publicada por canais de proximidade.'
    ],
    bulletPoints: [
      'Veículos jornalísticos locais e coletivos de comunicação comunitária;',
      'Jornalistas que acompanham diariamente a região;',
      'Órgãos públicos municipais e perfis oficiais;',
      'Comunicados de instituições responsáveis pelo tema (como postos de saúde, escolas e transporte).'
    ],
    highlight: 'As notícias hiperlocais costumam ser melhor verificadas por quem acompanha diariamente aquele território.',
    illustrationType: 'check_neighborhood',
    themeColor: 'cream',
    audioNarrationText: 'Card 8: Como checar uma notícia sobre o seu bairro. Procure veículos jornalísticos locais, repórteres comunitários e canais oficiais da sua região para checar assuntos de proximidade.'
  },
  {
    id: 11,
    pageNumber: 11,
    type: 'card',
    cardNumber: 9,
    title: 'QUANDO A DESINFORMAÇÃO CHEGA À PERIFERIA',
    badge: 'Card 09 de 12',
    content: [
      'A desinformação costuma explorar temas que afetam diretamente o cotidiano das pessoas.',
      'Durante períodos eleitorais, é comum que circulem mensagens sobre obras públicas, transporte, saúde, segurança, educação ou supostos benefícios destinados a determinados bairros.',
      'Muitas dessas publicações utilizam informações fora de contexto, números distorcidos ou imagens antigas para parecerem verdadeiras.'
    ],
    highlight: 'Quando uma notícia envolve o seu território, o mais importante é não compartilhar imediatamente.',
    bulletPoints: [
      'Verifique se foi publicada por veículos de jornalismo local, como a Agência Mural, ou órgãos competentes.',
      'Quanto mais próxima a informação estiver da realidade da comunidade, maior deve ser o cuidado.'
    ],
    illustrationType: 'watermark_eyes',
    themeColor: 'mint',
    audioNarrationText: 'Card 9: Quando a desinformação chega à periferia. Boatos sobre transporte, obras, saúde e benefícios afetam diretamente a vida real. Não repasse sem checar no jornalismo local.'
  },
  {
    id: 12,
    pageNumber: 12,
    type: 'card',
    cardNumber: 10,
    title: 'SEJA A PESSOA QUE CHECA NO GRUPO',
    badge: 'Card 10 de 12 • Prática Comunitária',
    content: [
      'Combater a desinformação é um exercício diário. Sempre que receber uma informação duvidosa em grupos de WhatsApp ou redes sociais:'
    ],
    bulletPoints: [
      'Pesquise antes de responder;',
      'Verifique se a informação já foi checada por veículos confiáveis;',
      'Compartilhe o link da verificação;',
      'Converse com respeito, sem atacar quem enviou a mensagem.'
    ],
    highlight: 'O diálogo costuma ser muito mais eficaz do que confrontos ou acusações. Muitas vezes, basta apresentar uma fonte confiável para impedir que uma informação falsa continue circulando.',
    illustrationType: 'dialogue_mouth',
    themeColor: 'cream',
    audioNarrationText: 'Card 10: Seja a pessoa que checa no grupo. Converse com respeito, sem atacar ninguém. Envie o link da checagem com educação. O diálogo é a ferramenta mais eficaz.'
  },
  {
    id: 13,
    pageNumber: 13,
    type: 'card',
    cardNumber: 11,
    title: 'PRINCIPAIS DESAFIOS RELACIONADOS ÀS IA\'S NAS ELEIÇÕES DE 2026',
    badge: 'Card 11 de 12 • Eleições 2026',
    content: [
      'A expectativa é que a inteligência artificial seja utilizada para produzir conteúdos cada vez mais convincentes, como deepfakes, áudios falsos, imagens manipuladas e vídeos alterados.',
      'Esses materiais podem ser produzidos não apenas por campanhas oficiais, mas também por apoiadores ou pessoas interessadas em influenciar o debate público.',
      'Outro desafio importante será a circulação de informações falsas sobre números e resultados de governos, como quantidade de escolas, hospitais, creches, obras ou investimentos realizados.'
    ],
    highlight: 'Essas afirmações podem e devem ser verificadas em dados oficiais e portais de transparência.',
    illustrationType: 'cyber_eye',
    themeColor: 'mint',
    audioNarrationText: 'Card 11: Principais desafios de IA nas eleições de 2026. Deepfakes, áudios clonados e números inflados sobre creches e hospitais exigirão verificação cuidadosa em dados oficiais.'
  },
  {
    id: 14,
    pageNumber: 14,
    type: 'card',
    cardNumber: 12,
    title: 'QUAIS MENTIRAS COSTUMAM CIRCULAR MAIS EM ÉPOCA DE ELEIÇÃO',
    badge: 'Card 12 de 12 • Radar de Boatos',
    content: [
      'Durante os períodos eleitorais, são comuns conteúdos que exageram ou distorcem realizações de candidatos e governos. Entre os exemplos estão:'
    ],
    bulletPoints: [
      'Números falsos sobre obras públicas, hospitais, escolas e creches;',
      'Informações distorcidas sobre investimentos em bairros e cidades;',
      'Acusações sem comprovação contra adversários políticos;',
      'Conteúdos fora de contexto que reaproveitam fotos, vídeos ou declarações antigas;',
      'Imagens, vídeos e áudios manipulados por inteligência artificial.'
    ],
    highlight: 'Sempre que encontrar esse tipo de informação, procure confirmar os dados em fontes oficiais e em veículos especializados em checagem de fatos.',
    illustrationType: 'screen_watching',
    themeColor: 'cream',
    audioNarrationText: 'Card 12: Quais mentiras costumam circular mais em época de eleição. Desconfie de números mirabolantes sobre obras e escolas, acusações sem provas e vídeos antigos tirados de contexto.'
  },
  {
    id: 15,
    pageNumber: 15,
    type: 'credits',
    title: 'EXPEDIENTE & CRÉDITOS DO GUIA',
    badge: 'Projeto & Realização',
    content: [
      'Este guia foi desenvolvido no âmbito do projeto Google Lab Novas Vozes da Notícia, com base em uma entrevista com Evelyn Fagundes, jornalista da Agência Lupa e correspondente da Mural em Guarulhos.',
      'O Google Gemini foi utilizado no apoio à transcrição do áudio e na revisão da primeira versão do texto.'
    ],
    bulletPoints: [
      'Texto: Brenda Machado e Simony Maia',
      'Edição: Sarah Fernandes',
      'Design Gráfico: Janaína Oliveira',
      'Ilustrações: Magno Borges',
      'Desenvolvimento da página: Paulo Talarico e Amanda Gedra'
    ],
    illustrationType: 'green_cap',
    themeColor: 'mint',
    audioNarrationText: 'Expediente: Este guia foi desenvolvido pelo projeto Google Lab Novas Vozes da Notícia, com base em entrevista com Evelyn Fagundes. Texto de Brenda Machado e Simony Maia, edição de Sarah Fernandes, design de Janaína Oliveira, ilustrações de Magno Borges e desenvolvimento de Paulo Talarico e Amanda Gedra.'
  },
  {
    id: 16,
    pageNumber: 16,
    type: 'support',
    title: 'APOIE O JORNALISMO DAS PERIFERIAS',
    subtitle: 'Ajude a manter a informação de qualidade e a checagem independente nas quebradas.',
    badge: 'Agência Mural',
    content: [
      'A Agência Mural de Jornalismo das Periferias produz informação local, independente e de qualidade para quem vive nas quebradas de São Paulo e da Região Metropolitana.',
      'Seu apoio garante que mais guias, reportagens e investigações cheguem a quem mais precisa.'
    ],
    highlight: 'Apoie a Mural: agenciamural.org.br/apoie',
    illustrationType: 'mural_support',
    themeColor: 'red',
    audioNarrationText: 'Apoie a Agência Mural de Jornalismo das Periferias em agenciamural ponto org ponto br barra apoie. Apoio ICCI.'
  }
];

export const ZAP_TEMPLATES: ZapMessageTemplate[] = [
  {
    id: 'ai_deepfake',
    title: 'Vídeo ou Áudio suspeito de Inteligência Artificial',
    category: 'IA e Manipulação',
    description: 'Para quando alguém manda um vídeo ou áudio sensacionalista de um candidato que parece manipulado.',
    templateText: `Oi gente! Vi esse vídeo/áudio aqui e fui dar uma pesquisada. Pelos detalhes da fala e porque não saiu em nenhum jornal confiável, tudo indica que foi manipulado com Inteligência Artificial. Hoje em dia é muito fácil clonar voz e fabricar vídeo falso em época de eleição. Vale a pena a gente não repassar para não levar ninguém a erro!`
  },
  {
    id: 'bairro_obra',
    title: 'Boato sobre obra, creche ou hospital no bairro',
    category: 'Território & Bairro',
    description: 'Para mensagens sobre cancelamento de linhas de ônibus, fechamento de posto ou obra milagrosa.',
    templateText: `Oi pessoal! Como moramos aqui na região, fiquei preocupado(a) e fui checar se isso era verdade no canal da prefeitura / jornal local. Não tem nenhum aviso oficial nem matéria confirmando essa informação. Antes de repassar e assustar nossos vizinhos, é bom aguardar a confirmação oficial ou conferir com a Agência Mural!`
  },
  {
    id: 'urgente_alarme',
    title: 'Mensagem alarmista ("URGENTE", "COMPARTILHE JÁ")',
    category: 'Mensagens Alarmistas',
    description: 'Para correntes com textos em caixa alta que exigem compartilhamento imediato.',
    templateText: `Oi família/grupo! Quando a mensagem já começa com "URGENTE! COMPARTILHE ANTES QUE APAGUEM", geralmente é uma tática de desinformação para fazer a gente agir pela emoção sem pensar. Dei uma busca no Google e nenhuma agência de notícias confirmou. Vamos segurar o dedo e não encaminhar!`
  },
  {
    id: 'acusacao_politica',
    title: 'Acusação sem provas contra candidato',
    category: 'Eleições 2026',
    description: 'Para denúncias anônimas ou prints de supostos escândalos sem comprovação.',
    templateText: `Gente, dei uma olhada nessa acusação nas agências de checagem (como Lupa, Aos Fatos e Fato ou Boato do TSE). Até agora não há nenhuma comprovação ou processo real sobre isso. Como estamos em ano eleitoral, rola muito boato inventado por campanhas adversárias. Melhor não espalhar sem checagem oficial!`
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    title: 'Cena de violência nas redes',
    tag: 'Estereótipo de Quebrada',
    scenario: 'Você recebe no grupo da rua um vídeo de pessoas armadas em uma viela com a legenda: "Olha a guerra que estourou agora à tarde no nosso bairro!".',
    options: [
      {
        id: 'a',
        text: 'Encaminho imediatamente no grupo da família para alertar todo mundo a não sair de casa.',
        isCorrect: false,
        explanation: 'Incorreto. Muitas vezes vídeos assim são gravações de clipes, bastidores de filmes ou séries gravados na periferia e tirados de contexto, gerando pânico desnecessário.'
      },
      {
        id: 'b',
        text: 'Faço uma pausa, desconfio da falta de data/horário e procuro saber se a imprensa local ou moradores próximos realmente registraram a ocorrência.',
        isCorrect: true,
        explanation: 'Correto! Conforme o Card 2 do guia, vídeos de violência frequentemente usam cenas de bastidores de produções culturais fora de contexto para reforçar estigmas sobre as periferias.'
      },
      {
        id: 'c',
        text: 'Posto nos meus Stories marcando a polícia militar sem verificar.',
        isCorrect: false,
        explanation: 'Incorreto. Propagar imagens não verificadas amplifica preconceitos territoriais e espalha pânico infundado.'
      }
    ]
  },
  {
    id: 2,
    title: 'Áudio bombástico no WhatsApp',
    tag: 'Tática da Urgência',
    scenario: 'Chega um áudio de voz robotizada: "Atenção moradores da Zona Leste: amanhã todos os ônibus vão parar e as creches serão fechadas por ordem do prefeito! Repassem urgente!".',
    options: [
      {
        id: 'a',
        text: 'Reconheço o gatilho de "urgência" e a falta de assinatura. Busco nos canais oficiais de transporte e veículos locais como a Agência Mural antes de repassar.',
        isCorrect: true,
        explanation: 'Correto! Mensagens que exploram serviços essenciais (ônibus, creches, saúde) buscam gerar medo e indignação rápida. A regra do Card 1 e 9 é: pare, leia e desconfie.'
      },
      {
        id: 'b',
        text: 'Encaminho para todas as mães que conheço só para garantir.',
        isCorrect: false,
        explanation: 'Incorreto. Repassar "por via das dúvidas" é o principal motor da desinformação nas periferias.'
      },
      {
        id: 'c',
        text: 'Acredito de primeira porque "ninguém ia inventar algo tão específico".',
        isCorrect: false,
        explanation: 'Incorreto. A desinformação eleitoral ataca exatamente o cotidiano das pessoas com detalhes falsos para parecer verossímil.'
      }
    ]
  },
  {
    id: 3,
    title: 'Resposta convincente de Inteligência Artificial',
    tag: 'IA e Alucinação',
    scenario: 'Um amigo pergunta no grupo quem construiu o hospital regional e alguém responde colando um texto do ChatGPT como "prova definitiva".',
    options: [
      {
        id: 'a',
        text: 'Aceito como fato comprovado porque ferramentas de IA nunca erram datas históricas.',
        isCorrect: false,
        explanation: 'Incorreto. O Card 6 alerta: assistentes de IA podem alucinar e gerar respostas com tom convincente, mas com dados completamente errados ou desatualizados.'
      },
      {
        id: 'b',
        text: 'Lembro que a IA é útil para organizar tarefas, mas não substitui apuração jornalística nem dados de portais de transparência oficiais.',
        isCorrect: true,
        explanation: 'Correto! Conforme os Cards 5 e 6, assistentes como ChatGPT e Gemini usam bases que podem conter erros e jamais devem ser tomados como fontes definitivas em eleições e políticas públicas.'
      },
      {
        id: 'c',
        text: 'Afirmo que toda IA foi feita exclusivamente para espalhar mentiras.',
        isCorrect: false,
        explanation: 'Incorreto. A IA é uma ferramenta produtiva, o problema é seu uso como autoridade cega sem checagem jornalística.'
      }
    ]
  },
  {
    id: 4,
    title: 'Como interagir no grupo da família',
    tag: 'Diálogo Comunitário',
    scenario: 'Um parente idoso compartilhou no grupo da família um post falso atacando um candidato com números adulterados.',
    options: [
      {
        id: 'a',
        text: 'Chamo a pessoa de ignorante e exijo que saia do grupo imediatamente.',
        isCorrect: false,
        explanation: 'Incorreto. Confrontos e ataques geram resistência e aumentam a polarização.'
      },
      {
        id: 'b',
        text: 'Pesquiso a checagem em uma agência confiável e respondo de forma educada e afetuosa, enviando o link e explicando com calma.',
        isCorrect: true,
        explanation: 'Excelente! O Card 10 ensina: seja a pessoa que checa no grupo. O diálogo respeitoso costuma ser muito mais eficaz para interromper o ciclo da mentira.'
      },
      {
        id: 'c',
        text: 'Não falo nada e deixo que os outros acreditem.',
        isCorrect: false,
        explanation: 'Incorreto. O silêncio permite que boatos perigosos continuem circulando livremente.'
      }
    ]
  }
];

export const TRUSTED_SOURCES: FactCheckSource[] = [
  {
    name: 'Agência Mural de Jornalismo das Periferias',
    description: 'Primeira agência de notícias e checagem focada nas periferias da Grande São Paulo.',
    category: 'hiperlocal',
    url: 'https://agenciamural.org.br',
    badge: 'Jornalismo Hiperlocal'
  },
  {
    name: 'Agência Lupa',
    description: 'Primeira agência de fact-checking do Brasil, referência em checagem eleitoral e verificação de desinformação.',
    category: 'checagem',
    url: 'https://lupa.uol.com.br',
    badge: 'Fact-checking'
  },
  {
    name: 'Aos Fatos',
    description: 'Agência de jornalismo investigativo e checagem de fatos com ferramentas especializadas de monitoramento.',
    category: 'checagem',
    url: 'https://www.aosfatos.org',
    badge: 'Fact-checking'
  },
  {
    name: 'Fato ou Boato (TSE)',
    description: 'Página oficial da Justiça Eleitoral para esclarecimento de boatos sobre urnas e o processo eleitoral.',
    category: 'oficial',
    url: 'https://www.tse.jus.br/comunicacao/fato-ou-boato',
    badge: 'Justiça Eleitoral'
  },
  {
    name: 'Fiquem Sabendo',
    description: 'Agência de dados públicos especializada na Lei de Acesso à Informação (LAI) e transparência.',
    category: 'checagem',
    url: 'https://fiquemsabendo.com.br',
    badge: 'Dados Públicos'
  }
];

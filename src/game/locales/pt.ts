import type { LangPack } from "@/game/i18n/types";

const pack: LangPack = {
  ui: {
    kicker: "Natal católico",
    appTitle: "Yasli",
    lead: "Um telemóvel para a família inteira. Crianças e adultos caminham até ao presépio com uma só história — e perguntas diferentes.",
    family: "Caminho em família",
    solo: "Jogar sozinho",
    how: "Como jogar",
    note: "O caminho curto chega à manjedoura em poucos minutos. O caminho da noite vai do Advento à Epifania.",
    author: "Autor — {name}",
    howTitle: "Como jogar",
    steps: [
      {
        title: "Um telemóvel",
        text: "Antes da pergunta passa-se o telemóvel a quem está a jogar, para ninguém espreitar a resposta. Se a criança ainda não lê, leia-se a pergunta em voz alta e deixe-se que ela escolha.",
      },
      {
        title: "Dois níveis",
        text: "A criança recebe perguntas curtas sobre a manjedoura, a estrela e o nome. O adulto recebe o que se discute à mesa: o calendário, a Imaculada Conceição, Nicolau e o Pai Natal, o sentido dos dons.",
      },
      {
        title: "Errar não é vergonha",
        text: "A história não se interrompe. Depois de cada resposta há uma explicação — é essa a parte que vale a pena ler em voz alta. A estrela dá-se pela resposta certa, não pela rapidez.",
      },
      {
        title: "Dois comprimentos",
        text: "O caminho curto tem seis estações, da Anunciação à Epifania. O caminho da noite tem doze: Advento, José, o hino Glória, São Nicolau.",
      },
      {
        title: "Comando e voz",
        text: "Na televisão as setas do comando percorrem os botões, OK escolhe e Voltar regressa. A voz carrega no botão pelas palavras que nele estão. O nome junto do campo pode dizer-se em voz alta.",
      },
    ],
    howFoot:
      "É um serão em família, em casa: não substitui a Missa nem a catequese da paróquia. No fim há uma oração breve, que se pode ler juntos.",
    versionLabel: "Versão {version}",
    who: "Quem vai",
    whoNote: "Marquem a quem cabe cada pergunta. Os nomes aparecem quando chega a hora de passar o telemóvel.",
    short: "Curto",
    shortNote: "6 estações",
    evening: "Noite",
    eveningNote: "12 estações",
    player: "Jogador {n}",
    removePlayer: "Retirar o jogador {name}",
    nameLabel: "Nome do jogador {n}",
    child: "Criança",
    adult: "Adulto",
    nameError: "Toda a gente precisa de um nome — mesmo que curto.",
    add: "Mais alguém",
    start: "Pôr-se a caminho",
    back: "Voltar",
    togetherNote: "Esta vez é de todos. Olhem juntos — não há nada para espreitar.",
    passPhone: "Passem o telemóvel. A pergunta no ecrã só se abre depois do toque.",
    ready: "Estou a postos — abrir",
    togetherReady: "Olhamos juntos",
    answers: "{name} responde · {role}.",
    readAloud: "Pode ler-se em voz alta.",
    weSaid: "Já o dissemos",
    right: "Certo",
    wrong: "Não é isso",
    remember: "Recordemos",
    commonStar: "Uma estrela comum",
    next: "Seguinte",
    toManger: "À manjedoura",
    stars: "Estrelas na manjedoura: {n}",
    leaveTitle: "Deixar o caminho?",
    leaveNote: "As estrelas deste jogo não serão guardadas. O recorde de casa fica.",
    stay: "Ficar",
    home: "Início",
    mute: "Desligar o som",
    unmute: "Ligar o som",
    sayName: "Dizer o nome",
    shortPath: "Caminho curto",
    eveningPath: "Caminho da noite",
    gathered: "A manjedoura está completa",
    withAngels: "juntamente com a glória dos anjos",
    again: "Jogar outra vez",
    gospelRef: "Lc 2,10-11",
    best: "Neste telemóvel: caminho curto {short}, da noite {evening}. Jogos feitos: {played}.",
    language: "Língua",
    musicCredit:
      "A música provém de gravações natalícias de domínio público na Wikimedia Commons (banda da Força Aérea dos Estados Unidos e piano de Joy to the World).",
    defaultChild: "Criança",
    defaultAdult: "Adulto",
  },
  gospel:
    "«Não temais; anuncio-vos uma grande alegria, que o será para todo o povo: pois hoje, na cidade de David, nasceu-vos um Salvador, que é Cristo Senhor».",
  prayer:
    "Senhor Jesus, vieste a nós como criança na manjedoura. Abençoa a nossa casa nestes dias santos. Ensina-nos a partilhar, como fez São Nicolau, e a procurar-Te, como os pastores e os magos. Amen.",
  stations: {
    advent: {
      title: "Advento",
      kicker: "A espera",
      story:
        "O Advento ainda não é o Natal, mas uma espera silenciosa. Durante quatro semanas a Igreja prepara o coração: menos ruído, mais esperança. Na coroa acendem-se velas — em geral três roxas e uma rosa, no domingo Gaudete, «Alegrai-vos».",
      child: {
        prompt: "Quantas velas principais há na coroa do Advento?",
        explain:
          "Quatro velas são quatro semanas de espera. A rosa acende-se no terceiro domingo: a alegria já está perto. Por vezes, no próprio dia da festa, põe-se uma quinta, branca — a vela de Cristo.",
        a: "Duas — só para o domingo",
        b: "Quatro — uma por cada semana",
        c: "Doze — como os dias depois do Natal",
        d: "Sete — como os dias da semana",
      },
      adult: {
        prompt: "Porque é que na Missa dominical do Advento, em geral, não se canta o «Glória a Deus nas alturas»?",
        explain:
          "O Glória é o hino dos anjos da noite de Natal. No rito romano, em regra, não se canta no Advento nem na Quaresma, para que na noite de Natal soe de novo. Em casa pode-se alegrar: quem cala é a liturgia, não a família.",
        a: "Este hino canta-se só na Páscoa",
        b: "Guarda-se para o Natal e regressa na noite da festa",
        c: "Foi abolido no Concílio Vaticano II",
        d: "Só as crianças o cantam na festa da escola",
      },
    },
    annunciation: {
      title: "Anunciação",
      kicker: "Nazaré",
      story:
        "Em Nazaré o anjo Gabriel saúda Maria: «Ave, cheia de graça». Ela ouve que dará à luz um Filho e Lhe porá o nome de Jesus. Maria responde: «Faça-se em mim segundo a tua palavra». O Natal começa com este «sim».",
      child: {
        prompt: "Quem trouxe a Maria a notícia de que Lhe nasceria um Filho?",
        explain:
          "Gabriel é o mensageiro de Deus. Maria confiou e disse «sim». A Igreja guarda este dia a 25 de março — a Anunciação.",
        a: "Um pastor do campo",
        b: "O arcanjo Gabriel",
        c: "O rei Herodes",
        d: "Um mago do Oriente",
      },
      adult: {
        prompt: "Como é que o ano da Igreja liga a Anunciação e o Natal?",
        explain:
          "A Anunciação é a 25 de março; o Natal é a 25 de dezembro, nove meses depois. Assim está construída a liturgia. O Evangelho não nos dá uma nota de calendário saída de Belém: a data é a linguagem do ano da Igreja, não um registo de nascimento do hospital.",
        a: "O Natal cai nove meses depois de 25 de março",
        b: "As duas festas caem sempre no mesmo dia",
        c: "A Anunciação celebra-se a 6 de janeiro",
        d: "Entre elas há precisamente quarenta dias de jejum",
      },
    },
    visitation: {
      title: "Visitação",
      kicker: "Isabel",
      story:
        "Maria vai ter com a parenta Isabel. Antes mesmo de ouvir o relato até ao fim, Isabel exclama: «Bendita és tu entre as mulheres». Maria responde com um cântico: «A minha alma glorifica o Senhor». A alegria do Natal é, desde o princípio, uma alegria de família.",
      child: {
        prompt: "A quem foi Maria pouco depois da mensagem do anjo?",
        explain:
          "A Isabel, que também esperava um filho. Duas mães encontraram-se ainda antes da manjedoura. Nesta história a alegria partilha-se, não se guarda para si.",
        a: "A Isabel",
        b: "A uma rainha, em Roma",
        c: "Logo aos pastores, no campo",
        d: "Aos magos, no Oriente",
      },
      adult: {
        prompt: "Como se chamava o filho de Isabel e de Zacarias — e quem viria a ser?",
        explain:
          "João batizará no Jordão e apontará para Jesus: «Eis o Cordeiro de Deus». O encontro das duas mães já liga a manjedoura ao início da vida pública de Cristo.",
        a: "João Batista, o precursor do Senhor",
        b: "Lázaro de Betânia",
        c: "Simeão, que há de encontrar o Menino no templo",
        d: "Tiago, filho de Zebedeu",
      },
    },
    joseph: {
      title: "José",
      kicker: "Guardião",
      story:
        "José, desposado com Maria, era um homem justo. Em sonhos um anjo diz: não temas receber Maria, pois o que nela foi concebido é do Espírito Santo. «E pôr-Lhe-ás o nome de Jesus, porque Ele salvará o seu povo dos seus pecados». José obedece e vela pela Sagrada Família.",
      child: {
        prompt: "Quem era José para Maria e para o Menino?",
        explain:
          "José recebeu Maria, deu o nome ao Menino e abrigou a família quando veio o perigo. Chamam-lhe o guardião da Sagrada Família — não um espectador junto da manjedoura.",
        a: "Rei da Judeia",
        b: "O desposado de Maria e o guardião da família",
        c: "O sumo sacerdote do templo",
        d: "Um dos pastores da noite",
      },
      adult: {
        prompt: "Que significa o nome «Jesus» nas palavras do anjo a José?",
        explain:
          "Jesus quer dizer «o Senhor salva» (Mt 1,21). O Catecismo recorda que todo o mistério está já no nome (CIC 430 e seguintes). Ele não nasce como enfeite de inverno, mas como Salvador.",
        a: "«O Senhor salva»",
        b: "«Estrela do Oriente»",
        c: "Apenas «filho do carpinteiro», sem mais sentido",
        d: "«Herdeiro de Herodes»",
      },
    },
    road: {
      title: "O caminho",
      kicker: "Para Belém",
      story:
        "César Augusto ordena um recenseamento. José vai de Nazaré a Belém, a cidade de David: é da casa de David. Maria espera um filho. O caminho é longo e, de noite, a cidade está cheia.",
      child: {
        prompt: "Para que cidade iam Maria e José antes de nascer o Menino?",
        explain:
          "Para Belém, a cidade de David. O recenseamento levava-os até lá. O profeta Miqueias dissera há muito que de lá sairia o chefe de Israel.",
        a: "A Roma, até ao imperador",
        b: "A Belém",
        c: "A Jericó",
        d: "A lado nenhum: ficaram em Nazaré",
      },
      adult: {
        prompt: "Porque é que Jesus nasce em Belém, e não em Nazaré, onde a família vivia?",
        explain:
          "Lucas fala do recenseamento e da casa de David. Miqueias 5,2 nomeia Belém. Nazaré ficará a casa onde Jesus crescerá — o «Nazareno». O Natal está ligado à promessa feita a David.",
        a: "O recenseamento leva a casa de David à sua cidade — e cumpre-se a palavra de Miqueias",
        b: "Lá estava o único templo",
        c: "Herodes convidara-os para um banquete",
        d: "O Evangelho não explica isto de modo nenhum",
      },
    },
    manger: {
      title: "A manjedoura",
      kicker: "Noite de Natal",
      story:
        "Na estalagem não havia lugar. Maria deu à luz o Filho, envolveu-O e deitou-O numa manjedoura — um comedouro dos animais. O Rei do céu entra no mundo num lugar apertado, entre a palha. Muitos séculos depois, São Francisco, em Greccio, armará um presépio vivo, para que esta pobreza se veja com os olhos.",
      child: {
        prompt: "Onde deitou Maria o Jesus recém-nascido?",
        explain:
          "Numa manjedoura. Daí vem o presépio de casa. A Deus não Lhe era estreita a palha. Em 1223 São Francisco armou em Greccio uma manjedoura viva — para que as pessoas não se habituassem a esta noite.",
        a: "Num trono de ouro, no palácio",
        b: "Numa manjedoura",
        c: "Num barco, no mar da Galileia",
        d: "Num cesto, no rio, como Moisés",
      },
      adult: {
        prompt: "Como chamam os católicos ao presépio — e de onde vem o costume de o armar?",
        explain:
          "O presépio é a cena da manjedoura. O presépio vivo liga-se a São Francisco de Assis: Greccio, a noite de Natal de 1223. A árvore pode estar ao lado, mas o coração da festa é a Encarnação na pobreza (cf. CIC 525).",
        a: "A cena do Natal; o presépio vivo de Francisco em Greccio, 1223",
        b: "Só a árvore de Natal, e mais nada",
        c: "O jejum antes da Páscoa",
        d: "Os paramentos do sacerdote na Missa do Galo",
      },
    },
    shepherds: {
      title: "Os pastores",
      kicker: "A primeira notícia",
      story:
        "De noite os pastores velavam o rebanho. Um anjo disse-lhes: «Não temais. Anuncio-vos uma grande alegria, que o será para todo o povo: hoje, na cidade de David, nasceu-vos um Salvador, que é Cristo Senhor». O sinal é um Menino na manjedoura. Eles vão e encontram tudo como lhes foi dito.",
      child: {
        prompt: "Quem chegou primeiro ao Menino, depois de ouvir o anjo?",
        explain:
          "Os pastores. Foram chamados antes dos reis. O anjo disse que a alegria seria para todo o povo. O sinal era simples — uma criança na manjedoura.",
        a: "Os pastores",
        b: "César Augusto",
        c: "Os discípulos de Cafarnaum",
        d: "Os soldados do rei Herodes",
      },
      adult: {
        prompt: "Porque é que Lucas destaca precisamente os pastores?",
        explain:
          "Os pastores eram então muitas vezes gente à margem. A notícia é dada primeiro a eles: a salvação é para todos, a começar por quem é fácil não ver. Não é um quadro campestre. É o sentido todo da Igreja.",
        a: "O Natal anuncia-se não ao palácio, mas aos pobres: a alegria é para todos",
        b: "Os pastores eram sacerdotes secretos do templo",
        c: "Só eles sabiam ler as estrelas",
        d: "Lucas apascentava ele mesmo o rebanho nessa noite",
      },
    },
    gloria: {
      title: "Glória nas alturas",
      kicker: "Juntos",
      story:
        "Com o anjo aparece o exército do céu: «Glória a Deus nas alturas e, na terra, paz aos homens de boa vontade». No Advento este hino cala-se na Missa. Na noite de Natal regressa — paramentos brancos, luz, canto.",
      together: {
        prompt:
          "Digam juntos, sem pressa: «Glória a Deus nas alturas e paz na terra». Quando o tiverem dito, marquem que já falaram.",
        explain:
          "Disseram o cântico da noite de Natal. Na Missa ele soa como Gloria. A paz, aqui, não é um mote de postal: é o dom d'Aquele que está deitado na manjedoura.",
      },
    },
    name: {
      title: "O nome",
      kicker: "Não confundir",
      story:
        "Ao Menino dá-se o nome que o anjo disse ainda antes de Ele ser concebido: Jesus. No inverno há outras festas ao lado, e muitas vezes se confundem. A 8 de dezembro é a Imaculada Conceição de Maria. A 25 de dezembro é o Natal do Senhor. A 1 de janeiro é Santa Maria, Mãe de Deus. São mistérios diferentes.",
      child: {
        prompt: "Que nome deram ao Menino?",
        explain:
          "Jesus — assim mandou o anjo. O nome quer dizer: o Senhor salva. Assim O chamam os pastores, a família à mesa e a Igreja na Missa.",
        a: "Jesus",
        b: "Nicolau",
        c: "Augusto",
        d: "David",
      },
      adult: {
        prompt: "Em que difere a Imaculada Conceição do nascimento virginal de Jesus?",
        explain:
          "A 8 de dezembro: desde o primeiro instante, Maria está livre do pecado original (CIC 490–493). O Natal é sobre Jesus: é concebido pelo Espírito Santo e nasce da Virgem. Até os adultos confundem. À criança basta: Maria é a sua Mãe, e Ele é o Filho de Deus.",
        a: "A primeira é sobre Maria e o pecado; o segundo, sobre Jesus, concebido pelo Espírito Santo",
        b: "São dois nomes de um só acontecimento a 25 de dezembro",
        c: "A Imaculada Conceição quer dizer que Maria não teve pais",
        d: "O nascimento virginal refere-se a João Batista",
      },
    },
    magi: {
      title: "Os Magos",
      kicker: "A estrela",
      story:
        "Vêm sábios do Oriente: viram a estrela do Rei. Os escribas apontam Belém. A estrela conduz os Magos até ao Menino. Prostram-se e abrem os dons — ouro, incenso e mirra.",
      child: {
        prompt: "O que guiava os Magos no caminho?",
        explain:
          "A estrela. Os dons, segundo a tradição, são três: ouro, incenso e mirra. Os Magos são sinal de que Jesus não veio só para um povo.",
        a: "Um mapa dado pelo imperador",
        b: "Uma estrela",
        c: "O rio Jordão, e mais nada",
        d: "As vozes dos pastores, ouvidas para lá dos montes",
      },
      adult: {
        prompt: "Como se entendem tradicionalmente o ouro, o incenso e a mirra?",
        explain:
          "O ouro é para o Rei, o incenso para Deus, a mirra para o sofrimento e a sepultura. A leitura é antiga e clara: nos dons já se vêem a Páscoa e a cruz. A Epifania mostra Cristo aos povos — os sábios vieram de longe.",
        a: "Para um Rei, para Deus e para Aquele que há de sofrer",
        b: "São apenas dinheiro para a viagem de volta",
        c: "O ouro para Maria, o incenso para o boi, a mirra para o burro",
        d: "Eram os nomes de três estrelas, não dos dons",
      },
    },
    nicholas: {
      title: "São Nicolau",
      kicker: "6 de dezembro",
      story:
        "A 6 de dezembro a Igreja recorda São Nicolau, bispo de Mira, na Lícia. Viveu no século IV e ajudava os pobres em segredo. O velhote alegre da montra é outra figura, posterior. Dar prendas é permitido. Confundir o bispo com um anúncio não: o centro destas semanas é a manjedoura, não o saco.",
      child: {
        prompt: "Quem era São Nicolau?",
        explain:
          "Um bispo que ajudava os pobres, e fazia-o em silêncio. As prendas em sua memória são sobre a misericórdia. O Natal, mesmo assim, é sobre Jesus.",
        a: "Um bispo que ajudava os pobres",
        b: "Uma rena do Norte",
        c: "Um vendedor de uma grande loja",
        d: "Um dos três Magos",
      },
      adult: {
        prompt: "Como não misturar a memória de São Nicolau com o Pai Natal da publicidade?",
        explain:
          "A 6 de dezembro é a memória do bispo Nicolau de Mira, no século IV. O fato vermelho da publicidade é muito posterior, vindo de lendas e do comércio. As prendas são oportunas. O coração da festa é a Encarnação, e à criança pode dizer-se isto com clareza, conforme a idade.",
        a: "Nicolau é um bispo do século IV; o Pai Natal é uma figura tardia. O centro é Cristo",
        b: "A Igreja ensina que é o mesmo homem com roupa diferente",
        c: "O Pai Natal foi canonizado no Concílio Vaticano II",
        d: "Nicolau nunca existiu: é só um conto do século XX",
      },
    },
    epiphany: {
      title: "Epifania",
      kicker: "Aos povos",
      story:
        "O rito latino celebra o Natal a 25 de dezembro; depois os dias seguem até à Epifania — a manifestação de Cristo aos povos, a adoração dos Magos. Parte dos cristãos orientais celebra o próprio Natal a 7 de janeiro: o seu 25 de dezembro conta-se pelo calendário antigo. O Evangelho é um só. O que difere é a conta dos dias.",
      child: {
        prompt: "Como se chama a festa em que se recorda a adoração dos Magos?",
        explain:
          "Epifania quer dizer «manifestação». A Cristo vêem-no não só os pastores da sua terra, mas também os sábios de longe. Nalguns países, nesse dia, escrevem-se nas portas as letras dos Magos.",
        a: "Epifania",
        b: "Quarta-feira de Cinzas",
        c: "Pentecostes",
        d: "Domingo de Ramos",
      },
      adult: {
        prompt:
          "Porque é que parte dos cristãos orientais celebra o Natal a 7 de janeiro, e os católicos latinos a 25 de dezembro?",
        explain:
          "O calendário juliano está 13 dias atrás do gregoriano: o 25 de dezembro deles cai na data civil de 7 de janeiro. A reforma foi introduzida pelo papa Gregório XIII em 1582. Os católicos orientais podem seguir o seu calendário. Não há que discutir qual Natal é o verdadeiro.",
        a: "Assim se deslocou o calendário juliano; o Evangelho continua um só",
        b: "Porque são duas crianças diferentes",
        c: "Um papa, no século XX, mudou a festa para janeiro e depois voltou a pô-la no lugar",
        d: "7 de janeiro é sempre a data da Páscoa",
      },
    },
  },
};

export default pack;

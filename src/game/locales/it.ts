import type { LangPack } from "@/game/i18n/types";

const pack: LangPack = {
  ui: {
    kicker: "Natale cattolico",
    appTitle: "Yasli",
    lead: "Un solo telefono per tutta la famiglia. Bambini e adulti camminano verso il presepe con la stessa storia — e con domande diverse.",
    family: "Cammino in famiglia",
    solo: "Giocare da soli",
    how: "Come si gioca",
    note: "Il cammino breve arriva al presepe in pochi minuti. Quello della sera va dall’Avvento all’Epifania.",
    author: "Autore — {name}",
    howTitle: "Come si gioca",
    steps: [
      {
        title: "Un solo telefono",
        text: "Prima della domanda l’apparecchio passa a chi tocca. Così le risposte non si sbirciano. Se il bambino non sa ancora leggere, la domanda si legge ad alta voce, ma sceglie lui.",
      },
      {
        title: "Due livelli",
        text: "Al bambino, domande brevi sul presepe, la stella, il nome. All’adulto, ciò di cui si discute a tavola: il calendario, l’Immacolata Concezione, san Nicola e Babbo Natale, il senso dei doni.",
      },
      {
        title: "Sbagliare non è vergogna",
        text: "La storia non si ferma. Dopo la risposta c’è sempre una spiegazione: conviene leggerla ad alta voce. La stella si dà per la risposta giusta, non per la velocità.",
      },
      {
        title: "Due lunghezze",
        text: "Il cammino breve ha sei tappe, dall’Annunciazione all’Epifania. Quello della sera ne ha dodici: Avvento, Giuseppe, l’inno «Gloria», san Nicola.",
      },
      {
        title: "Telecomando e voce",
        text: "In televisione le frecce del telecomando scorrono sui pulsanti, OK sceglie, «Indietro» torna. Alice preme il pulsante a partire dalle parole: «Cammino in famiglia». Il nome accanto al campo si può dire ad alta voce.",
      },
    ],
    howFoot:
      "È una serata in casa: non sostituisce la Messa né il catechismo della parrocchia. Alla fine c’è una preghiera breve, da leggere insieme.",
    versionLabel: "Versione {version}",
    who: "Chi parte",
    whoNote: "Segnate a chi tocca quale domanda. I nomi compariranno quando bisogna passare il telefono.",
    short: "Breve",
    shortNote: "6 tappe",
    evening: "Della sera",
    eveningNote: "12 tappe",
    player: "Giocatore {n}",
    removePlayer: "Togli il giocatore {name}",
    nameLabel: "Nome del giocatore {n}",
    child: "Bambino",
    adult: "Adulto",
    nameError: "Ognuno ha bisogno di un nome, anche breve.",
    add: "Un’altra persona",
    start: "Mettersi in cammino",
    back: "Indietro",
    togetherNote: "Questo turno è di tutti. Guardate insieme: non c’è nulla da sbirciare.",
    passPhone: "Passate il telefono. La domanda si apre solo dopo il tocco.",
    ready: "Sono pronto — apri",
    togetherReady: "Guardiamo insieme",
    answers: "Risponde {name} · {role}.",
    readAloud: "Si può leggere ad alta voce.",
    weSaid: "L’abbiamo detto",
    right: "Giusto",
    wrong: "Non è così",
    remember: "Ricordiamo",
    commonStar: "Stella comune",
    next: "Avanti",
    toManger: "Al presepe",
    stars: "Stelle presso il presepe: {n}",
    leaveTitle: "Interrompere il cammino?",
    leaveNote: "Le stelle di questa partita non si salvano. Il record di casa resta.",
    stay: "Restare",
    home: "Alla pagina iniziale",
    mute: "Silenzia l’audio",
    unmute: "Attiva l’audio",
    sayName: "Dire il nome",
    shortPath: "Cammino breve",
    eveningPath: "Cammino della sera",
    gathered: "Il presepe è raccolto",
    withAngels: "insieme alla gloria degli angeli",
    again: "Giocare ancora",
    gospelRef: "Lc 2,10-11",
    best: "Su questo telefono: cammino breve {short}, della sera {evening}. Partite giocate: {played}.",
    language: "Lingua",
    musicCredit:
      "Musica natalizia di pubblico dominio da Wikimedia Commons (la United States Air Force Band e una registrazione al pianoforte, di pubblico dominio, di Joy to the World).",
    defaultChild: "Bambino",
    defaultAdult: "Adulto",
  },
  gospel:
    "«Non temete: ecco, vi annuncio una grande gioia, che sarà di tutto il popolo: oggi, nella città di Davide, è nato per voi un Salvatore, che è Cristo Signore».",
  prayer:
    "Signore Gesù, sei venuto a noi bambino nella mangiatoia. Benedici la nostra casa in questi giorni santi. Insegnaci a condividere, come san Nicola, e a cercarti, come i pastori e i Magi. Amen.",
  stations: {
    advent: {
      title: "Avvento",
      kicker: "Attesa",
      story:
        "L’Avvento non è ancora Natale, ma un’attesa silenziosa. Per quattro settimane la Chiesa prepara il cuore: meno rumore, più speranza. Sulla corona si accendono le candele — di solito tre viola e una rosa, la domenica Gaudete, «Rallegratevi».",
      child: {
        prompt: "Quante sono le candele principali della corona d’Avvento?",
        explain:
          "Quattro candele, quattro settimane di attesa. La rosa si accende la terza domenica: la gioia è già vicina. A volte, nel giorno stesso della festa, se ne pone una quinta, bianca: la candela di Cristo.",
        a: "Due — solo per la domenica",
        b: "Quattro — una per ogni settimana",
        c: "Dodici — come i giorni dopo Natale",
        d: "Sette — come i giorni della settimana",
      },
      adult: {
        prompt: "Perché alla Messa domenicale d’Avvento di solito non si canta il «Gloria»?",
        explain:
          "Il «Gloria» è l’inno degli angeli nella notte di Natale. Nell’Avvento e in Quaresima, nel rito romano, di regola non si canta, perché nella Notte di Natale risuoni di nuovo. In casa si può gioire: tace la liturgia, non la famiglia.",
        a: "Questo inno si canta solo a Pasqua",
        b: "Lo si riserva al Natale, e ritorna nella notte della festa",
        c: "Fu abolito dal Concilio Vaticano II",
        d: "Lo cantano solo i bambini alla recita",
      },
    },
    annunciation: {
      title: "Annunciazione",
      kicker: "Nazaret",
      story:
        "A Nazaret l’angelo Gabriele saluta Maria: «Rallégrati, piena di grazia». Ella ode che partorirà un Figlio e gli porrà nome Gesù. Maria risponde: «Avvenga per me secondo la tua parola». Da questo «sì» comincia il Natale.",
      child: {
        prompt: "Chi portò a Maria l’annuncio che avrebbe partorito un Figlio?",
        explain:
          "Gabriele è il messaggero di Dio. Maria si fidò e disse «sì». La Chiesa celebra questo giorno il 25 marzo: l’Annunciazione del Signore.",
        a: "Un pastore del campo",
        b: "L’arcangelo Gabriele",
        c: "Il re Erode",
        d: "Un mago venuto d’Oriente",
      },
      adult: {
        prompt: "Come l’anno liturgico lega l’Annunciazione e il Natale?",
        explain:
          "L’Annunciazione è il 25 marzo, il Natale il 25 dicembre, nove mesi dopo. Così è fatta la liturgia. Il Vangelo non ci dà un atto di nascita da Betlemme: la data è il linguaggio dell’anno liturgico, non il verbale di un reparto di maternità.",
        a: "Il Natale cade nove mesi dopo il 25 marzo",
        b: "Le due feste cadono sempre nello stesso giorno",
        c: "L’Annunciazione si celebra il 6 gennaio",
        d: "Tra le due corrono esattamente quaranta giorni di digiuno",
      },
    },
    visitation: {
      title: "Visitazione",
      kicker: "Elisabetta",
      story:
        "Maria va dalla parente Elisabetta. Questa, prima ancora di ascoltare il racconto, esclama: «Benedetta tu fra le donne». Maria risponde con il canto: «L’anima mia magnifica il Signore». La gioia del Natale, fin dall’inizio, è una gioia di famiglia.",
      child: {
        prompt: "Da chi andò Maria poco dopo l’annuncio dell’angelo?",
        explain:
          "Da Elisabetta, che aspettava anche lei un bambino. Due madri si incontrarono ancora prima della mangiatoia. In questa storia la gioia si condivide, non si tiene per sé.",
        a: "Da Elisabetta",
        b: "Dalla regina, a Roma",
        c: "Subito dai pastori, nel campo",
        d: "Dai Magi, in Oriente",
      },
      adult: {
        prompt: "Come si chiamava il figlio di Elisabetta e Zaccaria, e chi diventerà?",
        explain:
          "Giovanni battezzerà al Giordano e indicherà Gesù: «Ecco l’Agnello di Dio». L’incontro delle due madri lega già la mangiatoia all’inizio della vita pubblica di Cristo.",
        a: "Giovanni il Battista, precursore del Signore",
        b: "Lazzaro di Betania",
        c: "Simeone, che incontrerà il Bambino nel tempio",
        d: "Giacomo, figlio di Zebedeo",
      },
    },
    joseph: {
      title: "Giuseppe",
      kicker: "Custode",
      story:
        "Giuseppe, sposo di Maria, è un uomo giusto. In sogno l’angelo dice: non temere di prendere con te Maria, perché quel che è generato in lei viene dallo Spirito Santo. «Lo chiamerai Gesù: egli infatti salverà il suo popolo dai suoi peccati». Giuseppe obbedisce e custodisce la Sacra Famiglia.",
      child: {
        prompt: "Chi era Giuseppe per Maria e per il Bambino?",
        explain:
          "Giuseppe accolse Maria, diede il nome al Bambino e protesse la famiglia quando divenne pericoloso. Lo si chiama custode della Sacra Famiglia: non uno spettatore presso la mangiatoia.",
        a: "Il re della Giudea",
        b: "Lo sposo di Maria e il custode della famiglia",
        c: "Il sommo sacerdote del tempio",
        d: "Uno dei pastori della notte",
      },
      adult: {
        prompt: "Che cosa significa il nome «Gesù» nelle parole dell’angelo a Giuseppe?",
        explain:
          "Gesù significa «Dio salva» (Mt 1,21). Il Catechismo ricorda: nel nome c’è già tutto il mistero (CCC 430 e seguenti). Egli nasce non come ornamento dell’inverno, ma come Salvatore.",
        a: "«Dio salva»",
        b: "«Stella d’Oriente»",
        c: "Solo «figlio del falegname», senza altro senso",
        d: "«Erede di Erode»",
      },
    },
    road: {
      title: "La strada",
      kicker: "Verso Betlemme",
      story:
        "Cesare Augusto indice un censimento. Giuseppe parte da Nazaret verso Betlemme, la città di Davide: è della casa di Davide. Maria aspetta il bambino. La strada è lunga, e la città, a notte, è stretta.",
      child: {
        prompt: "In quale città andavano Maria e Giuseppe prima della nascita del Bambino?",
        explain:
          "A Betlemme, la città di Davide. Là li conduceva il censimento. Il profeta Michea aveva detto da tempo che di là sarebbe uscito il dominatore d’Israele.",
        a: "A Roma, presso Cesare",
        b: "A Betlemme",
        c: "A Gerico",
        d: "Da nessuna parte: restarono a Nazaret",
      },
      adult: {
        prompt: "Perché Gesù nasce a Betlemme e non a Nazaret, dove viveva la famiglia?",
        explain:
          "Luca parla del censimento e della stirpe di Davide. Michea 5,1 nomina Betlemme. Nazaret resterà la casa dove Gesù crescerà: il «Nazareno». Il Natale è legato alla promessa fatta a Davide.",
        a: "Il censimento porta la stirpe di Davide nella sua città, e si compie la parola di Michea",
        b: "Là sorgeva l’unico tempio",
        c: "Erode li aveva invitati a un banchetto",
        d: "Il Vangelo non lo spiega in alcun modo",
      },
    },
    manger: {
      title: "La mangiatoia",
      kicker: "Notte di Natale",
      story:
        "Nell’alloggio non c’era posto. Maria diede alla luce il Figlio, lo avvolse in fasce e lo depose in una mangiatoia, la greppia del bestiame. Il Re del cielo entra nel mondo nella strettezza, tra la paglia. Molti secoli dopo san Francesco, a Greccio, allestirà un presepe vivente, perché quella povertà si veda con gli occhi.",
      child: {
        prompt: "Dove depose Maria il neonato Gesù?",
        explain:
          "Nella mangiatoia. Di qui nasce anche il presepe di casa. Dio non stava stretto nella paglia. Nel 1223 san Francesco allestì a Greccio un presepe vivente, perché la gente non si abituasse a quella notte.",
        a: "Su un trono d’oro, nel palazzo",
        b: "Nella mangiatoia",
        c: "In una barca sul mare di Galilea",
        d: "In una cesta sul fiume, come Mosè",
      },
      adult: {
        prompt: "Che cosa chiamano i cattolici presepe, e da dove viene l’usanza di allestirlo?",
        explain:
          "Il presepe è la scena della mangiatoia. Il presepe vivente si lega a san Francesco d’Assisi: Greccio, Notte di Natale del 1223. L’albero può stare accanto, ma il cuore della festa è l’Incarnazione nella povertà (cfr. CCC 525).",
        a: "La scena del Natale; il presepe vivente di Francesco a Greccio, nel 1223",
        b: "Solo l’albero, e nient’altro",
        c: "Il digiuno prima di Pasqua",
        d: "I paramenti del sacerdote alla Messa di mezzanotte",
      },
    },
    shepherds: {
      title: "I pastori",
      kicker: "Il primo annuncio",
      story:
        "Di notte i pastori vegliavano sul gregge. L’angelo disse loro: «Non temete. Vi annuncio una grande gioia, che sarà di tutto il popolo: oggi, nella città di Davide, è nato per voi un Salvatore, che è Cristo Signore». Il segno è un bambino nella mangiatoia. Essi vanno e trovano tutto come era stato loro detto.",
      child: {
        prompt: "Chi giunse per primo dal Bambino, dopo aver udito l’angelo?",
        explain:
          "I pastori. Furono chiamati prima dei re. L’angelo disse: la gioia sarà per tutto il popolo. Il segno era semplice: un bambino nella mangiatoia.",
        a: "I pastori",
        b: "Cesare Augusto",
        c: "I discepoli di Cafarnao",
        d: "I soldati del re Erode",
      },
      adult: {
        prompt: "Perché Luca mette in rilievo proprio i pastori?",
        explain:
          "I pastori, allora, erano spesso considerati gente ai margini. L’annuncio va prima a loro: la salvezza è per tutti, a cominciare da chi è facile non notare. Non è un quadretto agreste, ma tutto il senso della Chiesa.",
        a: "Il Natale è annunciato non al palazzo, ma ai poveri: la gioia è per tutti",
        b: "I pastori erano sacerdoti segreti del tempio",
        c: "Solo loro sapevano leggere le stelle",
        d: "Luca stesso vegliava il gregge quella notte",
      },
    },
    gloria: {
      title: "Gloria in excelsis",
      kicker: "Insieme",
      story:
        "Con l’angelo appare la milizia celeste: «Gloria a Dio nell’alto dei cieli e pace in terra agli uomini di buona volontà». Nell’Avvento questo inno tace alla Messa. Nella Notte di Natale ritorna: paramenti bianchi, luce, canto.",
      together: {
        prompt:
          "Dite insieme, senza fretta: «Gloria a Dio nell’alto dei cieli e pace in terra». Quando l’avrete detto, segnate che l’avete detto.",
        explain:
          "Avete pronunciato il canto della Notte di Natale. Alla Messa risuona come Gloria. La pace, qui, non è uno slogan sul biglietto d’auguri, ma il dono di Colui che giace nella mangiatoia.",
      },
    },
    name: {
      title: "Il nome",
      kicker: "Non confondere",
      story:
        "Al Bambino si impone il nome detto dall’angelo già prima del concepimento: Gesù. D’inverno altre feste stanno vicine, e spesso si confondono. L’8 dicembre è l’Immacolata Concezione di Maria. Il 25 dicembre è il Natale del Signore. Il 1° gennaio è Maria Santissima Madre di Dio. Sono misteri diversi.",
      child: {
        prompt: "Quale nome diedero al Bambino?",
        explain:
          "Gesù: così comandò l’angelo. Il nome significa: Dio salva. Così lo chiamano i pastori, la famiglia a tavola e la Chiesa alla Messa.",
        a: "Gesù",
        b: "Nicola",
        c: "Augusto",
        d: "Davide",
      },
      adult: {
        prompt: "In che cosa l’Immacolata Concezione differisce dalla nascita verginale di Gesù?",
        explain:
          "L’8 dicembre: Maria, dal primo istante, è preservata dal peccato originale (CCC 490–493). Il Natale riguarda Gesù: è concepito per opera dello Spirito Santo e nasce dalla Vergine. Li confondono anche gli adulti. Al bambino basta: Maria è sua Madre, egli è il Figlio di Dio.",
        a: "La prima riguarda Maria e il peccato; la seconda, Gesù, concepito dallo Spirito Santo",
        b: "Sono due nomi dello stesso avvenimento, il 25 dicembre",
        c: "Immacolata Concezione significa che Maria non ebbe genitori",
        d: "La nascita verginale riguarda Giovanni il Battista",
      },
    },
    magi: {
      title: "I Magi",
      kicker: "La stella",
      story:
        "Dall’Oriente vengono dei sapienti: hanno visto la stella del Re. Gli scribi indicano Betlemme. La stella conduce i Magi fino al Bambino. Essi si prostrano e aprono i doni: oro, incenso e mirra.",
      child: {
        prompt: "Che cosa guidava i Magi lungo la strada?",
        explain:
          "La stella. I doni, secondo la tradizione, sono tre: oro, incenso e mirra. I Magi sono il segno che Gesù non è venuto per un solo popolo.",
        a: "Una mappa consegnata da Cesare",
        b: "La stella",
        c: "Il fiume Giordano, e nient’altro",
        d: "La voce dei pastori, udibile oltre i monti",
      },
      adult: {
        prompt: "Come si intendono, nella tradizione, l’oro, l’incenso e la mirra?",
        explain:
          "L’oro al Re, l’incenso a Dio, la mirra alla passione e alla sepoltura. È una lettura antica e chiara: nei doni si vedono già la Pasqua e la croce. L’Epifania mostra Cristo alle genti: i sapienti vennero da lontano.",
        a: "Al Re, a Dio e a Colui che patirà",
        b: "Sono solo denaro per il viaggio di ritorno",
        c: "L’oro a Maria, l’incenso al bue, la mirra all’asino",
        d: "Così si chiamavano tre stelle, non i doni",
      },
    },
    nicholas: {
      title: "Nicola",
      kicker: "6 dicembre",
      story:
        "Il 6 dicembre la Chiesa ricorda san Nicola, vescovo di Mira di Licia. Visse nel IV secolo e aiutava i poveri in segreto. Il vecchio allegro delle vetrine è un’altra figura, più tarda. Fare doni si può. Non conviene confondere il vescovo con la pubblicità: il centro di queste settimane è la mangiatoia, non il sacco.",
      child: {
        prompt: "Chi era san Nicola?",
        explain:
          "Un vescovo che aiutava i poveri, e lo faceva in silenzio. I doni in sua memoria parlano di misericordia. Il Natale, comunque, è di Gesù.",
        a: "Un vescovo che aiutava i poveri",
        b: "Una renna del Nord",
        c: "Un commesso di un grande negozio",
        d: "Uno dei tre Magi",
      },
      adult: {
        prompt: "Come non mescolare la memoria di san Nicola e il Babbo Natale della pubblicità?",
        explain:
          "Il 6 dicembre è la memoria del vescovo Nicola di Mira, IV secolo. Il costume rosso della pubblicità è molto più tardo, nato da leggende e dal commercio. I doni sono opportuni. Il cuore della festa è l’Incarnazione, e al bambino lo si può dire con chiarezza, secondo l’età.",
        a: "Nicola è un vescovo del IV secolo; Babbo Natale è una figura tarda. Il centro è Cristo",
        b: "La Chiesa insegna che sono la stessa persona con abiti diversi",
        c: "Babbo Natale fu canonizzato dal Concilio Vaticano II",
        d: "Nicola non è esistito: è solo una favola del XX secolo",
      },
    },
    epiphany: {
      title: "Epifania",
      kicker: "Alle genti",
      story:
        "Il rito latino celebra il Natale il 25 dicembre; seguono poi i giorni fino all’Epifania, manifestazione di Cristo alle genti, l’adorazione dei Magi. Una parte dei cristiani orientali celebra il Natale stesso il 7 gennaio: il loro 25 dicembre si conta secondo il calendario antico. Il Vangelo è uno solo. Cambia il computo dei giorni.",
      child: {
        prompt: "Come si chiama la festa in cui si ricorda l’adorazione dei Magi?",
        explain:
          "Epifania significa «manifestazione». Cristo è visto non solo dai pastori della sua terra, ma anche dai sapienti venuti da lontano. In alcuni Paesi, quel giorno, si scrivono sulle porte le lettere dei Magi.",
        a: "Epifania",
        b: "Mercoledì delle Ceneri",
        c: "Pentecoste",
        d: "Domenica delle Palme",
      },
      adult: {
        prompt:
          "Perché una parte dei cristiani orientali celebra il Natale il 7 gennaio, mentre i cattolici di rito latino lo festeggiano il 25 dicembre?",
        explain:
          "Il calendario giuliano è in ritardo di 13 giorni sul gregoriano: il loro 25 dicembre cade il 7 gennaio civile. La riforma fu introdotta da papa Gregorio XIII nel 1582. I cattolici orientali possono seguire il proprio calendario. Discutere di quale Natale sia quello vero non ha senso.",
        a: "Così è spostato il calendario giuliano; il Vangelo resta uno solo",
        b: "Perché si tratta di due bambini diversi",
        c: "Il papa nel XX secolo spostò la festa a gennaio e poi la riportò",
        d: "Il 7 gennaio è sempre la data di Pasqua",
      },
    },
  },
};

export default pack;

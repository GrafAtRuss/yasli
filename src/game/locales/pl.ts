import type { LangPack } from "@/game/i18n/types";

const pack: LangPack = {
  ui: {
    kicker: "Katolickie Boże Narodzenie",
    appTitle: "Yasli",
    lead: "Jeden telefon dla całej rodziny. Dzieci i dorośli idą do szopki jedną historią — i różnymi pytaniami.",
    family: "Droga rodzinna",
    solo: "Grać samemu",
    how: "Jak grać",
    note: "Krótka droga dochodzi do żłóbka w kilka minut. Droga wieczorna prowadzi od Adwentu do Epifanii.",
    author: "Autor — {name}",
    howTitle: "Jak grać",
    steps: [
      {
        title: "Jeden telefon",
        text: "Przed pytaniem podaje się telefon osobie, której kolej, żeby nikt nie podglądał odpowiedzi. Jeśli dziecko jeszcze nie czyta, pytanie czyta się na głos, a wybiera ono samo.",
      },
      {
        title: "Dwa poziomy",
        text: "Dziecko dostaje krótkie pytania o żłóbek, gwiazdę i imię. Dorosły — to, o czym spierają się przy stole: kalendarz, Niepokalane Poczęcie, Mikołaj i Santa, sens darów.",
      },
      {
        title: "Błędna odpowiedź to nie wstyd",
        text: "Historia się nie zatrzymuje. Po każdej odpowiedzi jest wyjaśnienie — właśnie je warto przeczytać na głos. Gwiazdę daje się za dobrą odpowiedź, nie za pośpiech.",
      },
      {
        title: "Dwie długości",
        text: "Krótka droga to sześć stacji, od Zwiastowania do Epifanii. Droga wieczorna to dwanaście: Adwent, Józef, hymn «Chwała», święty Mikołaj.",
      },
      {
        title: "Pilot i głos",
        text: "Na telewizorze strzałki pilota przechodzą po przyciskach, OK wybiera, a Wstecz wraca. Głos naciska przycisk według słów, które na nim są. Imię przy polu można wypowiedzieć na głos.",
      },
    ],
    howFoot:
      "To rodzinny wieczór w domu, nie zastępuje Mszy ani katechezy parafialnej. Na końcu jest krótka modlitwa, którą można przeczytać razem.",
    versionLabel: "Wersja {version}",
    who: "Kto idzie",
    whoNote: "Zaznaczcie, komu które pytanie. Imiona pojawiają się, gdy trzeba podać telefon.",
    short: "Krótka",
    shortNote: "6 stacji",
    evening: "Wieczorna",
    eveningNote: "12 stacji",
    player: "Gracz {n}",
    removePlayer: "Usuń gracza {name}",
    nameLabel: "Imię gracza {n}",
    child: "Dziecko",
    adult: "Dorosły",
    nameError: "Każdy potrzebuje imienia — choćby krótkiego.",
    add: "Jeszcze ktoś",
    start: "W drogę",
    back: "Wstecz",
    togetherNote: "Ta kolejka jest wspólna. Patrzcie razem — nie ma czego podglądać.",
    passPhone: "Podajcie telefon. Pytanie otworzy się dopiero po dotknięciu.",
    ready: "Jestem gotowy — otwórz",
    togetherReady: "Patrzymy razem",
    answers: "Odpowiada {name} · {role}.",
    readAloud: "Można czytać na głos.",
    weSaid: "Powiedzieliśmy",
    right: "Dobrze",
    wrong: "Nie to",
    remember: "Zapamiętajmy",
    commonStar: "Wspólna gwiazda",
    next: "Dalej",
    toManger: "Do żłóbka",
    stars: "Gwiazdy przy żłóbku: {n}",
    leaveTitle: "Opuścić drogę?",
    leaveNote: "Gwiazdy z tej gry nie zostaną zapisane. Domowy rekord zostanie.",
    stay: "Zostać",
    home: "Do domu",
    mute: "Wyłączyć dźwięk",
    unmute: "Włączyć dźwięk",
    sayName: "Powiedzieć imię",
    shortPath: "Krótka droga",
    eveningPath: "Droga wieczorna",
    gathered: "Żłóbek jest kompletny",
    withAngels: "razem z chwałą aniołów",
    again: "Zagraj jeszcze raz",
    gospelRef: "Łk 2,10-11",
    best: "Na tym telefonie: krótka droga {short}, wieczorna {evening}. Rozegranych gier: {played}.",
    language: "Język",
    musicCredit:
      "Muzyka to bożonarodzeniowe nagrania z domeny publicznej w Wikimedia Commons (zespół Sił Powietrznych Stanów Zjednoczonych i fortepian Joy to the World).",
    defaultChild: "Dziecko",
    defaultAdult: "Dorosły",
  },
  gospel:
    "«Nie bójcie się; oto zwiastuję wam radość wielką, która będzie udziałem całego narodu: dziś bowiem w mieście Dawida narodził się wam Zbawiciel, którym jest Chrystus Pan».",
  prayer:
    "Panie Jezu, przyszedłeś do nas jako dziecię w żłóbku. Pobłogosław nasz dom w te święte dni. Naucz nas dzielić się, jak święty Mikołaj, i szukać Ciebie, jak pasterze i mędrcy. Amen.",
  stations: {
    advent: {
      title: "Adwent",
      kicker: "Oczekiwanie",
      story:
        "Adwent to jeszcze nie Boże Narodzenie, lecz ciche oczekiwanie. Przez cztery tygodnie Kościół przygotowuje serce: mniej zgiełku, więcej nadziei. Na wieńcu zapala się świece — zwykle trzy fioletowe i jedną różową, w niedzielę Gaudete, «Radujcie się».",
      child: {
        prompt: "Ile głównych świec jest na wieńcu adwentowym?",
        explain:
          "Cztery świece to cztery tygodnie oczekiwania. Różową zapala się w trzecią niedzielę: radość jest już blisko. Czasem w sam dzień święta stawia się piątą, białą — świecę Chrystusa.",
        a: "Dwie — tylko na niedzielę",
        b: "Cztery — po jednej na każdy tydzień",
        c: "Dwanaście — jak dni po Bożym Narodzeniu",
        d: "Siedem — jak dni tygodnia",
      },
      adult: {
        prompt: "Dlaczego na niedzielnej Mszy w Adwencie zwykle nie śpiewa się «Chwała na wysokości Bogu»?",
        explain:
          "«Chwała» to hymn aniołów z nocy Bożego Narodzenia. W rycie rzymskim w Adwencie i w Wielkim Poście z zasady się go nie śpiewa, aby w noc Narodzenia zabrzmiał na nowo. W domu wolno się cieszyć: milczy liturgia, nie rodzina.",
        a: "Ten hymn śpiewa się tylko na Wielkanoc",
        b: "Zachowuje się go na Boże Narodzenie i powraca w noc święta",
        c: "Zniesiono go na Soborze Watykańskim II",
        d: "Śpiewają go tylko dzieci na szkolnej uroczystości",
      },
    },
    annunciation: {
      title: "Zwiastowanie",
      kicker: "Nazaret",
      story:
        "W Nazarecie anioł Gabriel pozdrawia Maryję: «Zdrowaś, łaski pełna». Słyszy, że porodzi Syna i nada Mu imię Jezus. Maryja odpowiada: «Niech Mi się stanie według twego słowa». Boże Narodzenie zaczyna się od tego «tak».",
      child: {
        prompt: "Kto przyniósł Maryi wieść, że narodzi się Jej Syn?",
        explain:
          "Gabriel jest zwiastunem Bożym. Maryja zaufała i powiedziała «tak». Kościół obchodzi ten dzień 25 marca — Zwiastowanie.",
        a: "Pasterz z pola",
        b: "Archanioł Gabriel",
        c: "Król Herod",
        d: "Mędrzec ze Wschodu",
      },
      adult: {
        prompt: "Jak rok kościelny łączy Zwiastowanie i Boże Narodzenie?",
        explain:
          "Zwiastowanie jest 25 marca, Boże Narodzenie — 25 grudnia, dziewięć miesięcy później. Tak ułożona jest liturgia. Ewangelia nie podaje notatki kalendarzowej z Betlejem: data jest językiem roku kościelnego, a nie kartą ze szpitala.",
        a: "Boże Narodzenie przypada dziewięć miesięcy po 25 marca",
        b: "Oba święta wypadają zawsze tego samego dnia",
        c: "Zwiastowanie obchodzi się 6 stycznia",
        d: "Między nimi jest dokładnie czterdzieści dni postu",
      },
    },
    visitation: {
      title: "Nawiedzenie",
      kicker: "Elżbieta",
      story:
        "Maryja idzie do krewnej Elżbiety. Ta, zanim jeszcze wysłucha opowieści do końca, woła: «Błogosławionaś między niewiastami». Maryja odpowiada pieśnią: «Wielbi dusza moja Pana». Radość Bożego Narodzenia od samego początku jest radością rodzinną.",
      child: {
        prompt: "Do kogo poszła Maryja wkrótce po wieści anioła?",
        explain:
          "Do Elżbiety, która też oczekiwała dziecka. Dwie matki spotkały się jeszcze przed żłóbkiem. W tej historii radością się dzielą, a nie zatrzymują jej dla siebie.",
        a: "Do Elżbiety",
        b: "Do królowej, do Rzymu",
        c: "Od razu do pasterzy na polu",
        d: "Do mędrców na Wschodzie",
      },
      adult: {
        prompt: "Jak miał na imię syn Elżbiety i Zachariasza — i kim się stanie?",
        explain:
          "Jan będzie chrzcił nad Jordanem i wskaże Jezusa: «Oto Baranek Boży». Spotkanie dwóch matek już łączy żłóbek z początkiem publicznej działalności Chrystusa.",
        a: "Jan Chrzciciel, poprzednik Pana",
        b: "Łazarz z Betanii",
        c: "Symeon, który spotka Dziecię w świątyni",
        d: "Jakub, syn Zebedeusza",
      },
    },
    joseph: {
      title: "Józef",
      kicker: "Opiekun",
      story:
        "Józef, oblubieniec Maryi, był człowiekiem sprawiedliwym. We śnie anioł mówi: nie bój się wziąć do siebie Maryi, albowiem to, co się w Niej poczęło, jest z Ducha Świętego. «Nadasz Mu imię Jezus, albowiem On zbawi swój lud od jego grzechów». Józef jest posłuszny i czuwa nad Świętą Rodziną.",
      child: {
        prompt: "Kim był Józef dla Maryi i dla Dziecięcia?",
        explain:
          "Józef przyjął Maryję, nadał Dziecięciu imię i osłonił rodzinę, gdy nadeszło niebezpieczeństwo. Nazywa się go opiekunem Świętej Rodziny — nie widzem przy żłóbku.",
        a: "Królem Judei",
        b: "Oblubieńcem Maryi i opiekunem rodziny",
        c: "Arcykapłanem świątyni",
        d: "Jednym z pasterzy nocy",
      },
      adult: {
        prompt: "Co znaczy imię «Jezus» w słowach anioła do Józefa?",
        explain:
          "Jezus znaczy «Pan zbawia» (Mt 1,21). Katechizm przypomina, że w imieniu jest już cała tajemnica (KKK 430 i następne). Rodzi się nie jako ozdoba zimy, lecz jako Zbawiciel.",
        a: "«Pan zbawia»",
        b: "«Gwiazda Wschodu»",
        c: "Tylko «syn cieśli», bez dalszego sensu",
        d: "«Dziedzic Heroda»",
      },
    },
    road: {
      title: "Droga",
      kicker: "Do Betlejem",
      story:
        "Cezar August zarządza spis ludności. Józef idzie z Nazaretu do Betlejem, miasta Dawida: jest z rodu Dawida. Maryja oczekuje dziecka. Droga jest daleka, a na noc miasto ciasne.",
      child: {
        prompt: "Do jakiego miasta szli Maryja i Józef przed narodzeniem Dziecięcia?",
        explain:
          "Do Betlejem, miasta Dawida. Tam prowadził spis. Prorok Micheasz dawno powiedział, że stamtąd wyjdzie władca Izraela.",
        a: "Do Rzymu, do cesarza",
        b: "Do Betlejem",
        c: "Do Jerycha",
        d: "Donikąd: zostali w Nazarecie",
      },
      adult: {
        prompt: "Dlaczego Jezus rodzi się w Betlejem, a nie w Nazarecie, gdzie mieszkała rodzina?",
        explain:
          "Łukasz mówi o spisie i o rodzie Dawida. Micheasz 5,2 wymienia Betlejem. Nazaret pozostanie domem, w którym Jezus wyrośnie — «Nazarejczyk». Boże Narodzenie wiąże się z obietnicą daną Dawidowi.",
        a: "Spis prowadzi ród Dawida do jego własnego miasta — i spełnia się słowo Micheasza",
        b: "Tam stała jedyna świątynia",
        c: "Herod zaprosił ich na ucztę",
        d: "Ewangelia w żaden sposób tego nie wyjaśnia",
      },
    },
    manger: {
      title: "Żłóbek",
      kicker: "Noc Bożego Narodzenia",
      story:
        "W gospodzie nie było miejsca. Maryja porodziła Syna, owinęła Go i położyła w żłobie — karmniku dla zwierząt. Król nieba wchodzi w świat w ciasnym miejscu, wśród słomy. Wiele wieków później święty Franciszek w Greccio ustawi żywą szopkę, aby tę biedę dało się zobaczyć oczami.",
      child: {
        prompt: "Gdzie Maryja położyła nowo narodzonego Jezusa?",
        explain:
          "W żłóbku. Stąd i domowa szopka. Bogu nie było ciasno w słomie. W 1223 roku święty Franciszek ustawił w Greccio żywy żłóbek — aby ludzie nie przywykli do tej nocy.",
        a: "Na złotym tronie w pałacu",
        b: "W żłóbku",
        c: "W łodzi na Jeziorze Galilejskim",
        d: "W koszyku na rzece, jak Mojżesza",
      },
      adult: {
        prompt: "Jak katolicy nazywają szopkę — i skąd zwyczaj jej ustawiania?",
        explain:
          "Szopka to scena żłóbka. Żywą szopkę wiąże się ze świętym Franciszkiem z Asyżu: Greccio, noc Bożego Narodzenia 1223 roku. Choinka może stać obok, ale sercem święta jest Wcielenie w ubóstwie (zob. KKK 525).",
        a: "Scena Bożego Narodzenia; żywa szopka Franciszka w Greccio, 1223",
        b: "Tylko choinka i nic więcej",
        c: "Post przed Wielkanocą",
        d: "Szaty kapłana na pasterce",
      },
    },
    shepherds: {
      title: "Pasterze",
      kicker: "Pierwsza wieść",
      story:
        "W nocy pasterze czuwali przy trzodzie. Anioł powiedział im: «Nie bójcie się. Zwiastuję wam radość wielką, która będzie udziałem całego narodu: dziś w mieście Dawida narodził się wam Zbawiciel, którym jest Chrystus Pan». Znakiem jest Dziecię w żłóbku. Idą i znajdują wszystko, jak im powiedziano.",
      child: {
        prompt: "Kto pierwszy przyszedł do Dziecięcia, usłyszawszy anioła?",
        explain:
          "Pasterze. Wezwano ich wcześniej niż królów. Anioł powiedział, że radość będzie dla całego narodu. Znak był prosty — dziecko w żłóbku.",
        a: "Pasterze",
        b: "Cezar August",
        c: "Uczniowie z Kafarnaum",
        d: "Żołnierze króla Heroda",
      },
      adult: {
        prompt: "Dlaczego Łukasz tak właśnie wyróżnia pasterzy?",
        explain:
          "Pasterzy uważano wtedy często za ludzi z brzegu. Wieść oddaje się najpierw im: zbawienie jest dla wszystkich, począwszy od tych, których łatwo nie zauważyć. To nie sielanka. To cały sens Kościoła.",
        a: "Boże Narodzenie ogłoszono nie pałacowi, lecz ubogim: radość jest dla wszystkich",
        b: "Pasterze byli tajnymi kapłanami świątyni",
        c: "Tylko oni umieli czytać z gwiazd",
        d: "Łukasz sam pasał trzodę tej nocy",
      },
    },
    gloria: {
      title: "Chwała na wysokości",
      kicker: "Razem",
      story:
        "Z aniołem ukazuje się wojsko niebieskie: «Chwała na wysokości Bogu, a na ziemi pokój ludziom dobrej woli». W Adwencie ten hymn na Mszy milczy. W noc Bożego Narodzenia powraca — białe szaty, światło, śpiew.",
      together: {
        prompt:
          "Powiedzcie razem, bez pośpiechu: «Chwała na wysokości Bogu, a na ziemi pokój». Gdy już powiecie, zaznaczcie, że powiedzieliście.",
        explain:
          "Wypowiedzieliście pieśń nocy Bożego Narodzenia. Na Mszy brzmi ona jako Gloria. Pokój tutaj to nie hasło z pocztówki, lecz dar Tego, który leży w żłóbku.",
      },
    },
    name: {
      title: "Imię",
      kicker: "Nie pomylić",
      story:
        "Dziecięciu nadają imię, które anioł wypowiedział jeszcze przed Jego poczęciem: Jezus. Zimą obok stoją inne święta i często się je myli. 8 grudnia to Niepokalane Poczęcie Maryi. 25 grudnia to Narodzenie Pańskie. 1 stycznia to święto Świętej Bożej Rodzicielki Maryi. To różne tajemnice.",
      child: {
        prompt: "Jakie imię nadano Dziecięciu?",
        explain:
          "Jezus — tak polecił anioł. Imię znaczy: Pan zbawia. Tak wołają Go pasterze, rodzina przy stole i Kościół na Mszy.",
        a: "Jezus",
        b: "Mikołaj",
        c: "August",
        d: "Dawid",
      },
      adult: {
        prompt: "Czym Niepokalane Poczęcie różni się od dziewiczego narodzenia Jezusa?",
        explain:
          "8 grudnia: od pierwszej chwili Maryja jest wolna od grzechu pierworodnego (KKK 490–493). Boże Narodzenie jest o Jezusie: został poczęty z Ducha Świętego i narodzony z Dziewicy. Mylą się nawet dorośli. Dziecku wystarczy: Maryja jest Jego Matką, a On jest Synem Bożym.",
        a: "Pierwsze jest o Maryi i grzechu; drugie — o Jezusie, poczętym z Ducha Świętego",
        b: "To dwie nazwy jednego wydarzenia z 25 grudnia",
        c: "Niepokalane Poczęcie znaczy, że Maryja nie miała rodziców",
        d: "Dziewicze narodzenie dotyczy Jana Chrzciciela",
      },
    },
    magi: {
      title: "Mędrcy",
      kicker: "Gwiazda",
      story:
        "Ze Wschodu przychodzą mędrcy: ujrzeli gwiazdę Króla. Uczeni w Piśmie wskazują Betlejem. Gwiazda prowadzi Mędrców do Dziecięcia. Padają na twarz i otwierają dary — złoto, kadzidło i mirrę.",
      child: {
        prompt: "Co prowadziło Mędrców w drodze?",
        explain:
          "Gwiazda. Według tradycji dary są trzy: złoto, kadzidło i mirra. Mędrcy są znakiem, że Jezus przyszedł nie tylko dla jednego narodu.",
        a: "Mapa wydana przez cesarza",
        b: "Gwiazda",
        c: "Rzeka Jordan i nic więcej",
        d: "Głosy pasterzy, słyszane za górami",
      },
      adult: {
        prompt: "Jak tradycyjnie rozumie się złoto, kadzidło i mirrę?",
        explain:
          "Złoto — Królowi, kadzidło — Bogu, mirra — cierpieniu i pogrzebowi. Wykład stary i jasny: w darach widać już Paschę i krzyż. Epifania ukazuje Chrystusa narodom — mędrcy przyszli z daleka.",
        a: "Dla Króla, dla Boga i dla Tego, który będzie cierpiał",
        b: "To po prostu pieniądze na drogę powrotną",
        c: "Złoto dla Maryi, kadzidło dla wołu, mirra dla osła",
        d: "Tak nazywały się trzy gwiazdy, a nie dary",
      },
    },
    nicholas: {
      title: "Święty Mikołaj",
      kicker: "6 grudnia",
      story:
        "6 grudnia Kościół wspomina świętego Mikołaja, biskupa Miry w Licji. Żył w IV wieku i potajemnie pomagał ubogim. Wesoły staruszek z witryny to inna, późniejsza postać. Dawać prezenty wolno. Mieszać biskupa z reklamą — nie: centrum tych tygodni jest żłóbek, nie worek.",
      child: {
        prompt: "Kim był święty Mikołaj?",
        explain:
          "Biskupem, który pomagał ubogim i czynił to po cichu. Prezenty na jego pamiątkę są o miłosierdziu. Boże Narodzenie i tak jest o Jezusie.",
        a: "Biskupem, który pomagał ubogim",
        b: "Reniferem z Północy",
        c: "Sprzedawcą z wielkiego sklepu",
        d: "Jednym z trzech Mędrców",
      },
      adult: {
        prompt: "Jak nie pomylić wspomnienia świętego Mikołaja z reklamowym Santą?",
        explain:
          "6 grudnia to wspomnienie biskupa Mikołaja z Miry, IV wiek. Czerwony reklamowy strój jest o wiele późniejszy, z legend i z handlu. Prezenty są na miejscu. Sercem święta jest Wcielenie, i dziecku można to powiedzieć wprost, stosownie do wieku.",
        a: "Mikołaj to biskup z IV wieku; Santa to późniejsza postać. Centrum jest Chrystus",
        b: "Kościół uczy, że to ten sam człowiek w innym stroju",
        c: "Santę kanonizowano na Soborze Watykańskim II",
        d: "Mikołaja nie było: to tylko bajka XX wieku",
      },
    },
    epiphany: {
      title: "Epifania",
      kicker: "Narodom",
      story:
        "Ryt łaciński obchodzi Boże Narodzenie 25 grudnia, potem dni biegną ku Epifanii — objawieniu Chrystusa narodom, pokłonowi Mędrców. Część chrześcijan wschodnich obchodzi samo Narodzenie 7 stycznia: ich 25 grudnia liczy się według starego kalendarza. Ewangelia jest jedna. Różni się liczenie dni.",
      child: {
        prompt: "Jak nazywa się święto, gdy wspomina się pokłon Mędrców?",
        explain:
          "Epifania znaczy «objawienie». Chrystusa widzą nie tylko pasterze Jego stron, lecz i mędrcy z daleka. W niektórych krajach tego dnia pisze się na drzwiach litery Mędrców.",
        a: "Epifania",
        b: "Środa Popielcowa",
        c: "Zesłanie Ducha Świętego",
        d: "Niedziela Palmowa",
      },
      adult: {
        prompt:
          "Dlaczego część chrześcijan wschodnich obchodzi Boże Narodzenie 7 stycznia, a katolicy łacińscy świętują je 25 grudnia?",
        explain:
          "Kalendarz juliański spóźnia się wobec gregoriańskiego o 13 dni: ich 25 grudnia przypada na świecką datę 7 stycznia. Reformę wprowadził papież Grzegorz XIII w 1582 roku. Katolicy wschodni mogą iść za własnym kalendarzem. Nie ma o co spierać się, czyje Boże Narodzenie jest prawdziwe.",
        a: "Tak przesunął się kalendarz juliański; Ewangelia pozostaje jedna",
        b: "Ponieważ to dwoje różnych dzieci",
        c: "Papież w XX wieku przeniósł święto na styczeń, a potem je cofnął",
        d: "7 stycznia to zawsze data Wielkanocy",
      },
    },
  },
};

export default pack;

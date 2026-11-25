import type { LangPack } from "@/game/i18n/types";

const pack: LangPack = {
  ui: {
    kicker: "Katholische Weihnacht",
    appTitle: "Yasli",
    lead: "Ein Telefon für die ganze Familie. Kinder und Erwachsene gehen mit derselben Geschichte zur Krippe — und mit verschiedenen Fragen.",
    family: "Familienweg",
    solo: "Allein spielen",
    how: "So wird gespielt",
    note: "Der kurze Weg führt in wenigen Minuten zur Krippe. Der Abendweg geht vom Advent bis zur Erscheinung des Herrn.",
    author: "Autor — {name}",
    howTitle: "So wird gespielt",
    steps: [
      {
        title: "Ein Telefon",
        text: "Vor der Frage gibt man das Gerät an den weiter, der an der Reihe ist. So schaut niemand die Antworten ab. Kann das Kind noch nicht lesen, liest man die Frage vor, und es wählt selbst.",
      },
      {
        title: "Zwei Ebenen",
        text: "Für das Kind kurze Fragen zu Krippe, Stern und Namen. Für den Erwachsenen das, worüber man am Tisch streitet: Kalender, Unbefleckte Empfängnis, Nikolaus und der Weihnachtsmann, der Sinn der Gaben.",
      },
      {
        title: "Irren ist keine Schande",
        text: "Die Geschichte hält nicht an. Nach der Antwort gibt es immer eine Erklärung — die sollte man vorlesen. Der Stern gilt der richtigen Antwort, nicht dem Tempo.",
      },
      {
        title: "Zwei Längen",
        text: "Der kurze Weg hat sechs Stationen, von der Verkündigung bis zur Erscheinung des Herrn. Der Abendweg zwölf: Advent, Josef, der Hymnus «Ehre sei Gott», der heilige Nikolaus.",
      },
      {
        title: "Fernbedienung und Stimme",
        text: "Am Fernseher wandern die Pfeile der Fernbedienung über die Tasten, OK wählt, «Zurück» geht zurück. Alice drückt die Taste nach den Worten: «Familienweg». Den Namen am Feld kann man laut sagen.",
      },
    ],
    howFoot:
      "Das ist ein Abend zu Hause, kein Ersatz für die Messe und keine Pfarrkatechese. Am Ende steht ein kurzes Gebet, das ihr gemeinsam lesen könnt.",
    versionLabel: "Version {version}",
    who: "Wer geht mit",
    whoNote: "Legt fest, wer welche Frage bekommt. Die Namen erscheinen, wenn das Telefon weitergegeben wird.",
    short: "Kurz",
    shortNote: "6 Stationen",
    evening: "Abend",
    eveningNote: "12 Stationen",
    player: "Spieler {n}",
    removePlayer: "Spieler {name} entfernen",
    nameLabel: "Name von Spieler {n}",
    child: "Kind",
    adult: "Erwachsener",
    nameError: "Jeder braucht einen Namen, und sei er kurz.",
    add: "Noch jemand",
    start: "Aufbrechen",
    back: "Zurück",
    togetherNote: "Dieser Zug gehört allen. Schaut gemeinsam hin: es gibt nichts zu erspähen.",
    passPhone: "Gebt das Telefon weiter. Die Frage öffnet sich erst nach dem Tippen.",
    ready: "Ich bin bereit — öffnen",
    togetherReady: "Wir schauen gemeinsam",
    answers: "Es antwortet {name} · {role}.",
    readAloud: "Vorlesen ist erlaubt.",
    weSaid: "Wir haben es gesagt",
    right: "Richtig",
    wrong: "Nicht ganz",
    remember: "Merken wir uns",
    commonStar: "Gemeinsamer Stern",
    next: "Weiter",
    toManger: "Zur Krippe",
    stars: "Sterne an der Krippe: {n}",
    leaveTitle: "Den Weg abbrechen?",
    leaveNote: "Die Sterne dieses Spiels werden nicht gespeichert. Der Hausrekord bleibt.",
    stay: "Bleiben",
    home: "Zur Startseite",
    mute: "Ton aus",
    unmute: "Ton an",
    sayName: "Namen sagen",
    shortPath: "Kurzer Weg",
    eveningPath: "Abendweg",
    gathered: "Die Krippe steht",
    withAngels: "mit dem Lob der Engel",
    again: "Noch einmal spielen",
    gospelRef: "Lk 2,10–11",
    best: "Auf diesem Telefon: kurzer Weg {short}, Abend {evening}. Gespielte Partien: {played}.",
    language: "Sprache",
    musicCredit:
      "Weihnachtliche Musik aus der Gemeinfreiheit von Wikimedia Commons (United States Air Force Band und eine gemeinfreie Klavieraufnahme von Joy to the World).",
    defaultChild: "Kind",
    defaultAdult: "Erwachsener",
  },
  gospel:
    "«Fürchtet euch nicht, denn ich verkünde euch eine große Freude, die dem ganzen Volk zuteilwerden soll: Heute ist euch in der Stadt Davids der Retter geboren; er ist der Christus, der Herr.»",
  prayer:
    "Herr Jesus, du bist als Kind in der Krippe zu uns gekommen. Segne unser Haus in diesen heiligen Tagen. Lehre uns zu teilen, wie der heilige Nikolaus, und dich zu suchen, wie die Hirten und die Weisen. Amen.",
  stations: {
    advent: {
      title: "Advent",
      kicker: "Erwartung",
      story:
        "Der Advent ist noch nicht Weihnachten, sondern ein stilles Warten. Vier Wochen lang bereitet die Kirche das Herz vor: weniger Lärm, mehr Hoffnung. Am Kranz werden Kerzen entzündet — gewöhnlich drei violette und eine rosa, am Sonntag Gaudete, «Freut euch».",
      child: {
        prompt: "Wie viele Hauptkerzen stehen am Adventskranz?",
        explain:
          "Vier Kerzen, vier Wochen des Wartens. Die rosa Kerze wird am dritten Sonntag angezündet: die Freude ist schon nah. Manchmal stellt man am Festtag selbst eine fünfte, weiße dazu — die Christuskerze.",
        a: "Zwei — nur für den Sonntag",
        b: "Vier — eine für jede Woche",
        c: "Zwölf — wie die Tage nach Weihnachten",
        d: "Sieben — wie die Wochentage",
      },
      adult: {
        prompt: "Warum singt man in der Sonntagsmesse des Advents gewöhnlich nicht das «Ehre sei Gott»?",
        explain:
          "Das «Ehre sei Gott» ist der Hymnus der Engel in der Heiligen Nacht. Im Advent und in der Fastenzeit wird er im römischen Ritus in der Regel nicht gesungen, damit er in der Weihnachtsnacht neu erklingt. Zu Hause darf man sich freuen: die Liturgie schweigt, nicht die Familie.",
        a: "Dieser Hymnus wird nur zu Ostern gesungen",
        b: "Man hebt ihn für Weihnachten auf, und er kehrt in der Heiligen Nacht zurück",
        c: "Das Zweite Vatikanische Konzil hat ihn abgeschafft",
        d: "Nur Kinder singen ihn bei der Feier",
      },
    },
    annunciation: {
      title: "Verkündigung",
      kicker: "Nazaret",
      story:
        "In Nazaret grüßt der Engel Gabriel Maria: «Sei gegrüßt, du Begnadete». Sie hört, dass sie einen Sohn gebären und ihn Jesus nennen wird. Maria antwortet: «Mir geschehe nach deinem Wort». Mit diesem Ja beginnt Weihnachten.",
      child: {
        prompt: "Wer brachte Maria die Botschaft, dass sie einen Sohn gebären werde?",
        explain:
          "Gabriel ist der Bote Gottes. Maria vertraute und sagte Ja. Diesen Tag feiert die Kirche am 25. März: Mariä Verkündigung.",
        a: "Ein Hirt vom Feld",
        b: "Der Erzengel Gabriel",
        c: "König Herodes",
        d: "Ein Weiser aus dem Osten",
      },
      adult: {
        prompt: "Wie verbindet das Kirchenjahr Verkündigung und Weihnachten?",
        explain:
          "Mariä Verkündigung ist der 25. März, Weihnachten der 25. Dezember, neun Monate später. So ist die Liturgie gebaut. Das Evangelium liefert uns keine Geburtsurkunde aus Bethlehem: das Datum ist die Sprache des Kirchenjahres, kein Protokoll der Entbindungsstation.",
        a: "Weihnachten liegt neun Monate nach dem 25. März",
        b: "Beide Feste fallen immer auf denselben Tag",
        c: "Die Verkündigung feiert man am 6. Januar",
        d: "Dazwischen liegen genau vierzig Fastentage",
      },
    },
    visitation: {
      title: "Heimsuchung",
      kicker: "Elisabet",
      story:
        "Maria geht zu ihrer Verwandten Elisabet. Noch bevor diese den Bericht gehört hat, ruft sie: «Gesegnet bist du unter den Frauen». Maria antwortet mit dem Lied: «Meine Seele preist die Größe des Herrn». Die Freude von Weihnachten ist von Anfang an eine Freude der Familie.",
      child: {
        prompt: "Zu wem ging Maria bald nach der Botschaft des Engels?",
        explain:
          "Zu Elisabet, die ebenfalls ein Kind erwartete. Zwei Mütter begegneten sich noch vor der Krippe. In dieser Geschichte teilt man die Freude, man behält sie nicht für sich.",
        a: "Zu Elisabet",
        b: "Zur Königin nach Rom",
        c: "Sofort zu den Hirten auf dem Feld",
        d: "Zu den Weisen in den Osten",
      },
      adult: {
        prompt: "Wie hieß der Sohn von Elisabet und Zacharias, und wer wird er sein?",
        explain:
          "Johannes wird am Jordan taufen und auf Jesus weisen: «Seht, das Lamm Gottes». Die Begegnung der beiden Mütter verbindet die Krippe schon mit dem Beginn des öffentlichen Wirkens Christi.",
        a: "Johannes der Täufer, der Vorläufer des Herrn",
        b: "Lazarus aus Betanien",
        c: "Simeon, der dem Kind im Tempel begegnen wird",
        d: "Jakobus, der Sohn des Zebedäus",
      },
    },
    joseph: {
      title: "Josef",
      kicker: "Hüter",
      story:
        "Josef, der Verlobte Marias, ist ein gerechter Mann. Im Traum sagt der Engel: Fürchte dich nicht, Maria zu dir zu nehmen; denn das in ihr Gezeugte ist vom Heiligen Geist. «Du sollst ihm den Namen Jesus geben; denn er wird sein Volk von seinen Sünden erlösen». Josef gehorcht und behütet die Heilige Familie.",
      child: {
        prompt: "Wer war Josef für Maria und das Kind?",
        explain:
          "Josef nahm Maria auf, gab dem Kind den Namen und barg die Familie, als es gefährlich wurde. Man nennt ihn den Hüter der Heiligen Familie — keinen Zuschauer an der Krippe.",
        a: "Der König von Judäa",
        b: "Der Verlobte Marias und der Hüter der Familie",
        c: "Der Hohepriester des Tempels",
        d: "Einer der Hirten in der Nacht",
      },
      adult: {
        prompt: "Was bedeutet der Name «Jesus» in den Worten des Engels an Josef?",
        explain:
          "Jesus heißt «Gott rettet» (Mt 1,21). Der Katechismus erinnert: im Namen liegt schon das ganze Geheimnis (KKK 430 und folgende). Er wird nicht als Schmuck des Winters geboren, sondern als Retter.",
        a: "«Gott rettet»",
        b: "«Stern des Ostens»",
        c: "Nur «Sohn des Zimmermanns», ohne weiteren Sinn",
        d: "«Erbe des Herodes»",
      },
    },
    road: {
      title: "Der Weg",
      kicker: "Nach Bethlehem",
      story:
        "Kaiser Augustus lässt eine Volkszählung ansetzen. Josef zieht von Nazaret nach Bethlehem, der Stadt Davids: er ist aus dem Haus Davids. Maria erwartet das Kind. Der Weg ist weit, und die Stadt ist in der Nacht eng.",
      child: {
        prompt: "In welche Stadt gingen Maria und Josef vor der Geburt des Kindes?",
        explain:
          "Nach Bethlehem, der Stadt Davids. Dorthin führte die Volkszählung. Der Prophet Micha hatte längst gesagt, dass von dort der Herrscher Israels kommen werde.",
        a: "Nach Rom, zum Kaiser",
        b: "Nach Bethlehem",
        c: "Nach Jericho",
        d: "Nirgendwohin: sie blieben in Nazaret",
      },
      adult: {
        prompt: "Warum wird Jesus in Bethlehem geboren und nicht in Nazaret, wo die Familie lebte?",
        explain:
          "Lukas spricht von der Volkszählung und vom Geschlecht Davids. Micha 5,1 nennt Bethlehem. Nazaret bleibt das Haus, in dem Jesus aufwächst — der «Nazarener». Weihnachten hängt an der Verheißung an David.",
        a: "Die Volkszählung führt das Geschlecht Davids in seine Stadt, und das Wort Michas trifft ein",
        b: "Dort stand der einzige Tempel",
        c: "Herodes hatte sie zu einem Fest geladen",
        d: "Das Evangelium erklärt das nirgends",
      },
    },
    manger: {
      title: "Die Krippe",
      kicker: "Heilige Nacht",
      story:
        "In der Herberge war kein Platz. Maria gebar den Sohn, wickelte ihn in Windeln und legte ihn in eine Krippe, die Futterraufe des Viehs. Der König des Himmels tritt in die Enge der Welt, mitten ins Stroh. Viele Jahrhunderte später wird der heilige Franziskus in Greccio eine lebende Krippe aufstellen, damit man diese Armut mit Augen sieht.",
      child: {
        prompt: "Wohin legte Maria den neugeborenen Jesus?",
        explain:
          "In die Krippe. Daher kommt auch die Krippe im Haus. Gott war es im Stroh nicht zu eng. 1223 stellte der heilige Franziskus in Greccio eine lebende Krippe auf, damit die Menschen sich an diese Nacht nicht gewöhnen.",
        a: "Auf einen goldenen Thron im Palast",
        b: "In die Krippe",
        c: "In ein Boot auf dem See Gennesaret",
        d: "In einen Korb auf dem Fluss, wie Mose",
      },
      adult: {
        prompt: "Was nennen Katholiken die Krippe, und woher kommt der Brauch, sie aufzustellen?",
        explain:
          "Die Krippe ist die Szene der Futterraufe. Die lebende Krippe verbindet man mit dem heiligen Franz von Assisi: Greccio, Weihnachtsnacht 1223. Der Baum darf daneben stehen, doch das Herz des Festes ist die Menschwerdung in der Armut (vgl. KKK 525).",
        a: "Die Szene der Geburt; die lebende Krippe des Franziskus in Greccio, 1223",
        b: "Nur den Baum, und sonst nichts",
        c: "Das Fasten vor Ostern",
        d: "Das Gewand des Priesters in der Mitternachtsmesse",
      },
    },
    shepherds: {
      title: "Die Hirten",
      kicker: "Die erste Botschaft",
      story:
        "Nachts hüteten Hirten die Herde. Der Engel sagte ihnen: «Fürchtet euch nicht. Ich verkünde euch eine große Freude, die dem ganzen Volk zuteilwerden soll: Heute ist euch in der Stadt Davids der Retter geboren; er ist der Christus, der Herr». Das Zeichen: ein Kind in der Krippe. Sie gehen und finden alles, wie es ihnen gesagt wurde.",
      child: {
        prompt: "Wer kam als Erster zum Kind, nachdem er den Engel gehört hatte?",
        explain:
          "Die Hirten. Sie wurden vor den Königen gerufen. Der Engel sagte: die Freude gilt dem ganzen Volk. Das Zeichen war einfach — ein Kind in der Krippe.",
        a: "Die Hirten",
        b: "Kaiser Augustus",
        c: "Die Jünger aus Kafarnaum",
        d: "Die Soldaten des Königs Herodes",
      },
      adult: {
        prompt: "Warum hebt Lukas gerade die Hirten so hervor?",
        explain:
          "Hirten galten damals oft als Menschen am Rand. Die Botschaft geht zuerst an sie: das Heil ist für alle, beginnend bei denen, die man leicht übersieht. Das ist keine Idylle, sondern der ganze Sinn der Kirche.",
        a: "Weihnachten wird nicht dem Palast verkündet, sondern den Armen: die Freude ist für alle",
        b: "Die Hirten waren geheime Priester des Tempels",
        c: "Nur sie konnten die Sterne lesen",
        d: "Lukas selbst hütete in jener Nacht die Herde",
      },
    },
    gloria: {
      title: "Ehre sei Gott",
      kicker: "Gemeinsam",
      story:
        "Mit dem Engel erscheint das himmlische Heer: «Ehre sei Gott in der Höhe und Friede auf Erden den Menschen seiner Gnade». Im Advent schweigt dieser Hymnus in der Messe. In der Heiligen Nacht kehrt er zurück — weiße Gewänder, Licht, Gesang.",
      together: {
        prompt:
          "Sagt gemeinsam, ohne Eile: «Ehre sei Gott in der Höhe und Friede auf Erden». Wenn ihr es gesprochen habt, merkt an, dass ihr es gesagt habt.",
        explain:
          "Ihr habt das Lied der Heiligen Nacht gesprochen. In der Messe erklingt es als Gloria. Der Friede hier ist kein Spruch auf einer Karte, sondern die Gabe dessen, der in der Krippe liegt.",
      },
    },
    name: {
      title: "Der Name",
      kicker: "Nicht verwechseln",
      story:
        "Dem Kind gibt man den Namen, den der Engel schon vor der Empfängnis gesagt hat: Jesus. Im Winter liegen auch andere Feste nahe, und man verwechselt sie oft. Der 8. Dezember ist die Unbefleckte Empfängnis Mariens. Der 25. Dezember ist die Geburt des Herrn. Der 1. Januar ist Maria, Mutter Gottes. Das sind verschiedene Geheimnisse.",
      child: {
        prompt: "Welchen Namen gab man dem Kind?",
        explain:
          "Jesus — so hatte es der Engel geboten. Der Name bedeutet: Gott rettet. So nennen ihn die Hirten, die Familie am Tisch und die Kirche in der Messe.",
        a: "Jesus",
        b: "Nikolaus",
        c: "Augustus",
        d: "David",
      },
      adult: {
        prompt: "Wodurch unterscheidet sich die Unbefleckte Empfängnis von der jungfräulichen Geburt Jesu?",
        explain:
          "Am 8. Dezember: Maria ist vom ersten Augenblick an frei von der Erbsünde (KKK 490–493). Weihnachten handelt von Jesus: Er ist vom Heiligen Geist empfangen und von der Jungfrau geboren. Auch Erwachsene verwechseln das. Dem Kind genügt: Maria ist seine Mutter, er ist der Sohn Gottes.",
        a: "Die erste handelt von Maria und der Sünde; die zweite von Jesus, empfangen vom Heiligen Geist",
        b: "Es sind zwei Namen für dasselbe Ereignis am 25. Dezember",
        c: "Unbefleckte Empfängnis heißt, dass Maria keine Eltern hatte",
        d: "Die jungfräuliche Geburt betrifft Johannes den Täufer",
      },
    },
    magi: {
      title: "Die Sterndeuter",
      kicker: "Der Stern",
      story:
        "Aus dem Osten kommen Weise: sie haben den Stern des Königs gesehen. Die Schriftgelehrten weisen auf Bethlehem. Der Stern führt die Sterndeuter zum Kind. Sie fallen nieder und öffnen die Gaben — Gold, Weihrauch und Myrrhe.",
      child: {
        prompt: "Was führte die Sterndeuter auf dem Weg?",
        explain:
          "Der Stern. Die Gaben sind nach der Überlieferung drei: Gold, Weihrauch und Myrrhe. Die Sterndeuter sind das Zeichen, dass Jesus nicht nur für ein einziges Volk gekommen ist.",
        a: "Eine Karte, die der Kaiser ausgegeben hatte",
        b: "Der Stern",
        c: "Der Jordan, und sonst nichts",
        d: "Die Stimme der Hirten, die man über die Berge hörte",
      },
      adult: {
        prompt: "Wie versteht man Gold, Weihrauch und Myrrhe nach der Überlieferung?",
        explain:
          "Gold dem König, Weihrauch Gott, Myrrhe dem Leiden und dem Begräbnis. Die Deutung ist alt und klar: in den Gaben zeigen sich schon Ostern und das Kreuz. Die Erscheinung des Herrn zeigt Christus den Völkern — die Weisen kamen von weit her.",
        a: "Dem König, Gott und dem, der leiden wird",
        b: "Es ist nur Geld für den Rückweg",
        c: "Gold für Maria, Weihrauch für den Ochsen, Myrrhe für den Esel",
        d: "So hießen drei Sterne, nicht die Gaben",
      },
    },
    nicholas: {
      title: "Nikolaus",
      kicker: "6. Dezember",
      story:
        "Am 6. Dezember gedenkt die Kirche des heiligen Nikolaus, Bischof von Myra in Lykien. Er lebte im 4. Jahrhundert und half den Armen im Verborgenen. Der fröhliche alte Mann im Schaufenster ist ein anderes, späteres Bild. Schenken darf man. Den Bischof mit der Werbung zu verwechseln, lohnt nicht: die Mitte dieser Wochen ist die Krippe, nicht der Sack.",
      child: {
        prompt: "Wer war der heilige Nikolaus?",
        explain:
          "Ein Bischof, der den Armen half und es still tat. Geschenke in seinem Gedenken gelten der Barmherzigkeit. Weihnachten bleibt dennoch das Fest Jesu.",
        a: "Ein Bischof, der den Armen half",
        b: "Ein Rentier aus dem Norden",
        c: "Ein Verkäufer aus einem großen Laden",
        d: "Einer der drei Weisen",
      },
      adult: {
        prompt: "Wie vermischt man das Gedenken des heiligen Nikolaus nicht mit dem Werbe-Weihnachtsmann?",
        explain:
          "Der 6. Dezember ist das Gedenken des Bischofs Nikolaus von Myra, 4. Jahrhundert. Der rote Werbeanzug ist viel später, aus Sagen und aus dem Handel. Geschenke sind am Platz. Das Herz des Festes ist die Menschwerdung, und das kann man dem Kind klar sagen, seinem Alter gemäß.",
        a: "Nikolaus ist ein Bischof des 4. Jahrhunderts; der Weihnachtsmann ein spätes Bild. Die Mitte ist Christus",
        b: "Die Kirche lehrt, es sei derselbe Mensch in anderer Kleidung",
        c: "Der Weihnachtsmann wurde auf dem Zweiten Vatikanischen Konzil heiliggesprochen",
        d: "Nikolaus hat es nicht gegeben: das ist nur ein Märchen des 20. Jahrhunderts",
      },
    },
    epiphany: {
      title: "Epiphanie",
      kicker: "Den Völkern",
      story:
        "Der lateinische Ritus feiert Weihnachten am 25. Dezember; danach folgen die Tage bis zur Erscheinung des Herrn — Christus wird den Völkern gezeigt, in der Anbetung der Weisen. Ein Teil der östlichen Christen feiert Weihnachten selbst am 7. Januar: ihr 25. Dezember wird nach dem alten Kalender gezählt. Das Evangelium ist eines. Verschieden ist die Zählung der Tage.",
      child: {
        prompt: "Wie heißt das Fest, an dem man die Anbetung der Weisen begeht?",
        explain:
          "Epiphanie, die Erscheinung des Herrn, heißt «Erscheinung». Christus sehen nicht nur die Hirten seines Landes, sondern auch die Weisen von weit her. In manchen Ländern schreibt man an diesem Tag die Buchstaben der Weisen an die Türen.",
        a: "Epiphanie",
        b: "Aschermittwoch",
        c: "Pfingsten",
        d: "Palmsonntag",
      },
      adult: {
        prompt:
          "Warum feiert ein Teil der östlichen Christen Weihnachten am 7. Januar, die Katholiken lateinischen Ritus aber am 25. Dezember?",
        explain:
          "Der julianische Kalender liegt 13 Tage hinter dem gregorianischen: ihr 25. Dezember fällt auf den bürgerlichen 7. Januar. Die Reform führte Papst Gregor XIII. im Jahr 1582 ein. Katholiken der Ostkirchen können ihrem Kalender folgen. Darüber zu streiten, wessen Weihnachten das echte ist, hat keinen Sinn.",
        a: "So ist der julianische Kalender verschoben; das Evangelium bleibt dabei eines",
        b: "Weil es zwei verschiedene Kinder sind",
        c: "Der Papst hat das Fest im 20. Jahrhundert auf den Januar verlegt und wieder zurückgeholt",
        d: "Der 7. Januar ist immer das Datum von Ostern",
      },
    },
  },
};

export default pack;

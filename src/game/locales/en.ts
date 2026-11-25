import type { LangPack } from "@/game/i18n/types";

const pack: LangPack = {
  ui: {
    kicker: "Catholic Christmas",
    appTitle: "Yasli",
    lead: "One phone for the whole family. Children and adults walk to the crib with one story — and different questions.",
    family: "Family path",
    solo: "Play alone",
    how: "How to play",
    note: "The short path reaches the manger in a few minutes. The evening path runs from Advent to Epiphany.",
    author: "Author — {name}",
    howTitle: "How to play",
    steps: [
      {
        title: "One phone",
        text: "Before a question, pass the phone to the person whose turn it is, so no one peeks at the answer. If a child cannot read yet, read the question aloud and let the child choose.",
      },
      {
        title: "Two levels",
        text: "A child gets short questions about the manger, the star, and the name. An adult gets what people argue about at the table: the calendar, the Immaculate Conception, Nicholas and Santa, the meaning of the gifts.",
      },
      {
        title: "A wrong answer is not shame",
        text: "The story does not stop. After every answer there is an explanation — that is the part worth reading aloud. A star is given for a right answer, not for speed.",
      },
      {
        title: "Two lengths",
        text: "The short path is six stations, from the Annunciation to Epiphany. The evening path is twelve: Advent, Joseph, the hymn Gloria, Saint Nicholas.",
      },
      {
        title: "Remote and voice",
        text: "On a television the remote arrows move across the buttons, OK selects, and Back returns. Voice presses a button by the words on it. A name beside the field can be spoken aloud.",
      },
    ],
    howFoot:
      "This is a family evening at home, not a substitute for Mass and not a parish catechism. At the end there is a short prayer you can read together.",
    versionLabel: "Version {version}",
    who: "Who is going",
    whoNote: "Mark who gets which question. Names appear when it is time to pass the phone.",
    short: "Short",
    shortNote: "6 stations",
    evening: "Evening",
    eveningNote: "12 stations",
    player: "Player {n}",
    removePlayer: "Remove player {name}",
    nameLabel: "Name of player {n}",
    child: "Child",
    adult: "Adult",
    nameError: "Everyone needs a name — even a short one.",
    add: "Add someone",
    start: "Set out",
    back: "Back",
    togetherNote: "This turn is shared. Look together — there is nothing to peek at.",
    passPhone: "Pass the phone. The question opens only after you tap.",
    ready: "I’m ready — open",
    togetherReady: "We look together",
    answers: "{name} answers · {role}.",
    readAloud: "You may read it aloud.",
    weSaid: "We said it",
    right: "Right",
    wrong: "Not that",
    remember: "Let us remember",
    commonStar: "A shared star",
    next: "Next",
    toManger: "To the manger",
    stars: "Stars at the manger: {n}",
    leaveTitle: "Leave the path?",
    leaveNote: "Stars from this game will not be saved. The record at home will stay.",
    stay: "Stay",
    home: "Home",
    mute: "Turn sound off",
    unmute: "Turn sound on",
    sayName: "Say the name",
    shortPath: "Short path",
    eveningPath: "Evening path",
    gathered: "The manger is complete",
    withAngels: "together with the angels’ glory",
    again: "Play again",
    gospelRef: "Lk 2:10–11",
    best: "On this phone: short path {short}, evening {evening}. Games played: {played}.",
    language: "Language",
    musicCredit:
      "Music is public domain: the United States Air Force Band, the United States Army Band, and a piano of Joy to the World, via Wikimedia Commons.",
    defaultChild: "Child",
    defaultAdult: "Adult",
  },
  gospel:
    "“Do not be afraid; I bring you good news of great joy that will be for all the people: for today in the city of David a Savior has been born for you, who is Christ the Lord.”",
  prayer:
    "Lord Jesus, You came to us as a child in the manger. Bless our home in these holy days. Teach us to share as Saint Nicholas did, and to seek You as the shepherds and the Magi did. Amen.",
  stations: {
    advent: {
      title: "Advent",
      kicker: "Waiting",
      story:
        "Advent is not yet Christmas, but a quiet waiting. For four weeks the Church prepares the heart: less noise, more hope. Candles are lit on the wreath — usually three violet and one rose, on Gaudete Sunday, “Rejoice.”",
      child: {
        prompt: "How many principal candles are on an Advent wreath?",
        explain:
          "Four candles are four weeks of waiting. The rose candle is lit on the third Sunday: joy is already near. Sometimes a fifth, white candle — the Christ candle — is set on the feast itself.",
        a: "Two — only for Sunday",
        b: "Four — one for each week",
        c: "Twelve — like the days after Christmas",
        d: "Seven — like the days of the week",
      },
      adult: {
        prompt: "Why is “Glory to God in the highest” usually not sung at Sunday Mass in Advent?",
        explain:
          "The Gloria is the angels’ hymn from Christmas night. In the Roman Rite it is, as a rule, not sung in Advent or Lent, so that it may sound new on Christmas night. At home you may still rejoice: it is the liturgy that keeps silence, not the family.",
        a: "This hymn is sung only at Easter",
        b: "It is kept for Christmas, and it returns on the feast night",
        c: "It was abolished at the Second Vatican Council",
        d: "Only children sing it at a school pageant",
      },
    },
    annunciation: {
      title: "The Annunciation",
      kicker: "Nazareth",
      story:
        "In Nazareth the angel Gabriel greets Mary: “Hail, full of grace.” She hears that she will bear a Son and name him Jesus. Mary answers: “Let it be done to me according to your word.” Christmas begins with this “yes.”",
      child: {
        prompt: "Who brought Mary the news that she would bear a Son?",
        explain:
          "Gabriel is God’s messenger. Mary trusted and said “yes.” The Church keeps this day on 25 March — the Annunciation.",
        a: "A shepherd from the fields",
        b: "The Archangel Gabriel",
        c: "King Herod",
        d: "A Magus from the East",
      },
      adult: {
        prompt: "How does the Church’s year link the Annunciation and Christmas?",
        explain:
          "The Annunciation is 25 March; Christmas is 25 December, nine months later. That is how the liturgy is built. The Gospel does not give us a calendar note from Bethlehem: the date is the language of the Church’s year, not a hospital birth record.",
        a: "Christmas falls nine months after 25 March",
        b: "Both feasts always fall on the same day",
        c: "The Annunciation is kept on 6 January",
        d: "Exactly forty days of fasting lie between them",
      },
    },
    visitation: {
      title: "The Visitation",
      kicker: "Elizabeth",
      story:
        "Mary goes to her kinswoman Elizabeth. Before she has even heard the story out, Elizabeth cries: “Blessed are you among women.” Mary answers with a song: “My soul magnifies the Lord.” The joy of Christmas is a family joy from the very beginning.",
      child: {
        prompt: "Whom did Mary go to see soon after the angel’s message?",
        explain:
          "Elizabeth, who was also waiting for a child. Two mothers met before the manger. In this story joy is shared, not kept to oneself.",
        a: "Elizabeth",
        b: "A queen in Rome",
        c: "Straight to the shepherds in the fields",
        d: "The Magi in the East",
      },
      adult: {
        prompt: "What was the name of the son of Elizabeth and Zechariah — and who would he become?",
        explain:
          "John will baptize at the Jordan and point to Jesus: “Behold the Lamb of God.” The meeting of the two mothers already joins the manger to the beginning of Christ’s public ministry.",
        a: "John the Baptist, the forerunner of the Lord",
        b: "Lazarus of Bethany",
        c: "Simeon, who will meet the Child in the Temple",
        d: "James, the son of Zebedee",
      },
    },
    joseph: {
      title: "Joseph",
      kicker: "Guardian",
      story:
        "Joseph, Mary’s betrothed, was a righteous man. In a dream an angel says: do not be afraid to take Mary, for what is conceived is of the Holy Spirit. “You shall name him Jesus, for he will save his people from their sins.” Joseph obeys and watches over the Holy Family.",
      child: {
        prompt: "Who was Joseph for Mary and the Child?",
        explain:
          "Joseph took Mary, gave the Child his name, and sheltered the family when danger came. He is called the guardian of the Holy Family — not a bystander at the manger.",
        a: "King of Judea",
        b: "Mary’s betrothed and the guardian of the family",
        c: "High priest of the Temple",
        d: "One of the shepherds of the night",
      },
      adult: {
        prompt: "What does the name “Jesus” mean in the angel’s words to Joseph?",
        explain:
          "Jesus means “the Lord saves” (Mt 1:21). The Catechism recalls that the whole mystery is already in the name (CCC 430 and following). He is born not as a decoration for winter, but as the Savior.",
        a: "“The Lord saves”",
        b: "“Star of the East”",
        c: "Only “the carpenter’s son,” with no further meaning",
        d: "“Heir of Herod”",
      },
    },
    road: {
      title: "The Road",
      kicker: "To Bethlehem",
      story:
        "Caesar Augustus orders a census. Joseph goes from Nazareth to Bethlehem, the city of David: he is of the house of David. Mary is expecting a child. The road is long, and by night the city is crowded.",
      child: {
        prompt: "To which city did Mary and Joseph travel before the Child was born?",
        explain:
          "To Bethlehem, the city of David. The census led them there. The prophet Micah had long said that the ruler of Israel would come from there.",
        a: "To Rome, to the emperor",
        b: "To Bethlehem",
        c: "To Jericho",
        d: "Nowhere: they stayed in Nazareth",
      },
      adult: {
        prompt: "Why is Jesus born in Bethlehem, and not in Nazareth, where the family lived?",
        explain:
          "Luke speaks of the census and of the line of David. Micah 5:2 names Bethlehem. Nazareth will remain the home where Jesus grows up — “the Nazarene.” Christmas is tied to the promise made to David.",
        a: "The census brings the house of David to its own city — and Micah’s word is fulfilled",
        b: "The only Temple stood there",
        c: "Herod invited them to a feast",
        d: "The Gospel does not explain this at all",
      },
    },
    manger: {
      title: "The Manger",
      kicker: "Christmas night",
      story:
        "There was no room at the inn. Mary bore her Son, wrapped him, and laid him in a manger — a feeding trough for the animals. The King of heaven enters the world in a tight place, among the straw. Many centuries later Saint Francis at Greccio will set a living crib, so that this poverty can be seen with the eyes.",
      child: {
        prompt: "Where did Mary lay the newborn Jesus?",
        explain:
          "In a manger. That is where the household crib comes from. God was not too great for the straw. In 1223 Saint Francis set a living manger at Greccio — so that people would not grow used to this night.",
        a: "On a golden throne in a palace",
        b: "In a manger",
        c: "In a boat on the Sea of Galilee",
        d: "In a basket on the river, like Moses",
      },
      adult: {
        prompt: "What do Catholics call the Nativity scene — and where does the custom of setting one come from?",
        explain:
          "The crèche is the scene of the manger. The living crib is linked with Saint Francis of Assisi: Greccio, Christmas night 1223. A tree may stand beside it, but the heart of the feast is the Incarnation in poverty (see CCC 525).",
        a: "The Christmas scene; Francis’s living crib at Greccio, 1223",
        b: "Only the Christmas tree, and nothing else",
        c: "The fast before Easter",
        d: "The vestments of the priest at Midnight Mass",
      },
    },
    shepherds: {
      title: "The Shepherds",
      kicker: "The first news",
      story:
        "At night the shepherds were keeping watch over their flock. An angel said to them: “Do not be afraid. I bring you good news of great joy that will be for all the people: today in the city of David a Savior has been born for you, who is Christ the Lord.” The sign is a Child in a manger. They go and find everything as they were told.",
      child: {
        prompt: "Who came first to the Child after hearing the angel?",
        explain:
          "The shepherds. They were called before kings. The angel said the joy would be for all the people. The sign was simple — a child in a manger.",
        a: "The shepherds",
        b: "Caesar Augustus",
        c: "The disciples from Capernaum",
        d: "King Herod’s soldiers",
      },
      adult: {
        prompt: "Why does Luke single out the shepherds in particular?",
        explain:
          "Shepherds were often counted among people on the edge. The news is given to them first: salvation is for everyone, beginning with those who are easy to overlook. This is not a pastoral idyll. It is the whole meaning of the Church.",
        a: "Christmas is announced not to the palace, but to the poor: the joy is for everyone",
        b: "The shepherds were secret priests of the Temple",
        c: "Only they knew how to read the stars",
        d: "Luke himself was herding the flock that night",
      },
    },
    gloria: {
      title: "Glory in the Highest",
      kicker: "Together",
      story:
        "With the angel appears the heavenly host: “Glory to God in the highest, and on earth peace to people of good will.” In Advent this hymn is silent at Mass. On Christmas night it returns — white vestments, light, singing.",
      together: {
        prompt:
          "Say together, without hurrying: “Glory to God in the highest, and on earth peace.” When you have said it, mark that you have spoken.",
        explain:
          "You have spoken the song of Christmas night. At Mass it sounds as the Gloria. Peace here is not a slogan on a card, but the gift of the One who lies in the manger.",
      },
    },
    name: {
      title: "The Name",
      kicker: "Do not mix them up",
      story:
        "The Child is given the name the angel spoke even before his conception: Jesus. Other feasts stand nearby in winter, and they are often confused. 8 December is the Immaculate Conception of Mary. 25 December is the Nativity of the Lord. 1 January is Mary, Mother of God. These are different mysteries.",
      child: {
        prompt: "What name was given to the Child?",
        explain:
          "Jesus — that is what the angel commanded. The name means: the Lord saves. That is what the shepherds call him, the family at table, and the Church at Mass.",
        a: "Jesus",
        b: "Nicholas",
        c: "Augustus",
        d: "David",
      },
      adult: {
        prompt: "How does the Immaculate Conception differ from the virginal birth of Jesus?",
        explain:
          "8 December: from the first moment of her conception, Mary is free from original sin (CCC 490–493). Christmas is about Jesus: he is conceived by the Holy Spirit and born of the Virgin. Even adults mix them up. For a child it is enough: Mary is his Mother, and he is the Son of God.",
        a: "The first is about Mary and sin; the second is about Jesus, conceived by the Holy Spirit",
        b: "They are two names for one event on 25 December",
        c: "The Immaculate Conception means that Mary had no parents",
        d: "The virginal birth refers to John the Baptist",
      },
    },
    magi: {
      title: "The Magi",
      kicker: "The Star",
      story:
        "Wise men come from the East: they have seen the King’s star. The scribes point to Bethlehem. The star leads the Magi to the Child. They fall down and open their gifts — gold, frankincense, and myrrh.",
      child: {
        prompt: "What guided the Magi on the road?",
        explain:
          "The star. By tradition the gifts are three: gold, frankincense, and myrrh. The Magi are a sign that Jesus came not for one people only.",
        a: "A map issued by the emperor",
        b: "A star",
        c: "The River Jordan, and nothing else",
        d: "The shepherds’ voices, heard across the mountains",
      },
      adult: {
        prompt: "How are gold, frankincense, and myrrh traditionally understood?",
        explain:
          "Gold for the King, frankincense for God, myrrh for suffering and burial. The reading is ancient and clear: Easter and the cross are already visible in the gifts. Epiphany shows Christ to the nations — the wise men came from far away.",
        a: "For a King, for God, and for the One who will suffer",
        b: "They are simply money for the journey home",
        c: "Gold for Mary, frankincense for the ox, myrrh for the donkey",
        d: "Those were the names of three stars, not of gifts",
      },
    },
    nicholas: {
      title: "Nicholas",
      kicker: "6 December",
      story:
        "On 6 December the Church remembers Saint Nicholas, bishop of Myra in Lycia. He lived in the fourth century and secretly helped the poor. The cheerful old man in the shop window is a different, later figure. Giving gifts is allowed. Confusing the bishop with an advertisement is not: the center of these weeks is the manger, not the sack.",
      child: {
        prompt: "Who was Saint Nicholas?",
        explain:
          "A bishop who helped the poor, and did it quietly. Gifts in his memory are about mercy. Christmas is still about Jesus.",
        a: "A bishop who helped the poor",
        b: "A reindeer from the north",
        c: "A salesman from a big shop",
        d: "One of the three Magi",
      },
      adult: {
        prompt: "How do we keep the memory of Saint Nicholas from being mixed up with the advertising Santa?",
        explain:
          "6 December is the memorial of Bishop Nicholas of Myra, in the fourth century. The red advertising suit is much later, from legends and commerce. Gifts are fitting. The heart of the feast is the Incarnation, and a child can be told that plainly, in words that fit their age.",
        a: "Nicholas is a fourth-century bishop; Santa is a later figure. The center is Christ",
        b: "The Church teaches that they are the same man in different clothes",
        c: "Santa was canonized at the Second Vatican Council",
        d: "Nicholas never lived: he is only a twentieth-century fairy tale",
      },
    },
    epiphany: {
      title: "Epiphany",
      kicker: "To the nations",
      story:
        "The Latin Rite keeps Christmas on 25 December, then the days run on to Epiphany — the manifestation of Christ to the nations, the adoration of the Magi. Some Eastern Christians keep Christmas itself on 7 January: their 25 December is counted on the old calendar. The Gospel is one. The counting of the days differs.",
      child: {
        prompt: "What is the name of the feast when we remember the adoration of the Magi?",
        explain:
          "Epiphany means “manifestation.” Christ is seen not only by the shepherds of his own country, but by wise men from far away. In some countries the letters of the Magi are written on the doors that day.",
        a: "Epiphany",
        b: "Ash Wednesday",
        c: "Pentecost",
        d: "Palm Sunday",
      },
      adult: {
        prompt: "Why do some Eastern Christians keep Christmas on 7 January, while Latin Catholics celebrate it on 25 December?",
        explain:
          "The Julian calendar lags the Gregorian by 13 days: their 25 December falls on the civil date of 7 January. The reform was introduced by Pope Gregory XIII in 1582. Eastern Catholics may follow their own calendar. There is nothing to argue about over whose Christmas is the real one.",
        a: "That is how the Julian calendar has shifted; the Gospel remains one",
        b: "Because these are two different infants",
        c: "A pope in the twentieth century moved the feast to January and then moved it back",
        d: "7 January is always the date of Easter",
      },
    },
  },
};

export default pack;

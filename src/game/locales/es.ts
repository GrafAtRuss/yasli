import type { LangPack } from "@/game/i18n/types";

const pack: LangPack = {
  ui: {
    kicker: "Navidad católica",
    appTitle: "Yasli",
    lead: "Un solo teléfono para toda la familia. Niños y adultos caminan hacia el belén con la misma historia — y con preguntas distintas.",
    family: "Camino en familia",
    solo: "Jugar solo",
    how: "Cómo se juega",
    note: "El camino breve llega al pesebre en unos minutos. El de la noche va del Adviento a la Epifanía.",
    author: "Autor — {name}",
    howTitle: "Cómo se juega",
    steps: [
      {
        title: "Un solo teléfono",
        text: "Antes de la pregunta se pasa el aparato a quien le toca. Así nadie mira las respuestas. Si el niño aún no lee, la pregunta se lee en voz alta, y él elige.",
      },
      {
        title: "Dos niveles",
        text: "Al niño, preguntas breves sobre el pesebre, la estrella y el nombre. Al adulto, lo que se discute en la mesa: el calendario, la Inmaculada Concepción, Nicolás y Papá Noel, el sentido de los dones.",
      },
      {
        title: "Equivocarse no es una vergüenza",
        text: "La historia no se detiene. Después de la respuesta siempre hay una explicación: conviene leerla en voz alta. La estrella se da por la respuesta correcta, no por la rapidez.",
      },
      {
        title: "Dos duraciones",
        text: "El camino breve tiene seis estaciones, de la Anunciación a la Epifanía. El de la noche, doce: Adviento, José, el himno «Gloria», san Nicolás.",
      },
      {
        title: "Mando y voz",
        text: "En el televisor las flechas del mando recorren los botones, OK elige, «Atrás» vuelve. Alice pulsa el botón según las palabras: «Camino en familia». El nombre junto al campo se puede decir en voz alta.",
      },
    ],
    howFoot:
      "Es una velada en casa: no sustituye la Misa ni el catecismo parroquial. Al final hay una oración breve, que se puede leer juntos.",
    versionLabel: "Versión {version}",
    who: "Quién va",
    whoNote: "Marcad a quién corresponde cada pregunta. Los nombres aparecerán cuando haya que pasar el teléfono.",
    short: "Breve",
    shortNote: "6 estaciones",
    evening: "De la noche",
    eveningNote: "12 estaciones",
    player: "Jugador {n}",
    removePlayer: "Quitar al jugador {name}",
    nameLabel: "Nombre del jugador {n}",
    child: "Niño",
    adult: "Adulto",
    nameError: "Cada uno necesita un nombre, aunque sea corto.",
    add: "Otra persona",
    start: "Ponerse en camino",
    back: "Atrás",
    togetherNote: "Este turno es de todos. Mirad juntos: no hay nada que espiar.",
    passPhone: "Pasad el teléfono. La pregunta se abre solo después de pulsar.",
    ready: "Estoy listo — abrir",
    togetherReady: "Miramos juntos",
    answers: "Responde {name} · {role}.",
    readAloud: "Se puede leer en voz alta.",
    weSaid: "Ya lo hemos dicho",
    right: "Correcto",
    wrong: "No es eso",
    remember: "Recordemos",
    commonStar: "Estrella común",
    next: "Siguiente",
    toManger: "Al pesebre",
    stars: "Estrellas junto al pesebre: {n}",
    leaveTitle: "¿Interrumpir el camino?",
    leaveNote: "Las estrellas de esta partida no se guardan. El récord de casa permanece.",
    stay: "Quedarse",
    home: "Al inicio",
    mute: "Silenciar",
    unmute: "Activar el sonido",
    sayName: "Decir el nombre",
    shortPath: "Camino breve",
    eveningPath: "Camino de la noche",
    gathered: "El belén está completo",
    withAngels: "con la gloria de los ángeles",
    again: "Jugar otra vez",
    gospelRef: "Lc 2,10-11",
    best: "En este teléfono: camino breve {short}, de la noche {evening}. Partidas jugadas: {played}.",
    language: "Idioma",
    musicCredit:
      "Música navideña de dominio público de Wikimedia Commons (United States Air Force Band y una grabación de piano de dominio público de Joy to the World).",
    defaultChild: "Niño",
    defaultAdult: "Adulto",
  },
  gospel:
    "«No temáis: os anuncio una gran alegría, que lo será para todo el pueblo: hoy, en la ciudad de David, os ha nacido un Salvador, que es el Cristo, el Señor».",
  prayer:
    "Señor Jesús, has venido a nosotros como niño en el pesebre. Bendice nuestra casa en estos días santos. Enséñanos a compartir, como san Nicolás, y a buscarte, como los pastores y los Magos. Amén.",
  stations: {
    advent: {
      title: "Adviento",
      kicker: "Espera",
      story:
        "El Adviento aún no es Navidad, sino una espera silenciosa. Durante cuatro semanas la Iglesia prepara el corazón: menos ruido, más esperanza. En la corona se encienden las velas: por lo general tres moradas y una rosa, el domingo Gaudete, «Alegraos».",
      child: {
        prompt: "¿Cuántas velas principales tiene la corona de Adviento?",
        explain:
          "Cuatro velas, cuatro semanas de espera. La rosa se enciende el tercer domingo: la alegría ya está cerca. A veces, el mismo día de la fiesta, se pone una quinta, blanca: la vela de Cristo.",
        a: "Dos, solo para el domingo",
        b: "Cuatro, una por cada semana",
        c: "Doce, como los días después de Navidad",
        d: "Siete, como los días de la semana",
      },
      adult: {
        prompt: "¿Por qué en la Misa del domingo de Adviento no se canta de ordinario el «Gloria»?",
        explain:
          "El «Gloria» es el himno de los ángeles en la noche de Navidad. En Adviento y en Cuaresma, en el rito romano, por lo general no se canta, para que en la Nochebuena suene de nuevo. En casa se puede alegrar: calla la liturgia, no la familia.",
        a: "Este himno solo se canta en Pascua",
        b: "Se reserva para Navidad, y vuelve en la noche de la fiesta",
        c: "Lo abolió el Concilio Vaticano II",
        d: "Solo lo cantan los niños en la función",
      },
    },
    annunciation: {
      title: "Anunciación",
      kicker: "Nazaret",
      story:
        "En Nazaret el ángel Gabriel saluda a María: «Alégrate, llena de gracia». Ella oye que dará a luz un Hijo y le pondrá por nombre Jesús. María responde: «Hágase en mí según tu palabra». De este «sí» comienza la Navidad.",
      child: {
        prompt: "¿Quién llevó a María la noticia de que daría a luz un Hijo?",
        explain:
          "Gabriel es el mensajero de Dios. María confió y dijo «sí». La Iglesia celebra este día el 25 de marzo: la Anunciación del Señor.",
        a: "Un pastor del campo",
        b: "El arcángel Gabriel",
        c: "El rey Herodes",
        d: "Un mago de Oriente",
      },
      adult: {
        prompt: "¿Cómo une el año litúrgico la Anunciación y la Navidad?",
        explain:
          "La Anunciación es el 25 de marzo; la Navidad, el 25 de diciembre, nueve meses después. Así está hecha la liturgia. El Evangelio no nos da una partida de nacimiento de Belén: la fecha es el lenguaje del año litúrgico, no el acta de una maternidad.",
        a: "La Navidad cae nueve meses después del 25 de marzo",
        b: "Las dos fiestas caen siempre el mismo día",
        c: "La Anunciación se celebra el 6 de enero",
        d: "Entre ellas hay exactamente cuarenta días de ayuno",
      },
    },
    visitation: {
      title: "Visitación",
      kicker: "Isabel",
      story:
        "María va a casa de su pariente Isabel. Esta, aun antes de escuchar el relato, exclama: «Bendita tú entre las mujeres». María responde con el cántico: «Proclama mi alma la grandeza del Señor». La alegría de la Navidad, desde el principio, es alegría de familia.",
      child: {
        prompt: "¿Adónde fue María poco después de la noticia del ángel?",
        explain:
          "A casa de Isabel, que también esperaba un niño. Dos madres se encontraron antes incluso del pesebre. En esta historia la alegría se comparte, no se guarda para uno.",
        a: "A casa de Isabel",
        b: "A la reina, en Roma",
        c: "Enseguida a los pastores, al campo",
        d: "A los Magos, a Oriente",
      },
      adult: {
        prompt: "¿Cómo se llamaba el hijo de Isabel y Zacarías, y quién llegará a ser?",
        explain:
          "Juan bautizará en el Jordán y señalará a Jesús: «Este es el Cordero de Dios». El encuentro de las dos madres une ya el pesebre con el comienzo de la vida pública de Cristo.",
        a: "Juan el Bautista, precursor del Señor",
        b: "Lázaro de Betania",
        c: "Simeón, que encontrará al Niño en el templo",
        d: "Santiago, hijo de Zebedeo",
      },
    },
    joseph: {
      title: "José",
      kicker: "Custodio",
      story:
        "José, esposo de María, es un hombre justo. En sueños el ángel dice: no temas recibir a María, porque lo engendrado en ella es del Espíritu Santo. «Le pondrás por nombre Jesús, porque él salvará a su pueblo de sus pecados». José obedece y custodia a la Sagrada Familia.",
      child: {
        prompt: "¿Quién era José para María y para el Niño?",
        explain:
          "José acogió a María, puso nombre al Niño y resguardó a la familia cuando hubo peligro. Se le llama custodio de la Sagrada Familia: no un espectador junto al pesebre.",
        a: "El rey de Judea",
        b: "El esposo de María y el custodio de la familia",
        c: "El sumo sacerdote del templo",
        d: "Uno de los pastores de la noche",
      },
      adult: {
        prompt: "¿Qué significa el nombre «Jesús» en las palabras del ángel a José?",
        explain:
          "Jesús significa «Dios salva» (Mt 1,21). El Catecismo recuerda: en el nombre está ya todo el misterio (CIC 430 y siguientes). No nace como adorno del invierno, sino como Salvador.",
        a: "«Dios salva»",
        b: "«Estrella de Oriente»",
        c: "Solo «hijo del carpintero», sin otro sentido",
        d: "«Heredero de Herodes»",
      },
    },
    road: {
      title: "El camino",
      kicker: "Hacia Belén",
      story:
        "El césar Augusto ordena un censo. José sale de Nazaret hacia Belén, la ciudad de David: es de la casa de David. María espera al niño. El camino es largo, y la ciudad, de noche, está apretada.",
      child: {
        prompt: "¿A qué ciudad iban María y José antes del nacimiento del Niño?",
        explain:
          "A Belén, la ciudad de David. Allí los llevaba el censo. El profeta Miqueas había dicho hacía tiempo que de allí saldría el que había de regir a Israel.",
        a: "A Roma, ante el césar",
        b: "A Belén",
        c: "A Jericó",
        d: "A ninguna: se quedaron en Nazaret",
      },
      adult: {
        prompt: "¿Por qué Jesús nace en Belén y no en Nazaret, donde vivía la familia?",
        explain:
          "Lucas habla del censo y del linaje de David. Miqueas 5,1 nombra Belén. Nazaret seguirá siendo la casa donde Jesús crezca: el «Nazareno». La Navidad está unida a la promesa hecha a David.",
        a: "El censo lleva el linaje de David a su ciudad, y se cumple la palabra de Miqueas",
        b: "Allí estaba el único templo",
        c: "Herodes los había invitado a un banquete",
        d: "El Evangelio no lo explica de ningún modo",
      },
    },
    manger: {
      title: "El pesebre",
      kicker: "Noche de Navidad",
      story:
        "En el alojamiento no hubo sitio. María dio a luz al Hijo, lo envolvió en pañales y lo acostó en un pesebre, el comedero del ganado. El Rey del cielo entra en el mundo en la estrechez, entre la paja. Muchos siglos después, san Francisco, en Greccio, preparará un belén viviente, para que aquella pobreza se vea con los ojos.",
      child: {
        prompt: "¿Dónde puso María a Jesús recién nacido?",
        explain:
          "En un pesebre. De ahí viene también el belén de casa. A Dios no le venía estrecha la paja. En 1223 san Francisco preparó en Greccio un belén viviente, para que la gente no se acostumbrara a aquella noche.",
        a: "En un trono de oro, en el palacio",
        b: "En un pesebre",
        c: "En una barca en el mar de Galilea",
        d: "En una cesta sobre el río, como a Moisés",
      },
      adult: {
        prompt: "¿Qué llaman los católicos belén, y de dónde viene la costumbre de ponerlo?",
        explain:
          "El belén es la escena del pesebre. El belén viviente se une a san Francisco de Asís: Greccio, Nochebuena de 1223. El árbol puede estar al lado, pero el corazón de la fiesta es la Encarnación en la pobreza (cf. CIC 525).",
        a: "La escena de la Navidad; el belén viviente de Francisco en Greccio, en 1223",
        b: "Solo el árbol, y nada más",
        c: "El ayuno antes de Pascua",
        d: "La vestidura del sacerdote en la Misa de medianoche",
      },
    },
    shepherds: {
      title: "Los pastores",
      kicker: "El primer anuncio",
      story:
        "De noche los pastores velaban el rebaño. El ángel les dijo: «No temáis. Os anuncio una gran alegría, que lo será para todo el pueblo: hoy, en la ciudad de David, os ha nacido un Salvador, que es el Cristo, el Señor». La señal es un niño en el pesebre. Ellos van y lo encuentran todo como se les había dicho.",
      child: {
        prompt: "¿Quién llegó primero al Niño, después de oír al ángel?",
        explain:
          "Los pastores. Los llamaron antes que a los reyes. El ángel dijo: la alegría será para todo el pueblo. La señal era sencilla: un niño en el pesebre.",
        a: "Los pastores",
        b: "El césar Augusto",
        c: "Los discípulos de Cafarnaún",
        d: "Los soldados del rey Herodes",
      },
      adult: {
        prompt: "¿Por qué Lucas destaca precisamente a los pastores?",
        explain:
          "A los pastores se los tenía entonces a menudo por gente del margen. El anuncio se les da primero: la salvación es para todos, empezando por quienes es fácil no ver. No es un cuadro campestre, sino todo el sentido de la Iglesia.",
        a: "La Navidad se anuncia no al palacio, sino a los pobres: la alegría es para todos",
        b: "Los pastores eran sacerdotes secretos del templo",
        c: "Solo ellos sabían leer las estrellas",
        d: "Lucas mismo cuidaba el rebaño aquella noche",
      },
    },
    gloria: {
      title: "Gloria en el cielo",
      kicker: "Juntos",
      story:
        "Con el ángel aparece la milicia celestial: «Gloria a Dios en el cielo, y en la tierra paz a los hombres de buena voluntad». En el Adviento este himno calla en la Misa. En la Nochebuena vuelve: vestiduras blancas, luz, canto.",
      together: {
        prompt:
          "Decid juntos, sin prisa: «Gloria a Dios en el cielo, y en la tierra paz». Cuando lo hayáis dicho, marcad que ya lo habéis dicho.",
        explain:
          "Habéis pronunciado el canto de la noche de Navidad. En la Misa suena como el Gloria. La paz, aquí, no es un lema en una felicitación, sino el don de Aquel que yace en el pesebre.",
      },
    },
    name: {
      title: "El nombre",
      kicker: "No confundir",
      story:
        "Al Niño se le pone el nombre que el ángel dijo ya antes de la concepción: Jesús. En invierno hay otras fiestas muy cerca, y a menudo se confunden. El 8 de diciembre es la Inmaculada Concepción de María. El 25 de diciembre es la Navidad del Señor. El 1 de enero es Santa María, Madre de Dios. Son misterios distintos.",
      child: {
        prompt: "¿Qué nombre le pusieron al Niño?",
        explain:
          "Jesús: así lo mandó el ángel. El nombre significa: Dios salva. Así lo llaman los pastores, la familia en la mesa y la Iglesia en la Misa.",
        a: "Jesús",
        b: "Nicolás",
        c: "Augusto",
        d: "David",
      },
      adult: {
        prompt: "¿En qué se distingue la Inmaculada Concepción del nacimiento virginal de Jesús?",
        explain:
          "El 8 de diciembre: María, desde el primer instante, está preservada del pecado original (CIC 490-493). La Navidad trata de Jesús: es concebido por el Espíritu Santo y nace de la Virgen. Hasta los adultos los confunden. Al niño le basta: María es su Madre, él es el Hijo de Dios.",
        a: "La primera trata de María y del pecado; el segundo, de Jesús, concebido por el Espíritu Santo",
        b: "Son dos nombres de un mismo hecho, el 25 de diciembre",
        c: "Inmaculada Concepción significa que María no tuvo padres",
        d: "El nacimiento virginal se refiere a Juan el Bautista",
      },
    },
    magi: {
      title: "Los Magos",
      kicker: "La estrella",
      story:
        "Del Oriente llegan unos sabios: han visto la estrella del Rey. Los escribas señalan Belén. La estrella conduce a los Magos hasta el Niño. Ellos se postran y abren los dones: oro, incienso y mirra.",
      child: {
        prompt: "¿Qué guiaba a los Magos en el camino?",
        explain:
          "La estrella. Los dones, según la tradición, son tres: oro, incienso y mirra. Los Magos son signo de que Jesús no ha venido para un solo pueblo.",
        a: "Un mapa entregado por el césar",
        b: "La estrella",
        c: "El río Jordán, y nada más",
        d: "La voz de los pastores, que se oía más allá de los montes",
      },
      adult: {
        prompt: "¿Cómo se entienden tradicionalmente el oro, el incienso y la mirra?",
        explain:
          "El oro al Rey, el incienso a Dios, la mirra a la pasión y a la sepultura. Es una lectura antigua y clara: en los dones se ven ya la Pascua y la cruz. La Epifanía muestra a Cristo a los pueblos: los sabios vinieron de lejos.",
        a: "Al Rey, a Dios y a Aquel que padecerá",
        b: "Solo es dinero para el camino de vuelta",
        c: "El oro para María, el incienso para el buey, la mirra para el asno",
        d: "Así se llamaban tres estrellas, no los dones",
      },
    },
    nicholas: {
      title: "Nicolás",
      kicker: "6 de diciembre",
      story:
        "El 6 de diciembre la Iglesia recuerda a san Nicolás, obispo de Mira de Licia. Vivió en el siglo IV y ayudaba a los pobres en secreto. El anciano alegre del escaparate es otra figura, más tardía. Se pueden hacer regalos. No conviene confundir al obispo con la publicidad: el centro de estas semanas es el pesebre, no el saco.",
      child: {
        prompt: "¿Quién era san Nicolás?",
        explain:
          "Un obispo que ayudaba a los pobres, y lo hacía en silencio. Los regalos en su memoria hablan de misericordia. La Navidad, de todos modos, es de Jesús.",
        a: "Un obispo que ayudaba a los pobres",
        b: "Un reno del Norte",
        c: "Un dependiente de una gran tienda",
        d: "Uno de los tres Magos",
      },
      adult: {
        prompt: "¿Cómo no mezclar la memoria de san Nicolás y el Papá Noel de la publicidad?",
        explain:
          "El 6 de diciembre es la memoria del obispo Nicolás de Mira, siglo IV. El traje rojo de la publicidad es mucho más tardío: viene de leyendas y del comercio. Los regalos caben. El corazón de la fiesta es la Encarnación, y al niño se le puede decir con claridad, según su edad.",
        a: "Nicolás es un obispo del siglo IV; Papá Noel, una figura tardía. El centro es Cristo",
        b: "La Iglesia enseña que son la misma persona con distinta ropa",
        c: "A Papá Noel lo canonizaron en el Concilio Vaticano II",
        d: "Nicolás no existió: es solo un cuento del siglo XX",
      },
    },
    epiphany: {
      title: "Epifanía",
      kicker: "A los pueblos",
      story:
        "El rito latino celebra la Navidad el 25 de diciembre; después vienen los días hasta la Epifanía, manifestación de Cristo a los pueblos, la adoración de los Magos. Una parte de los cristianos orientales celebra la misma Navidad el 7 de enero: su 25 de diciembre se cuenta según el calendario antiguo. El Evangelio es uno. Lo que cambia es la cuenta de los días.",
      child: {
        prompt: "¿Cómo se llama la fiesta en que se recuerda la adoración de los Magos?",
        explain:
          "Epifanía significa «manifestación». A Cristo lo ven no solo los pastores de su tierra, sino también los sabios venidos de lejos. En algunos países, ese día, se escriben en las puertas las letras de los Magos.",
        a: "Epifanía",
        b: "Miércoles de Ceniza",
        c: "Pentecostés",
        d: "Domingo de Ramos",
      },
      adult: {
        prompt:
          "¿Por qué una parte de los cristianos orientales celebra la Navidad el 7 de enero, y los católicos de rito latino el 25 de diciembre?",
        explain:
          "El calendario juliano va trece días por detrás del gregoriano: su 25 de diciembre cae en el 7 de enero civil. La reforma la introdujo el papa Gregorio XIII en 1582. Los católicos orientales pueden seguir su calendario. Discutir cuál Navidad es la verdadera no tiene sentido.",
        a: "Así está desplazado el calendario juliano; el Evangelio sigue siendo uno",
        b: "Porque se trata de dos niños distintos",
        c: "El papa, en el siglo XX, pasó la fiesta a enero y luego la devolvió",
        d: "El 7 de enero es siempre la fecha de la Pascua",
      },
    },
  },
};

export default pack;

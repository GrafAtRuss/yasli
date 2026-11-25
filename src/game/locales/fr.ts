import type { LangPack } from "@/game/i18n/types";

const pack: LangPack = {
  ui: {
    kicker: "Noël catholique",
    appTitle: "Yasli",
    lead: "Un seul téléphone pour toute la famille. Enfants et adultes vont vers la crèche avec la même histoire — et des questions différentes.",
    family: "Chemin en famille",
    solo: "Jouer seul",
    how: "Comment jouer",
    note: "Le chemin court mène à la crèche en quelques minutes. Celui du soir va de l’Avent à l’Épiphanie.",
    author: "Auteur — {name}",
    howTitle: "Comment jouer",
    steps: [
      {
        title: "Un seul téléphone",
        text: "Avant la question, on passe l’appareil à celui dont c’est le tour. Ainsi personne ne regarde les réponses. Si l’enfant ne sait pas encore lire, on lit la question à voix haute, et c’est lui qui choisit.",
      },
      {
        title: "Deux niveaux",
        text: "À l’enfant, de courtes questions sur la crèche, l’étoile, le nom. À l’adulte, ce dont on discute à table : le calendrier, l’Immaculée Conception, Nicolas et le Père Noël, le sens des présents.",
      },
      {
        title: "Se tromper n’est pas une honte",
        text: "L’histoire ne s’arrête pas. Après la réponse, il y a toujours une explication : c’est elle qu’il faut lire à voix haute. L’étoile se gagne pour la bonne réponse, pas pour la vitesse.",
      },
      {
        title: "Deux longueurs",
        text: "Le chemin court compte six étapes, de l’Annonciation à l’Épiphanie. Celui du soir en compte douze : Avent, Joseph, l’hymne « Gloire à Dieu », saint Nicolas.",
      },
      {
        title: "Télécommande et voix",
        text: "À la télévision, les flèches de la télécommande parcourent les boutons, OK choisit, « Retour » revient. Alice appuie sur le bouton à partir des mots : « Chemin en famille ». Le nom près du champ peut se dire à voix haute.",
      },
    ],
    howFoot:
      "C’est une soirée à la maison : elle ne remplace ni la messe ni le catéchisme de la paroisse. À la fin, une courte prière à lire ensemble.",
    versionLabel: "Version {version}",
    who: "Qui part",
    whoNote: "Indiquez à qui revient chaque question. Les noms apparaîtront quand il faudra passer le téléphone.",
    short: "Court",
    shortNote: "6 étapes",
    evening: "Du soir",
    eveningNote: "12 étapes",
    player: "Joueur {n}",
    removePlayer: "Retirer le joueur {name}",
    nameLabel: "Nom du joueur {n}",
    child: "Enfant",
    adult: "Adulte",
    nameError: "Chacun a besoin d’un nom, même tout court.",
    add: "Une personne de plus",
    start: "Se mettre en route",
    back: "Retour",
    togetherNote: "Ce tour est commun. Regardez tous ensemble : il n’y a rien à épier.",
    passPhone: "Passez le téléphone. La question ne s’ouvre qu’après avoir touché l’écran.",
    ready: "Je suis prêt — ouvrir",
    togetherReady: "Nous regardons ensemble",
    answers: "Répond {name} · {role}.",
    readAloud: "On peut lire à voix haute.",
    weSaid: "Nous l’avons dit",
    right: "Juste",
    wrong: "Ce n’est pas ça",
    remember: "Retenons",
    commonStar: "Étoile commune",
    next: "Suivant",
    toManger: "Vers la crèche",
    stars: "Étoiles auprès de la crèche : {n}",
    leaveTitle: "Interrompre le chemin ?",
    leaveNote: "Les étoiles de cette partie ne seront pas gardées. Le record de la maison reste.",
    stay: "Rester",
    home: "À l’accueil",
    mute: "Couper le son",
    unmute: "Activer le son",
    sayName: "Dire le nom",
    shortPath: "Chemin court",
    eveningPath: "Chemin du soir",
    gathered: "La crèche est réunie",
    withAngels: "avec la gloire des anges",
    again: "Rejouer",
    gospelRef: "Lc 2,10-11",
    best: "Sur ce téléphone : chemin court {short}, du soir {evening}. Parties jouées : {played}.",
    language: "Langue",
    musicCredit:
      "Musique de Noël du domaine public, tirée de Wikimedia Commons (United States Air Force Band et un enregistrement au piano, du domaine public, de Joy to the World).",
    defaultChild: "Enfant",
    defaultAdult: "Adulte",
  },
  gospel:
    "« Ne craignez pas : voici que je vous annonce une grande joie, qui sera pour tout le peuple : aujourd’hui, dans la ville de David, vous est né un Sauveur, qui est le Christ, le Seigneur. »",
  prayer:
    "Seigneur Jésus, tu es venu vers nous comme un enfant dans la crèche. Bénis notre maison en ces jours saints. Apprends-nous à partager, comme saint Nicolas, et à te chercher, comme les bergers et les mages. Amen.",
  stations: {
    advent: {
      title: "Avent",
      kicker: "Attente",
      story:
        "L’Avent n’est pas encore Noël, mais une attente silencieuse. Pendant quatre semaines, l’Église prépare le cœur : moins de bruit, plus d’espérance. Sur la couronne on allume des cierges — d’ordinaire trois violets et un rose, le dimanche de Gaudete, « Réjouissez-vous ».",
      child: {
        prompt: "Combien y a-t-il de cierges principaux sur la couronne de l’Avent ?",
        explain:
          "Quatre cierges, quatre semaines d’attente. Le rose s’allume le troisième dimanche : la joie est déjà proche. Parfois, le jour même de la fête, on en pose un cinquième, blanc : le cierge du Christ.",
        a: "Deux — seulement pour le dimanche",
        b: "Quatre — un pour chaque semaine",
        c: "Douze — comme les jours après Noël",
        d: "Sept — comme les jours de la semaine",
      },
      adult: {
        prompt: "Pourquoi, à la messe du dimanche de l’Avent, ne chante-t-on d’ordinaire pas le « Gloire à Dieu » ?",
        explain:
          "Le « Gloire à Dieu » est l’hymne des anges dans la nuit de Noël. Pendant l’Avent et le Carême, dans le rite romain, on ne le chante en règle générale pas, pour qu’il retentisse à neuf dans la nuit de Noël. À la maison, on peut se réjouir : c’est la liturgie qui se tait, non la famille.",
        a: "Cet hymne ne se chante qu’à Pâques",
        b: "On le réserve à Noël, et il revient dans la nuit de la fête",
        c: "Il a été supprimé par le concile Vatican II",
        d: "Seuls les enfants le chantent à la fête de l’école",
      },
    },
    annunciation: {
      title: "Annonciation",
      kicker: "Nazareth",
      story:
        "À Nazareth, l’ange Gabriel salue Marie : « Réjouis-toi, comblée de grâce ». Elle entend qu’elle enfantera un Fils et lui donnera le nom de Jésus. Marie répond : « Que tout m’advienne selon ta parole ». C’est de ce « oui » que commence Noël.",
      child: {
        prompt: "Qui apporta à Marie la nouvelle qu’elle enfanterait un Fils ?",
        explain:
          "Gabriel est le messager de Dieu. Marie fit confiance et dit « oui ». L’Église célèbre ce jour le 25 mars : l’Annonciation.",
        a: "Un berger des champs",
        b: "L’archange Gabriel",
        c: "Le roi Hérode",
        d: "Un mage venu d’Orient",
      },
      adult: {
        prompt: "Comment l’année liturgique relie-t-elle l’Annonciation et Noël ?",
        explain:
          "L’Annonciation est le 25 mars, Noël le 25 décembre, neuf mois plus tard. Ainsi est faite la liturgie. L’Évangile ne nous donne pas un acte de naissance de Bethléem : la date est le langage de l’année liturgique, non le procès-verbal d’une maternité.",
        a: "Noël tombe neuf mois après le 25 mars",
        b: "Les deux fêtes tombent toujours le même jour",
        c: "L’Annonciation se célèbre le 6 janvier",
        d: "Il y a entre elles exactement quarante jours de jeûne",
      },
    },
    visitation: {
      title: "Visitation",
      kicker: "Élisabeth",
      story:
        "Marie se rend chez sa parente Élisabeth. Celle-ci, avant même d’avoir écouté le récit, s’écrie : « Tu es bénie entre toutes les femmes ». Marie répond par un chant : « Mon âme exalte le Seigneur ». La joie de Noël, dès le commencement, est une joie de famille.",
      child: {
        prompt: "Chez qui Marie alla-t-elle peu après la nouvelle de l’ange ?",
        explain:
          "Chez Élisabeth, qui attendait elle aussi un enfant. Deux mères se rencontrèrent avant même la crèche. Dans cette histoire, la joie se partage : on ne la garde pas pour soi.",
        a: "Chez Élisabeth",
        b: "Chez la reine, à Rome",
        c: "Tout de suite chez les bergers, dans les champs",
        d: "Chez les mages, en Orient",
      },
      adult: {
        prompt: "Comment s’appelait le fils d’Élisabeth et de Zacharie, et qui deviendra-t-il ?",
        explain:
          "Jean baptisera au Jourdain et désignera Jésus : « Voici l’Agneau de Dieu ». La rencontre des deux mères relie déjà la crèche au commencement de la vie publique du Christ.",
        a: "Jean le Baptiste, précurseur du Seigneur",
        b: "Lazare de Béthanie",
        c: "Syméon, qui rencontrera l’Enfant au Temple",
        d: "Jacques, fils de Zébédée",
      },
    },
    joseph: {
      title: "Joseph",
      kicker: "Gardien",
      story:
        "Joseph, l’époux de Marie, est un homme juste. En songe, l’ange dit : ne crains pas de prendre Marie chez toi, car ce qui est engendré en elle vient de l’Esprit Saint. « Tu lui donneras le nom de Jésus, car c’est lui qui sauvera son peuple de ses péchés ». Joseph obéit et garde la Sainte Famille.",
      child: {
        prompt: "Qui était Joseph pour Marie et pour l’Enfant ?",
        explain:
          "Joseph accueillit Marie, donna son nom à l’Enfant et mit la famille à l’abri quand le danger vint. On l’appelle le gardien de la Sainte Famille : il n’est pas un spectateur auprès de la crèche.",
        a: "Le roi de Judée",
        b: "L’époux de Marie et le gardien de la famille",
        c: "Le grand prêtre du Temple",
        d: "L’un des bergers de la nuit",
      },
      adult: {
        prompt: "Que signifie le nom « Jésus » dans les paroles de l’ange à Joseph ?",
        explain:
          "Jésus signifie « Dieu sauve » (Mt 1, 21). Le Catéchisme le rappelle : dans le nom se trouve déjà tout le mystère (CEC 430 et suivants). Il naît non comme un ornement de l’hiver, mais comme Sauveur.",
        a: "« Dieu sauve »",
        b: "« Étoile d’Orient »",
        c: "Seulement « fils du charpentier », sans autre sens",
        d: "« Héritier d’Hérode »",
      },
    },
    road: {
      title: "La route",
      kicker: "Vers Bethléem",
      story:
        "César Auguste ordonne un recensement. Joseph part de Nazareth pour Bethléem, la ville de David : il est de la maison de David. Marie attend l’enfant. La route est longue, et la ville, à la nuit, est trop pleine.",
      child: {
        prompt: "Vers quelle ville Marie et Joseph allaient-ils avant la naissance de l’Enfant ?",
        explain:
          "À Bethléem, la ville de David. Le recensement les y menait. Le prophète Michée avait dit depuis longtemps que de là sortirait celui qui doit régir Israël.",
        a: "À Rome, auprès de César",
        b: "À Bethléem",
        c: "À Jéricho",
        d: "Nulle part : ils restèrent à Nazareth",
      },
      adult: {
        prompt: "Pourquoi Jésus naît-il à Bethléem, et non à Nazareth, où vivait la famille ?",
        explain:
          "Luc parle du recensement et de la lignée de David. Michée 5, 1 nomme Bethléem. Nazareth restera la maison où Jésus grandira : le « Nazaréen ». Noël est lié à la promesse faite à David.",
        a: "Le recensement mène la lignée de David dans sa ville, et la parole de Michée s’accomplit",
        b: "Le seul Temple s’y dressait",
        c: "Hérode les avait invités à un festin",
        d: "L’Évangile ne l’explique en rien",
      },
    },
    manger: {
      title: "La crèche",
      kicker: "Nuit de Noël",
      story:
        "Dans la salle, il n’y avait pas de place. Marie enfanta son Fils, l’emmaillota et le déposa dans une crèche, la mangeoire du bétail. Le Roi du ciel entre dans le monde à l’étroit, parmi la paille. Bien des siècles plus tard, saint François, à Greccio, dressera une crèche vivante, pour que cette pauvreté se voie des yeux.",
      child: {
        prompt: "Où Marie déposa-t-elle Jésus nouveau-né ?",
        explain:
          "Dans une crèche. De là vient aussi la crèche de la maison. Dieu n’était pas à l’étroit dans la paille. En 1223, saint François dressa à Greccio une crèche vivante, pour que l’on ne s’habitue pas à cette nuit.",
        a: "Sur un trône d’or, au palais",
        b: "Dans une crèche",
        c: "Dans une barque sur la mer de Galilée",
        d: "Dans une corbeille sur le fleuve, comme Moïse",
      },
      adult: {
        prompt: "Qu’est-ce que les catholiques appellent la crèche, et d’où vient l’usage de la dresser ?",
        explain:
          "La crèche est la scène de la mangeoire. La crèche vivante est liée à saint François d’Assise : Greccio, nuit de Noël 1223. Le sapin peut se tenir à côté, mais le cœur de la fête est l’Incarnation dans la pauvreté (cf. CEC 525).",
        a: "La scène de Noël ; la crèche vivante de François à Greccio, en 1223",
        b: "Seulement le sapin, et rien d’autre",
        c: "Le jeûne avant Pâques",
        d: "Les vêtements du prêtre à la messe de minuit",
      },
    },
    shepherds: {
      title: "Les bergers",
      kicker: "La première nouvelle",
      story:
        "La nuit, des bergers veillaient sur leur troupeau. L’ange leur dit : « Ne craignez pas. Je vous annonce une grande joie, qui sera pour tout le peuple : aujourd’hui, dans la ville de David, vous est né un Sauveur, qui est le Christ, le Seigneur ». Le signe : un nouveau-né dans une crèche. Ils y vont et trouvent tout comme on le leur avait dit.",
      child: {
        prompt: "Qui arriva le premier auprès de l’Enfant, après avoir entendu l’ange ?",
        explain:
          "Les bergers. On les appela avant les rois. L’ange dit : la joie sera pour tout le peuple. Le signe était simple : un enfant dans une crèche.",
        a: "Les bergers",
        b: "César Auguste",
        c: "Les disciples de Capharnaüm",
        d: "Les soldats du roi Hérode",
      },
      adult: {
        prompt: "Pourquoi Luc met-il ainsi en avant les bergers ?",
        explain:
          "Les bergers, alors, étaient souvent tenus pour des gens de la marge. La nouvelle leur est donnée d’abord : le salut est pour tous, à commencer par ceux qu’il est facile de ne pas voir. Ce n’est pas une idylle, c’est tout le sens de l’Église.",
        a: "Noël n’est pas annoncé au palais, mais aux pauvres : la joie est pour tous",
        b: "Les bergers étaient des prêtres secrets du Temple",
        c: "Eux seuls savaient lire dans les étoiles",
        d: "Luc lui-même gardait le troupeau cette nuit-là",
      },
    },
    gloria: {
      title: "Gloire à Dieu",
      kicker: "Ensemble",
      story:
        "Avec l’ange paraît l’armée céleste : « Gloire à Dieu au plus haut des cieux, et paix sur la terre aux hommes de bonne volonté ». Pendant l’Avent, cet hymne se tait à la messe. Dans la nuit de Noël, il revient : vêtements blancs, lumière, chant.",
      together: {
        prompt:
          "Dites ensemble, sans vous presser : « Gloire à Dieu au plus haut des cieux, et paix sur la terre ». Quand vous l’aurez dit, marquez que vous l’avez dit.",
        explain:
          "Vous avez prononcé le chant de la nuit de Noël. À la messe, il retentit comme le Gloria. La paix, ici, n’est pas un slogan sur une carte de vœux, mais le don de Celui qui est couché dans la crèche.",
      },
    },
    name: {
      title: "Le nom",
      kicker: "Ne pas confondre",
      story:
        "On donne à l’Enfant le nom dit par l’ange avant même la conception : Jésus. En hiver, d’autres fêtes sont tout proches, et on les mêle souvent. Le 8 décembre, c’est l’Immaculée Conception de Marie. Le 25 décembre, la Nativité du Seigneur. Le 1er janvier, Sainte Marie, Mère de Dieu. Ce sont des mystères différents.",
      child: {
        prompt: "Quel nom donna-t-on à l’Enfant ?",
        explain:
          "Jésus : ainsi l’avait ordonné l’ange. Le nom signifie : Dieu sauve. Ainsi l’appellent les bergers, la famille à table et l’Église à la messe.",
        a: "Jésus",
        b: "Nicolas",
        c: "Auguste",
        d: "David",
      },
      adult: {
        prompt: "En quoi l’Immaculée Conception diffère-t-elle de la naissance virginale de Jésus ?",
        explain:
          "Le 8 décembre : Marie, dès le premier instant, est préservée du péché originel (CEC 490-493). Noël concerne Jésus : il est conçu de l’Esprit Saint et né de la Vierge. Même les adultes les confondent. À l’enfant, il suffit : Marie est sa Mère, il est le Fils de Dieu.",
        a: "La première concerne Marie et le péché ; la seconde, Jésus, conçu de l’Esprit Saint",
        b: "Ce sont deux noms d’un seul événement, le 25 décembre",
        c: "L’Immaculée Conception signifie que Marie n’avait pas de parents",
        d: "La naissance virginale concerne Jean le Baptiste",
      },
    },
    magi: {
      title: "Les mages",
      kicker: "L’étoile",
      story:
        "Des sages viennent d’Orient : ils ont vu l’étoile du Roi. Les scribes indiquent Bethléem. L’étoile conduit les mages jusqu’à l’Enfant. Ils se prosternent et ouvrent leurs présents : l’or, l’encens et la myrrhe.",
      child: {
        prompt: "Qu’est-ce qui guidait les mages sur la route ?",
        explain:
          "L’étoile. Les présents, selon la tradition, sont trois : l’or, l’encens et la myrrhe. Les mages sont le signe que Jésus n’est pas venu pour un seul peuple.",
        a: "Une carte remise par César",
        b: "L’étoile",
        c: "Le Jourdain, et rien d’autre",
        d: "La voix des bergers, audible au-delà des montagnes",
      },
      adult: {
        prompt: "Comment comprend-on traditionnellement l’or, l’encens et la myrrhe ?",
        explain:
          "L’or pour le Roi, l’encens pour Dieu, la myrrhe pour la passion et la sépulture. La lecture est ancienne et claire : dans les présents se voient déjà Pâques et la croix. L’Épiphanie montre le Christ aux nations : les sages sont venus de loin.",
        a: "Pour le Roi, pour Dieu et pour Celui qui souffrira",
        b: "Ce n’est que de l’argent pour le chemin du retour",
        c: "L’or pour Marie, l’encens pour le bœuf, la myrrhe pour l’âne",
        d: "Ainsi s’appelaient trois étoiles, et non des présents",
      },
    },
    nicholas: {
      title: "Nicolas",
      kicker: "6 décembre",
      story:
        "Le 6 décembre, l’Église fait mémoire de saint Nicolas, évêque de Myre en Lycie. Il vécut au IVe siècle et aidait les pauvres en secret. Le vieillard joyeux des vitrines est une autre figure, plus tardive. On peut offrir des cadeaux. Il ne faut pas confondre l’évêque avec la publicité : le centre de ces semaines est la crèche, non le sac.",
      child: {
        prompt: "Qui était saint Nicolas ?",
        explain:
          "Un évêque qui aidait les pauvres, et le faisait en silence. Les cadeaux en sa mémoire parlent de miséricorde. Noël, lui, reste celui de Jésus.",
        a: "Un évêque qui aidait les pauvres",
        b: "Un renne du Nord",
        c: "Un vendeur d’un grand magasin",
        d: "L’un des trois mages",
      },
      adult: {
        prompt: "Comment ne pas mêler la mémoire de saint Nicolas et le Père Noël de la publicité ?",
        explain:
          "Le 6 décembre est la mémoire de l’évêque Nicolas de Myre, au IVe siècle. Le costume rouge de la publicité est bien plus tardif : il vient des légendes et du commerce. Les cadeaux ont leur place. Le cœur de la fête est l’Incarnation, et on peut le dire clairement à l’enfant, selon son âge.",
        a: "Nicolas est un évêque du IVe siècle ; le Père Noël, une figure tardive. Le centre est le Christ",
        b: "L’Église enseigne que c’est le même homme dans des habits différents",
        c: "Le Père Noël a été canonisé au concile Vatican II",
        d: "Nicolas n’a pas existé : ce n’est qu’un conte du XXe siècle",
      },
    },
    epiphany: {
      title: "Épiphanie",
      kicker: "Aux nations",
      story:
        "Le rite latin célèbre Noël le 25 décembre ; viennent ensuite les jours jusqu’à l’Épiphanie, manifestation du Christ aux nations, l’adoration des mages. Une partie des chrétiens orientaux célèbre Noël lui-même le 7 janvier : leur 25 décembre se compte selon l’ancien calendrier. L’Évangile est un. C’est le compte des jours qui diffère.",
      child: {
        prompt: "Comment s’appelle la fête où l’on rappelle l’adoration des mages ?",
        explain:
          "L’Épiphanie signifie « manifestation ». Le Christ n’est pas vu seulement par les bergers de son pays, mais aussi par les sages venus de loin. Dans certains pays, ce jour-là, on écrit sur les portes les lettres des mages.",
        a: "L’Épiphanie",
        b: "Le mercredi des Cendres",
        c: "La Pentecôte",
        d: "Le dimanche des Rameaux",
      },
      adult: {
        prompt:
          "Pourquoi une partie des chrétiens orientaux fête-t-elle Noël le 7 janvier, alors que les catholiques de rite latin le célèbrent le 25 décembre ?",
        explain:
          "Le calendrier julien a treize jours de retard sur le grégorien : leur 25 décembre tombe le 7 janvier civil. La réforme fut introduite par le pape Grégoire XIII en 1582. Les catholiques orientaux peuvent suivre leur calendrier. Discuter pour savoir quel Noël est le vrai n’a pas de sens.",
        a: "Ainsi est décalé le calendrier julien ; l’Évangile, lui, reste un",
        b: "Parce qu’il s’agit de deux enfants différents",
        c: "Le pape, au XXe siècle, a reporté la fête en janvier, puis l’a ramenée",
        d: "Le 7 janvier est toujours la date de Pâques",
      },
    },
  },
};

export default pack;

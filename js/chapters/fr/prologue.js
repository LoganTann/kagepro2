// système scolaire japonais : 13-16 ans collège. 16-18 lycée et la rentrée est en aout. Donc le suicide d'ayano c'est 4 mois après l'entrée au lycée de Shintaro; il a 16 ans.
scriptFr["chapter00-start"] = [
  "show scene classroomCorridor with fadeIn duration 3s",
  "J'imagine que c'est normal qu'il n'y ait personne à une heure pareille.<br> Mais franchement,comment ça se fait que l'école soit si flippante la nuit?",
  "J'espère que rien de chelou ne va apparaitre...",
  "Raah...Sérieux !!",
  "Que j'oublie mon porte feuille en classe dès le premier jour de ce trimestre... <br>J'ai vraiment la poisse...",
  "bruit flock~",
  "shin WAAHHHHH ??!!!",
  "shin ...<br>...<br>...",
  "shin Ah...-Ah...<br>C'était quoi, ça ? Les robinets ?",
  "shin Ne te surprend pas comme ça, putain !",
  "show background classroomDoorClosed with fadeIn",
  "Pff... Pourquoi je dois me rendre en <span>classe, pire endroit de l'univers,</span> et de nuit !<br> Et en parlant de ça... ",
  "Les gars de ma nouvelle classe... Ils avaient tous l'air de crétins finis.",
  "La moyenne de la classe pour l'examen de début d'année était incroyablement basse...<br> Enfin, si ce n'est que ça, ça irait...",
  "Mais il n'arrêtent pas de faire du bruit pour déranger le cours !",
  "Dire qu'ils comptent se rendre au lycée l'année prochaine... <br> Pitoyable.",
  "C'est pas croyable. Qu'est-ce que je pourrait gagner avec des types pareils ?<br> C'est bien mieux de passer mon temps à feuilleter mes manuels scolaires chez moi.",
  "bruit *bruit de chaises*",
  "shin EH ?! C-C'était quoi ce bruit ???<br>Il y a quelqu'un à une heure pareille ?",
  "Attends, attends, attends...",
  "C'est vraiment trop bizarre !!! Même si il y avait quelqu'un, aucune lumière n'est allumée...",
  "E-Et puis ce bruit, à l'instant, il vient de ma classe!!",
  "M-Me-Me dites pas que c'est un fantôme ou un truc du genre...<br> L-laissez moi tranquille !!!",
  "show background classroomDoorOpened",
  "show character aya shadow with rubberBand end-fadeOut",
  "bruit *porte coulissante*",
  "show character aya please with fadeIn end-fadeOut",
  "-Whaaaaaaah !!<br>-OUAAAHAAHAHAHA !! Hiiii !!",
  "shin Pardonnez moi ! Pardonnez moi !<br>L-Laissez moi la vie sau~auve !!",
  "show character aya question with fadeIn end-fadeOut",
  // ayano name = ??
  "uk Hum ?",
  "uk Shintaro... -kun ?",
  "play music 01.03 with loop fade 1",
  "shin ... (?)",
  "J'ai l'impression d'avoir déjà vu ce visage quelque part...",
  "show character aya excited with fadeIn end-fadeOut",
  "uk Ah j'en suis sûre, tu es bien Shintaro Kisaragi !",
  "Mais que se passe-il ?! Je comprends plus rien !! C'est qui ?!",
  "uk Hé, tu ne me reconnais pas ?<br> Ayano Tateyama !",
  "show character aya embarrassed with fadeIn end-fadeOut",
  "uk Enfin,j'ai beau dire ça mais je crois bien que l'on a encore jamais parlé ensemble...",
  "shin Aya...no Tateyama... ?<br>... ...",
  {'Choice':{ 'Dialog': 'shin AH MAIS... ! T\'es...',
    'Celle qui a eu la pire moyenne de la classe !!':{
      'Text': 'Celle qui a eu la pire moyenne de la classe !!',
      'Do': 'jump chapter00-ayaWorst'
    },
    'Celle qui es à côté de moi !!':{
      'Text': 'Celle qui es à côté de moi !!',
      'Do': 'jump chapter00-ayaNbr'
    },
    'Qui ?!':{
      'Text': 'Qui ?!',
      'Do': 'jump chapter00-ayaGhost'
    }
  }}
];
// choice
  scriptFr["chapter00-ayaWorst"] = [
    'show character aya shy with fadeIn end-fadeOut',
    // aya =  Ayano
    "aya Ah ! Heu...",
    "aya C'est tout ce dont tu te rappelles de moi ?",
    "shin J'ai raison ?",
    'show character aya embarrassed fadeIn end-fadeOut',
    "aya Oui, tu as raison, mais bon...<br>Ah ah ...",
    "jump chapter00-ayaContinue"
  ];
  scriptFr["chapter00-ayaNbr"] = [
    "show character aya excited with fadeIn end-fadeOut",
    "aya Super, tu me reconnais donc ! J'ai cru passer pour une inconnue...",
    "Elle a commencé à m'applaudir... Je me sens gêné !",
    "show character aya smile with fadeIn end-fadeOut",
    "aya Ah par contre j'ai voulu te demander quelque chose en cours mais tu ne me répondais pas...<br> Tu mettais ta main sur ton visage comme si tu réfléchissais ?",
    "Hein ? De quoi parle-elle ?<br>Ah...",
    "shin j'étais en train de dormir",
    "show character aya embarrassed with fadeIn end-fadeOut",
    "jump chapter00-ayaContinue"
  ];
  scriptFr["chapter00-ayaGhost"] = [
    "show character aya shy with fadeIn end-fadeOut",
    "aya V-Vraiment ? M-Mais je suis la personne juste à côté de toi !!",
    "aya Je suis si discète que ça ?",
    "show character aya embarrassed with fadeIn end-fadeOut",
    "jump chapter00-ayaContinue"
  ];
// continue
scriptFr["chapter00-ayaContinue"] = [
  "...","...",
  "Aille...<br>Le blanc...",
  "aya -- ...<br>Mais le plus important, qu'est-ce que tu fait là à une heure pareille ?",
  "aya Il fait déjà noir dehors !",
  "shin Ça ne concerne que moi.<br>Et toi, qu'est-ce que tu fais ici à cette heure ?<br>Sans lumière en plus !",
  'show character aya shy with fadeIn end-fadeOut',
  "aya Euhh... Eh bien... C'est que... Tu vois...",
  "aya Comme mes dernières notes étaient un peu juste, le prof m'a donné du travail supplémentaire.",
  "shin Et donc ?",
  'show character aya smile with fadeIn end-fadeOut',
  "aya Euh... En restant pour travailler, sans m'en rendre compte, je me suis endormie.<br>Sans même avoir terminée mes devoirs... Hihi ~",
  "shin Ça valait le coup de rester après les cours ?",
  'show character aya embarrassed with fadeIn',
  "aya Eh bien... C'est vrai, cela n'a aucun sens, n'est-ce pas ?<br>Hum~... Qu'est-ce que je peux faire ?",
  "aya Si je ne lui rend pas demain matin, le prof va encore m’engueuler...",
  "Qu'est-ce qu'elle a celle-là ? Elle est trop chiante...",
  "Elle est de toute manière en tort pour ne pas avoir fait son boulot. C'est pas mes oignons.",
  "show character aya question with leftMove",
  "Je dois me dépêcher de récupérer mon portefeuille et partir d'ici en l'ignorant.",
  "aya ... ?",
  'show character aya shy at center',
  "Elle m'empêche de passer ?",
  'hide character aya',
  'show character aya please with fadeIn end-fadeOut',
  "aya Hé euh... Excuse moi !",
  "shin ... <br>Hum ?<br>Qu'est-ce qu'il y a ?",
  "aya Shintaro-kun, tu es super intelligent, n'est-ce pas ?<br>T'as encore eu 100 à la dernière interro !",
  "Embêtante mais aussi stalkeuse... Il y a vraiment des gens étranges dans ma classe",
  'show character aya question with fadeIn end-fadeOut',
  "shin Eh ? Qui t'as permis de regarder ma note ?",
  'show character aya shy with fadeIn end-fadeOut',
  "aya Hum? Euh... Désolée !",
  "shin Qu'est-ce qu'il y a ?<br>Dis moi clairement ce que tu veux.",
  "aya Oh... Hum... C'est que... <br>Est-ce que tu pourrais, juste un peu, m'aider à finir mes exercices...",
  "aya Juste pour aujourd'hui ! Pas pour très longtemps !",
  "shin Tu veux dire maintenant ?!",
  'show character aya please with fadeIn end-fadeOut',
  "aya S'il te plaît... E-Euh... Je t'en supplie...",
  "shin Me supplier ?<br>Urrm~ ! C'est bon, j'ai compris je veux bien t'aider à finir tes devoirs...<br>... Mais c'est juste pour aujourd'hui !",
  'show character aya excited with fadeIn end-fadeOut',
  "aya A-Ah !! Sérieux ??!",
  "shin Je te dis que je voulais bien t'aider.",
  "shin Allez, dépêche toi si tu veux commencer !",
  "aya Oui !",
  "hide character aya with fadeOut",
  "stop music 01.03 with fade 1",
  "show background classroomDoorOpened with fadeOut",
  "wait 1000",
  "jump chapter00-working"
];
scriptFr["chapter00-working"] = [
  "play music 01.13 with loop fade 1",
  "show scene classroomDesk with fadeIn",
  /*Pourra peut être être remplacé par un jeu
  du stryle résolution du théorème de pyth' et de Thalès*/
  "shin Et donc là, ça deviens ça !",
  "aya Hu~um !",
  "shin Et comme ça est égal à ça, ça deviens ça, non ?",
  "aya Hum~... Hum?",
  "shin Et si on échange ça...<br>Tu vois, ça fonctionne !<br>Tu peux répondre à ça, non ?",
  "aya Hu--<br>Hein ? Je vois pas du tout où tu veux en venir !",
  "shin Raaah !<br>Combien de fois je vais devoir te l'expliquer avant que tu ne comprennes ?!",
  "aya Désolée...",
  "shin Fais un effort, tu veux ?<br>À ce rythme, on aura pas fini avant le matin!",
  "aya Hum... C'est vrai...",
  "shin Sérieusement, c'est qui celle-là ?<br>Il y a une limite à la connerie, normalement !",
  "aya ...<br>Mais je crois avoir compris pour ici...",
  "shin Ha ?",
  "aya Ça deviens ça...<br> <br>puis ça,non?",
  "shin Hum ? C'est pas trop mal !<br>C'est ça, c'est ce qu'il faut faire !",
  "aya Et donc ça deviens ça...<br>Et puis comme ça ?!",
  "shin C'est bon, tu as bon !<br>Tu vois que tu peux le faire quant tu t'y mets...",
  "aya Hihi !",
  "shin Pas la peine de rire autant... T'est vraiment glauque...",
  "aya Hum ? Glauque ?",
  "shin Ne le prend pas sérieusement !<br>Ce que tu peux être chiante...<br>Allez, après avoir fait ça, tu as presque terminé. Dépêche-toi de finir.",
  "aya Oui !",
  "stop music 01.13 with fade 1",
  "show background classroomDesk with fadeOut",
  "wait 1000",
  "jump chapter00-endWorking"
];
scriptFr["chapter00-endWorking"] = [
  "play music 01.26",
  "show scene classroomWindow with fadeIn",
  "show character aya smile at with fadeIn end-fadeOut",
  "aya Shintaro-kun, tu es vraiment intelligent. Tu étudie chez toi tout les jours ?",
  "shin Pas particulièrement. Je n'ai lu les manuels qu'une seule fois.",
  "show character aya excited at with fadeIn end-fadeOut",
  "aya Et tu réussit quand même à ce point ?!<br>Incroyable... Tu est vraiment intelligent.",
  "shin Hum... Plus qu'intelligent... Je ne sais pas pourquoi mais une fois que j'ai appris quelque chose, je ne l'oublie plus.<br>Depuis toujours...",
  "shin Et comme j'ai déjà appris par cœur tout les manuels, je m'en sort aux interros.",
  "show character aya shy at with fadeIn end-fadeOut",
  "aya Je vois... Alors ça veut dire que, Shintaro-kun, ta mémoire est incroyable, c'est ça ?<br>La chance... J'oublie toujours très rapidement tout ce que j'apprends...",
  "shin C'est pas forcément une bonne chose. De toutes les choses les plus insignifiantes au plus désagréables, je retiens tout.<br>A me soucier de choses sans importance jour après jour, c'est loin d'être facile à vivre...",
  "show character aya embarrassed at with fadeIn end-fadeOut",
  "aya Huuum~...",
  "shin Qu'est-ce qu'il y a ?",
  "show character aya normal at with fadeIn end-fadeOut",
  "aya ...-- Hum ? C'est juste que, je me suis dit que si tu ne pouvait pas oublier les mauvais moments, j'espérais qu'il t'arrive plein de bons moments...<br>Tu finiras par ne plus te préoccuper des choses désagréables, non ?",
  "shin Rooh~...",
  "show character aya question at with fadeIn end-fadeOut",
  "aya Oh ? Eh bien... Ou alors ça ne marche pas comme ça ?",
  "shin Hein ? Heu... Non... Je suppose que ça va...<br>De cette manière, ça a l'air plutôt simple à vivre.",
  "show character aya embarrassed at with fadeIn end-fadeOut",
  "aya Ah ! Oui ! Je suis sûre qu'à partir de maintenant, plein de bonnes choses vont t'arriver !",
  "shin Comment peux-tu me dire ça ?",
  "show character aya smile at with fadeIn end-fadeOut",
  "aya Hihi! Par intuition...",
  "show character aya shy at with fadeIn end-fadeOut",
  "shin Et donc, tu l'as résolu, ce problème ? Si tu ne fais que de parler, tu ne vas pas le finir.",
  "show character aya smile at with fadeIn end-fadeOut",
  "aya Hum! Ah... Hum... Je crois que j'ai rien compris...",
  "shin Toi alors...",
  "hide character aya with fadeOut",
  "stop music 01.26 with fade 1",
  "show background classroomWindow with fadeIn",
  "wait 1000",
  "jump chapter00-leaveSchool"
];
scriptFr["chapter00-leaveSchool"] = [
  "show scene oldBridge_night",
  "play music 01.32 with fade 1",
  "show character aya shy with fadeIn",
  "aya Tu m'as vraiment sauvée. Si tu n'avais pas été là, je n'aurais sûrement pas pu finir.",
  "shin Mais même avec moi, tu as pris trop de temps. Je te jure...<br>Et dire que j'était juste venu récupérer mon porte feuille.<br>J'ai vraiment la poisse...",
  "show character aya smile at with fadeIn end-fadeOut",
  "aya Ah... Je suis vraiment désolée... Mais je n'oublierai jamais cette soirée !",
  "shin Qu'est-ce que tu as ?<br>Tu ne m'avais pas dit que tu oublierai toujours tout ce que tu apprenais ?",
  "show character aya normal at with fadeIn end-fadeOut",
  "aya Aujourd'hui, je ferai de mon mieux pour ne pas oublier, alors ça devrait aller.",
  "shin Hum. Si tu te rappelles de ce que tu as vu aujourd'hui,<br>Tu devrais avoir une assez bonne note à la prochaine interro.",
  "aya Ça aussi, c'est vrai, mais... Je ne parlais pas que des études.",
  "show character aya question at with fadeIn end-fadeOut",
  "shin Oh ? Tu as dit quelque chose ?",
  "show character aya shy at with fadeIn end-fadeOut",
  "aya --Hum?? haha !!...<br>R-Rien du tout !!",
  "show character aya normal at with fadeIn end-fadeOut",
  "shin Je vois... À plus. J'habite par là donc je tourne ici.",
  "show character aya please at with fadeIn end-fadeOut",
  "aya Ha... Hum !! À bientôt !",
  "show character aya shadow at with fadeIn",
  "aya ...<br>Hé ! Shintaro-kun !",
  "shin Oui ?",
  "aya À demain !",
  "shin ...<br>Oui... À demain !",
  "hide character aya with fadeOut",
  "stop music 01.32 with fade 1",
  "show background ltmNight with fadeOut",
  "wait 1000",
  "end"
];

const folderName = 'season';
const postfix = '.jpg';

const season = [
  {
    transName: `PEVNOST`,
    name: `citadel`,
    fileName: `${folderName}/citadel${postfix}`,
    type: 'season',
    transText: `Umísti 1 pevnost na území, kde jsi přítomen.
Pokud karta výhody tohoto území ještě nebyla zahrána, přidej si ji do ruky.`
  },
  {
    transName: `ŘEMESLNÍCI A ROLNÍCI`,
    name: `craftsmen & peasants`,
    fileName: `${folderName}/craftsmen & peasants${postfix}`,
    type: 'season',
    transText: `Na každé území, kde jsi přítomen, můžeš umístit 1 klan za každou pevnost na daném území.`
  },

  {
    transName: `NOVÉ SPOJENECTVÍ`,
    name: `new alliance`,
    fileName: `${folderName}/new alliance${postfix}`,
    type: 'season',
    transText: `Na území, kde jsi přítomen:
Umísti 1 klan.
Zvol si soupeře s 2 a více klany na tomto území a nahraď 1 jeho klan 1 svým klanem`
  },
  {
    transName: `FESTIVAL`,
    name: `festival`,
    fileName: `${folderName}/festival${postfix}`,
    type: 'season',
    transText: `Na území, kde jsi přítomen a na kterém je 1 nebo více svatyň, umísti 1 ze svých klanů a žeton
festivalu. Hráč, který na tomto území zahájí bitvu, odsud odstraní 1 ze svých klanů. Na konci fáze
ročních období odstraň žeton festivalu`
  },
  {
    transName: `NÁJEZD`,
    name: `raid`,
    fileName: `${folderName}/raid${postfix}`,
    type: 'season',
    transText: `Během bitvy, poté co jsi provedl manévr útoku:
Vezmi si 1 náhodnou kartu akce z ruky napadeného hráče. Pokud nemá napadený hráč v ruce žádné
karty akcí, odstraň místo toho 1 z jeho nechráněných klanů`
  },
  {
    transName: `BARD`,
    name: `bard`,
    fileName: `${folderName}/bard${postfix}`,
    type: 'season',
    transText: `Dober si 1 kartu epického příběhu.
Poté, co jedním ze svých manévrů odstraníš 1 nebo více soupeřových klanů:
Vezmi si 1 skutek`
  },
  {
    transName: `SKVĚLÝ ŘEMESLNÍK`,
    name: `master craftsman`,
    fileName: `${folderName}/master craftsman${postfix}`,
    type: 'season',
    transText: `Pokud můžeš, odhoď 1 kartu a poté si dober 1 kartu epického příběhu.
Po zahrání karty epického příběhu: místo jejího odhození, ji předej jinému hráči a vezmi si 1 skutek.`
  },
  {
    transName: `VELVYSLANCI`,
    name: `emissaries`,
    fileName: `${folderName}/emissaries${postfix}`,
    type: 'season',
    transText: `Přesuň 1 svůj klan na jakékoliv sousední území. Tento přesun nezahájí bitvu.`
  },

  {
    transName: `DOBÝVÁNÍ`,
    name: `conquest`,
    fileName: `${folderName}/conquest${postfix}`,
    type: 'season',
    transText: `Zvol si 1 území. Na toho území můžeš přesunout ze sousedních území jakýkoliv počet svých klanů.`
  },

  {
    transName: `NOVÉ KLANY`,
    name: `new clans`,
    fileName: `${folderName}/new clans${postfix}`,
    type: 'season',
    transText: `Umísti 2 klany na jakákoliv území, kde jsi přítomen. Oba klany mohou být umístěny na stejné území
nebo na rozdílná území.`
  },
  {
    transName: `PROKLETÍ`,
    name: `geis`,
    fileName: `${folderName}/geis${postfix}`,
    type: 'season',
    transText: `Když soupeř zahraje kartu akce:
Ignoruj efekt právě zahrané karty akce a odhoď ji.`
  },
  {
    transName: `PRŮZKUM`,
    name: `exploration`,
    fileName: `${folderName}/exploration${postfix}`,
    type: 'season',
    transText: `Brenn zvolí prázdné místo sousedící s 2 územími. Dobere 1 nové území a umístí ho na toto místo.
Poté na toto nové území umísti 1 klan.`
  },
  {
    transName: `MIGRACE`,
    name: `migration`,
    fileName: `${folderName}/migration${postfix}`,
    type: 'season',
    transText: `Zvol si 1 území. Přesuň 1 nebo více svých klanů z tohoto území na 1 nebo více sousedních území.`
  },

  {
    transName: `VELITEL`,
    name: `warlord`,
    fileName: `${folderName}/warlord${postfix}`,
    type: 'season',
    transText: `Na území, kde jsi přítomen, zahaj bitvu, ve které budeš provokatérem.
Během bitvy, které se účastníš, po provedení manévru:
Umísti 1 nechráněný klan do tohoto území a urči, kdo bude provádět další manévr`
  },
  {
    transName: `SVATYNĚ`,
    name: `sanctuary`,
    fileName: `${folderName}/sanctuary${postfix}`,
    type: 'season',
    transText: `Umísti 1 svatyni na území, kde jsi přítomen. Dober si 1 kartu epického příběhu.`
  },

  {
    transName: `DRUID`,
    name: `druid`,
    fileName: `${folderName}/druid${postfix}`,
    type: 'season',
    transText: `Pokud je Druid poslední kartou akce v tvé ruce, nemůžeš ho zahrát.
Podívej se na odhozené karty akcí a 1 si přidej do ruky.`
  },
  {
    transName: `PRŮZKUMNÍCI A ŠPIÓNI`,
    name: `scouts & spies`,
    fileName: `${folderName}/scouts & spies${postfix}`,
    type: 'season',
    transText: `Podívej se na karty akcí v ruce 1 ze soupeřů.
Poté můžeš přesunout 1 nebo více svých klanů z 1 území na 1 sousední území.
KARTY VÝHO`
  }
];

export default season;
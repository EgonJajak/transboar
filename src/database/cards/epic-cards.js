const folderName = 'epic';
const postfix = '.jpg';

const epic = [
  {
    transName: `DAGDOVA PALICE`,
    name: `the dagda's club`,
    fileName: `${folderName}/the dagda's club${postfix}`,
    type: 'epic',
    transText: `Když by měl být odstraněn 1 z tvých klanů:
Tento klan není odstraněn.
Když provádíš manévr útoku:
Zvolíš si, jestli napadený hráč odstraní 1 klan nebo odhodí 1 kartu akc`
  },

  {
    transName: `TUANOVA PAMĚŤ`,
    name: `tuan's memory`,
    fileName: `${folderName}/tuan's memory${postfix}`,
    type: 'epic',
    transText: `Dober si 3 karty epických příběhů. 1 si přidej do ruky, zbylé odhoď.`
  },

  {
    transName: `PODÍL ŠAMPIÓNŮ`,
    name: `the champion's share`,
    fileName: `${folderName}/the champion's share${postfix}`,
    type: 'epic',
    transText: `Přidej si do ruky kartu akce, která byla odložena stranou ve fázi shromáždění.`
  },

  {
    transName: `CATHBADOVO SLOVO`,
    name: `cathbad's word`,
    fileName: `${folderName}/cathbad's word${postfix}`,
    type: 'epic',
    transText: `Na začátku fáze shromáždění:
Zvol si kartu akce, která je ve fázi shromáždění odložena stranou. Na konci této fáze si tuto kartu akce
přidej do ruky, poté dej stranou 1 kartu akce z ruky`
  },
  {
    transName: `DĚTI DANANNŮ`,
    name: `children of dana`,
    fileName: `${folderName}/children of dana${postfix}`,
    type: 'epic',
    transText: `Na jakékoliv území umísti 1 klan.`
  },

  {
    transName: `DAGDŮV KOTEL`,
    name: `dagda's cauldron`,
    fileName: `${folderName}/dagda's cauldron${postfix}`,
    type: 'epic',
    transText: `Během bitvy, když je odstraněn 1 z tvých klanů:
Umísti tuto kartu lícem nahoru před sebe. Umísti všechny své klany odstraněné během této bitvy
(včetně toho právě odstraněného) na tuto kartu. Na konci bitvy vrať až 3 z těchto klanů na jejich
původní území a odhoď tuto kart`
  },

  {
    transName: `DAGDOVA HARFA`,
    name: `dagda's harp`,
    fileName: `${folderName}/dagda's harp${postfix}`,
    type: 'epic',
    transText: `Za každou další kartu epického příběhu ve své ruce umísti 1 klan na území, kde jsi přítomen. Tímto
způsobem můžeš umístit až 3 klany.`
  },
  {
    transName: `DIARMUID A GRAINNE`,
    name: `diarmuid and grainne`,
    fileName: `${folderName}/diarmuid and grainne${postfix}`,
    type: 'epic',
    transText: `Když je odstraněn 1 z tvých klanů:
Umísti odstraněný klan na jiné území, kde jsi přítomen. Tento přesun nezahájí bitvu.`
  },
  {
    transName: `DAGDA`,
    name: `the dagda`,
    fileName: `${folderName}/the dagda${postfix}`,
    type: 'epic',
    transText: `Když je zahrána karta epického příběhu nebo karta výhod:
Ignoruj efekt právě zahrané karty a odhoď ji.
Když je tato karta odhozena, zamíchej dohromady balíček odhazovací s dobíracím a nový balíček
umísti lícem dol`
  },

  {
    transName: `LUG SAMILDANACH`,
    name: `lug samildanach`,
    fileName: `${folderName}/lug samildanach${postfix}`,
    type: 'epic',
    transText: `Po vyhodnocení karty akce:
Přidej si danou kartu akce do ruky.`
  },
  {
    transName: `TAIULTINA ZEMĚ`,
    name: `tailtu's land`,
    fileName: `${folderName}/tailtu's land${postfix}`,
    type: 'epic',
    transText: `Dober 3 území z hromádky a 1 z nich umísti na prázdné místo sousedící s 2 územími. Zbylá území
umísti lícem dolů dospod hromádky. Poté můžeš přesunout 1 svůj klan ze sousedního území na toto
nové území`
  },
  {
    transName: `MORRIGAN`,
    name: `the morrigan`,
    fileName: `${folderName}/the morrigan${postfix}`,
    type: 'epic',
    transText: `Můžeš otočit žeton Hejno vran na druhou stranu. Můžeš zahájit bitvu na jakémkoliv území a můžeš
zvolit jednoho z hráčů přítomných na tomto území jakožto provokatéra.`
  },
  {
    transName: `BOJOVÁ ZUŘIVOST`,
    name: `battle frenzy`,
    fileName: `${folderName}/battle frenzy${postfix}`,
    type: 'epic',
    transText: `Během bitvy, na konci kroku Pevností:
Na tomto území přesuň všechny klany ven z pevností. Nyní jsou z nich nechráněné klany.`
  },
  {
    transName: `NUADA STŘÍBRORUKÝ`,
    name: `nuada silverhand`,
    fileName: `${folderName}/nuada silverhand${postfix}`,
    type: 'epic',
    transText: `Na každé území, kde jsi náčelníkem, můžeš umístit 1 klan za každého soupeře, který je přítomen na
daném území.`
  },
  {
    transName: `LUGOVO KOPÍ`,
    name: `lug's spear`,
    fileName: `${folderName}/lug's spear${postfix}`,
    type: 'epic',
    transText: `Na začátku bitvy:
Během této bitvy nemůže nikdo hrát karty triskel.`
  },
  {
    transName: `KÁMEN FAL`,
    name: `the stone of fal`,
    fileName: `${folderName}/the stone of fal${postfix}`,
    type: 'epic',
    transText: `Umísti 2 klany na území hlavního města.`
  },

  {
    transName: `DEIRDRINA KRÁSA`,
    name: `deirdre's beauty`,
    fileName: `${folderName}/deirdre's beauty${postfix}`,
    type: 'epic',
    transText: `Každý ze soupeřů musí odhalit 1 náhodnou kartu epického příběhu. 1 z těchto karet epického příběhu
si přidej do ruky a zbylé odhoď. Poté odstraň 1 svůj klan z jakéhokoliv území.`
  },
  {
    transName: `MANANNANOVY KONĚ`,
    name: `manannan's horses`,
    fileName: `${folderName}/manannan's horses${postfix}`,
    type: 'epic',
    transText: `Přesuň až 3 své klany z 1 území na jiné 1 území kdekoliv ve hře.`
  },

  {
    transName: `MAEVINO BOHATSTVÍ`,
    name: `maeve's wealth`,
    fileName: `${folderName}/maeve's wealth${postfix}`,
    type: 'epic',
    transText: `Každý soupeř, jenž může, ti musí předat 1 kartu akce, které si přidáš do ruky. Poté musíš předat 1
kartu akce každému hráči, který ti předal kartu.`
  },
  {
    transName: `OENGUSŮV TRIK`,
    name: `oengus's ploy`,
    fileName: `${folderName}/oengus's ploy${postfix}`,
    type: 'epic',
    transText: `Na konci tahu jakéhokoliv hráče:
Další tah odehraješ ty. Pokud by fáze ročních období měla skončit, bude místo toho pokračovat.`
  },
  {
    transName: `STRENGOVO ROZHODNUTÍ`,
    name: `streng's resolve`,
    fileName: `${folderName}/streng's resolve${postfix}`,
    type: 'epic',
    transText: `Po provedení útočného manévru:
Vezmi si 1 skutek.`
  },
  {
    transName: `ERIU`,
    name: `eriu`,
    fileName: `${folderName}/eriu${postfix}`,
    type: 'epic',
    transText: `Na každé území, kde jsi jak přítomen a zároveň na nich je 1 či více svatyň, můžeš umístit 1 svůj klan.
Tímto způsobem můžeš umístit maximálně 3 klany.`
  },
  {
    transName: `POVĚST O CÚCHULAINOVI`,
    name: `tale of cuchulain`,
    fileName: `${folderName}/tale of cuchulain${postfix}`,
    type: 'epic',
    transText: `Během bitvy, jakožto manévr, když máš jenom 1 nechráněný klan:
Z tohoto území odstraň jakékoliv 2 nechráněné klany.`
  },
  {
    transName: `BALOROVO OKO`,
    name: `balor's eye`,
    fileName: `${folderName}/balor's eye${postfix}`,
    type: 'epic',
    transText: `Odstraň 1 klan z jakéhokoliv území.`
  },

  {
    transName: `BREASOVA TYRANIE`,
    name: `breas' tyranny`,
    fileName: `${folderName}/breas' tyranny${postfix}`,
    type: 'epic',
    transText: `Přesuň 1 soupeřův klan z 1 území, kde jsi přítomen na sousední území. Tento přesun nezahájí bitvu.`
  },

  {
    transName: `OGMOVA VÝMLUVNOST`,
    name: `ogma's eloquence`,
    fileName: `${folderName}/ogma's eloquence${postfix}`,
    type: 'epic',
    transText: `Během bitvy, jakožto manévr:
Bitva ihned končí.`
  },
  {
    transName: `FIANNA`,
    name: `the fianna`,
    fileName: `${folderName}/the fianna${postfix}`,
    type: 'epic',
    transText: `Během bitvy, jakožto manévr:
Přesuň 1 nebo více svých klanů (buď chráněných nebo nechráněných) z území bitvy na 1 sousední
území. Tento přesun nezahájí bitvu`
  },
  {
    transName: `JINOSVĚT`,
    name: `the other world`,
    fileName: `${folderName}/the other world${postfix}`,
    type: 'epic',
    transText: `Na území, kde jsi přítomen, za každou svatyni na tomto území, sem buď můžeš umístit 1 klan nebo
odstranit 1 soupeřův klan. Tímto způsobem můžeš umístit/odstranit nejvýše celkem 3 klany.`
  },
  {
    transName: `BITVA U MOYTURY`,
    name: `the battle of moytura`,
    fileName: `${folderName}/the battle of moytura${postfix}`,
    type: 'epic',
    transText: `Během bitvy, jakožto manévr:
Přesuň 1 nebo více svých klanů z 1 nebo více sousedních území do bitevního území. Poté na toto
území umísti 1 nechráněný klan`
  },

  {
    transName: `KERNUNOSOVA SVATYNĚ`,
    name: `kernuno's sanctuary`,
    fileName: `${folderName}/kernuno's sanctuary${postfix}`,
    type: 'epic',
    transText: `Na území, kde jsi přítomen a nejsou na něm žádné svatyně, umísti 1 klan a 1 svatyni.`
  }
]

export default epic;
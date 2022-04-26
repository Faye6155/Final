const leagues = ['BIG','BM','BRCC','CBLOL','CK','CT','DC','EBL','EM','GLL','HM','KeSPA','LCK','LCL','LCS','LCSA','LDL','LEC','LFL','LGL','LHE','LJL','LLA','LMF','LMS','LPL','LPLOL','LVP DDH','MSI','NASG','OCS','OPL','PGN','SLO','TCL','TRA','UKLC','UL','VCS','WCS']
const champions = ["Pantheon","Kha'Zix","Kayn","Nunu & Willump","Ivern","Skarner","Sylas","Xin Zhao","Nidalee","Poppy","Trundle","Nocturne","Urgot","Graves","Kindred","Thresh","Vi","Galio","Corki","Lux","Syndra","Aurelion Sol","Azir","Irelia","Jayce","LeBlanc","Lissandra","Ryze","Talon","Viktor","Vladimir","Twisted Fate","Akali","Renekton","Qiyana","Veigar","Vel'Koz","Mordekaiser","Orianna","Ziggs","Ahri","Ekko","Kassadin","Bard","Blitzcrank","Braum","Morgana","Rakan","Tahm Kench","Leona","Lulu","Pyke","Soraka","Yuumi","Nami","Nautilus","Volibear","Zilean","Zyra","Taric",
"Kennen","Sion","Rumble","Riven","Gnar","Cho'Gath","Malphite","Ornn","Kled","Shen","Darius","Jax","Gangplank","Yorick","Rengar","Nasus","Jinx","Fiora","Anivia","Fizz","Zed","Janna","Brand","Sona","Tryndamere","Maokai","Evelynn","Xerath","Twitch","Fiddlesticks","Annie","Malzahar","Rammus","Kayle","Illaoi","Miss Fortune","Shyvana","Dr. Mundo","Singed","Senna","Quinn","Diana","Garen","Katarina","Shaco","Warwick","Teemo","Wukong","Amumu","Udyr","Master Yi"]
const sides = ['Blue', 'Red']
const players = ["Cao","CoreTienZ","Disconnector","EvanRL","Frostalicious","Gorica","Jons","Jurassiq","Kacha","Kingamazin","Mash","Matty","Meech","Riku","Ryleo","Saskio","Shynon","Sohnar","Spawn","Str1fe","Tomo","Value","Vex","Yen","Youngbin","Zot","aaron","dog2","unknown player","Apathing","Avi","Bmxspecks","Candy","Chad","Dragonminkim","EricZYang","Faith","Fanatiik","Fiku","FrostForest","Genguy","Hyami","Hyper","Iconic","Inori","Japanese Import","Kazahana","Keel","Kind Jungle","MultiTasker","NintendudeX","Nova","Nove","Odd Orange","RBM","Revi","Shernfire","ShorterACE","SiddyWiddy","Vakin","VeryBitter","ZDR","ckg","eThug","rhubarbs","zx1","5fire","APA","Ariendel","Command Attack","DARKWINGS","Doxa","DrewDozer","Drutagan","Dziarmaga","Evolved","Julien","Mist","Nightshade","Pekin Woof","Quantum","RobbyBob","Roose","Savage","Strompest","Sudzzi","Wolfe","Young","Yunbee","ZeroBlaze","rovex","xKace","Blitz","BloodWater","Breezy","Cat Ears","Clareetz","Clyde","Coach Coso","GlissyBoy","Golden Kiwi","Gweiss","Kenji","KhaliDino","Kim Down","Lohpally","MiMo","Moonlight","OddTurtle","Painless","Pockus","Poome","Remilia","Scrandor","Shady","Sheep","Winter","Yama","wispe","yhw","3in1warrior","5mi","BMD","CJ","Captain Nuke","Cavele","Copari","Cris","Dragoon","Eclipse","Flaresz","Geiger","HyBriDZz","Jayton","Kenas","Lucina","Lunarly","Lxwrence","Mateusz","Niles","PCL","Philip","Rycah","Sunlight","Tokki","Tony Top","West","dshao","existence","Gible","Bushy","ELO SANTA","Peaceful","Shark","SkyMark","Spectral","Viyusi","dRoGaS","nofas","AGENTAS","Hatred","Jaunatis","Jestas","Opelis","WildCrocodil","mag1cian","D0MAS","Rimtuolis","Spozhais","Tbelkas","Twiizt","zty","Afting","Capsey","Cospect","Domas","Latrodectuss","Xavieles","bAZZILISKS","Karisas","NooB","Onyoz","Smacl3r","arnax","augutis","maradur","Absolut","Davi","Flare","Garo","Juliera","Klaus","Matsukaze","Road","Sacy","Sarkis","TitaN","Trigo","Vitin","walZa","4LaN","Caos","CarioK","Erasus","Grell","Kaiba","Minerva","ReAt1vo","Revolta","Sessh","Sirt","Yampi","Atlanta","Avenger","Evrot","Fear","Hauz","Kales","NOsFerus","Piloto","YoDa","takeshi","tinowns","tockers","Blury","Cabu","Codpiece","Devo","Gyeong","Jojo","Loop","Professor","Riyev","Slayer","Vahvel","Wos","Zirigui","esA","Ayel","Deoxys","Edger","Guigo","Hidan","Kennedys","Lep","Near","SkyBart","Skywaf","Zantins","Zen","fNb","mumus100","Brucer","Buero","furyz","Thunder","Lynx","Name","Alternative","Disave","DudsTheBoy","Luskka","Mills","WhiteLotus","brTT","micaO","pbO","Days4fun","Freire","Hyoga","Jockster","Laba","LeChase","Leozuxo","Lima","Mental","Mewkyo","Ranger","Ryuzaki","Sephis","Shini","Shrimp","Zuao","Anyyy","Aslan","Envy","Goku","Krastyel","Lynkez","RIVA","dyNquedo","BocaJR","Ceos","Damage","Hawk","Luci","RedBert","Reven","Aoshi","Duclou","Fitz","Glow","Klowny","Nyu","Robo","Tay","Wizer","Yang","5kid","Alive","Fury","GAP","Garden","Hena","HyBriD","Light","MaHa","Moo","Rain","Syu","Trigger","Veritas","Wind","Zzus","deokdam","Beyond","Bluff","BroCColi","Catch","Croco","Jin0","Juhan","KaKAO","Kuma","Malice","Mightybear","Natu","PPung","Racoon","ReGank","Ryan","yoHan","BarOh","Carb","Cover","Crow","DanChung","Edge","FATE","HaeSeong","Jiin","Kuzan","Mareritt","Mickey","RJS","Ruby","Tank","Vins","Whitehorse","Witty","autumn","reM","Cookie","GuGer","IDK","Karas","Minit","Mocha","Motive","Neulbo","PluTo","Pure","Rebel","Secret","Beware","Bully","Carrot","Cube","Destroy","Heokong","JackPoT","Jisu","Krab","KronG","Paladin","Reaver","Riris","SoaR","ikssu","Aaron","Ace","Legolas","Supa","Huido","Jorx","Nyx","Palens","Daniur","FeeNiixZ","Javier","xMata","Aesenar","Aizhon","Napo","Viketox","Imba","ItGox","Oscarinin","Rubi0o","Asura","Betty","Elk","GALA","Hope","Jinjiao","Kramer","LokeN","Photic","Puff","Savior","Smlz","Weiwei","X41007","ZWuJi","enjoy","iBoy","jiang","y4","Aix","Chieftain","Echo","H4cker","Haro","Jiejie","Kanavi","Karsa","Leyan","Meteor","Peanut","SofM","WeiYan","XLB","XMJ","Xiaopeng","Xx","YourRiver","beishang","ping","xiaohan","Angel","Captain","Duye","FoFo","Forge","Insulator","Maple","Mole","Scout","Teacherma","Till","Xiaohu","Yagao","Yimeng","Yuuki","clx","icon","knight","xiye","COLD","Chance","Duan","Hang","Konodio","Ley","LvMao","Maestro","Mark","Meiko","Ming","Missing","Southwind","SwordArt","Wuy","XinMo","poge","ppgod","yuyanjia","369","Ale","Aliez","Bin","Breathe","Coten","Crazy","Flandre","Holder","Kingen","Langx","M1kuya","Punk"]
const positions = ["bot","jng","mid","sup","top"]

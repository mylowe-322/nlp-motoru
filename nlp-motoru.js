const THEMES = {
  tarih: { emoji:"📜", bg:"#1c140c", border:"#f59e0b", accent:"#fbbf24", label:"Tarih & Kronoloji",
    keywords:["sümer","babil","akad","tablet","kil","uygarlık","antik","medeniyet","imparatorluk","arkeoloji","padişah","kral","firavun","roma","bizans","osmanlı","selçuklu","antlaşma","savaş","fetih","tarihçi","milat","kronoloji","yüzyıl","harita","yazıt","saray","tapınak","kale","sefer","hanedan","cumhuriyet","devrim","isyan","göç","koloni","sömürge","keşif","belge","müze","lahit","mumya","papirüs","asur","pers","feodal","ortaçağ","rönesans","reform","aydınlanma","meşrutiyet","sadrazam","vezir","mısır","grek","atina","isparta","truva","iskender","sezar","agora","antikite","paleolitik","neolitik","bronz","demir","milenyum","ferman","tarih","tarihi"],
    phrases:["antik ticaret","kil tablet","tarih öncesi","orta çağ","sanayi devrimi","fransız ihtilali","milli mücadele","roma imparatorluğu","osmanlı devleti","ipek yolu","antik mısır","soğuk savaş","kurtuluş savaşı","antik yunan","bizans imparatorluğu","arkeolojik kazı","antik medeniyet","tarihsel süreç"],
    actors:["hammurabi","herodot","sezar","atilla","cengiz han","fatih","kanuni","atatürk","napolyon","iskender","kleopatra","hannibal","perikles","augustus","marcopolo","halil inalcık","ortaylı"] },
  felsefe: { emoji:"🏛️", bg:"#141526", border:"#6366f1", accent:"#818cf8", label:"Felsefe & Düşünce",
    keywords:["felsefe","düşünce","etik","ahlak","estetik","ontoloji","epistemoloji","metafizik","varoluş","absürd","nihilizm","stoa","rasyonel","ampirik","dogma","diyalektik","paradoks","ideoloji","akıl","bilgi","erdem","irade","vicdan","özgürlük","determinizm","idealizm","materyalizm","şüphe","kuşku","pragmatizm","fenomenoloji","sofist","filozof","sorgulama","hakikat","gerçeklik","zihin","ruh","mantık","kaos","kozmos","logos","tin","anlam","anlamsız","anlamsızlık","neden","niçin","niye","keşke","belki","acaba","seçim","sorumluluk","ölüm","sonsuz","hiçlik","yokluk","varoluşçu","özgür","gerçek","soru","cevap","mitoloji"],
    phrases:["ahlak felsefesi","bilgi kuramı","zihin felsefesi","toplum sözleşmesi","mağara benzetmesi","özgür irade","neden sonuç","stoacı felsefe","düşünce deneyi","tabula rasa","carpe diem","memento mori","yaşamın anlamı","var olmak","yok olmak","kader","alınyazısı","etik ikilem"],
    actors:["sokrates","platon","eflatun","aristoteles","aristo","kant","nietzsche","sartre","camus","hegel","marx","spinoza","descartes","locke","hume","schopenhauer","kierkegaard","foucault","farabi","gazali","seneca","marcus aurelius","epiktetos"] },
  ekonomi: { emoji:"💹", bg:"#061f17", border:"#10b981", accent:"#34d399", label:"Ekonomi & Toplum",
    keywords:["para","ekonomi","iktisat","piyasa","finans","sermaye","borsa","yatırım","faiz","enflasyon","üretim","tüketim","arz","talep","bütçe","vergi","gelir","gider","maliyet","kâr","zarar","ticaret","ithalat","ihracat","sanayi","endüstri","girişim","şirket","banka","kredi","döviz","altın","emek","işçi","patron","sınıf","kapitalizm","sosyalizm","liberalizm","kamu","sektör","gümrük","büyüme","kalkınma","refah","yoksulluk","istihdam","işsizlik","sendika","grev","monopol","rekabet","tasarruf","borç","portföy","hisse","tahvil","resesyon","kriz","küreselleşme","fiyat","girişimci","pazarlama","tedarik","lojistik","ücret"],
    phrases:["serbest piyasa","arz talep","enflasyon oranı","merkez bankası","gelir adaletsizliği","ekonomik büyüme","küresel ticaret","artı değer","mali politika","para politikası","dış ticaret","sermaye piyasası","ekonomik kriz","gelir dağılımı","sosyal refah","ticaret dengesi"],
    actors:["adam smith","keynes","hayek","milton friedman","ricardo","malthus","schumpeter","piketty","stiglitz","krugman","max weber","engels"] },
  teknoloji: { emoji:"💻", bg:"#081d29", border:"#0ea5e9", accent:"#38bdf8", label:"Teknoloji & Gelecek",
    keywords:["teknoloji","yazılım","bilgisayar","kod","program","algoritma","yapay","zeka","robot","otomasyon","siber","güvenlik","veri","network","internet","dijital","mobil","web","donanım","çip","işlemci","bulut","sistem","sunucu","kripto","blokzincir","blockchain","bitcoin","ethereum","metaverse","sanal","sensör","kuantum","nano","biyoteknoloji","genetik","uzay","roket","uydu","inovasyon","buluş","icat","patent","yazılımcı","mühendis","kodlama","veritabanı","python","javascript","makine","öğrenmesi","derin","öğrenme","sinir","gpt","model","prompt","arayüz","startup","otonom"],
    phrases:["yapay zeka","büyük veri","makine öğrenmesi","nesnelerin interneti","siber saldırı","bulut bilişim","dijital dönüşüm","sanal gerçeklik","kripto para","derin öğrenme","otonom araç","silikon vadisi","kuantum bilgisayar","veri analitiği","açık kaynak","uzay teknolojileri","akıllı ev","yazılım geliştirme","web tasarımı","mobil uygulama"],
    actors:["alan turing","ada lovelace","steve jobs","bill gates","elon musk","wozniak","tim berners-lee","linus torvalds","grace hopper"] },
  edebiyat: { emoji:"✍️", bg:"#051f14", border:"#22c55e", accent:"#4ade80", label:"Edebiyat & Şiir",
    keywords:["edebiyat","şiir","roman","öykü","hikaye","yazar","şair","kitap","kütüphane","manzum","mısra","dize","kıta","beyit","kafiye","uyak","vezin","hece","aruz","proza","nesir","tiyatro","sahne","drama","trajedi","komedi","senaryo","kurgu","karakter","kahraman","anlatıcı","üslup","metafor","mecaz","benzetme","tasvir","betimleme","eleştiri","romantizm","natüralizm","klasisizm","sembolizm","sürrealizm","modernizm","postmodernizm","antoloji","biyografi","otobiyografi","günlük","anı","mektup","deneme","makale","sanki","adeta","tıpkı","imgelem","hayal","yaratıcılık","ilham","sessizlik","boşluk","karanlık","aydınlık","gece","sabah","şafak","satır","kelime","sözcük","dil"],
    phrases:["edebi eser","şiir kitabı","roman karakteri","sanat sanattır","dil ve anlatım","bilinç akışı","postmodern roman","divan edebiyatı","halk şiiri","serbest nazım","mecazi anlam","ana tema","anlatım teknikleri","sanatsal üslup","klasik yapıt","dünya klasikleri","modern edebiyat","okuma serüveni","şiirsel estetik","imgesel anlatım","başkaldırı edebiyatı","varoluşçu edebiyat"],
    actors:["shakespeare","dostoyevski","tolstoy","kafka","tanpınar","nazım hikmet","orhan veli","yahya kemal","yaşar kemal","oğuz atay","sabahattin ali","cemal süreya","orhan pamuk","hugo","balzac","proust","joyce","virginia woolf","camus"] },
  dilbilimi: { emoji:"🗣️", bg:"#1e1124", border:"#d946ef", accent:"#f472b6", label:"Dil Bilimi & Etimoloji",
    keywords:["dil","etimoloji","dilbilim","gramer","fonetik","morfoloji","semantik","sentaks","sözdizimi","sesbilgisi","anlambilim","biçimbilim","köken","kelime","sözcük","lehçe","şive","ağız","alfabe","harf","ses","heceleme","dilbilimci","lingvistik","sözlük","leksikoloji","terminoloji","türetme","çekim","isim","fiil","sıfat","zarf","zamir","edat","bağlaç","çeviri","tercüme","dilbilgisi","filoloji","gösterge","göstergebilim","semiyotik","sanskritçe","latince","farsça","arapça","jargon","argo","deyim","atasözü","retorik","hitabet"],
    phrases:["kelime kökeni","etimolojik analiz","gösterge bilim","ses olayları","anlamsal kayma","sözcük dağarcığı","dil ailesi","morfolojik yapı","fonetik değişim","söz dizimi","ölü diller","retorik analiz","etimolojik köken","kelime türetimi","ses uyumu","dilin evrimi","tarihsel dilbilim"],
    actors:["saussure","chomsky","jakobson","panini","bloomfield","sapir","whorf","kaşgarlı mahmud"] }
};

function cleanToken(word) {
  if (!word) return "";
  return word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "").trim();
}

function analyzeNoteText(text) {
  var scores = { tarih:0, felsefe:0, ekonomi:0, teknoloji:0, edebiyat:0, dilbilimi:0 };
  var evidence = [];
  var structures = [];

  if (!text || text.trim().length < 3) {
    return { winner:"genel", scores:scores, evidence:[], structures:["Standart Not"] };
  }

  var lowerText = text.toLowerCase();
  var sentences = lowerText.split(/[.!?;\n]+/).map(function(s) { return s.trim(); }).filter(function(s) { return s.length > 0; });
  var lines = text.split("\n").map(function(l) { return l.trim(); }).filter(function(l) { return l.length > 0; });
  var slashCount = (text.match(/\//g) || []).length;

  if (lines.length >= 3 || slashCount >= 2) {
    structures.push("Şiir / Manzum Form");
    scores.edebiyat += 15;
  }

  for (var si = 0; si < sentences.length; si++) {
    var sentence = sentences[si];
    if (sentence.match(/(yılında|yüzyılda|milattan önce|asırda)/) || sentence.match(/\b(1[4-9]\d{2}|20\d{2})\b/)) {
      if (structures.indexOf("Kronolojik Olay") === -1) structures.push("Kronolojik Olay");
      scores.tarih += 10;
    }
    if (sentence.match(/(bence|bana göre|kanımca|paradoks|sanıyorum|fikrimce)/)) {
      if (structures.indexOf("Şahsi Sav / Yorum") === -1) structures.push("Şahsi Sav / Yorum");
      scores.felsefe += 5;
    }
    if (sentence.match(/(denir|tanımlanır|açıklanır|anlamına gelir)/)) {
      if (structures.indexOf("Tanım") === -1) structures.push("Tanım");
    }
    if (sentence.match(/(göre|aktardığı|belirttiği|alıntı)/)) {
      if (structures.indexOf("Kaynaklı Alıntı") === -1) structures.push("Kaynaklı Alıntı");
    }
  }

  var cats = Object.keys(THEMES);
  for (var ci = 0; ci < cats.length; ci++) {
    var cat = cats[ci];
    var catData = THEMES[cat];
    for (var ai = 0; ai < catData.actors.length; ai++) {
      var actor = catData.actors[ai];
      if (lowerText.indexOf(actor) !== -1) {
        scores[cat] += 25;
        if (evidence.indexOf(actor) === -1) evidence.push(actor);
      }
    }
  }

  for (var ci2 = 0; ci2 < cats.length; ci2++) {
    var cat2 = cats[ci2];
    var catData2 = THEMES[cat2];
    for (var pi = 0; pi < catData2.phrases.length; pi++) {
      var phrase = catData2.phrases[pi];
      if (lowerText.indexOf(phrase) !== -1) {
        scores[cat2] += 15;
        if (evidence.indexOf(phrase) === -1) evidence.push(phrase + " (tamlama)");
      }
    }
  }

  var tokens = lowerText.split(/\s+/).map(cleanToken).filter(function(t) { return t.length > 2; });
  for (var ti = 0; ti < tokens.length; ti++) {
    var token = tokens[ti];
    for (var ci3 = 0; ci3 < cats.length; ci3++) {
      var cat3 = cats[ci3];
      var catData3 = THEMES[cat3];
      for (var ki = 0; ki < catData3.keywords.length; ki++) {
        var keyword = catData3.keywords[ki];
        if (token === keyword || (token.indexOf(keyword) === 0 && token.length - keyword.length <= 4)) {
          scores[cat3] += 3;
          if (evidence.indexOf(keyword) === -1) evidence.push(keyword);
        }
      }
    }
  }

  var soruSayisi = (text.match(/\?/g) || []).length;
  scores.felsefe += soruSayisi * 5;
  if (soruSayisi > 0 && structures.indexOf("Soru / Sorgulama") === -1) structures.push("Soru / Sorgulama");

  if (text.length < 120 && text.indexOf(",") !== -1) {
    scores.edebiyat += 4;
    scores.felsefe += 2;
  }

  if (lowerText.indexOf("keşke") !== -1 || lowerText.indexOf("belki") !== -1 || lowerText.indexOf("acaba") !== -1) {
    scores.felsefe += 6;
  }

  var maxScore = -1;
  var winner = "genel";
  for (var ci4 = 0; ci4 < cats.length; ci4++) {
    var c = cats[ci4];
    if (scores[c] > maxScore && scores[c] > 0) {
      maxScore = scores[c];
      winner = c;
    }
  }

  if (structures.length === 0) structures.push("Standart Not");

  return { winner:winner, scores:scores, evidence:evidence.slice(0,5), structures:structures };
}

import { useState, useRef, useCallback } from "react";

const WORDS = ["IDEIA","AMIGO","CASAS","TERRA","FOGOS","NOITE","FEMEA","PODER","TEMPO","MUNDO","LIVRO","PLANO","FLORA","GEMEA","RAMOS","CARRO","NAVIO","PEIXE","DADOS","SAGAZ","EPICA","AJUDA","COQUE","NOBRE","AFETO","SUTIL","VIGOR","AUDAZ","SANTO","CAPAS","MACAS","GULAS","BULAS","ANEXO","COTAR","MODEM","ILHAS","LIRAS","VARAS","TECLA","COTAS","BOTAS","TESTE","SOLAR","PRATO","GRUPO","PODAM","TRENS","FUZIL","CHAVE","PORTA","CASAL","ADEGA","APTAS","TINTA","FALSO","PICOS","ATUAR","PISTA","BURRO","FAZER","PIZZA","QUINA","PINTA","BANAL","CORPO","DETER","TENUE","ABONO","FLUXO","PAVIO","LIMAO","CAQUI","FINOS","OBTER","OVULO","GRAUS","CISAO","ESTES","HIDRO","SUPER","SINTO","GRUTA","TONTA","MAGRO","FESTA","PAGAM","GRUPO","GERAL","PLACA","TELAS","POUCA","ATUAL","PODER","ASSIM","INATA","GERME","BOSSA","PRESA","TORTA","LENTO","CRIAR","TORAX","TUFAO","MULAS","BEBER","BOINA","POLPA","MAGIA","NESSA","CRASE","PINHO","GORDO","COCOS","BAZAR","CAPIM","LEMES","LOGAR","SANTO","TOSAR","LATEX","LATAS","GINGA","DESSA","LIMBO","HONRA","NOTAR","MAIOR","CASPA","EUROS","GRADE","PAGAO","CLONE","COMUM","RITMO","VERDE","LEIGA","BRACO","MARES","SECOS","SOGRA","LOUSA","RITMO","ANSIA","PARMA","PRETA","MALES","NINJA","FOSCA","DEVER","TANGA","UNIDA","COIFA","TODOS","GEMEA","GATAS","MALTA","TRUPE","PULGA","HOMEM","UNTAR","IRADO","SECAR","FUNGO","ROJAO","SURDO","LABIA","PILHA","MONGE","BOLOS","SELAR","CALOS","ATRIZ","BONUS","AREIA","SKATE","GERAR","DEVIR","CEGOS","EXAME","FUGIR","SOUTO","OUVIR","ALUNO","VORAZ","VASOS","VERBO","PADRE","NETOS","CANAL","PAZES","ANTES","CREPE","CORRE","CRIME","ASSIS","MILHO","MEIOS","TEDIO","TOPAR","METAL","LENDA","LOMBA","PURAS","DUQUE","CLIMA","TERCA","DEBIL","USINA","CHORA","BELAS","ALIAR","NUDEZ","RIVAL","DRAMA","TREZE","FRUTA","TEMOR","PIANO","COSMO","NINAR","BRUXO","BABAR","MAGRA","AGUDA","LEIGO","FACIL","COLAR","TEMPO","MITOS","RATOS","CHAVE","HINDU","INCAS","NULOS","OPCAO","OBESO","GORDA","CAIXA","POLEN","BOCAL","PRETO","ADIAR","LICEU","GRAMA","RARAS","FRACO","SARRO","MISTO","RALAR","MESAS","CUECA","HARPA","GIRAR","VAGOS","MAGNA","VOCES","GRIPE","LUVAS","FREAR","CALVO","COSTA","ALMAS","FEDOR","VAGAR","CHUVA","MACHO","LADOS","SACOS","FEMEA","FLORA","NERVO","PODIO","LAGOS","VINTE","CARTA","MEDIA","BASES","FEITA","MICRO","GELAR","ARDER","PESAR","NAVAL","ESQUI","ACOES","DAMAS","VARAL","BALDE","ACIDA","BUCHO","FEMUR","TORTO","CAROS","TABUS","TIROS","MAMAE","PAPAI","TENIS","RIMAR","BIFES","BACIA","RELER","HORTO","XAMPU","CUJOS","ILESA","DADOS","NADAR","MIMOS","MUSGO","KARMA","COPAS","ERVAS","FIGOS","RAMOS","AVIDA","VIVER","BRISA","DOGMA","FEIOS","FOFAS","MELAO","MIUDA","AREAL","PISAR","RECEM","RASOS","FATAL","OPTAR","SUAVE","FRUTO","ARDUO","PONTO","VIRUS","VETAR","TENSA","SOMAR","MUITA","BUMBA","FELIZ","BURRA","ANEIS","NOCAO","DESTA","CILIO","NOBRE","REZAR","SUJAR","SUTIA","ERROS","RICAS","SERIE","MALTE","ARDUA","ALHOS","LIDOS","LAICO","JEJUM","TENSO","MARTE","LEAIS","ALCAR","MAMAR","OTICO","LOTAR","FREVO","BARCO","LESAO","SUJOS","LUMEN","BAMBU","CINZA","ERRAR","TUTOR","BOTAR","ALUNA","NESTA","TOCAR","CONES","GRATA","SAIDA","GUIAR","VAZAR","PUROS","UTEIS","TREVO","PANDA","METRO","COESO","PICAR","AMADA","CABAL","FIAPO","BOCAO","FUZUE","FUROR","PIRES","CURAR","FOLIA","ALGAS","ALTAR","FUMAR","TRIPE","FORTE","PRAIA","SIRIO","SINOS","MUNDO","PECAR","CORJA","OTIMA","LIXAR","IDOSO","CARMA","FOSSA","CARAS","NEGAR","LIRIO","DUNAS","CORAL","TOLDO","DELTA","BINGO","GOLFE","FARDA","PAGOS","ACASO","AQUEM","SUECA","MATOS","FUSCA","RACAO","TEIAS","HORTA","AMENO","MERCE","NAVES","CERVO","PATOS","DUTOS","CERTA","VIRIL","GAMBA","RETRO","AUREA","CUPIM","FEBRE","AUTOS","VALSA","NORTE","LIGAR","CERNE","IDOLO","JUIZO","MUDOS","FILHO","TRIOS","JUIZA","PERTO","TALCO","SUNGA","RUSSA","VOTAR","HEROI","MUITO","SUECO","TURCA","FEUDO","MAJOR","CIUME","GOELA","MARRA","LACOS","REGER","JUROS","ABRIR","FEROZ","MOIDA","MODOS","NOZES","SOCIO","MOEDA","ROCAR","TINTO","DEDOS","RASAS","SEDES","CENAS","SALSA","ESTAS","REUSO","TELAO","REFIL","PLENA","COMER","AMPLO","LIDAR","FATOR","ARMAR","TRAPO","TEXTO","OPACA","REVES","ARIDO","ETICO","FORUM","DIETA","NOMES","TRIBO","EXITO","MIDIA","BRUTO","BELOS","SODIO","TUBOS","OPERA","SALAS","OMBRO","ROUPA","MUTUO","FLUIR","VOSSA","VACAS","BOATO","BATER","BANDO","GALHO","VALOR","NAVIO","ROLAR","CUBOS","TACOS","VERME","RITOS","AUTOR","DEUSA","BARES","TURNE","OUSAR","POLIR","DIZER","VOLEI","LOIRO","LETAL","CALMA","HIPER","SOLOS","ECOAR","IMPOR","MUSEU","VESPA","UMIDA","MIRAR","OSTRA","LORDE","FACAO","SABIO","BUCAL","COURO","DEPOR","GREGO","NOSSA","FUGAS","CANON","MANSO","DOMAR","BUCHA","LITRO","MIOPE","OLHAO","AMENA","CEDER","VIDAS","REMAR","CIVIL","AROMA","GOTAS","FRASE","NASAL","BALAO","SAUNA","BOLHA","BAMBA","SADIO","CAIRO","GAFES","CLICA","VOTOS","ACUDE","MIOLO","TERCO","FAVOR","SURDA","ANTAS","MEDIR","SOGRO","ZIPER","SELIM","CLARA","FERAS","OUTRA","MESES","AEREA","ABRIL","BANCO","LOUCO","ALPES","DEDAO","LICAO","FOGAO","VACUO","BRASA","TODAS","LONGA","LISOS","NEVOA","ISCAS","PEIXE","LINHO","MURAL","TIBIA","PLENO","COCAR","MODAS","LEGAL","CEDRO","IRMAO","CONDE","FUTIL","FURAR","DISSO","TETRA","TURFE","SUMIR","GUETO","PORCO","LONGE","GALAO","OUTRO","USUAL","BUNDA","MEMES","PANOS","SARJA","PUNHO","POCAS","OFURO","BRAVO","PINOS","PONTE","ANUAL","SIGNO","CALAR","ROXAS","PELOS","TIARA","ATLAS","VULTO","BREVE","POEMA","CAMAS","ADVIR","RUBRO","EXODO","NOVOS","LIBRA","PENCA","AMORA","VAPOR","REDES","VILAO","ANZOL","MURRO","LETRA","DOLAR","AMIDO","COFRE","CESTO","BOMBA","GOLFO","PULAR","OSSEA","ANIMO","LAGOA","IMUNE","HORAS","SAGAZ","LOCAO","LAJES","RETAS","MUSAS","SACAR","INDIA","SEXTO","FEIRA","CASAL","ARCOS","ONTEM","GANSO","LONGO","RURAL","OLHAR","CUBAS","PAMPA","GLOBO","PERUA","SELVA","LEITO","TRAMA","ROSTO","SERVO","FADAS","AULAS","LOTUS","NEVAR","CACAR","JOGAR","DUPLA","PRECE","AGEIS","CAUDA","BREGA","FADOS","MOELA","LERDO","TOUCA","NATAS","PUXAR","DARDO","TUNEL","AUDIO","GIBIS","ILESO","MEROS","FUROS","PRACA","CHAPA","COPIA","SURFE","OBRAS","RAIAR","ATROZ","SITIO","OVNIS","LATIM","DOTAR","CITAR","OLHOS","REGAR","SALMO","ARENA","PAGAR","TRECO","UNCAO","ETNIA","MALAS","POLVO","NOVAS","AVEIA","VASTO","VOVOS","RUSSO","LAVAR","MUDAR","MEIAS","PATAS","JOIAS","ALVOS","GIROS","RENTE","NARIZ","USADA","TECER","VICIO","TRENO","PAPOS","DUPLO","AMBOS","ODIAR","VELHA","BODAS","VISAO","CARGA","FIXAR","GARRA","BOBOS","SETOR","ESSES","LOUCA","BICHO","BOBAS","VINHO","LONAS","GOLPE","SAFRA","MEIGO","BENTA","ARROZ","NENEM","LOJAS","TCHAU","SABIA","CALDA","CHALE","MOCOS","SUINO","LOIRA","ORFAO","COUVE","FALIR","GALOS","IMPIO","PODRE","GAITA","CARNE","MECHA","DAQUI","NOSSO","VAZIO","PRUMO","FRIAS","LOMBO","INDIO","FOTOS","EPICO","AGUIA","OSSEO","PISOS","CIVIS","GOSMA","CASAR","NACAO","VELOZ","LISAS","ALGUM","POTES","DOIDA","SABER","JUSTO","JEITO","BICOS","ROLHA","GEADA","REFEM","RAIOS","MANTA","CASTA","LOCAL","CAPAO","GARCA","AEREO","SOSIA","ARAME","DIQUE","SABAO","ELFOS","RACAS","TUMBA","PIPAS","SANAR","NINFA","BREJO","MANHA","MOLAS","POREM","ITENS","FOBIA","JULHO","CRISE","VINDA","VISAR","PROVA","RUIVA","VULGO","ONDAS","FURIA","BRITO","HIFEN","GEMEO","FLUOR","MENOS","TIMES","REVER","TELHA","HUMOR","TRETA","VIDEO","TESTE","ARCAR","BERCO","LESTE","CARIE","FOLHA","FIXOS","TABUA","TOCHA","RUINS","NUVEM","ZONAS","POCOS","VENUS","SARNA","AONDE","TOMAR","TESES","LUGAR","PALMA","PRECO","PULOS","SARAU","SARDA","BOLSO","ROTOR","CIVEL","FILHA","ROUCA","BESTA","FUGAZ","OBVIO","CLERO","DENSA","DURAR","BOLAO","COMBO","FRADE","BARBA","SEITA","GERIR","ETAPA","PUNIR","TRUCO","VEIAS","CASCO","JEGUE","GRAOS","SELOS","HABIL","VIVOS","TERNO","MOSCA","OASIS","CAULE","UNHAS","UNICO","DUZIA","MACRO","PAPEL","PLEBE","POSSE","FOCAL","BRUTA","ROBOS","SABOR","ACIMA","ROCHA","SACRA","LINDO","PAVAO","SIGLA","TOURO","JUSTA","CETIM","CAIDA","SALAO","MOCAS","MEXER","LEQUE","PRAXE","LAZER","TRIPA","FEIXE","RUMOR","GIRIA","DANOS","LENHA","REDOR","MACIA","FRIOS","ARTES","CAVAR","PESOS","BONDE","QUAIS","BECOS","MUMIA","RISOS","IGUAL","CELAS","ELITE","SENAO","ULTRA","NELES","DOIDO","RELUZ","JURAR","ENTAO","CLORO","MILHA","UNIAO","LIXAO","TANTO","PRAGA","FOGOS","TOSCO","CHATO","CARGO","IDOSA","LARVA","BISPO","BANJO","VASTA","QUASE","MEIGA","PEGAR","EIXOS","TERMO","PNEUS","TANGO","RUGIR","FARSA","VALER","MORTA","ZERAR","DOCES","FOICE","HIENA","PORCA","PEDIR","SACRO","RIMEL","ASPAS","VIGAS","GESTO","VAZAO","HARAS","SADIA","CHEIO","LILAS","TIPOS","MOTOR","UNICA","TAXIS","DUETO","IRMAS","PUXAO","BOCAS","CARRO","GRATO","POMAR","GAVEA","APICE","NESSE","MATAR","MANTO","TACAS","JUNHO","TOTAL","CALDO","MANGA","QUOTA","FATIA","MISTA","DESDE","GENTE","LEITE","PORRE","LINCE","FALSA","TIRAR","FAROL","EXPOR","SUPOR","VOCAL","ROLOS","AMPLA","TRICO","HINOS","LENTA","VETOR","EPOCA","ROSAS","CRAVO","PATIO","CLUBE","ETICA","BLUSA","BUSTO","PEGOS","RODAR","CALOR","RAMPA","PRATA","FAIXA","PONTA","SUTIS","MALES","OUROS","OESTE","LOBOS","BONES","PAVOR","BAITA","ASTRO","ARDOR","TAPAR","CALVA","FUNIL","PRADO","FACAS","URNAS","MAIAS","GENES","CIRCO","TRIGO","PSICO","AFINS","CULTO","CACOS","OTICA","IMPAR","LINHA","JOVEM","CHATA","CRUAS","POMBO","PUDIM","CINTO","RENAL","LEBRE","PROLE","AUREO","METER","TOTEM","DIABO","SILOS","BALAS","IDEAL","ANJOS","RAPAZ","CANOA","CACAU","VITAL","MORNA","RUMOS","CABER","BODES","CAPUZ","GENRO","LUNAR","CICLO","CESTA","CALMO","SEIVA","MORAL","TEMER","NISSO","MENOR","BALSA","MOGNO","FISCO","VOZES","PALCO","ADEUS","FROTA","MANIA","GOSTO","ARIES","NEGRO","LUTAR","PRATO","ANDAR","ALTOS","LAPIS","CLAVE","FIBRA","NORMA","POETA","VELHO","GRAXA","VALAS","ROSCA","ZELAR","DUCHA","JARRA","HASTE","POBRE","PEDRA","OSCAR","MEDIO","OPACO","BULBO","RUDES","SUBIR","VETOS","BEATA","BOTAO","COISA","NISTO","FAUNA","MESMA","MEDOS","PEDAL","TARJA","NINHO","DONOS","ACIDO","FALAR","MOITA","VOSSO","CREDO","RUIVO","ROMBO","VAZIA","SORTE","GRANA","TURNO","PESTO","BOLSA","CABOS","LINDA","CULTA","GASES","SUSHI","ALGOZ","PENTE","CENTO","TIGRE","FAVAS","PILAO","MAGOA","POCAO","TRONO","CLICO","FORNO","SUTIL","IDEIA","DOCIL","PARAR","MINHA","PALMO","PODAM","TRENS","EXATA","PROSA","RAZAO","SISMO","POROS","FARAO","CINCO","VILAS","TECNO","MAGOS","AGORA","MISSA","DITAR","SOPAS","PILAR","LARES","DIVAS","POLAR","GREVE","BRUXA","SINAL","MAMAO","TRUFA","PERSA","SOLAR","PLUMA","MUROS","LENTE","FASES","RABOS","RADIO","FIADA","DOADA","FEIAS","JOGOS","PODAR","FARRA","ALTAS","SOTAO","SENSO","BOATE","PIRAR","RAROS","NUNCA","GENIO","ADAGA","HOTEL","IDADE","BAIAS","URANO","PEOES","CENSO","GORRO","GESSO","GATOS","ROTAS","NOBEL","CLIPE","SEXTA","VEADO","FINAL","AREAS","CERTO","VIGOR","OXIDO","PAREO","PAUSA","REAIS","TONTO","VIRAR","PARDO","ZINCO","URSOS","FARPA","DITOS","PERDA","REMOS","TENOR","PIRAO","BACON","ORDEM","SACHE","MUTUA","TRENS","CHEIA","MIRIM","CORVO","DORSO","MANSA","VINIL","ATOMO","REPOR","ICONE","PUDOR","CARPA","CANJA","FOFOS","URUBU","ESTAR","ZEROS","PIADA","EXTRA","SENSO","PERNA","MOVER","VIRAL","NAIPE","CISTO","BLOCO","CUPOM","POVOS","FARDO","GRACA","AVELA","PALHA","SUCOS","TOSCA","CASOS","LICOR","GURIA","DENSO","TERRA","DELAS","RETER","GREGA","BIRRA","LEMES","LUXOS","MIADO","SENHA","SONAR","RAIVA","MENTA","BIOMA","HIATO","HAVER","BRAVA","BUQUE","VEZES","ATRAS","FOSCO","TRAIR","ORGAO","CINTA","CACHO","COXAS","POLOS","ESSAS","OLEOS","BANDA","LIXOS","DORES","ACESA","CLARO","DUBLE","ALBUM","NATAL","AVIAO","MASSA","CATAR","MAPAS","LEVAR","RIGOR","POMBA","FOSSO","FRACA","BANIR","COPOS","AMAGO","DUROS","ZEBRA","CORDA","CABRA","MORNO","TURMA","MOVEL","SETAS","PONEI","ORIXA","LAUDO","TATIL","DOCAS","RICOS","DICAS","MOTOS","SEDAS","PRAZO","AGUDO","TOLOS","MIMAR","FINAS","POSAR","NICHO","COVAS","TRENA","DOSAR","SOCOS","BARAO","FOCAR","INVES","PESTE","ANAIS","JAULA","REGUA","OMEGA","ACHAR","CORSO","CANOS","BARCA","CAFES","MACIO","FATOS","FICAR","MOTEL","BATOM","TROPA","SERIO","JARRO","VOGAL","CANIL","VISOR","DENTE","CASCA","SANTA","CHEFE","PENTA","FUSAO","REINA","MESMO","CISNE","LAPSO","FONTE","FOCOS","AMIDO","FERIR","CEDRO","CRUEL","MAFIA","EXATO","CAPAZ","LENCO","ASSAR","AINDA","CAMPO","ENFIM","VERBA","NOITE","PENAL","ANSIA","SAPOS","AMBAS","MORAR","AMBAR","FONES","AXILA","JATOS","POMPA","OSSOS","MICOS","POUCO"];

const UNIQUE_WORDS = [...new Set(WORDS)];

function filterWords(clues) {
  return UNIQUE_WORDS.filter(word => {
    for (const clue of clues) {
      for (let i = 0; i < 5; i++) {
        const letter = clue.letters[i];
        const status = clue.statuses[i];
        if (!letter) continue;
        if (status === "correct" && word[i] !== letter) return false;
        if (status === "present" && (!word.includes(letter) || word[i] === letter)) return false;
        if (status === "absent" && word.includes(letter)) {
          // Only eliminate if letter doesn't appear as correct/present elsewhere
          const appearsElsewhere = clue.letters.some((l, j) => l === letter && j !== i && clue.statuses[j] !== "absent");
          if (!appearsElsewhere) return false;
        }
      }
    }
    return true;
  });
}

const STATUS_COLORS = {
  correct: "#538d4e",
  present: "#b59f3b",
  absent: "#3a3a3c",
  empty: "#1a1a1b",
};

export default function App() {
  const [clues, setClues] = useState([]);
  const [currentWord, setCurrentWord] = useState(["","","","",""]);
  const [currentStatuses, setCurrentStatuses] = useState(["empty","empty","empty","empty","empty"]);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);
  const [mode, setMode] = useState("photo"); // photo | manual
  const fileRef = useRef();

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImage(url);
    const reader = new FileReader();
    reader.onload = () => setImageBase64(reader.result.split(",")[1]);
    reader.readAsDataURL(file);
  };

  const analyzePhoto = async () => {
    if (!imageBase64) return;
    setLoading(true);
    setResults(null);
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{
            role: "user",
            content: [
              {
                type: "image",
                source: { type: "base64", media_type: "image/jpeg", data: imageBase64 }
              },
              {
                type: "text",
                text: `Analise este tabuleiro do jogo Termo (clone do Wordle em português).
                
Extraia APENAS as linhas já jogadas (que têm letras com cores).
Para cada linha retorne um JSON com:
- letters: array de 5 letras maiúsculas
- statuses: array de 5 status, onde cada status é:
  - "correct" = verde (letra certa na posição certa)
  - "present" = amarelo (letra existe mas posição errada)
  - "absent" = cinza/escuro (letra não existe na palavra)

Retorne APENAS um JSON válido, sem texto adicional, no formato:
{"clues": [{"letters": ["C","A","S","A","S"], "statuses": ["absent","correct","present","absent","correct"]}, ...]}

Se não conseguir identificar claramente, retorne {"clues": [], "error": "motivo"}`
              }
            ]
          }]
        })
      });
      const data = await response.json();
      const text = data.content.map(c => c.text || "").join("");
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      if (parsed.clues && parsed.clues.length > 0) {
        setClues(parsed.clues);
        const filtered = filterWords(parsed.clues);
        setResults(filtered);
      } else {
        setResults([]);
      }
    } catch (err) {
      console.error(err);
      setResults([]);
    }
    setLoading(false);
  };

  const addManualClue = () => {
    if (currentWord.some(l => !l)) return;
    const newClue = { letters: [...currentWord], statuses: [...currentStatuses] };
    const newClues = [...clues, newClue];
    setClues(newClues);
    setResults(filterWords(newClues));
    setCurrentWord(["","","","",""]);
    setCurrentStatuses(["empty","empty","empty","empty","empty"]);
  };

  const toggleStatus = (i) => {
    const order = ["absent","present","correct"];
    setCurrentStatuses(s => {
      const next = [...s];
      const idx = order.indexOf(next[i]);
      next[i] = order[(idx + 1) % order.length];
      return next;
    });
  };

  const reset = () => { setClues([]); setResults(null); setImage(null); setImageBase64(null); };

  const total = UNIQUE_WORDS.length;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#111213",
      color: "#fff",
      fontFamily: "'Courier New', monospace",
      padding: "16px",
    }}>
      <div style={{ maxWidth: 480, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <h1 style={{
            fontSize: 26, fontWeight: 900, letterSpacing: 6, margin: "0 0 4px",
            color: "#fff",
          }}>🟩 SOLVER</h1>
          <p style={{ color: "#818384", fontSize: 12, margin: 0 }}>Nextage Termo · {total} palavras</p>
        </div>

        {/* Mode tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          {[["photo","📷 Foto"],["manual","⌨️ Manual"]].map(([v,l]) => (
            <button key={v} onClick={() => setMode(v)} style={{
              flex: 1, padding: 12, border: "none", borderRadius: 8,
              background: mode === v ? "#538d4e" : "#272729",
              color: "#fff", fontWeight: 700, fontSize: 13,
              cursor: "pointer", letterSpacing: 1,
            }}>{l}</button>
          ))}
        </div>

        {/* Photo mode */}
        {mode === "photo" && (
          <div style={{ marginBottom: 20 }}>
            <div
              onClick={() => fileRef.current.click()}
              style={{
                border: "2px dashed #3a3a3c",
                borderRadius: 12, padding: "24px 16px",
                textAlign: "center", cursor: "pointer",
                background: image ? "transparent" : "#1a1a1b",
                marginBottom: 12,
              }}
            >
              {image
                ? <img src={image} alt="board" style={{ maxWidth: "100%", borderRadius: 8, maxHeight: 300, objectFit: "contain" }} />
                : <>
                    <div style={{ fontSize: 40, marginBottom: 8 }}>📷</div>
                    <p style={{ color: "#818384", margin: 0, fontSize: 14 }}>Toque para enviar foto do tabuleiro</p>
                  </>
              }
            </div>
            <input ref={fileRef} type="file" accept="image/*" capture="environment" onChange={handleImage} style={{ display: "none" }} />
            {image && (
              <button onClick={analyzePhoto} disabled={loading} style={{
                width: "100%", padding: 14, border: "none", borderRadius: 10,
                background: loading ? "#272729" : "#538d4e",
                color: "#fff", fontWeight: 900, fontSize: 15,
                cursor: loading ? "not-allowed" : "pointer", letterSpacing: 2,
              }}>
                {loading ? "🔍 Analisando..." : "🔍 ANALISAR"}
              </button>
            )}
          </div>
        )}

        {/* Manual mode */}
        {mode === "manual" && (
          <div style={{ marginBottom: 20 }}>
            {/* Step 1: type word */}
            <p style={{ color: "#818384", fontSize: 12, marginBottom: 8 }}>
              1️⃣ Digite a palavra que tentou:
            </p>
            <input
              maxLength={5}
              value={currentWord.join("")}
              onChange={e => {
                const v = e.target.value.toUpperCase().replace(/[^A-Z]/g,"").slice(0,5);
                setCurrentWord(v.split("").concat(["","","","",""]).slice(0,5));
              }}
              placeholder="Ex: CARRO"
              style={{
                width: "100%", padding: "14px 16px", borderRadius: 10,
                background: "#272729", border: "1px solid #3a3a3c",
                color: "#fff", fontSize: 22, fontWeight: 900,
                letterSpacing: 8, textAlign: "center",
                fontFamily: "inherit", marginBottom: 16,
                boxSizing: "border-box",
              }}
            />

            {/* Step 2: set colors */}
            {currentWord.some(l => l) && (
              <>
                <p style={{ color: "#818384", fontSize: 12, marginBottom: 8 }}>
                  2️⃣ Toque em cada letra para definir a cor:
                </p>
                <div style={{ display: "flex", gap: 8, marginBottom: 16, justifyContent: "center" }}>
                  {[0,1,2,3,4].map(i => {
                    const s = currentStatuses[i];
                    return (
                      <div
                        key={i}
                        onClick={() => toggleStatus(i)}
                        style={{
                          width: 54, height: 54,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          background: STATUS_COLORS[s],
                          border: `3px solid ${s==="empty"?"#555":"transparent"}`,
                          borderRadius: 8, fontWeight: 900, fontSize: 22,
                          cursor: "pointer", userSelect: "none",
                          transition: "background 0.15s",
                        }}
                      >
                        {currentWord[i] || ""}
                      </div>
                    );
                  })}
                </div>
                <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 16 }}>
                  <span style={{ fontSize: 12, color: "#818384" }}>⬛ ausente</span>
                  <span style={{ fontSize: 12, color: "#b59f3b" }}>🟨 lugar errado</span>
                  <span style={{ fontSize: 12, color: "#538d4e" }}>🟩 correto</span>
                </div>
              </>
            )}

            <button onClick={addManualClue} disabled={currentWord.filter(l=>l).length < 5} style={{
              width: "100%", padding: 14, border: "none", borderRadius: 10,
              background: currentWord.filter(l=>l).length < 5 ? "#272729" : "#1f6feb",
              color: currentWord.filter(l=>l).length < 5 ? "#555" : "#fff",
              fontWeight: 700, fontSize: 15, cursor: "pointer", letterSpacing: 1,
            }}>+ ADICIONAR TENTATIVA</button>
          </div>
        )}

        {/* Current clues */}
        {clues.length > 0 && (
          <div style={{ marginBottom: 20 }}>
            <p style={{ color: "#818384", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              Tentativas detectadas
            </p>
            {clues.map((clue, ci) => (
              <div key={ci} style={{ display: "flex", gap: 4, marginBottom: 6, justifyContent: "center" }}>
                {clue.letters.map((l, i) => (
                  <div key={i} style={{
                    width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center",
                    background: STATUS_COLORS[clue.statuses[i]] || "#3a3a3c",
                    borderRadius: 6, fontWeight: 900, fontSize: 18,
                  }}>{l}</div>
                ))}
              </div>
            ))}
            <button onClick={reset} style={{
              background: "transparent", border: "1px solid #3a3a3c",
              color: "#818384", borderRadius: 8, padding: "6px 16px",
              cursor: "pointer", fontSize: 12, marginTop: 4,
            }}>↺ Resetar</button>
          </div>
        )}

        {/* Results */}
        {results !== null && (
          <div>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              marginBottom: 12,
            }}>
              <p style={{ margin: 0, color: "#818384", fontSize: 12 }}>
                <strong style={{ color: results.length <= 5 ? "#538d4e" : results.length <= 20 ? "#b59f3b" : "#fff" }}>
                  {results.length}
                </strong> possibilidade{results.length !== 1 ? "s" : ""}
              </p>
              <p style={{ margin: 0, color: "#818384", fontSize: 12 }}>
                {results.length > 0 ? `${((1/results.length)*100).toFixed(1)}% por palavra` : "0%"}
              </p>
            </div>

            {results.length === 0 && (
              <div style={{ textAlign: "center", padding: 32, color: "#818384" }}>
                <div style={{ fontSize: 32 }}>🤔</div>
                <p>Nenhuma palavra encontrada. Verifique as dicas.</p>
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {results.slice(0, 30).map((word, idx) => {
                const pct = ((1 / results.length) * 100).toFixed(1);
                const isTop = idx < 3;
                return (
                  <div key={word} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    background: isTop ? "rgba(83,141,78,0.15)" : "#1a1a1b",
                    border: `1px solid ${isTop ? "#538d4e44" : "#272729"}`,
                    borderRadius: 10, padding: "10px 16px",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ color: "#818384", fontSize: 12, width: 20 }}>#{idx+1}</span>
                      <span style={{ fontWeight: 900, fontSize: 18, letterSpacing: 3 }}>{word}</span>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontWeight: 700, color: isTop ? "#538d4e" : "#b59f3b", fontSize: 15 }}>{pct}%</div>
                    </div>
                  </div>
                );
              })}
              {results.length > 30 && (
                <p style={{ textAlign: "center", color: "#818384", fontSize: 12 }}>
                  ...e mais {results.length - 30} palavras
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
               }

import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Popup from "./Popup";

class Team {
  constructor(name) {
    this.name = name;
    this.bans = [];
    this.picks = [];
  }

  ban(pokemon) {
    this.bans.push(pokemon);
  }

  pick(pokemon) {
    if (this.picks.length < 5) {
      this.picks.push(pokemon);
    }
  }
}

const teamA = new Team("Team A");
const teamB = new Team("Team B");

const pokemonList = [
  {
    id: 1,
    name: { Japanese: "マンムー", English: "mamoswine" },
    imageUrl:
      "https://img.game8.co/3425561/5ebe96da72afe72274723d73077632ee.png/show",
    type: "ディフェンス",
  },
  {
    id: 2,
    name: { Japanese: "カビゴン", English: "snorlax" },
    imageUrl:
      "https://img.game8.co/3408918/d14ada50d96ffc494616f06a70ea8284.png/show",
    type: "ディフェンス",
  },
  {
    id: 3,
    name: { Japanese: "オーロット", English: "trevenant" },
    imageUrl:
      "https://img.game8.co/3468440/81aa64559d571ef6f1ce9560abf3d00f.png/show",
    type: "ディフェンス",
  },
  {
    id: 4,
    name: { Japanese: "カメックス", English: "blastoise" },
    imageUrl:
      "https://img.game8.co/3411846/1f403227892789ee74a521f64f08e613.png/show",
    type: "ディフェンス",
  },
  {
    id: 5,
    name: { Japanese: "ブラッキー", English: "umbreon" },
    imageUrl:
      "https://img.game8.co/3692123/4146dfade23a6d94f0011fd7fd5a2251.png/show",
    type: "ディフェンス",
  },
  {
    id: 6,
    name: { Japanese: "イワパレス", English: "crustle" },
    imageUrl:
      "https://img.game8.co/3408919/fb3febfb3faa422d11d853e910ded662.png/show",
    type: "ディフェンス",
  },
  {
    id: 7,
    name: { Japanese: "ヤドラン", English: "slowbro" },
    imageUrl:
      "https://img.game8.co/3408929/e3023e4063ca4f2227f69e298e389f20.png/show",
    type: "ディフェンス",
  },
  {
    id: 8,
    name: { Japanese: "ラプラス", English: "lapras" },
    imageUrl:
      "https://img.game8.co/3674655/5429e8e97711517ba1144acc5b6ee5b2.png/show",
    type: "ディフェンス",
  },
  {
    id: 9,
    name: { Japanese: "ホウオウ", English: "hooh" },
    imageUrl:
      "https://img.game8.co/3936227/164a088966a281aa2fbcab7c7dfc6e5f.png/show",
    type: "ディフェンス",
  },
  {
    id: 10,
    name: { Japanese: "ヌメルゴン", English: "goodra" },
    imageUrl:
      "https://img.game8.co/3655476/e828893cf6d9faf134eab32463e19379.png/show",
    type: "ディフェンス",
  },
  {
    id: 11,
    name: { Japanese: "ヨクバリス", English: "greedent" },
    imageUrl:
      "https://img.game8.co/3436922/80f16f8d0398dde3982981520c53007e.png/show",
    type: "ディフェンス",
  },
  {
    id: 12,
    name: { Japanese: "プクリン", English: "wigglytuff" },
    imageUrl:
      "https://img.game8.co/3408924/e9e00ec3b13e4e356bfb919932fdeb33.png/show",
    type: "サポート",
  },
  {
    id: 13,
    name: { Japanese: "ピクシー", English: "clefable" },
    imageUrl:
      "https://img.game8.co/3579578/90f28d398c79b5dc7c7725b8f2d2f656.png/show",
    type: "サポート",
  },
  {
    id: 14,
    name: { Japanese: "ハピナス", English: "blissey" },
    imageUrl:
      "https://img.game8.co/3408923/3893729f8581f52e07ac5cb2c6caaaee.png/show",
    type: "サポート",
  },
  {
    id: 15,
    name: { Japanese: "キュワワー", English: "comfey" },
    imageUrl:
      "https://img.game8.co/3639294/5723f29e0b55ac17fd8059a8c306224f.png/show",
    type: "サポート",
  },
  {
    id: 16,
    name: { Japanese: "フーパ", English: "hoopa" },
    imageUrl:
      "https://img.game8.co/3491652/ce79a3670b9d63c4795cf553d37db8f1.png/show",
    type: "サポート",
  },
  {
    id: 17,
    name: { Japanese: "バリヤード", English: "mrmime" },
    imageUrl:
      "https://img.game8.co/3408925/d3271feb41363ab0ec29f1fde5e37609.png/show",
    type: "サポート",
  },
  {
    id: 18,
    name: { Japanese: "ヤミラミ", English: "sableye" },
    imageUrl:
      "https://img.game8.co/3608959/93e8e46ef3821bbfd8d63e43b4e3d93a.png/show",
    type: "サポート",
  },
  {
    id: 19,
    name: { Japanese: "ウッウ", English: "cramorant" },
    imageUrl:
      "https://img.game8.co/3408922/c76f2c566a80b8b261bda1a43b891608.png/show",
    type: "アタック",
  },
  {
    id: 20,
    name: { Japanese: "アローラキュウコン", English: "ninetales" },
    imageUrl:
      "https://img.game8.co/3408914/43f35916cb971fa3630ec0498d733b38.png/show",
    type: "アタック",
  },
  {
    id: 21,
    name: { Japanese: "ピカチュウ", English: "pikachu" },
    imageUrl:
      "https://img.game8.co/3408917/faf7fc1155634da35efb371861d43e09.png/show",
    type: "アタック",
  },
  {
    id: 22,
    name: { Japanese: "エーフィ", English: "espeon" },
    imageUrl:
      "https://img.game8.co/3525744/f46e2c20b427a3389af71cc1e65b5bc0.png/show",
    type: "アタック",
  },
  {
    id: 23,
    name: { Japanese: "ニンフィア", English: "sylveon" },
    imageUrl:
      "https://img.game8.co/3428180/c892bff43739020e0c7e2260cc3c70dc.png/show",
    type: "アタック",
  },
  {
    id: 24,
    name: { Japanese: "マフォクシー", English: "delphox" },
    imageUrl:
      "https://img.game8.co/3535643/624f332e5d5d7001f6f214957c46e81a.png/show",
    type: "アタック",
  },
  {
    id: 25,
    name: { Japanese: "シャンデラ", English: "chandelure" },
    imageUrl:
      "https://img.game8.co/3677839/6298fc11a8f4344acf4459ddbc80f3be.png/show",
    type: "アタック",
  },
  {
    id: 26,
    name: { Japanese: "サーナイト", English: "gardevoir" },
    imageUrl:
      "https://img.game8.co/3408915/5cc956a3b1720eaaac1be7a6d0b59d81.png/show",
    type: "アタック",
  },
  {
    id: 27,
    name: { Japanese: "ミライドン", English: "miraidon" },
    imageUrl:
      "https://img.game8.co/3845163/994a4f2084469086d7e1f0b625d2056e.png/show",
    type: "アタック",
  },
  {
    id: 28,
    name: { Japanese: "ミュウ", English: "mew" },
    imageUrl:
      "https://img.game8.co/3568507/7cc85b48563071b66f1c9a884ff8cb9f.png/show",
    type: "アタック",
  },
  {
    id: 29,
    name: { Japanese: "インテレオン", English: "inteleon" },
    imageUrl:
      "https://img.game8.co/3731059/bce9565e38267c8718f4d070822614ca.png/show",
    type: "アタック",
  },
  {
    id: 30,
    name: { Japanese: "フシギバナ", English: "Venusaur" },
    imageUrl:
      "https://img.game8.co/3408931/f6bddcfbe8ecf4cba0b037f39c31a87a.png/show",
    type: "アタック",
  },
  {
    id: 31,
    name: { Japanese: "ミュウツーY", English: "mewtwoy" },
    imageUrl:
      "https://img.game8.co/3804967/a080818c7ac9bb0326d17bd508a8891c.png/show",
    type: "アタック",
  },
  {
    id: 32,
    name: { Japanese: "グレイシア", English: "glaceon" },
    imageUrl:
      "https://img.game8.co/3549540/ffe8e6d93ced167f5f358f22c6593f63.png/show",
    type: "アタック",
  },
  {
    id: 33,
    name: { Japanese: "エースバーン", English: "cinderace" },
    imageUrl:
      "https://img.game8.co/3408921/3116d247d8c6d7b1070351ba0348b215.png/show",
    type: "アタック",
  },
  {
    id: 34,
    name: { Japanese: "ゲッコウガ", English: "greninja" },
    imageUrl:
      "https://img.game8.co/3408927/5c62d99c62ba7bc68ea7cfbb177a66bb.png/show",
    type: "アタック",
  },
  {
    id: 35,
    name: { Japanese: "ドラパルト", English: "dragapult" },
    imageUrl:
      "https://img.game8.co/3624005/d8c2b3300f2a42d44c7b3cda246adca1.png/show",
    type: "アタック",
  },
  {
    id: 36,
    name: { Japanese: "ジュラルドン", English: "duraludon" },
    imageUrl:
      "https://img.game8.co/3498222/a13d2518da1e974f0cbc3abb4fcf34cc.png/show",
    type: "アタック",
  },
  {
    id: 37,
    name: { Japanese: "ジュナイパー", English: "decidueye" },
    imageUrl:
      "https://img.game8.co/3450162/60d614359361252346bfbf9482bcf450.png/show",
    type: "アタック",
  },
  {
    id: 38,
    name: { Japanese: "ルカリオ", English: "lucario" },
    imageUrl:
      "https://img.game8.co/3408932/88721d5db457a0765410a754cdafcc71.png/show",
    type: "バランス",
  },
  {
    id: 39,
    name: { Japanese: "カイリキー", English: "machamp" },
    imageUrl:
      "https://img.game8.co/3408930/44f9f65618d47b4affe642cdf5270c31.png/show",
    type: "バランス",
  },
  {
    id: 40,
    name: { Japanese: "リザードン", English: "charizard" },
    imageUrl:
      "https://img.game8.co/3408920/ed4ca1b2390c2891e8a1b53012b89ad5.png/show",
    type: "バランス",
  },
  {
    id: 41,
    name: { Japanese: "ギャラドス", English: "gyarados" },
    imageUrl:
      "https://img.game8.co/3825582/f7aeef46df5d649c68749808e1c870c8.png/show",
    type: "バランス",
  },
  {
    id: 42,
    name: { Japanese: "カイリュー", English: "dragonite" },
    imageUrl:
      "https://img.game8.co/3459498/5f47d495d5f7241739b6c1f588c828b5.png/show",
    type: "バランス",
  },
  {
    id: 43,
    name: { Japanese: "ミュウツーＸ", English: "mewtwox" },
    imageUrl:
      "https://img.game8.co/3804965/ed7433ae3d1e2b842303a418acdbd44a.png/show",
    type: "バランス",
  },
  {
    id: 44,
    name: { Japanese: "マリルリ", English: "azumarill" },
    imageUrl:
      "https://img.game8.co/3513576/5d04fb2f7afe24c73e1e07abedfb509d.png/show",
    type: "バランス",
  },
  {
    id: 45,
    name: { Japanese: "ハッサム", English: "scizor" },
    imageUrl:
      "https://img.game8.co/3587327/255870f5aa3c65493c45572687e78f80.png/show",
    type: "バランス",
  },
  {
    id: 46,
    name: { Japanese: "バンギラス", English: "tyranitar" },
    imageUrl:
      "https://img.game8.co/3562398/58b6d47af0a6bd89882381201ba5ada9.png/show",
    type: "バランス",
  },
  {
    id: 47,
    name: { Japanese: "バシャーモ", English: "blaziken" },
    imageUrl:
      "https://img.game8.co/3749395/91f3576d07d6dc7f71bd994b3dd83ddb.png/show",
    type: "バランス",
  },
  {
    id: 48,
    name: { Japanese: "メタグロス", English: "metagross" },
    imageUrl:
      "https://img.game8.co/3813357/a92d2fe5866ca6fafe79516aef1fefa5.png/show",
    type: "バランス",
  },
  {
    id: 49,
    name: { Japanese: "ガブリアス", English: "garchomp" },
    imageUrl:
      "https://img.game8.co/3408926/8b6a097c8f243c9f831c0cae8ea63537.png/show",
    type: "バランス",
  },
  {
    id: 50,
    name: { Japanese: "ギルガルド", English: "aegislash" },
    imageUrl:
      "https://img.game8.co/3480521/a4f51eac8541ccda959b8e9f7fd96703.png/show",
    type: "バランス",
  },
  {
    id: 51,
    name: { Japanese: "アマージョ", English: "tsareena" },
    imageUrl:
      "https://img.game8.co/3456947/d548f573a86ff0776adebd5f940408f5.png/show",
    type: "バランス",
  },
  {
    id: 52,
    name: { Japanese: "ミミッキュ", English: "mimikyu" },
    imageUrl:
      "https://img.game8.co/3749394/79600d4095d5c79108005b3aef236380.png/show",
    type: "バランス",
  },
  {
    id: 53,
    name: { Japanese: "マッシブーン", English: "buzzwole" },
    imageUrl:
      "https://img.game8.co/3556724/de369351425bdd25080e7510583a2315.png/show",
    type: "バランス",
  },
  {
    id: 54,
    name: { Japanese: "ウーラオス", English: "urshifu" },
    imageUrl:
      "https://img.game8.co/3617989/b50e4a97f3291dcad7a85317e9eb2b47.png/show",
    type: "バランス",
  },
  {
    id: 55,
    name: { Japanese: "タイレーツ", English: "falinks" },
    imageUrl:
      "https://img.game8.co/3871849/ef5d1c031f6a54ade6867edaff11d66b.png/show",
    type: "バランス",
  },
  {
    id: 56,
    name: { Japanese: "ザシアン", English: "zacian" },
    imageUrl:
      "https://img.game8.co/3804966/2e27d97c1eb584a2e752e64ea043c4c0.png/show",
    type: "バランス",
  },
  {
    id: 57,
    name: { Japanese: "ソウブレイズ", English: "ceruledge" },
    imageUrl:
      "https://img.game8.co/3907753/9430a1bbd53154f6a613f24f7a0fe11f.png/show",
    type: "バランス",
  },
  {
    id: 58,
    name: { Japanese: "リーフィア", English: "leafeon" },
    imageUrl:
      "https://img.game8.co/3692122/666ffa6b7bd1b235ae2498236af883a0.png/show",
    type: "スピード",
  },
  {
    id: 59,
    name: { Japanese: "ゲンガー", English: "gengar" },
    imageUrl:
      "https://img.game8.co/3408916/6789fdcccb78ebb02bfb5d4f211bb761.png/show",
    type: "スピード",
  },
  {
    id: 60,
    name: { Japanese: "アブソル", English: "absol" },
    imageUrl:
      "https://img.game8.co/3408910/34f0c5d8da01304daeb9ee9160182e83.png/show",
    type: "スピード",
  },
  {
    id: 61,
    name: { Japanese: "ゾロアーク", English: "zoroark" },
    imageUrl:
      "https://img.game8.co/3601736/8e0ac36da2604fdcd0d053e54dbaa15d.png/show",
    type: "スピード",
  },
  {
    id: 62,
    name: { Japanese: "ドードリオ", English: "dodrio" },
    imageUrl:
      "https://img.game8.co/3581133/47880caa5d061550b077534c3319bdf4.png/show",
    type: "スピード",
  },
  {
    id: 63,
    name: { Japanese: "ファイアロー", English: "talonflame" },
    imageUrl:
      "https://img.game8.co/3408928/b0ceaa5d446346ecbacaede409186141.png/show",
    type: "スピード",
  },
  {
    id: 64,
    name: { Japanese: "ゼラオラ", English: "zeraora" },
    imageUrl:
      "https://img.game8.co/3408933/c39cf9607996f8845ecdf1602ed7bef2.png/show",
    type: "スピード",
  },
  {
    id: 65,
    name: { Japanese: "マスカーニャ", English: "meowscarada" },
    imageUrl:
      "https://img.game8.co/3749396/716a21dc1d03d8ece2927f1dff6c72da.png/show",
    type: "スピード",
  },

  // Add more Pokémon as needed
];

// ドラフト順の設定
const default_draft = [
  [teamA, "BAN"],
  [teamB, "BAN"],
  [teamA, "BAN"],
  [teamB, "BAN"],
  [teamA, "PICK"],
  [teamB, "PICK"],
  [teamB, "PICK"],
  [teamA, "PICK"],
  [teamA, "PICK"],
  [teamB, "PICK"],
  [teamB, "PICK"],
  [teamA, "PICK"],
  [teamA, "PICK"],
  [teamB, "PICK"],
];

// メインコンポーネント
const App = () => {
  const [selectedType, setSelectedType] = useState("すべて");
  const [currentTeam, setCurrentTeam] = useState(default_draft[0][0]);
  const [currentAction, setCurrentAction] = useState(default_draft[0][1]);
  const [bans, setBans] = useState([]);
  const [picks, setPicks] = useState([]);
  const [draftIndex, setDraftIndex] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [userInteracted, setUserInteracted] = useState(false);
  const [draftComplete, setDraftComplete] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  const banSound = useRef(new Audio("/決定ボタンを押す52.mp3"));
  const crySound = useRef(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      setUserInteracted(true);
      document.removeEventListener("click", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const filteredPokemonList =
    selectedType === "すべて"
      ? pokemonList
      : pokemonList.filter((p) => p.type === selectedType);

  const handlePokemonClick = (pokemon) => {
    if (draftComplete || isPokemonDisabled(pokemon)) {
      return;
    }
    setSelectedPokemon(pokemon);

    if (currentAction === "PICK") {
      crySound.current = new Audio(
        `/${pokemon.name.English.toLowerCase()}.mp3`
      );
    }
  };

  const handleConfirmClick = () => {
    if (selectedPokemon) {
      if (userInteracted) {
        if (currentAction === "BAN") {
          banSound.current.play().catch((error) => {
            console.error("Error playing sound:", error);
          });
        } else if (currentAction === "PICK" && crySound.current) {
          crySound.current.play().catch((error) => {
            console.error("Error playing sound:", error);
          });
        }
      }
      if (currentAction === "BAN") {
        currentTeam.ban(selectedPokemon);
        setBans([...bans, selectedPokemon]);
      } else if (currentAction === "PICK") {
        currentTeam.pick(selectedPokemon);
        setPicks([...picks, selectedPokemon]);
      }
      updateDraft(1);
      setSelectedPokemon(null);
    }
  };

  const updateDraft = (step) => {
    const nextIndex = draftIndex + step;
    if (nextIndex >= 0 && nextIndex < default_draft.length) {
      setDraftIndex(nextIndex);
      setCurrentTeam(default_draft[nextIndex][0]);
      setCurrentAction(default_draft[nextIndex][1]);
    } else {
      setDraftComplete(true);
    }
  };

  const isPokemonDisabled = (pokemon) => {
    if (bans.includes(pokemon) || picks.includes(pokemon)) {
      return true;
    }
    const ismewtwoy = pokemon.name.English === "mewtwoy";
    const ismewtwox = pokemon.name.English === "mewtwox";
    const ismewtwoySelected =
      bans.some((p) => p.name.English === "mewtwoy") ||
      picks.some((p) => p.name.English === "mewtwoy");
    const ismewtwoxSelected =
      bans.some((p) => p.name.English === "mewtwox") ||
      picks.some((p) => p.name.English === "mewtwox");
    return (ismewtwoy && ismewtwoxSelected) || (ismewtwox && ismewtwoySelected);
  };

  const getPokemonClass = (pokemon) => {
    if (teamA.bans.includes(pokemon) || teamA.picks.includes(pokemon)) {
      return "team-a";
    } else if (teamB.bans.includes(pokemon) || teamB.picks.includes(pokemon)) {
      return "team-b";
    }
    return "";
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleUndoClick = () => {
    if (draftIndex > 0) {
      updateDraft(-1);
      const lastAction = default_draft[draftIndex - 1];
      const lastTeam = lastAction[0];
      const lastActionType = lastAction[1];

      if (lastActionType === "BAN") {
        lastTeam.bans.pop();
        setBans([...bans.slice(0, -1)]);
      } else if (lastActionType === "PICK") {
        lastTeam.picks.pop();
        setPicks([...picks.slice(0, -1)]);
      }
    }
  };

  const handleResetClick = () => {
    setBans([]);
    setPicks([]);
    teamA.bans = [];
    teamA.picks = [];
    teamB.bans = [];
    teamB.picks = [];
    setDraftIndex(0);
    setCurrentTeam(default_draft[0][0]);
    setCurrentAction(default_draft[0][1]);
    setDraftComplete(false);
  };

  return (
    <div className="app-container">
      {isPopupVisible && <Popup onClose={handleClosePopup} />}
      {!isPopupVisible && (
        <div style={{ padding: "0 200px" }}>
          <div style={{ textAlign: "center" }}>
            <img
              src="https://www.pokemon.co.jp/ex/pokemonryuoh/2024/assets/img/pokemonunite/logo.png"
              alt="Pokémon Unite Logo"
              style={{ width: "200px" }}
            />
          </div>

          <div style={{ textAlign: "center", margin: "32px 0" }}>
            <h3 style={{ lineHeight: "1.5" }}>
              現在のフェーズ: {currentTeam.name} - {currentAction}
            </h3>
          </div>

          <div className="dropdown">
            <select onChange={handleTypeChange} value={selectedType}>
              <option value="すべて">すべて</option>
              <option value="ディフェンス">ディフェンス</option>
              <option value="サポート">サポート</option>
              <option value="バランス">バランス</option>
              <option value="アタック">アタック</option>
              <option value="スピード">スピード</option>
            </select>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ overflowY: "auto", maxHeight: "70vh" }}>
              <h2>Team A</h2>
              <div>
                <h3>Bans:</h3>
                <div className="ban-container">
                  {teamA.bans.map((p) => (
                    <div key={p.id} className="banned">
                      <img
                        src={p.imageUrl}
                        alt={p.name.English}
                        className="team-a"
                        style={{ width: "80px" }}
                      />
                    </div>
                  ))}
                  {currentAction === "BAN" &&
                    currentTeam === teamA &&
                    selectedPokemon && (
                      <div className="banned" style={{ position: "relative" }}>
                        <img
                          src={selectedPokemon.imageUrl}
                          alt={selectedPokemon.name.English}
                          className="team-a"
                          style={{ width: "80px" }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            color: "white",
                            fontWeight: "bold",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            padding: "0px",
                            width: "80px",
                            height: "80px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        ></div>
                      </div>
                    )}
                </div>
              </div>
              <div>
                <h3>Picks:</h3>
                {teamA.picks.map((p) => (
                  <div key={p.id}>
                    <img
                      src={p.imageUrl}
                      alt={p.name.English}
                      className="team-a"
                      style={{ width: "80px" }}
                    />
                  </div>
                ))}
                {currentAction === "PICK" &&
                  currentTeam === teamA &&
                  selectedPokemon && (
                    <div style={{ position: "relative", textAlign: "left" }}>
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "0",
                          transform: "translateY(-50%)",
                          color: "white",
                          fontWeight: "bold",
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          padding: "0px",
                          width: "80px",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        選択中
                      </div>
                      <img
                        src={selectedPokemon.imageUrl}
                        alt={selectedPokemon.name.English}
                        className="team-a"
                        style={{ width: "80px" }}
                      />
                    </div>
                  )}
              </div>
            </div>

            <div
              style={{
                width: "66%",
                display: "fix",
                justifyContent: "center",
                flexWrap: "wrap",
                overflowY: "auto",
                maxHeight: "65vh", // 画像リストのスクロール対応
              }}
            >
              {filteredPokemonList.map((pokemon) => (
                <div
                  key={pokemon.id}
                  style={{
                    position: "relative",
                    display: "inline-block",
                    margin: "2px",
                  }}
                >
                  <img
                    src={pokemon.imageUrl}
                    alt={pokemon.name.English}
                    className={getPokemonClass(pokemon)}
                    style={{
                      width: "90px",
                      cursor: "pointer",
                      opacity:
                        bans.includes(pokemon) ||
                        picks.includes(pokemon) ||
                        isPokemonDisabled(pokemon)
                          ? 0.3
                          : 1,
                    }}
                    onClick={() => handlePokemonClick(pokemon)}
                  />
                </div>
              ))}
            </div>

            <div style={{ overflowY: "auto", maxHeight: "70vh" }}>
              <h2>Team B</h2>
              <div>
                <h3>Bans:</h3>
                <div className="ban-container" style={{ textAlign: "right" }}>
                  {teamB.bans.map((p) => (
                    <div key={p.id} className="banned">
                      <img
                        src={p.imageUrl}
                        alt={p.name.English}
                        className="team-b"
                        style={{ width: "80px" }}
                      />
                    </div>
                  ))}
                  {currentAction === "BAN" &&
                    currentTeam === teamB &&
                    selectedPokemon && (
                      <div className="banned" style={{ position: "relative" }}>
                        <img
                          src={selectedPokemon.imageUrl}
                          alt={selectedPokemon.name.English}
                          className="team-b"
                          style={{ width: "80px" }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            color: "white",
                            fontWeight: "bold",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            padding: "0px",
                            width: "80px",
                            height: "80px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        ></div>
                      </div>
                    )}
                </div>
              </div>
              <div>
                <h3>Picks:</h3>
                <div style={{ textAlign: "right" }}>
                  {teamB.picks.map((p) => (
                    <div key={p.id}>
                      <img
                        src={p.imageUrl}
                        alt={p.name.English}
                        className="team-b"
                        style={{ width: "80px" }}
                      />
                    </div>
                  ))}
                </div>
                {currentAction === "PICK" &&
                  currentTeam === teamB &&
                  selectedPokemon && (
                    <div style={{ position: "relative", textAlign: "right" }}>
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          right: "0",
                          transform: "translateY(-50%)",
                          color: "white",
                          fontWeight: "bold",
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          padding: "0px",
                          width: "80px",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        選択中
                      </div>
                      <img
                        src={selectedPokemon.imageUrl}
                        alt={selectedPokemon.name.English}
                        className="team-b"
                        style={{ width: "80px" }}
                      />
                    </div>
                  )}
              </div>
            </div>
          </div>

          {!draftComplete && (
            <>
              <button
                className="confirm-button"
                onClick={handleConfirmClick}
                disabled={!selectedPokemon}
              >
                決定
              </button>
              <button className="undo-button" onClick={handleUndoClick}>
                戻る
              </button>
              <button className="reset-button" onClick={handleResetClick}>
                リセット
              </button>
            </>
          )}

          {draftComplete && <p>ドラフトは完了しました。</p>}
        </div>
      )}
    </div>
  );
};

export default App;

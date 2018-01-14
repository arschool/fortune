/****************
 * おみくじアプリで使うJavaScript
 ***************/

// 画面を初期設定する
let shokiSettei = () => {

  // おみくじ結果パネルを隠す
  kakusuPanel(kekkaPanel);

  // 戻るボタンを隠す
  kakusuPanel(modoruButton);

  // タイトル画面のおみくじ画像を設定する
  setteiHomeImage('omikuji.png');

}

// おみくじの中身
let omikujiNakami = [
  { // 大吉の設定
    kekkaTitle: '大吉', // おみくじの結果のタイトル文
    kekkaSetsumei: '最高の運勢！！何をやっても無敵です。', // おみくじの結果につける説明文
    kekkaImage: '01_daikichi_matsu.png' //おみくじの結果に表示する画像
  },
  { // 吉の設定
    kekkaTitle: '吉', // おみくじの結果のタイトル文
    kekkaSetsumei: '順調！いいことあります。', // おみくじの結果につける説明文
    kekkaImage: '02_kichi_take.png' //おみくじの結果に表示する画像
  },
  { // 小吉の設定
    kekkaTitle: '小吉', // おみくじの結果のタイトル文
    kekkaSetsumei: 'ちょっといいことあるかもね。', // おみくじの結果につける説明文
    kekkaImage: '03_shokichi_ume.png' //おみくじの結果に表示する画像
  },
  { // 凶の設定
    kekkaTitle: '凶', // おみくじの結果のタイトル文
    kekkaSetsumei: 'なにかよくないことがあるかも！気をつけて！', // おみくじの結果につける説明文
    kekkaImage: '04_kyo_koma.png' //おみくじの結果に表示する画像
  },
  { // 大凶の設定
    kekkaTitle: '大凶', // おみくじの結果のタイトル文
    kekkaSetsumei: '帰り道に気をつけよう。', // おみくじの結果につける説明文
    kekkaImage: '05_daikyo_hagoita.png' //おみくじの結果に表示する画像
  }
];

// おみくじを引く
let hikuOmikuji = () => {

  // 始めの画面のおみくじ画像を隠す
  kakusuPanel(omikujiImage);

  // 「おみくじを引く」ボタンを隠す
  kakusuPanel(hikuButton);

  // おみくじの中身の数までが出るサイコロをふる
  let saikoroKekka = furuSaikoro(omikujiNakami.length);

  // 出て来たサイコロの目からおみくじの結果を得る
  let omikujiKekka = omikujiNakami[saikoroKekka];

  // おみくじの結果からタイトルを画面に貼り付ける
  setteiKekkaTitle(omikujiKekka.kekkaTitle);

  // おみくじの結果から説明を画面に貼り付ける
  setteiKekkaSetsumei(omikujiKekka.kekkaSetsumei);

  // おみくじの結果から画像を画面に貼り付ける
  setteiKekkaImage(omikujiKekka.kekkaImage);

  // おみくじの結果画面を表示する
  miseruPanel(kekkaPanel);

  // 「戻る」ボタンを表示する
  miseruPanel(modoruButton);

}

// 読み込み終わったら初期設定を実行する
shokiSettei();

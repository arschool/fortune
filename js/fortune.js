/****************
 * おみくじアプリで使うマスタJavaScript
 ***************/


// 要素の取得
// ホームに表示するおみくじの画像
const omikujiImage = document.getElementById("omikujiImage");

// おみくじ結果を表示するパネル
const kekkaPanel = document.getElementById("kekkaPanel");

// おみくじ結果のタイトル
const kekkaTitle = document.getElementById("kekkaTitle");

// おみくじ結果の説明
const kekkaSetsumei = document.getElementById("kekkaSetsumei");

// おみくじ結果の画像
const kekkaImage = document.getElementById("kekkaImage");

// おみくじを引くボタン
const hikuButton = document.getElementById("hikuButton");

// おみくじ結果から戻るボタン
const modoruButton = document.getElementById("modoruButton");

// おみくじアプリで使うグローバル関数
// パネルを隠す
const kakusuPanel = (panelObject) => {
  panelObject.classList.add('hidden-object');
}

// パネルを見せる
const miseruPanel = (panelObject) => {
  panelObject.classList.remove('hidden-object');
}

// おみくじを引くボタンを押したらおみくじを引く
hikuButton.addEventListener('click', () => {
  // おみくじを引く
  hikuOmikuji();
});

// 戻るボタンを押したらホームに戻る
modoruButton.addEventListener('click', () => {
  // ホームに戻る
  modoruHome();
});

// 出目の総数に応じてサイコロを作り、振る
const furuSaikoro = (maxDeme) => {
  // maxDemeだけ面があるサイコロを振る
  return ~~(Math.random() * maxDeme);
}

// ホームに戻る
const modoruHome = () => {

  // 結果パネルを隠す
  kakusuPanel(kekkaPanel);

  // 「戻る」ボタンを隠す
  kakusuPanel(modoruButton);

  // ホームにあるおみくじの画像を見せる
  miseruPanel(omikujiImage);

  // 「おみくじを引く」ボタンを見せる
  miseruPanel(hikuButton);

}

// おみくじ結果の画像を貼り付ける
const setteiKekkaImage = (image) => {
  // 結果画像のSRCに設定する
  kekkaImage.src = `img/${image}`;
}

// おみくじ結果のタイトルを貼り付ける
const setteiKekkaTitle = (title) => {
  // 結果タイトルの中身に設定する
  kekkaTitle.textContent = title;
}

// おみくじ結果の説明を貼り付ける
const setteiKekkaSetsumei = (setsumei) => {
  // 結果説明の中身に設定する
  kekkaSetsumei.textContent = setsumei;
}

// nミリ秒ごとに実行する
const kurikaesuTimer = (kansu,milbyo) => {
  return setInterval(kansu,milbyo);
}

// タイマーを止める
const tomeruTimer = (timer) => {
  clearInterval(timer);
}

// n秒後に実行する
const matsuTimer = (kansu,milbyo) => {
  return setTimeout(kansu,milbyo);
}

// 初期画面の画像に貼り付ける
const setteiHomeImage = (image) => {
  // タイトル画面の画像を設定
  omikujiImage.src = `img/${image}`;
}

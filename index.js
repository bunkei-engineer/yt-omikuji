// 「おみくじをひく」を取得
const btn = document.querySelector("button");
btn.addEventListener("click", draw);

// おみくじをひく関数
function draw() {
  // 1以上101未満(1~100)の数をランダムで取得（乱数）
  const rand = Math.floor(Math.random() * 100);

  // 結果を入れる要素を取得
  const result = document.getElementById("result");

  switch (true) {
    // randが1~5
    case rand <= 5:
      result.textContent = "結果：大吉";
      break;

    // randが6~25
    case rand > 5 && rand <= 25:
      result.textContent = "結果：吉";
      break;

    // randが26~60
    case rand > 25 && rand <= 60:
      result.textContent = "結果：凶";
      break;

    // randが61~100
    case rand > 60:
      result.textContent = "結果：大凶";
      break;
  }
}

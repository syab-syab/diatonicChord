// ダイアトニックコードに使われるキーが
// #の場合
let $keyIndexSharp = ['A', 'A#', 'B','C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#',];
// ♭の場合
let $keyIndexFlat = ['A', 'B♭', 'B','C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭',];

// キー選択のselectタグのid
let $selectKey = document.getElementById('choose-key');

// ダイアトニックコードを表示するタグのid
let $displaySpace = document.getElementById('display-space');

// ♭と#で関数を分ける
// 配列コピー → 選択キーの直前までの値を取り出してからケツにくっつける → htmlに描画する → 描画した要素が分かりやすいように背景色を変更するためにクラス追加

// 選択されたキーが最初になるよう並び替える関数
function rearrangeKey(arr, index) {
  // 渡されたキーをコピー
  let arrKey = arr.concat();
  // 渡されたインデックス数(セレクトされたキーのvalue)の直前までの値を取り出してからケツに付ける
  let splicesKey = arrKey.splice(0, parseInt(index));
  let concatsKey = arrKey.concat(splicesKey);
  // あらかじめ表示する関数に渡す配列を作っておく
  // インデックス数が 0, 2, 4, 5, 7, 9, 11
  let rearrangeArr = [];
  rearrangeArr.push(concatsKey[0] + "△7");
  rearrangeArr.push(concatsKey[2] + "m7");
  rearrangeArr.push(concatsKey[4] + "m7");
  rearrangeArr.push(concatsKey[5] + "△7");
  rearrangeArr.push(concatsKey[7] + "7");
  rearrangeArr.push(concatsKey[9] + "m7");
  rearrangeArr.push(concatsKey[11] + "m7(♭5)");
  return rearrangeArr;
}

// ダイアトニックコードを表示
function displayDiatonicChords(tag, arr) {
  // tag.innerHTML = '<table border="1" bordercolor="#333333" cellspacing="0"><tr><th>Ⅰ△7</th><th>Ⅱm7</th><th>Ⅲm7</th><th>Ⅳ△7</th><th>Ⅴ7</th><th>Ⅵm7</th><th>Ⅶm7(♭5)</th></tr><tr><th>' + arr[0] + '△7</th><th>' + arr[2] + 'm7</th><th>' + arr[4] + 'm7</th><th>' + arr[5] + '△7</th><th>' + arr[7] + '7</th><th>' + arr[9] + 'm7</th><th>' + arr[11] + 'm7(♭5)</th></tr></table>';
  for (var i = 0; i < arr.length; i++) {
    document.getElementById("chord-" + i).innerHTML = arr[i]
  }
  tag.classList.add("eme");
}

// キーが#
function majorSort() {
  let mjDia = rearrangeKey($keyIndexSharp, $selectKey.value)
  displayDiatonicChords($displaySpace, mjDia);
}

// キーが♭
function minorSort() {
  let mnDia = rearrangeKey($keyIndexFlat, $selectKey.value);
  displayDiatonicChords($displaySpace, mnDia);
}

// フラットはキーが F, B♭, E♭, A♭, D♭
// value が 8, 1, 6, 11, 4
$selectKey.addEventListener('change', function() {
  switch ($selectKey.value) {
    case "8":
    case "1":
    case "6":
    case "11":
    case "4":
      minorSort();
      break;
    default:
      majorSort();
      break;
  }
});

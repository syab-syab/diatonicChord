// #
let $keyIndexSharp = ['A', 'A#', 'B','C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#',];
// ♭
let $keyIndexFlat = ['A', 'B♭', 'B','C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭',];

// キー選択のselectタグのid
let $selectKey = document.getElementById('choose-key');

// ダイアトニックコードを表示するタグのid
let $displaySpace = document.getElementById('display-space');

// 選択されたキーが最初になるよう並び替える関数
function rearrangeKey(arr, index) {
  let arrKey = arr.concat();
  let splicesKey = arrKey.splice(0, parseInt(index));
  let concatsKey = arrKey.concat(splicesKey);
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
  for (var i = 0; i < arr.length; i++) {
    document.getElementById("chord-" + i).innerHTML = arr[i]
  }
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

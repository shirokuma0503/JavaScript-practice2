var num = 0;

for (var i = 0; i < 5; i++) {
  num += i;
  if (num > 10) {
    break;
  }
}
window.alert('合計値が10を超えたよ、iの値は' + i );

//break文で処理を抜ける
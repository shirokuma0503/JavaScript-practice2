for (var i = 1; i <= 5; i++) {
  if (i== 4) {
    continue;
  }
  document.write(i + 'は回目の処理です。' + '<br>');
}
//continue文で4回目の処理をスキップ
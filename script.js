for (let i = 1; i <= 3; i++) {
  document.write('------------------------外側のfor文' + i + '回目' + '<br>');
  for (let ii = 1; ii <= 3; ii++) {
    document.write('内側のfor文' + ii + '回目' + '<br>');
  }
}

//for文のネスト　0〜3まで10買い繰り返して、数字を書き出す処理
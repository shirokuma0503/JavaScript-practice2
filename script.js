outside: for (var i = 1; i <= 3; i++) {
  while (true) {
    document.write(i + '<br>');
    continue outside;
  }
}

//ラベル付きcontinue文を使う
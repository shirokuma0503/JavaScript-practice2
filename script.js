outside: for (var i = 1; i <= 3; i++) {
  for (var j = 1; j <= 3; j++) {
    if (i == 2) {
      break outside;
    }
    document.write(i + '*' + j + ' = ' + (i * j) + '<br>');
  }
}

//ラベル付きbreak文を使う
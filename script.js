for (var i = 1; i <= 3; i++) {
  for (var j = 1; j <= 3; j++) {
    if (i == 2) {
      break;
    }
    document.write(i + '*' + j + ' = ' + (i * j) + '<br>');
  }
}

//多重ループとbreak文を使う
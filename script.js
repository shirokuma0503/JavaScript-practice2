var i = 1;

try {
  i = i + j;
} catch(e) {
  window.alert(e);
} finally {
  window.alert('例外処理しましたよ。');
}

//例外処理
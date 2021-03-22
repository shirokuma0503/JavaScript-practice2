let num =50;

if (num >= 0) {
  if (num % 5 == 0) {
    window.alert(num + 'は5の倍数です');
  } else {
    window.alert(num + 'は5の倍数ではありません');
  }
} else {
  window.alert('0以上の場合のみ判定します');
 }

var str = 'shirokuma@example.com';

// 何番目に「shirokuma」がいるか
document.write('example = ' + str.indexOf('shirokuma'));
document.write('</br>');
// 8文字目以降を検索した時の「example」の位置
document.write('example = ' + str.indexOf('example', 7));
document.write('</br>');
// 後ろから数えて何番目に「example」がいるか
document.write('example = ' + str.lastIndexOf('example'));
document.write('</br>');

// 0から数え始めることに注意
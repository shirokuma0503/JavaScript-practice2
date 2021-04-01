var str1 = 'shirokuma@example.com';
//「@」で区切る
document.write(str1.split('@'));
document.write('</br>');

var str2 = 'http://www.shirokuma.com/index.html';
//「/」で区切る
document.write(str2.split('/'));
document.write('</br>');
//3つ分表示
document.write(str2.split('/', 3));
var str = 'shirokuma@example.com';
//「@」までの数を数える
var name = str.indexOf('@');
//先頭から「@」手前までの文字列を取り出す
var name = str.substring(0, str.indexOf("@"));
//「@」より後ろの文字列を取り出す
var domain = str.substring(str.indexOf("@") + 1);
document.write(name);
document.write('</br>');
document.write(domain);
//areaという関数を定義
function area(a, b) {
  result = a + b;
  window.alert(result);
}

//オブジェクト生成
var obj = new Object;

//プロパティfにareaという関数を格納
obj.f = area;

//メソッドfの呼びだし
obj.f(50, 50);
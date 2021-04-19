function PersonInfo(firstName, lastName, old, tel) {
  //プロパティの定義
  this.firstName = firstName;
  this.lastName = lastName;
  this.old = old;
  this.tel = tel;

  this.getData = function() {
    return '「姓」' + this.lastName + '「名」' + this.firstName +
           '「年齢」' + this.old + '「電話」' + this.tel;
  };
}

var p1 = new PersonInfo('くま', 'しろ', '10', '1010101010');

document.write(p1.getData());
const me = {
  name: 'しろくま',
  type (arg) {
    return'くま';
  }
}

const value = me.type('ひぐま');
document.write(value);

//3~5　はオブジェクトのメソッドを定義している
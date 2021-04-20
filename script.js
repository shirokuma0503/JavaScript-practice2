{ //グローバルスコープ
  let x = 'ブロックスコープの中';
  console.log(x);
  　{
    let x = 'ブロックスコープの中の中';
    console.log(x);
  }
}
let x = 'ブロックスコープの外';
console.log(x);
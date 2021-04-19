const ageToType = (age) => {
  if(age < 3) {
    return '赤ちゃん';
  } else if(age < 18) {
    return '大人';
  } else if(age < 65) {
    return 'お年寄り';
  }
}

const type = ageToType(10);
document.write(type);
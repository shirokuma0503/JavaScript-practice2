const fizzBuzz = (x) => {
  if(x % 15 == 0) {
    return '15でわりきれる';
  } else if(x % 3 === 0) {
    return '3でわりきれる';
  } else if(x % 5 === 0) {
    return '5でわりきれる';
  }
}

for (let i = 1; i <= 100; i++) {
  document.write(fizzBuzz(i));
  document.write('<br/>');
}
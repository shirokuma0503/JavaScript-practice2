var ary = [5, 10, 100, 500, 1000];
document.write(ary.sort(function(a,b) {
    return a - b;
}));
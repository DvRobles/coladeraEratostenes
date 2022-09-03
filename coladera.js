
let array = new Array();

for (let i = 0 ; i < 1000; i++) {
    array.push(1);
}

for (let i = 2; i < 1000; i++) {
    if (array[i] === 1) {
        for (let exp = i * 2; exp < 1000; exp += i) {
            array[exp] = 0;
        }
        console.log(i);
    }
}







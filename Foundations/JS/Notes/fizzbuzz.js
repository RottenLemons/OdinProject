let num = Number(prompt('Enter a number')); // parseInt can also work

for (let i = 1; i <= num; i++) {
    let s = "";
    if (i % 3 == 0) {
        s += "Fizz";
    }

    if (i % 5 == 0) {
        s += "Buzz";
    }

    if (!s) {
        console.log(i);
    } else {
        console.log(s);
    }
}
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Nhập vào một số: ', (number) => {
    number;
    rl.close();

    if (number > 0) {
        console.log('Giá trị bạn nhâp vào là một số dương ');
    } else if (number < 0) {
        console.log('Giá trị bạn nhâp vào là một số âm ');
    } else {
        console.log('Giá trị bạn nhâp vào là số 0 ');

    }
});


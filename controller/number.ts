
const number = (num: number) => {
    let sum = 0;
    for(let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum * 2;
}

export default number;

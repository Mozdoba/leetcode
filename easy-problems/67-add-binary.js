var addBinary = function(a, b) {
    let tailA = a.length-1, tailB = b.length-1, carry = 0;
    let str = "";
    while (tailA >= 0 || tailB >= 0) {
        let sum = carry;
        if (tailA >= 0) sum += parseInt(a.charAt(tailA--), 10);
        if (tailB >= 0) sum += parseInt(b.charAt(tailB--), 10);
        str += sum % 2; // 1 + 1 == 10
        carry = Math.floor(sum / 2);
    }
    if (carry) str += carry;
    return str.split("").reverse().join();
}

var addBinaryFAIL = function(a, b) {
    let tailA = a.length-1, tailB = b.length-1;
    let str = "";
    let result = 0, carryOver = 0;
    while (tailA >= 0 && tailB >=0) {
        let numA = parseInt(a[tailA--], 2);
        let numB = parseInt(b[tailB--], 2);
        [result, carryOver] = calc(numA, numB, carryOver);
        str = result + str;
    }

    let remainingTail = tailA === -1 ? tailB : tailA;
    let remainingNum = tailA === -1 ? b : a;

    while (remainingTail >= 0) {
        let num = parseInt(remainingNum[remainingTail--], 2);
        let [result, carryOver] = calc(num, 0, carryOver);
        str = result + str;
    }
    return str;
};

const calc = (a, b, carry) => {
    let res = Number(a + b + carry).toString(2);
    if (res == "10" || "11") carry = "1";
    return [res.substring(1), carry]
}

console.log(addBinary("11", "1"));
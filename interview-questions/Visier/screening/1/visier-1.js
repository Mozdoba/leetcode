function solution(A) {
    let map = new Map();
    for (let i = 0; i < A.length; i++) {
        if (map.has(A[i])) map.set(A[i], map.get(A[i]) + 1);
        else map.set(A[i], 1);
    }
    let possibleVals = Array.from(map.entries()).map(([k,v]) => {
        if (k === v) return k;
    }).filter((v => v));
    possibleVals.sort((a,b) => a-b);
    return possibleVals[possibleVals.length-1] || 0;
}

solution([3, 1, 4, 1, 5]);
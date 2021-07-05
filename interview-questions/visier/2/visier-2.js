function modifyThisFunction(S) {
    var occurrences = new Array(26);
    for (var i = 0; i < occurrences.length; i++) {
        occurrences[i] = 0;
    }

    for (var id in S) {
        occurrences[S.charCodeAt(id) - 'a'.charCodeAt(0)]++;
    }

    var best_char = 'a';
    var best_res  = 0;

    for (var i = 1; i < 26; i++) {
        if (occurrences[i] >= best_res) {
            best_char = String.fromCharCode('a'.charCodeAt(0) + i);
            best_res  = occurrences[i];
        }
    }

    return best_char;
}

function solution(S) {
    var occurrences = new Array(26);
    for (var i = 0; i < occurrences.length; i++) {
        occurrences[i] = 0;
    }

    for (var id in S) {
        occurrences[S.charCodeAt(id) - 'a'.charCodeAt(0)]++;
    }

    var best_char = S[0];
    var best_res  = occurrences[S.charCodeAt(S[0]) - 'a'.charCodeAt(0)];

    for (var i = 0; i < 26; i++) {
        if (occurrences[i] > best_res) {
            best_char = String.fromCharCode('a'.charCodeAt(0) + i);
            best_res  = occurrences[i];
        }
    }

    return best_char;
}

solution("ilovevisier");
// solution("hello");



/**
 * 
 * @param s 1 <= s.length, t.length <= 200
 * @param t s and t only contain lowercase letters and '#' characters.
 */
function backspaceCompare(s: string, t: string): boolean {
    let sArr: Array<string> = Array()
    let tArr: Array<string> = []
    buildArr(sArr, s);
    buildArr(tArr, t);
    return sArr.join('') === tArr.join('')
};

function buildArr(arr: Array<string>, s: string) {
    for (let char of s) {
        if (char !== "#")
            arr.push(char)
        else
            arr.pop()
    }
}
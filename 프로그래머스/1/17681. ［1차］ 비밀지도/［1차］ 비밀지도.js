function solution(n, arr1, arr2) {
    arr1 = arr1.map(arr => arr.toString(2).padStart(n, '0'));
    arr2 = arr2.map(arr => arr.toString(2).padStart(n, '0'));
    
    return arr1.map((el, idx) => String(Number(el) + Number(arr2[idx])).padStart(n, '0').replaceAll(2, 1).replaceAll(1, '#').replaceAll(0, ' '));
}
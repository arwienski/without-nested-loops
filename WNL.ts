const n: number = 9;
function matrix(n: number) {
    
    const M = new Array<Array<number>>(n);   // создаем пустой массив 
  
    let startX = 0, endX = 1;       // ограничители координат для оси Х
    let startY = 0, endY = 1;       // ограничители координат для оси Y

    let y=0, x=0;                       // сами координаты
    
    for (let i = 0; i < n * n; i++) {
        if (i < n)
        M[i] = new Array<number>(n);  // добавил в один цикл без методов fill и т.д., чтобы уложиться в 81 итерацию цикла

        M[y][x]=i+1;

        if (y === startY &&( x < n - endX))  
            x++;
        else if ((x === n - endX) && (y < n - endY))
            y++;
        else if ((y === n - endY) && (x > startX))
            x--;
        else y--;

        if ((y === startY + 1) && (x === startX) && (startX !== n - endX)) {
            startX++;
            startY++;
            endX++;
            endY++;
        }
    }

    return M;
}

console.log(matrix(n)); 

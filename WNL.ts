const n: number = 9;
function matrix(n: number) {
    
    const M = new Array<Array<number>>(n);   // создаем пустой массив 
  
    let startX = 0, endX = 0;       // ограничители координат для оси Х
    let startY = 0, endY = 0;       // ограничители координат для оси Y

    let y=0, x=0;                       // сами координаты
    
    for (let i = 0; i < n * n; i++) {
        if (i < n)
        M[i] = new Array<number>(n);

        M[y][x]=i+1;

        if (y === startY &&( x < n - endX - 1))  
            x++;
        else if ((x === n - endX - 1) && (y < n - endY - 1))
            y++;
        else if ((y === n - endY - 1) && (x > startX))
            x--;
        else y--;

        if ((y === startY + 1) && (x === startX) && (startX != n - endX - 1)) {
            startX++;
            startY++;
            endX++;
            endY++;
        }
    }

    return M;
}

console.log(matrix(n)); 
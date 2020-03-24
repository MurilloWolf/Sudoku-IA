const verify = ( lin :number,  col:number,  n:nummber) => {

    let l, c, lr, cr;
  
    if (grade[lin][col] == n) return 1;
    if (grade[lin][col] != 0) return 0;
    for (c = 0; c < 9; c++)
      if (grade[lin][c] == n) return 0;
    for (l = 0; l < 9; l++)
      if (grade[l][col] == n) return 0;
    lr = lin / 3;
    cr = col / 3;
    for (l = lr * 3; l < (lr + 1) * 3; l++)
      for (c = cr * 3; c < (cr + 1) * 3; c++)
        if (grade[l][c] == n) return 0;
        imprime();
    return 1;
  
  }
  
  const  resolve = ( lin:number,  col:number) => {
  
    let n, t;
  
    if (lin == 9)
      imprime();
    else
      for (n = 1; n <= 9; n++)
        if (verifica(lin, col, n)) {
          t = grade[lin][col];
          grade[lin][col] = n;
          if (col == 8)
            resolve(lin + 1, 0);
          else
            resolve(lin, col + 1);
          grade[lin][col] = t;
        }
  
  }
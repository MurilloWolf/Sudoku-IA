import {Action , Reducer, Store, AnyAction} from 'redux'
import { verify } from 'crypto';



/* state.sudoku é a matriz de inteiro */
/* action.row  numero da linha*/
/* action.col  numero da coluna*/
/* action.cellValue valor da celula a ser trocada  */

export interface ISudokuState {
    sudoku: number[][];
    error: IError;
    solved: boolean
}

interface IError {
    type: boolean;
    row: number;
    col:number;
}


const INITIAL_STATE : ISudokuState = {
    sudoku: [
             [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
             [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
             [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
             [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
             [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
             [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
             [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
             [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
             [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            ],
    error: {
        row:0,
        col: 0,
        type: false
    },
    solved: false
}


const Sudoku: Reducer<ISudokuState | any ,Action<any> > = (state = INITIAL_STATE, action:AnyAction) => {

    
    switch(action.type){
        /* case 'CHANGE_CELL_VALUE': 
        let sudoku  = state.sudoku;
        sudoku[action.row][action.col] = action.cellValue
        return  */
        
        case 'GET_SUDOKU': 
            return  { sudoku:action.sudoku, error:state.error};
        
        case 'VERIFY_POSITION': 
        
            console.log(action)
            let erro = { ...state.error}
            const colConflict = haveConflict(action.col,action.cell , action.rowCell)   
            const rowConflict = haveConflict(action.row,action.cell,  action.colCell)
            
            console.log(colConflict, rowConflict)

            //Se nao tiver conflito 
            if( !(colConflict && rowConflict)){
                erro.type = false;
                const squareConflict = haveSquareConflict(action.rowCell, action.colCell, action.cell, action.sudoku);
                console.log(squareConflict);

            }else{
                erro.type = true;
                erro.col = action.rowCell
                erro.row = action.colCell 
            }
           /*  if((col || row)){
                erro.type = true
                erro.col = action.rowCell
                erro.row = action.colCell 
            }else{
                erro.type = false;
                erro.col = 0
                erro.row = 0
            } */

          
         
          return state;

        case 'VERIFY_ALL':

            console.log(action)
            let newErro = { ...state.error}
            let {sudoku, row, col , cell} = action

            const verifyCol = makeACol(sudoku, col);
            const colConf = haveConflict(verifyCol, cell , row )   
            const rowConf = haveConflict(sudoku[row], cell, col )
            
            //Se nao tiver conflito 
            if( !(colConf && rowConf)){
               
                newErro.type = false;
                const squareConflict = haveSquareConflict(row, col,cell, sudoku);
                
                if(!squareConflict){
                    console.log('solucao valida ')
                }

                
               


            }else{
                newErro.type = true;
                newErro.col = action.rowCell
                newErro.row = action.colCell 
            }
           /*  if((col || row)){
                erro.type = true
                erro.col = action.rowCell
                erro.row = action.colCell 
            }else{
                erro.type = false;
                erro.col = 0
                erro.row = 0
            } */
        return state ; 


        case  'SOLVER':
            console.log('acao disparada ')
            let actualSudoku ={
               sudoku: action.sudoku
            }
            const solucao = resolve(actualSudoku)

            return {sudoku:actualSudoku.sudoku, ...state.error, solved:solucao }

        default :
            return state;
    }
}

function evalido(row:number, col:number, cell:number, sudoku:number[][]) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (sudoku[row][i] == cell || sudoku[i][col] == cell || sudoku[m][n] == cell) {
          return false;
        }
    }
    return true;
}


const haveConflict = ( vet:number[], num:number, mypos:number) =>{ 
    let conflict = false
    vet.map((item,key) =>{
        if(item === num && key !== mypos)
            conflict = true;
    })
    return conflict
}


const haveSquareConflict = ( row: number, col:number, cell:number,sudoku:number[][]) =>{
    let m =0, n=0
    for(let i = 0 ; i <9 ; i++){
        m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        n = 3 * Math.floor(col / 3) + i % 3;
        if (sudoku[m][n] == cell) 
            return true;
    }
    return false;
}


const makeACol = ( sudoku:number[][], colPos:number) =>{
    let newCol =[]
    for(let i = 0; i < 9 ; i++)
        newCol.push(sudoku[i][colPos]);
    return newCol;
}


function resolve(Actsudoku:{sudoku:number[][]}) {
    
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (Actsudoku.sudoku[i][j] ===  -1) {
          for (let k = 1; k <= 9; k++) {
            if (evalido(i, j, k, Actsudoku.sudoku)) {
              changeValue(k, Actsudoku, i , j)
            if (resolve(Actsudoku)) {
             return true;
            } else {
                changeValue( -1, Actsudoku, i , j)
            }
           }
         }
         return false;
       }
     }
   }
   return true;
}


function changeValue(cont:number, Sudoku:{sudoku:number[][]}, row: number , col:number){

    if(cont == -1 )
        Sudoku.sudoku[row][col] = -1;

    if(cont == 1 )
        Sudoku.sudoku[row][col] = 1;
    
    if(cont == 2 )
        Sudoku.sudoku[row][col] = 2;
    
    if(cont == 3 )
        Sudoku.sudoku[row][col] = 3;
    
    if(cont == 4 )
        Sudoku.sudoku[row][col] = 4;
        
    if(cont == 5 )
        Sudoku.sudoku[row][col] = 5;
    
    if(cont == 6 )
        Sudoku.sudoku[row][col] = 6;
    
    if(cont == 7 )
        Sudoku.sudoku[row][col] = 7;
    
    if(cont == 8 )
        Sudoku.sudoku[row][col] = 8;

    if(cont == 9 )
        Sudoku.sudoku[row][col] = 9;
  
}




export default Sudoku;
import {easy, medium , hard} from '../../data'

export const  getSudoku =( difficulty:string ) =>{

    const sudokuNumber:number = getSudokuNumber();
    switch(difficulty){
        case 'easy':
           return  { type:"GET_SUDOKU", sudoku:easy[sudokuNumber]};
       

        case 'medium':
            return { type:"GET_SUDOKU", sudoku:medium[sudokuNumber]}

        case 'hard':
            return { type:"GET_SUDOKU", sudoku:hard[sudokuNumber]}


        default :
             return { type:"GET_SUDOKU", sudoku:medium[sudokuNumber]}

    }
 
}


export const verify = (row:number[], col:number[], rowCell:number,  colCell:number, cell:number) =>{
    return {type: "VERIFY_POSITION", rowCell, colCell, col, row, cell}
}


export const verifyAll = (sudoku:number[][], row:number, col:number,  cell:number) =>{
    return {type: "VERIFY_ALL", sudoku, row, col, cell}
}

export const solver = (sudoku:number[][]) =>{
    return {type: "SOLVER", sudoku}
}



function getSudokuNumber(){
    const max = 4;
    const min = 0;
    let n = Math.round( Math.random( ) * (max - min ) + min)

    return 0;
}





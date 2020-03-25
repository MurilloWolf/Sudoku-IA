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



function getSudokuNumber(){
    const max = 4;
    const min = 0;
    let n = Math.round( Math.random( ) * (max - min ) + min)

    return 0;
}




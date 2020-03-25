import {Action , Reducer, Store, AnyAction} from 'redux'



/* state.sudoku é a matriz de inteiro */
/* action.row  numero da linha*/
/* action.col  numero da coluna*/
/* action.cellValue valor da celula a ser trocada  */

export interface ISudokuState {
    sudoku: number[][],
  
}


const INITIAL_STATE : ISudokuState = {
    sudoku: [[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
             [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
             [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
             [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
             [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
             [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
             [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
             [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
             [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            ],
  

}


const Sudoku: Reducer<ISudokuState | undefined ,Action> = (state = INITIAL_STATE, action:AnyAction) => {

    
    switch(action.type){
        case 'CHANGE_CELL_VALUE': 
        let sudoku  = state.sudoku;
        sudoku[action.row][action.col] = action.cellValue
        return 
        
        case 'GET_SUDOKU': 
        
            state.sudoku = action.sudoku;
            return 

        default :
            return state
    }
}

export default Sudoku;
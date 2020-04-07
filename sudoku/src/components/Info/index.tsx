import React from 'react';
import {Row} from 'react-bootstrap'
import { Styled  } from './styled'
import * as SudokuAction from '../../redux/actions/sudoku'

//Redux
import {useSelector, useDispatch } from 'react-redux'
import {ISudokuState} from '../../redux/reducers/sudoku'
import  * as SudokuActions from '../../redux/actions/sudoku'
// import { Container } from './styles';

export default function Info() {

   const sudoku = useSelector((state: ISudokuState) => state.sudoku)
   const dispatch = useDispatch()

  function handleSolver(){
    dispatch(SudokuActions.solver(sudoku));
    
  }

  return (
    <Styled.Wrapper>
        <Styled.H1 className="p-0">Bem vindo ao Sudoku</Styled.H1>
        <Styled.P className='p-3'>Selecione a dificuldade para gerar um sudoku aleatorio </Styled.P>
        <Row className='d-flex justify-content-center h-1'>
          <Styled.Button className="btn mt-5 m-1" difficulty={'easy'} 
             onClick ={ () => dispatch( SudokuActions.getSudoku('easy')) } >Fácil</Styled.Button>
              
          <Styled.Button className="btn mt-5 m-1" difficulty={'medium'}
              onClick ={ () => dispatch( SudokuActions.getSudoku('medium')) } >Medium</Styled.Button>

          <Styled.Button className="btn mt-5 m-1" difficulty={'hard'} 
              onClick ={ () => dispatch( SudokuActions.getSudoku('hard')) }>Dificil</Styled.Button>
        </Row>
        <Styled.ButtonPrimary className=" btn w-100 mt-5" onClick={handleSolver}>Solucionar</Styled.ButtonPrimary>
    </Styled.Wrapper>
  );
}

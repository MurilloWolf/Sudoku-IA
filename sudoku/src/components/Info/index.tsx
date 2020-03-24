import React from 'react';
import {Row} from 'react-bootstrap'
import { Styled  } from './styled'

//Redux
import {useSelector } from 'react-redux'
import {ISudokuState} from '../../redux/reducers/sudoku'
// import { Container } from './styles';

export default function Info() {

  const time = useSelector((state: ISudokuState) => state.time)

  return (
    <Styled.Wrapper>
        <Styled.H1 className="p-0">Bem vindo ao Sudoku</Styled.H1>
        <Styled.P className='p-3'>Selecione a dificuldade para gerar um sudoku aleatorio </Styled.P>
        <Row className='d-flex justify-content-center h-1'>
          <Styled.Button className="btn mt-5 m-1" difficulty={'easy'}>Fácil</Styled.Button>
          <Styled.Button className="btn mt-5 m-1" difficulty={'medium'}>Medium</Styled.Button>
          <Styled.Button className="btn mt-5 m-1" difficulty={'hard'}>Dificil</Styled.Button>
        </Row>
        <Styled.ButtonPrimary className=" btn w-100 mt-5">Solucionar</Styled.ButtonPrimary>
        <Styled.P className='mt-5'>Time: {time} </Styled.P>
    </Styled.Wrapper>
  );
}

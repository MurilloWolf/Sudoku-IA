import styled from 'styled-components';
import {Button as btn } from 'react-bootstrap'
const H1 = styled.h1`

     font-family: sans-serif;
     font-size: 32px;
     font-weight: 500;
     text-align: center;
    @media screen and (max-width: 450px){
        margin: 4rem;        
    }
`;

const P = styled.p`
font-size: 18px;
font-family: sans-serif;

`
interface IProps{
    difficulty: string
}

function backgroundDifficulty(props:IProps ){
    switch(props.difficulty){
        case 'easy':
            return('#04d361');
        
        case 'medium': 
            return ( '#3590f3')
        
        case 'hard':
            return ('#ef4136');

        default:  return '#3590f3';
    }
}

const Button = styled(btn)`
    
    background : transparent;
    border: none;
    border: ${ (props: IProps)=> '2px solid '+backgroundDifficulty(props)};
    color : ${ (props: IProps)=> backgroundDifficulty(props)};

    :hover{
        background: ${ (props: IProps)=> backgroundDifficulty(props)};
        color: #fff;
        border: ${ (props: IProps)=> '2px solid '+backgroundDifficulty(props)};

    }

`

const ButtonPrimary = styled(btn)`
    
    background : #3590f3;
    border: 2px solid #3590f3;
    color : white;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
  

    :hover{
       
        transform: scale(1.125);

    }

`


const Wrapper = styled.div`
    height: 100%;
@media screen and (max-width: 768px){
    padding: 2rem;
    
}
`

export const Styled = {
    H1,
    Button,
    P,
    Wrapper,
    ButtonPrimary
}

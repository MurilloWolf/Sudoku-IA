import styled from 'styled-components';
import {Form , Row} from 'react-bootstrap'
export const StyledTextField = styled(Form.Control)`
    border-top: none;
    border-right: ${props => props.last ? '4px solid #3590F3' : '2px solid #ddd' };
    border-bottom: 2px solid #ddd;
    border-radius:0;
    border-left: none;
    max-width: 4rem;
    max-height: 4rem;
    background: transparent;
    padding: 0 1rem;
    margin: 0px 2px;

   
    :focus{
        background: transparent;
        transition: none;
    }

    @media screen and (max-width:992px){

        max-width: 2rem;
        margin: 0px 0px;

    }
    @media screen and (max-width:620px){

        max-width: 3rem;
        margin: 0px 0px;
    }
    @media screen and (max-width:450px){

    max-width: 1rem;
    margin: 0px 0px;
}
    
`

export const StyledRow = styled(Row)`
    border-top: none;
    border-right: none;
    border-bottom: ${props => props.last ?  '4px solid #3590F3' :'none' };
    border-left: none;



   
`
  


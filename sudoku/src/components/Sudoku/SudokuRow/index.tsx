import * as React from 'react';
import {Row} from 'react-bootstrap'
import {StyledTextField, StyledRow} from '../styled'
import {useSelector} from 'react-redux'
import { ISudokuState} from '../../../redux/reducers/sudoku'
interface IProps  {
  last?: boolean;

}

interface IState {
  elements: Element[];
}


const SudokuRow : React.FC<IProps> = (  props  ) => {
  const [textFields, setTextFields]= React.useState<JSX.Element[]>([])
  let timer :number = useSelector( (state: ISudokuState) => state.time)
  let vet: number[] =[]

  function handleChange (event: React.FormEvent<HTMLInputElement>, pos:number){
    vet[pos] =  Number( event.currentTarget.value) ;
  }


  React.useEffect(()=>{
    let elements = renderTextFields()
    setTextFields(elements);
  },[])

  function renderTextFields(){
    let textFields = []
    for(let i = 0 ; i < 9 ; i++){
      if(i==2 ||i==5)
        textFields.push( <StyledTextField type = "number" key={'text:'+i} last="true" onChange={ (event: React.FormEvent<HTMLInputElement>)=> handleChange(event,i)} /> );
      else
      textFields.push( <StyledTextField type = "number" key={'text:'+i} onChange={ (event: React.FormEvent<HTMLInputElement>)=> handleChange(event,i)} /> );

    } 

    return textFields
  }


  return (
    <StyledRow last={props.last} >
      {
        textFields
        
      }     
    </StyledRow>
  );
}


export default SudokuRow

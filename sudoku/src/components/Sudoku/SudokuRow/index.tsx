import * as React from 'react';
import {StyledTextField, StyledRow} from '../styled'
import {useSelector , useDispatch} from 'react-redux'
import * as SudokuActions from '../../../redux/actions/sudoku'
import { ISudokuState } from '../../../redux/reducers/sudoku';

/* import {useSelector} from 'react-redux'
import { ISudokuState} from '../../../redux/reducers/sudoku' */
interface IProps  {
  last?: boolean;
  line: number
}

interface IState {
  sudoku: Element[];
}

interface IReduxState{
  sudoku: number[][];
  solved: boolean;
}


const SudokuRow : React.FC<IProps> = (  props  ) => {
  const [textFields, setTextFields]= React.useState<JSX.Element[]>([])
  const dispatch = useDispatch()
  //todo a linha do sudoku

  let solved = useSelector((state:IReduxState)=> state.solved)
  let dataRow = useSelector((state: IReduxState)=>  state.sudoku[props.line] );
  let dataSudoku = useSelector((state: IReduxState)=>  state.sudoku )
  /*   let timer :number = useSelector( (state: ISudokuState) => state.time)
 */  let vet: number[] =[]



  function handleChange (event: React.FormEvent<HTMLInputElement>, pos:number){
    vet[pos] =  Number( event.currentTarget.value) ;
    dataRow = [...vet]

    
    let col:number[] = [];
    dataSudoku.map((item)=> col.push(item[pos])) 
    

   console.log('enviando col :'+pos+'row :'+props.line)
    //LINHA, COLUNA , NUMERO DA LINHA, NUMERO DA COLUNA , NUMERO A SER VERIFICADO
    //PASSAR O SUDOKU TODO, Numero Da linha, numero da coluna , e o numero a ser verificado 
    dispatch(SudokuActions.verifyAll(dataSudoku, props.line , pos , vet[pos]) )
/*     dispatch( SudokuActions.verify(dataRow,col ,props.line, pos, dataRow[pos])) 
 */  }

  function checkValue( value :number){
    return  value !== -1 ? value : "" ;
  }

  React.useEffect(()=>{
    setTextFields([]);
    let elements = renderTextFields()
    setTextFields(elements);
    vet = dataRow.map(item=> item)

  },[solved])

  React.useEffect(()=>{
    setTextFields([]);
    let elements = renderTextFields()
    setTextFields(elements);
    vet = dataRow.map(item=> item)

  },[dataRow])
 


/*   React.useEffect(()=>{
    let elements = renderTextFields()
    setTextFields(elements);
    
  },[])
 */
  function renderTextFields(){
    let textFields = []
    for(let i = 0 ; i < 9 ; i++){
      if(i===2 ||i===5)
        textFields.push( <StyledTextField type ="text" key={'text:'+i} 
          last="true" onChange={ (event: React.FormEvent<HTMLInputElement>)=> handleChange(event,i)}  value={checkValue(dataRow[i])} /> );
      else
      textFields.push( <StyledTextField type ="text" key={'text:'+i} 
        onChange={ (event: React.FormEvent<HTMLInputElement>)=> handleChange(event,i)}  value={checkValue(dataRow[i])}  /> );

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

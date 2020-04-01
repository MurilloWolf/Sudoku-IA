import * as React from 'react';
import SudokuRow from './SudokuRow'
import { Row } from 'react-bootstrap'
export default function Sudoku() {


  const [rows,setRows] = React.useState<JSX.Element[]>([])

  React.useEffect(()=>{
    let rows = renderRows();
    setRows(rows);
  },[])
  

  function renderRows(){
    let rows = []
    for(let i=0; i< 9; i++){
      if(i==2 || i==5)
        rows.push(<SudokuRow last line={i}/>)
      else
        rows.push(<SudokuRow line={i}/>)
    }

    return rows
  }

  return (
        <Row className="d-flex justify-content-center">
          {
            rows
          }    
        </Row>
  );
}

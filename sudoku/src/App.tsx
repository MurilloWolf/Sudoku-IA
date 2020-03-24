import * as React from 'react';
import {Container , Row, Col} from 'react-bootstrap'
import Sudoku from './components/Sudoku'
import Info from './components/Info'
import GlobalStyle from './components/styled/global'

//REDUX
import {Provider} from 'react-redux'
import store from './redux/store/'
function App() {
  return (
      <Provider store={store}>
        <Container className="h-100  mt-3 d-flex justify-content-center align-items-center" >
        

          <GlobalStyle />
          <Row className="d-md-flex d-sm-flex  d-xs-flex flex-sm-column-reverse  flex-xs-column-reverse flex-md-row-reverse m-1">
            <Col md={4} sm={12} xs={12}>
              <Info/>
            </Col>
            <Col  md={8} sm={12} xs={12}>
              <Sudoku/>
            </Col>

          </Row>
        
  
        </Container>
      </Provider>
    
  );
}

export default App;

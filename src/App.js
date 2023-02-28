
import { createTheme, ThemeProvider } from '@mui/material';
import {  useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import './App.css';
import Basket from './components/basket/Basket';
import Header from './components/header/Header';
import Meals from './components/meals/Meals';
import Summary from './components/summary/Summary';
import { MuiSnackbar } from './components/UI/Snackbar';
import { darkTheme, lightTheme } from './lib/constants/theme';
import { store } from './store';
import { uiActions } from './store/ui/uiSlice';

export function AppContent() {
  const dispatch = useDispatch()
const [ isBasketVisible , setBasketVisible ]= useState(false)
const snackbar = useSelector(state => state.ui.snackbar)


const showBasketHandler = ()=>{
  setBasketVisible((prevState) => !prevState)
}



  return (
    <>


         <Header onShowBasket={showBasketHandler} />
      <Content>
      <Summary/>
      <Meals/>
      {isBasketVisible && <Basket onClose={showBasketHandler}/>}
      <MuiSnackbar
       isOpen={snackbar.isOpen}
       severity={snackbar.severity}
       message={snackbar.message}
       onClose={()=>dispatch(uiActions.closeSnackbar())}
       />
      </Content>
    
    
    </>
    
     
    
  );
}

const App = () => {
 
return(
  
    <Provider store={store} >
<AppContent/>
  </Provider>
 
  
)
}
export default App;


const Content = styled.div`
margin-top:101px;
`
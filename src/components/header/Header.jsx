import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getTheme } from "../../lib/constants/theme";
import { getBasket } from "../../store/basket/basketSlice";
import { BasketContext } from "../../store/BasketContext";
import { uiActions } from "../../store/ui/uiSlice";
import MuiButton from "../UI/Button";
import BasketButton from "./BasketButton";


const Header =({onShowBasket})=>{
    const dispatch = useDispatch()
    const items =useSelector((state=>state.basket.items))
    const themeMode = useSelector(state=>state.ui.themeMode)
    const [animationClass ,setAnimationClass ]=useState("")
    
useEffect(()=>{
dispatch( getBasket() )
},[dispatch])



    const calculateTotalAmount=()=>{
        const sum = items.reduce((s , item)=>{
            return s + item.amount 
        }, 0)
        return sum
    }
        useEffect(()=>{
            setAnimationClass("bump")


           const id = setTimeout(()=>{
                setAnimationClass("")
            } , 300)

            return()=>{
                clearTimeout(id)
            }

        }, [items])

        const themeChangeHandler =()=>{
            const theme = themeMode ==='light'?'dark':'light';
            dispatch(
                uiActions.changeTheme(theme)
                )
        
        }

    return(
        <Container theme={themeMode}>
            <Logo>ReactMeals</Logo>
            <BasketButton 
            onClick={onShowBasket} 
            count={calculateTotalAmount()}
            className={animationClass} /> 
            <MuiButton
            onClick={themeChangeHandler} 
            
            >
                {themeMode === 'light'? 'Turn dark mode':'Turn light mode' }
            </MuiButton>
           
        </Container>
    )
}

export default Header;


const Container = styled.header`
position: fixed;
z-index: 1;
top:0;
width: 100%;
height: 101px;
background-color:${(props)=> getTheme(props.theme).palette.primary.main};
display: flex;
justify-content: space-between;
padding-left:120px ;
padding-right:120px ;
align-items: center;

`

const Logo = styled.p`
font-weight: 600;
font-size: 38px;
line-height: 57px;
color: #FFFFFF;
margin:0;

`
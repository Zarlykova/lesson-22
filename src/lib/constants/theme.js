



export const lightTheme = {
    
        palette:{
            primary:{
                main:'#0cec32',
                light:'#c44817',
                dark:'#481805',
                contrastText:"#ffff",

            },
            secondary:{
                main:'#0cec32',
                light:'#0cec32',
                dark:'#0cec32',
                contrastText:"#ffff",
            },
            error:{
                main:'red',
                light:'red',
                dark:'red',
                contrastText:"#ffff",
            },
        },
        typography:{
            fontFamily:'Roboto',
            fontSize:14,
        }

    }

    export const darkTheme= {

        palette:{
            primary:{
                main:'blue',
                light:'blue',
                dark:'blue',
                contrastText:"#ffff",

            },
            secondary:{
                main:'blue',
                light:'blue',
                dark:'blue',
                contrastText:"#ffff",
            },
            error:{
                main:'red',
                light:'red',
                dark:'red',
                contrastText:"#ffff",
            },
        },
        typography:{
            fontFamily:'Roboto',
            fontSize:14,
        }
    }
    
    
    export const getTheme =( mode = 'light' )=>{
    return mode === 'light'? lightTheme: darkTheme
}

import{SET_USER,CLEAR_USER,NO_USER} from '../actionTypes';

const initialState={
    currentUser:null,
    isAuthenticated:false,
    error:null
    
}

export default (state=initialState, action)=>{
    switch(action.type){
        case SET_USER:{

            return{
                isAuthenticated:true,
                currentUser:action.username

            }
        }
        case CLEAR_USER:{

            return{
                isAuthenticated:false,
                currentUser:null,
                error:null


            }
        }
        case NO_USER:{

            return{
                isAuthenticated:false,
                currentUser:{},
                error:action.message

            }
        }

       default:{
           return  state;
       }
    }
    
}
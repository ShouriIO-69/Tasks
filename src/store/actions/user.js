import{SET_USER,CLEAR_USER,NO_USER} from '../actionTypes';

export const setUser=(uname,pswd)=>{
    const username='hruday@gmail.com';
    const password ='hruday123';
    
    if(uname===username && pswd===password){
       return{
           type:SET_USER,
           username
       }
    }
    else{
        return{
            type:NO_USER,
            message:'Username/Password Is Invalid'
        }
    }
}

export const clearUser=()=>{
 return{
     type:CLEAR_USER
 }
}
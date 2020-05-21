import React from 'react';
import './App.css';
import{ BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import{connect} from 'react-redux';
import Login from './Auth/Login';
import Homepage from './component/Homepage';

import {clearUser} from './store/actions/user';

function App(props) {
  const{isAuthenticated,user,clearUser} = props;
 
  return (
  
    <div className='App'>
      <Router>
        
        <Switch>
          
          <Route exact path='/' render={(props)=><Login {...props}/>}/>
          <Route exact path='/dashboard' render={(props)=><Homepage user={user} isAuth={isAuthenticated} logout={clearUser} {...props}/>}/>
        </Switch>
        </Router>
      
    </div>
  );
}

const mapStateToProps=(state)=>{
  return{
    user:state.currentUser.currentUser,
    isAuthenticated:state.currentUser.isAuthenticated
  }
}
export default connect(mapStateToProps,{clearUser})(App) ;

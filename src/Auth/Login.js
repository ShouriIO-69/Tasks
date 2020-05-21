import React from "react";
import { Grid, Form, Icon, Message, Segment, Header, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {handleInputErrors} from '../handleInputErrors';
import {setUser} from  '../store/actions/user';
class Login extends React.Component {
  constructor(props){
    super(props)
    this.state={ 
    email:'',
    password:'',
    
    errors:[],
    loading:false,
    }
  }
  isFormEmpty=({email,password})=>{
    return  email.length>0 && password.length>0
  }
    
  

    
  
    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    }
  
    handleSubmit = (e) => {
        const{email,password}=this.state;
      e.preventDefault();
      if (this.isFormEmpty(this.state)) {
        this.setState({errors:[],loading:true})
        this.props.setUser(email,password);
        this.props.history.push('/dashboard')
        
        
        
      }
     else{
       let err={message:'Email/Password Cannot Be Blank'}
       this.setState({errors:this.state.errors.concat(err)})
     }
    }
    
    
    render() {
     
    
      const { email, password, errors,loading } = this.state;
      const{err}=this.props;
      
      const displayErrors=errors.map((er,i)=><p key={i}>{er.message}</p>);
      return (
          <div>
        <Grid className='App' textAlign="center" verticalAlign="middle">
        
          <Grid.Column style={{ maxWidth: 450 }}>
          {
            
           err!== null ?
  
            (<Message error>
             
            {err}

             </Message>):""}
            <Header as='h2' icon color='black' textAlign='center'>
              <Icon color='violet' name='code branch' />
          Login 
          </Header>
            <Form
              onSubmit={this.handleSubmit}
              size='large'>
              <Segment >
                
                <Form.Input
                  value={email}
                  fluid
                  type='email'
                  name='email'
                  placeholder='email'
                  icon='envelope'
                  iconPosition='left'
                  onChange={this.handleChange}
                  className={handleInputErrors(errors,'email')}
                />
                <Form.Input
                  value={password}
                  fluid
                  type='password'
                  name='password'
                  placeholder='password'
                  icon='lock'
                  iconPosition='left'
                  onChange={this.handleChange}
                  className={handleInputErrors(errors,'password')}
                />
                <Button disabled={loading} className={loading?'loading':''}  size='large' fluid color='violet'>Login</Button>
  
              </Segment>
              
            </Form>
            {
            errors.length > 0   &&
  
            (<Message error>
             <h3>Error</h3>
            {displayErrors}

             </Message>)
                         }
          </Grid.Column>
          </Grid>
        

        </div>
      )
    }
  }
const mapStateToProps=(state)=>{
  return{
    err:state.currentUser.error
  }
}

export default connect(mapStateToProps,{setUser})(Login);

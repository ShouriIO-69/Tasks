import React from 'react';
import {users} from '../db';
import {Table} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Homepage=(props)=>{
    const{isAuth,user,logout}=props;
    const displayUsers=users.user.map((u,i)=>{
        return (
            <React.Fragment key={i}>
     <Table.Body>
      <Table.Row>
        <Table.Cell collapsing>
        {u.id}
        </Table.Cell>
        <Table.Cell>{u.name}</Table.Cell>
        <Table.Cell collapsing textAlign='right'>
         {u.age}
        </Table.Cell>
        <Table.Cell>{u.gender}</Table.Cell>
        <Table.Cell>{u.email}</Table.Cell>
        <Table.Cell>{u.phoneNo}</Table.Cell>
      </Table.Row>
      
    </Table.Body>
    </React.Fragment>
          
         )
     }) 
   
     
    

    return(
  
    <div>
         {isAuth ? (
        <div>
        {user}
        <button onClick={()=>logout()}><Link to='/'>Logout</Link></button>
      
      
    <Table celled striped>
     
    <Table.Header>
        <Table.Row>
            <Table.HeaderCell textAlign='center' colSpan='14'>User Details</Table.HeaderCell>
        </Table.Row>
      <Table.Row>
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Age</Table.HeaderCell>
          <Table.HeaderCell>Gender</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Phone</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
     {displayUsers}
     
     </Table>
     
     </div>
   
  
   ):
   (
       props.history.push('/')
   )
}
   </div>
    )
}

export default Homepage;
import React from 'react';
import Card from '@material-ui/core/Card';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddUser from './AddUser';
import Button from '@material-ui/core/Button';

class User extends React.Component {
    constructor(props){
        super(props);
            this.state= {
                userData: [],
                addDialog: false
            }     
    }
    deleteUser(email) {
        fetch("http://3.6.93.159:7883/machstatz/delete_existing_user?email="+email,{
            method : 'DELETE',
            headers: {
                'Content-Type': 'application/json', 
                'Access-Control-Allow-Origin': '*' 
            }
        })
        .then(res => res.json())
        .then((result) => {
            alert(result.message)
            this.getUser()
        })
        .catch(error => console.log(error))
    }
    getUser() {
        fetch("http://3.6.93.159:7883/machstatz/get_all_users",{
            method : 'GET',
            headers: {
                'Content-Type': 'application/json', 
                'Access-Control-Allow-Origin': '*' 
            }
        })
        .then(res => res.json())
        .then((result) => {
            this.setState({userData: result})
        })
        .catch(error => console.log(error))
     }
    componentWillMount(){
        this.getUser();
    }
    getColor () {
        let colors = ['red', 'green', 'blue', 'orange', 'yellow'];
        return colors[Math.floor(Math.random() * colors.length)]
    }
    openDialog() {
        this.setState({addDialog: true})
    }
    closeDialog() {
        this.setState({addDialog: false})
        this.getUser()
    }
    getDailog() {
        if(this.state.addDialog) {
            return(
                <AddUser closeDialog={this.closeDialog.bind(this)}/>
            )
        } else {
            return null
        }
    }
    getChar (ch) {
        if(ch) {
            return ch.charAt(0).toUpperCase()
        }
    }
    renderCard(){
        let allCard = []
        let data = this.state.userData
        console.log(this.state.userData)
        for(let i=0; i<data.length;i++){
        allCard.push (
            <Card key={i} style ={{width:'250px', float: 'left', margin: '10px', padding: '15px'}} >
                <div>
                    <DeleteIcon style={{float: 'right', cursor: 'pointer', color: 'red'}} onClick={this.deleteUser.bind(this, data[i].email)}/>  
                    <EditIcon style={{float: 'right', cursor: 'pointer'}}/>
                </div>
                <br/>
                <div style={{width: '100%'}}>
                    <div style={{width:'40px', height: '40px', borderRadius: '50px',  float: 'left', textAlign: 'center', backgroundColor: this.getColor()}}>
                            <span>
                                {this.getChar(data[i].fist_name)}
                            </span>
                    </div>
                    <div style={{width: '50%', float: 'left'}}>
                        <span>&nbsp;&nbsp;{data[i].fist_name}</span>
                    </div>
                </div>
            </Card>
        )
    }
            return allCard
}
    render(){
        return (
            <div style={{width: '100%'}}>
                <div>
                <Button variant="contained" color="primary" onClick={this.openDialog.bind(this)}>Add User</Button>
                </div>
                <div>
                {this.renderCard()}
                </div>
                <div >
                    {this.getDailog()}
                </div>
            </div>
        )
    }
}
export default User;
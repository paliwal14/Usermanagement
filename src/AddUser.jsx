import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AddUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: true,
            formData: {
                fist_name: '',
                last_name: '',
                email: '',
                pwd: '',
                username: ''
            }
        }
    }
    handleClickOpen () {
        this.setState({open: true})
    };
    handleClose () {
        this.setState({open: false})
        this.props.closeDialog()
    };
    addUser () {
        fetch("http://3.6.93.159:7883/machstatz/add_new_user",{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'Access-Control-Allow-Origin': '*' 
            },
            body: JSON.stringify(this.state.formData)
        })
        .then(res => res.json())
        .then((result) => {
            alert(result.message)
            if(result.status==="Success"){
                this.handleClose()
            }
           
        })
        .catch(error => console.log(error))
    }
    handleChange (evt) {
        let fData = this.state.formData
        switch (evt.target.id) {
            case 'fist_name':
                fData.fist_name = evt.target.value
                break; 
            case 'last_name':
                fData.last_name = evt.target.value
                break; 
            case 'username':
                fData.username = evt.target.value
                break;
            case 'email':
                fData.email = evt.target.value
                break; 
            case 'pwd':
                fData.pwd = evt.target.value
                break; 
        }
        this.setState({formData:fData});
    }
    render() {
        let fData = this.state.formData;
        return (
            <div>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add User</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Please Enter User Information.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="fist_name"
                        value={fData.fist_name}
                        onChange={this.handleChange.bind(this)}
                        label="First Name"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="last_name"
                        value={fData.last_name}
                        onChange={this.handleChange.bind(this)}
                        label="Last Name"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        value={fData.username}
                        onChange={this.handleChange.bind(this)}
                        label="Username"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        value={fData.email}
                        onChange={this.handleChange.bind(this)}
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="pwd"
                        value={fData.pwd}
                        onChange={this.handleChange.bind(this)}
                        label="Password"
                        type="password"
                        fullWidth
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose.bind(this)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.addUser.bind(this)} color="primary">
                        Add
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
export default AddUser;
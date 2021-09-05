import React from 'react'
import User from './User'
class Main extends React.Component{
    render(){
        return (
            <div>
                <div style={{height: '60px', width: '100%', background: 'black', color: 'white'}}>
                    <h1>User Management</h1>
                </div>
                <h1><User/></h1>
            </div>
        )
    }
}
export default Main;
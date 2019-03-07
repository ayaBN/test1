import React, { Component } from 'react'
import { Consumer } from '../../context';
class AddContact1 extends Component {

    state = {
        name:'',
        email:'',
        phone:''

    }
    onSubmit = (dispatch , e) => {
        e.preventDefault();
        
        const { name , email,phone } = this.state;
        const newContact = {
            
            name,
            email,
            phone
        }

        dispatch ({type : 'ADD_CONTACT', payload :
        newContact });
 
    };
    
    onChange = e => this.setState({ [e.target.name]: e.target.value});
    render() {
        return(
            <div className="card mb-3">
            <div className="card-header">AddContact</div>
            <div className="card-body"></div>
            <form onSubmit = {this.onSubmit}>
                <div className="form-group">
                <label htmlFor="name"></label>
                <input
                    type="text"
                    name="name"
                    className="form-control form-control-lg"
                    placeholder="Enter Name..."
                    value = {this.props.name}
                    onChange={this.onChange}
                />
                </div>

                <div className="form-group">
                <label htmlFor="email"></label>
                <input
                    type="text"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Enter your email..."
                    value = {this.props.email}
                    onChange={this.onChange}
                />
                </div>

                <div className="form-group">
                <label htmlFor="phone"></label>
                <input
                    type="text"
                    name="phone"
                    className="form-control form-control-lg"
                    placeholder="Enter your phone number..."
                    value = {this.props.phone}
                    onChange={this.onChange}
                 
                />
                </div>

                <input
                   type = "submit"
                   value= "Add Contact"
                   className = "btn btn-light btn-block"
                />   
                </form>
            </div>
        
        );
    }
}

export default AddContact1 ;

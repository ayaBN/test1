import React, { Component } from 'react'

class AddContact extends Component {
    constructor(props) {
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }
   
    onSubmit = (e) => {
        e.preventDefault();
        const Contact= {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
        };
 
    };
    
    
    render() {
        const { name, email, phone} = this.state;
        <Consumer>
            { value => {
                const { dispatch } = value ;
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
        

            } }
        </Consumer>





        
export default AddContact ;

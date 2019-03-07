import React,{ component } from 'react' ;

const Contexte = React.createContext();

const reducer = (state,action) => {
    switch (action.type) {
        case 'DELETE_CONTACT' :
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload 
                
            
                )
            };

            case 'ADD_CONTACT' :
            return {
                ...state,
                contacts: [action.payload,
                     ...state.contacts]
                    
                
            
            };

            default:
            return state;
        }

    };

export class Provider  extends component {
    state = {
        contacts : [
            {
                id: 1,
                name: 'john doe',
                email: 'jdoe@gamil.com',
                phone: '555-555-555'
            },

            {
                id : 2,
                name: 'karen williams',
                email: 'karen@gamil.com',
                phone: '333-333-333'
            },

            {
                id: 3,
                name: 'henri jason',
                email: 'jhenri@gamil.com',
                phone: '222-222-222'
            }
        ],

        dispatch: action => this.setState(state => 
            reducer(state,action))
    };

    render(){
        
    }
}  

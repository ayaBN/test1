import React, { Component } from 'react';
import Contact from './Contact'

class Contacts extends React.Component {
  constructor () {
    super();
    this.state = {
        contacts: [
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

            ]
        }
            
    }

    render() {

        const { contacts } = this.state;
        return (
            <div>
                {
                    contacts.map(contact => <Contact
                        key={contact.id}
                        name={contact.name}
                        email={contact.email}
                        phone={contact.phone}
                    />
                    )
                };
         </div>
);

    }
}

export default Contacts;
 
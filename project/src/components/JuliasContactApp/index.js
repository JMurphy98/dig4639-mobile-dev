import React from 'react';
import "./index.css";

class JuliasContactApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        profile: {},
        contacts: []
        };
    }

    componentDidMount() {
        this.getProfile();
        this.getContacts();
    }

    add = (event) => {
        event.preventDefault();
            fetch('http://plato.mrl.ai:8080/contacts/add', {
                method: 'POST',
                body: JSON.stringify({ 
                    name: this.refs.name.value,
                    number: this.refs.number.value 
                }),
                headers: { "Content-type": "application/json", API: "murphy" }
        })
        .then(res => { return res.json() })
        .then(() => {
        this.getProfile();
        this.getContacts();
                });
    }

    getContacts() {
        window.fetch("http://plato.mrl.ai:8080/contacts", { 
        headers: { API: "murphy" } 
        })
        .then((res) => res.json())
        .then((data) => {
        this.setState({ contacts: data.contacts });
        console.log(data)
        });
    }

    getProfile() {
        window.fetch("http://plato.mrl.ai:8080/profile", { 
        headers: { API: "murphy" } 
        })
        .then((res) => res.json())
        .then((data) => {
        this.setState({ profile: data });
        console.log(data)
        });
    }

    remove = (index) => {
        fetch('http://plato.mrl.ai:8080/contacts/remove', {
        method: 'POST',
        body: JSON.stringify({ position: index }),
        headers: { "Content-type": "application/json", API: "murphy" }
        })
        .then(res => {  return res.json() }) 
        .then(() => {
        this.getProfile();
        this.getContacts();
        });
    }

render() {
    return (
    <div>
        <h1>Contact Application</h1>
        <div className="container">
            <div className="left">
                <div>
                    <fieldset>
                        <h2>Your Profile</h2>
                        <div className="containersmall">
                            <div className="left">
                                <h4>You</h4> 
                                <h4>Number of Contacts</h4>
                            </div>
                            <div className="right2">
                                <p>{this.state.profile.name}</p>
                                <p>{this.state.profile.count}</p>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <br />
                <div>
                    <fieldset>
                        <h2>Add A New Contact!</h2>
                        <form onSubmit={this.add}>
                            <input ref="name" type='text' placeholder='Full Name' />
                            <input ref="number" type='text' placeholder='Phone Number'/>
                            <br />
                            <button type="submit">ADD ME!</button>
                        </form>
                    </fieldset>
                </div>
            </div>
            <div className="right">
                <fieldset className="contacts">
                    <h2>Contact List</h2>
                    {this.state.contacts.map((value, index) => {
                        return (
                            <fieldset className="card">
                                
                                <h4>{value.name}</h4>
                                <p>{value.number} </p>
                                <div className="buttondiv">
                                <button type="submit" 
                                    onClick={() => this.remove(index)}  
                                    id={index}>REMOVE
                                </button>
                                </div>
                            </fieldset>);
                    })
                    }
                </fieldset>
            </div>
        </div>
        <br />
        <br />
    </div>
    );
}
}

export default JuliasContactApp;
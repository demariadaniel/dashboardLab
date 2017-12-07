import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';

class Admin extends Component {
    constructor(){
        super();
        this.state={
            editUser: {name: "", age: "", email:"", course: 1, grade: "", source: 1}
        }
    }
    deleteUser=(e)=>{
        this.setState({
            deleteUser: this.props.users[e.target.value].name
        })
    }
    editUser=(e)=>{
        this.setState({
            editUser: this.props.users[e.target.value]
        })
    }
    render(){
        console.log(this.props)
        return (
            <div>
                <h2 className='chartHeader'>
                    Admin
                </h2>
                <div className="menu">
                    <h3 className='chartHeader'>Create</h3>
                    <div>
                        <input placeholder="Name" />
                        <input placeholder="Email" type="email" />
                        <input placeholder="Age" type="number" />
                        <select>
                            <option value={1}>WD Full Time</option>
                            <option value={2}>UX Full Time</option>
                            <option value={3}>Web Dev Remote</option>
                        </select>
                        <input placeholder="Grade" type="number" />
                        <select>
                            <option value={1}>Organic</option>
                            <option value={2}>Marketing</option>
                            <option value={3}>Referral</option>
                        </select>
                        <div>
                            <button>Create</button>
                        </div>
                    </div>    
                </div>
                <div className="menu">
                    <h3 className='chartHeader'>Update</h3>
                    <div>
                        <select onChange={this.editUser} defaultValue="">
                            <option value="" disabled hidden>Select a student</option>
                            {this.props.users.map((user, i)=>{
                                return <option key={i} value={i}>{user.name}</option>
                                })
                            }
                        </select>
                        <input placeholder="Email" value={this.state.editUser.email} type="email"  />
                        <input placeholder="Age" value={this.state.editUser.age} type="number" />
                        <select value={this.state.editUser.course}>
                            <option value={1}>WD Full Time</option>
                            <option value={2}>UX Full Time</option>
                            <option value={3}>Web Dev Remote</option>
                        </select>
                        <input placeholder="Grade" value={this.state.editUser.grade} type="number" max={100} min={0} />
                        <select value={this.state.editUser.source}>
                            <option value={1}>Organic</option>
                            <option value={2}>Marketing</option>
                            <option value={3}>Referral</option>
                        </select>
                        <div>
                            <button>Update</button>
                        </div>
                    </div>    
                </div>
                <div className="menu">
                    <h3 className='chartHeader'>Delete</h3>
                    <div>
                        <select onChange={this.deleteUser} defaultValue="">
                            <option value="" disabled hidden>Select a student</option>
                            {this.props.users.map((user, i)=>{
                                return <option key={i} value={i}>{user.name}</option>
                                })
                            }
                        </select>
                        <div>
                            <button>Delete</button>
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
}

export default Admin;
import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';

class Admin extends Component {
    constructor(){
        super();
        this.state={
            createUser: {name: "", age: "", email:"", course: 1, grade: "", source: 1},
            editUser: {name: "", age: "", email:"", course: 1, grade: "", source: 1},
            deleteUser: {name: "", age: "", email:"", course: 1, grade: "", source: 1}
        }
    }
    editStudent=(e, studentKey, value)=>{
        let editStudent = this.state[studentKey];
        editStudent[value] = e.target.value;
        if (value === 'age' || value === 'course' || value === 'source'){
            editStudent[value] = parseInt(editStudent[value])
        }
        this.setState({
            [`${studentKey}`]: editStudent
        }, ()=>console.log(this.state))
    }
    editValue=(e, value)=>{
        this.setState({
            [`${value}`]: this.props.users[e.target.value]
        }, ()=>console.log(this.state))
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
                        <input 
                            placeholder="Name" 
                            type="text"
                            value={this.state.createUser.name}
                            onChange={(e)=>this.editStudent(e, 'createUser', 'name')}/>
                        <input 
                            placeholder="Email" 
                            value={this.state.createUser.email}
                            type="email" 
                            onChange={(e)=>this.editStudent(e, 'createUser', 'email')}/>
                        <input 
                            placeholder="Age" 
                            value={this.state.createUser.age}
                            type="number" 
                            onChange={(e)=>this.editStudent(e, 'createUser', 'age')}/>
                        <select 
                            type="number" 
                            value={this.state.createUser.course}
                            onChange={(e)=>this.editStudent(e, 'createUser', 'course')}>
                                <option value={1}>WD Full Time</option>
                                <option value={2}>UX Full Time</option>
                                <option value={3}>Web Dev Remote</option>
                        </select>
                        <input 
                            onChange={(e)=>this.editStudent(e, 'createUser', 'grade')}
                            value={this.state.createUser.grade}
                            placeholder="Grade" 
                            type="number" />
                        <select 
                            type="number" 
                            value={this.state.createUser.source}
                            onChange={(e)=>this.editStudent(e, 'createUser', 'source')}>
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
                        <select onChange={(e)=>this.editValue(e, 'editUser')} defaultValue="">
                            <option value="" disabled hidden>Select a student</option>
                            {this.props.users.map((user, i)=>{
                                return <option key={i} value={i}>{user.name}</option>
                                })
                            }
                        </select>
                        <input 
                            onChange={(e)=>this.editStudent(e, 'editUser', 'email')}
                            placeholder="Email" 
                            value={this.state.editUser.email} 
                            type="email"  />
                        <input 
                            onChange={(e)=>this.editStudent(e, 'editUser', 'age')}
                            placeholder="Age" 
                            value={this.state.editUser.age} 
                            type="number" />
                        <select 
                            onChange={(e)=>this.editStudent(e, 'editUser', 'course')}
                            value={this.state.editUser.course}>
                                <option value={1}>WD Full Time</option>
                                <option value={2}>UX Full Time</option>
                                <option value={3}>Web Dev Remote</option>
                        </select>
                        <input 
                            placeholder="Grade" 
                            onChange={(e)=>this.editStudent(e, 'editUser', 'grade')}
                            value={this.state.editUser.grade} 
                            type="number" max={100} min={0} />
                        <select 
                            onChange={(e)=>this.editStudent(e, 'editUser', 'source')}
                            value={this.state.editUser.source}>
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
                        <select onChange={(e)=>this.editValue(e, 'deleteUser')} defaultValue="">
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
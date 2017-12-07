import React, { Component } from 'react';
import calculator from './../Util/Math';

class Metrics extends Component {
    constructor(){
        super();
        this.state={
            avgAge: "",
            avgGrade: "",
            maxEffective: "",
            maxEnroll: "",
            maxGrade: "",
            medianGrade: "",
            totalNum: ""
        }
    }
    componentDidMount(){
        this.setState({
            ...calculator(this.props)
        })
    }
    render() {
        console.log(this.state)
        return (
            <div className="menu">
                <h3 className='chartHeader'>Metrics</h3>
                <p>
                    <strong> Total Enrolled: </strong>
                    {this.state.totalNum}
                </p>
                <p>
                    <strong> Average Age: </strong>
                    {this.state.avgAge} years old
                </p>
                <p>
                    <strong> Highest Class Enrollment: </strong>
                    {this.state.maxEnroll}
                </p>
                <p>
                    <strong> Grades: </strong>
                    <li> Highest: {this.state.maxGrade} </li>
                    <li> Median: {this.state.medianGrade} </li>
                    <li> Average: {this.state.avgGrade} </li>
                </p>
                <p>
                    <strong>Most Effective Source: </strong>
                    {this.state.maxEffective} 
                </p>
            </div>
        )
    }
}

export default Metrics;
import React, {Component} from 'react';
import dataTypes from './../Util/dataTypes';

class Chart extends Component {
    constructor(){
        super()
        this.state={
            value: "age",
            chartData: dataTypes[0]
        }
    }
    selectValue=(e)=>{
        let targetData = dataTypes.filter(elem=>
            elem.type === e.target.value)[0];
        console.log(targetData)
        this.setState({
            value: e.target.value,
            chartData: targetData
        })
    }
    render(){
        let valA = 0;
        let valB = 0;
        let valC = 0;
        this.props.data.forEach((user)=>{
                if (user[this.state.value]<= this.state.chartData.rangeA){
                    valA++
                } else if (user[this.state.value]<= this.state.chartData.rangeB){
                    valB++
                } else valC++
            }
        )
        return(
            <div className="menu">
                <h3 className='chartHeader'>Chart</h3>
                <div className="chartBox">
                    <div className="valA"
                        style={{"height": (valA*(100/this.props.data.length))+"%"}}>
                        <p className="label">
                            {this.state.chartData.textA}
                            <br/>
                            {'Total:' + valA }
                        </p>
                    </div>
                    <div className="valB"
                        style={{"height": (valB*(100/this.props.data.length))+"%"}}>
                        <p className="label">
                            {this.state.chartData.textB}
                            <br/>
                            {'Total:' + valB }
                        </p>
                    </div>
                    <div className="valC"
                        style={{"height": (valC*(100/this.props.data.length))+"%"}}>
                        <p className="label">
                            {this.state.chartData.textC}
                            <br/>
                            {'Total:' + valC }
                        </p>
                    </div>
                </div>
                <h4 className="chartHeader">
                    {this.state.value.toUpperCase()}
                </h4>
                <select onChange={this.selectValue}>
                    <option value="age">Age</option>
                    <option value="course">Course</option>
                    <option value="grade">Grade</option>
                    <option value="source">Source</option>
                </select>
            </div>
        )
    }
}

export default Chart;
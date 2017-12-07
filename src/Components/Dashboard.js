import React, {Component} from 'react';
import dataTypes from './../Util/dataTypes';
import Chart from './Chart';
import Metrics from './Metrics';

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            allCats: ['name','email','age','course','grade','source'],
            catIndex: 0,
            category: "name",
            scroll: "down"
        }
    }
    category=(change)=>{
        this.setState({
            catIndex: this.state.catIndex + change,
            category: this.state.allCats[this.state.catIndex + change]
        })
    }
    catHelper=(val)=>{
        let targetData = dataTypes.filter(elem=>
            elem.type === this.state.category)[0];
        if (val === 1) {
            return targetData.textA
        } else if (val === 2) {
            return targetData.textB
        } else return targetData.textC
    }
    scrollMenu=(e)=>{
        let direction = "";
        let diff = e.target.scrollHeight - e.target.clientHeight;
        if (diff !== 0 && e.target.scrollTop < diff-7) {
            direction += "down "
        } 
        if (diff !== 0 && e.target.scrollTop > 10) {
            direction += "up"
        }
        this.setState({
            scroll: direction
        })
    }
    render(){
        let tHeading= this.state.category.charAt(0).toUpperCase() + this.state.category.substr(1);
        let scrollable = this.props.users.length > 10 ? true : false;
        return (
            <div
                onScroll={(e)=>this.scrollMenu(e)}>
                <h2 className="chartHeader">
                    Dashboard
                </h2>
                <div className="menu">
                    <h3 className='chartHeader'>All Users</h3>
                    <button onClick={()=>this.category(-1)}
                            disabled={this.state.catIndex <= 0}>
                        {`<`}
                    </button>
                    <button onClick={()=>this.category(1)}
                            disabled={this.state.catIndex >= this.state.allCats.length -1}>
                        {`>`}
                    </button>
                    <table>
                        <tbody>
                            <tr>
                                <th><strong>{tHeading}</strong></th>
                            </tr>
                            {this.props.users.map((user, i)=>{
                                let value = user[this.state.category];
                                if (this.state.category === "course" || 
                                    this.state.category === "source"){
                                        value = this.catHelper(value)
                                    }
                                return (
                                    <tr key={i}>
                                        <td>{value}</td>
                                    </tr>
                                )}
                            )}
                        </tbody>
                    </table>
                </div>
                <Chart data={this.props.users} />
                <Metrics data={this.props.users} />
            </div>
        )
    }
}

export default Dashboard;
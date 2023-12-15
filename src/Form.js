import React, { Component } from 'react'
import './Form.css';

 class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            dept: '',
            rating: '',
            EmpData: []
        }
    }
    handleChange = (event) => {
        // console.log(event);
        this.setState({ [event.target.name]: event.target.value })
        this.setState({ [event.target.dept]: event.target.value })
        this.setState({ [event.target.rating]: event.target.value })
    }
    handleSumbit = () => {
        const obj = {
            name: this.state.name,
            dept: this.state.dept,
            rating: this.state.rating
        }
        this.state.EmpData.push(obj)
        this.setState({EmpData: this.state.EmpData })
    }


    render() {
        return (
            <>
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            <div id='container'>
             
                <label>Name :</label>
                <input type="text" name='name' id='box' placeholder="Enter Your Name" onChange={this.handleChange} /><br /><br />
                <label>Department :</label>
                <input type="text" name='dept' id='box1' placeholder="Enter Your dept" onChange={this.handleChange} /><br /><br />
                <label>Rating :</label>
                <input type="text" name='rating' id='box2' placeholder="Enter Your rating" onChange={this.handleChange} /><br /><br />
                <button onClick={this.handleSumbit} id='submit'>Submit</button>
            </div>

                <div id='bottomcontainer'>
                    {this.state.EmpData.map((item, index) => {
                        console.log(item);
                        return (
                            <div key={index} id='data'>
                                <h5 id='mini'>Name: {item.name}<span>||</span>Department: {item.dept}<span>||</span>Rating: {item.rating}</h5>
                            </div>
                        )
                    })}
                </div>

            </>
        )
    }
}
export default Form;





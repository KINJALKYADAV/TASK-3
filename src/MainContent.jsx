import React, { Component } from "react";

export default class MainContent
extends Component
{
    state = {
        pageTitle:"Customers", customersCount:10,
        customers:[
            {id:1, name : "Kinjalk", phone: "11228899", address: { city:"New Delhi"}} ,
            {id:2, name : "Abhinav", phone: "11288990",
            address: { city:"Lucknow"}} ,
            {id:3, name : "Aryan", phone: "11228990",
            address: { city:"Varanasi"}} ,
            {id:4, name : "Dipty", phone: "11228890",
            address: { city:"New Delhi"}} 
        ]
    };

    render()
    {
        return <div><h4 className="border-bottom m-1 p-1">{this.state.pageTitle}<span className="badge badge-secondary m-1 color-black">{this.state.customersCount}</span>
        <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh
        </button>
        </h4>
        <table className= "table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Customer Name</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
            {
                this.state.customers.map((customers)=>{
                    return(
                    <tr>
                    <td>{customers.id}</td>
                    <td>{customers.name}</td>
                    <td>{customers.phone}</td>
                </tr>
                    );
            })};       
            </tbody>
        </table> 
        </div>;
    }
    //Executes when the user clicks on Refresh button

    onRefreshClick =()=>
    {
        this.setState({customersCount:7});
    };
}
// export default cust;   
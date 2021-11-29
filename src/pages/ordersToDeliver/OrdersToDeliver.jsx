import React, { Fragment, useState, useEffect } from 'react';
import '../../components/style/Style.css';
import HeaderWaitress from "../../components/HeaderWaitress";
import GetOrders from '../../components/GetOrder';

//Page for the Waitress
function OrderToDeliver (){
    const [orders, setOrders] = useState([])  
    
    const ordersList = () => {
        fetch('http://localhost:8000/orders')
            .then(res => {
                return res.json();
            })
            .then(data => {  
                const deliveringOrders = data.filter((order) => order.status === 'delivering')             
                setOrders(deliveringOrders);
                console.log(deliveringOrders)                
            })            
    };  
    
    useEffect(() => {
        ordersList()
     }, [])
    
    
    const changeStatus = (order) =>{
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( { ...order, "status": 'delivered'} )
        };
        fetch('http://localhost:8000/orders/' + order.id, requestOptions)
            .then(response => response.json())
            .then(() => ordersList())
    }

    return(
        <Fragment>
            <div className='menuHeader'>
                <HeaderWaitress></HeaderWaitress>
            </div>
            {<div className= "waitressOrders">
                { orders && <GetOrders orders ={orders} changeStatus= {changeStatus} />}
            </div> }
        </Fragment>  
    )      
}

export default OrderToDeliver;
import React, { Fragment } from 'react';
import '../components/style/Style.css';

function GetOrders({orders, changeStatus}){

    // const changeStatus = (order) =>{
    //     const requestOptions = {
    //         method: 'PUT',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify( { ...order, "status": 'delivering'} )
    //     };
    //     fetch('http://localhost:8000/orders/' + order.id, requestOptions)
    //         .then(response => response.json())
                        
    // }

    return (
        <Fragment>
            {orders.map((elem) => {
                const orderProducts = elem.products.map((product) => (<tr key= {product.id}><td>{product.name}</td> <td className="qtyProduct">{product.qty}</td></tr>))
                return (
                <div className='orderCard' key= {elem.id}>
                    <div className='orderHeader'>
                    <h1> Orden N° {elem.id}</h1>
                    <div> Mesera: <span> {elem.userId}</span> </div>
                    <div> Cliente: <span> {elem.client}</span> </div>
                    <div>Mesa: <span> {elem.table}</span></div>
                    </div>
                    <table className="orderTable">
                        <tbody>
                            <td className= 'orderTitlesTable'>
                                <th>Producto</th>
                                <th className="qtyProduct">Cant.</th>
                            </td>
                            {orderProducts}
                        </tbody>
                    </table>
                    { elem.status === 'pending' ? <button 
                    className="btnGetOrder"
                    onClick= {() =>{ changeStatus(elem);
                    window.location.reload()}
                    } >Orden Lista</button> : <button 
                    className="btnGetOrder"
                    onClick= {() =>{ changeStatus(elem);
                    window.location.reload()}
                    }> Orden entregada </button> }
                </div>
                )
            })}
        </Fragment>
    )
}

export default GetOrders


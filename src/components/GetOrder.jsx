import React, { Fragment } from 'react';
import '../components/style/Style.css';

function GetOrders({orders, changeStatus}){ 

    return (
        <Fragment>
            {orders.map((elem) => {
                const orderProducts = elem.products.map((product) => (<tr key= {product.id}><td>{product.name}</td> <td className="qtyProduct">{product.qty}</td></tr>))
                return (
                <div className='orderCard' key= {elem.id}>
                    <div className='orderHeader'>
                    <h1> Orden N° {elem.id}</h1>
                    </div>
                    <div className='headerData'>
                        <div><span> Mesera: </span> {elem.userId} </div>
                        <div><span> Cliente: </span> {elem.client}</div>
                        <div><span>Mesa: </span> {elem.table}</div>  
                    </div>
                                      
                    <table className="orderTable">
                        <tbody>
                            <tr className= 'orderTitlesTable'>
                                <th>Producto</th>
                                <th className="qtyProduct">Cant.</th>
                            </tr>
                            {orderProducts}
                        </tbody>
                    </table>
                    { elem.status === 'pending' ? <button 
                    className="btnGetOrder"
                    onClick= {() =>{ changeStatus(elem)}
                    } >Orden Lista</button> : <button 
                    className="btnGetOrder"
                    onClick= {() =>{ changeStatus(elem)}
                    }> Orden entregada </button> }
                </div>
                )
            })}
        </Fragment>
    )
}

export default GetOrders
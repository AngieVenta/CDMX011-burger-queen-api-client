import React from 'react';
import './style/Style.css';;

function OrderData({orderProducts , removeProduct, lessProduct}) {  

    return (
        <div id="OrderData">
            <header>
                <h2> Comanda </h2>            
            </header>
            <div className= 'clientData'> 
                <label htmlFor= 'clientName'>Cliente: </label>
                <input 
                id= 'client-name'
                type='text'
                placeholder='Escribe el nombre del cliente'
                ></input>
                <label htmlFor= 'tableName'>Mesa: </label>
                <select 
                id = 'table-name'
                autoComplete= 'off'
                name= 'table'
                >
                    <option disabled> Selecciona la mesa del cliente</option>
                    <option value= '01'>01</option>
                    <option value= '02'>02</option>
                    <option value= '03'>03</option>
                    <option value= '04'>04</option>
                    <option value= '05'>05</option>
                    <option value= '06'>06</option>
                    <option value= '07'>07</option>
                    <option value= '08'>08</option>
                </select>
            </div>
            <div className= 'orderTitles'>
                <span>Producto</span>
                <span>Cant.</span>
                <span>Precio</span>
            </div>
            <div className='orderProducts'>
                {orderProducts.map(elem => (
                    <div key= {elem.id}>
                        <button onClick= {() => removeProduct(elem)} className="btnRemove"> 
                            <img alt='borrar todo'
                            src= 'https://raw.githubusercontent.com/DianaAraujoG/La-Magia-de-Mexico/main/img-Burger-Queen/contenedor-de-basura.png'></img>
                        </button>
                        <span>
                        <span> {elem.name} </span>
                        <button onClick = {() => lessProduct(elem)} className="btnLess">
                            <img alt= 'reducir cantidad de producto'
                            src= 'https://raw.githubusercontent.com/DianaAraujoG/La-Magia-de-Mexico/main/img-Burger-Queen/flecha-hacia-abajo.png'></img>
                        </button>
                        </span>
                        <span>{elem.qty} </span>
                        <span>${elem.price * elem.qty}</span>
                    </div>
                )) }
            </div>
            <div className= 'totalOrder'>
                <h3>Total</h3>
                {<h3> ${orderProducts.reduce((previousValue, currentValue) => previousValue + (currentValue.price * currentValue.qty), 0)}</h3>}
            </div>
        </div>
        
    )
}

export default OrderData
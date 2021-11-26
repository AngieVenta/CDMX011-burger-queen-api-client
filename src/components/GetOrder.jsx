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
        <div>
            {orders.map((elem) => {
                const orderProducts = elem.products.map((product) => (<tr key= {product.id}><td>{product.name}</td> <td>{product.qty}</td></tr>))
                return (
                <div className='orderCard' key= {elem.id}>
                    <div className='orderHeader'><h1> Orden N° {elem.id}</h1></div>
                    <p> Mesera: <span> {elem.userId}</span> </p>
                    <p> Cliente: <span> {elem.client}</span> </p>
                    <p> Mesa: <span> {elem.table}</span> </p>
                    <table>
                        <tbody>
                            <td>
                                <th>Producto</th>
                                <th>Cant.</th>
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
        </div>
    )
}

export default GetOrders


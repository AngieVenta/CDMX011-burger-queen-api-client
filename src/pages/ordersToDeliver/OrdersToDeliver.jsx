import React, { Fragment } from 'react';
import '../../components/style/Style.css';
import HeaderWaitress from "../../components/HeaderWaitress";

//Page for the Waitress
function OrderToDeliver (){
    return(
        <Fragment>
            <div className='menuHeader'>
                <HeaderWaitress></HeaderWaitress>
            </div>
        </Fragment>  
    )      
}

export default OrderToDeliver;
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import './style/Style.css';
import Header from './Header'

const HeaderWaitress = () => {
    return (
        <Fragment>
            <div className="header">
                <Header> 
                <div className="btnsHeader">
                    <Link to = '/menu' className='changeRoute'>
                        <button className='btnMenu'>
                            <img src="https://raw.githubusercontent.com/DianaAraujoG/La-Magia-de-Mexico/main/img-Burger-Queen/menu_button.png" alt ='btnMenu'></img>
                        </button>
                    </Link>
                    <Link to = '/orderToDeliver' className='changeRoute'>
                        <button className='btnReady'>
                            <img alt='btnReady' src="https://raw.githubusercontent.com/DianaAraujoG/La-Magia-de-Mexico/main/img-Burger-Queen/listo_button.png"></img>
                        </button>
                    </Link>
                </div>  
                </Header>
            </div>
        </Fragment>        
    )
}

export default HeaderWaitress
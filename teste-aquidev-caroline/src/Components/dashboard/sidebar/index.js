import './style.css'
import logoIMG from './assets/logo.png'
import {BsFillBagDashFill} from 'react-icons/bs'
import {GiBeerStein} from 'react-icons/gi'
import {BsPeopleFill} from 'react-icons/bs'

export function Sidebar() {

    return (
        <div className="main">
            <div className="logo-title">
                <img src={logoIMG} alt='Login icon by Icons8'></img> gBeer
            </div>

            <div className="menu">
                <div className="menu-item active">
                    <div><BsFillBagDashFill/></div>
                    <span>Dashboard</span>
                </div>
                <div className="menu-item">
                    <div><BsPeopleFill/></div>
                    <span>Costumers</span>
                </div>
                <div className="menu-item">
                    <div><GiBeerStein/></div>
                    <span>Orders</span>
                </div>
            </div>
        </div>
    )

}

export default Sidebar;
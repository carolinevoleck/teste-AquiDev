import Sidebar from './sidebar';
import Main from './main';
import './style.css'

export function Dashboard() {

    return (
        <div className="container">
            <div className="dashboard">
                <Sidebar />
                <Main />
            </div>
        </div>
    )

}

export default Dashboard;
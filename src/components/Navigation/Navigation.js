import {Link} from 'react-router-dom';
import './/index.css';
function Navigation(){
    return (

        <div className="navbar">
            <h2 > <Link className='logo' to ="/">Zaap⚡</Link></h2>
            <ul className='nav'>
                <li ><Link className='nav-link' to ="/">Home</Link></li>
                <li ><Link className='nav-link' to="/add">Add Meeting</Link></li>
                <li ><Link className='nav-link' to="/old">Old Meetings</Link></li>
                {/* <li ><Link  className='nav-link' to="/important">Important Meetings</Link></li> */}



            </ul>
            </div>

    );

}

export default Navigation;
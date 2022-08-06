// import MeetingCard from "../Meetings/MeetingCard"
// import rm from '../../images/rm.png';
import {Link} from 'react-router-dom';
function NotFound() {
  return (
    <div>
        <div className="box text-center">
    <img  className="img" src="https://codekaro.in/assets/img/4041.png" alt=""></img>
    {/* <img className="img" src={rm} alt=""></img> */}
    <span >Ooops...</span>
    <h5 className="subtitle">404, The page you are looking for does not exist.</h5>
    {/* <button className="btn mt-1">Go Back</button> */}
   <Link className='btn2 ' to ="/">Go Back</Link>
    {/* <MeetingCard/> */}
    </div>
    </div>
  )
}

export default NotFound;
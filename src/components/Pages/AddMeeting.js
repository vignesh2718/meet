// import MeetingCard from "../Meetings/MeetingCard"
import {useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import './meet.css'
function AddMeeting() {
  const navigate = useNavigate();
    const titleInputRef = useRef();
    const descInputRef = useRef();
    const imgInputRef = useRef();
    const dateInputRef = useRef();
    function submitHandler(event){
        event.preventDefault();

        const title = titleInputRef.current.value;
        const desc = descInputRef.current.value;
        const img = 'https://source.unsplash.com/1600x800/meeting' + imgInputRef.current.value;
        const date = dateInputRef.current.value;


        const meetingData = {
            title: title,
            desc: desc,
            img: img,
            date: date
        }
        fetch('https://mern315-meet-demo-default-rtdb.firebaseio.com/meetings.json',{
            method: 'POST',
            body: JSON.stringify(meetingData),
        }).then(()=>{
            navigate('/', { replace: true });
        });
    }





  return (
    <div>
   <div className="container text-center">
    {/* <h1 className="title mt-5 ">Create New Meetings</h1> */}
    {/* <h3 className="subtitle">Activate Your Community</h3> */}
    {/* <p>Foster meaningful relationships with events, newsletters, and community analytics</p> */}

    {/* <button className="btn mt-1">Create Meeting</button> */}
</div>
    <div className="container text-center mt-1">
            
            <form className='meeting-form' onSubmit={submitHandler}>
            <h1 className='title mb-3'>Create New Meetings</h1>
                <div className='form-group'>
                    <label htmlFor="exampleInputEmail1">Meeting Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter the meeting title" ref={titleInputRef}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="exampleInputEmail1">Image keyword</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter the meeting title" ref={imgInputRef}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="exampleInputEmail1">Meeting Date</label>
                    <input type="date" className="form-control" id="title" placeholder="Enter the meeting title" ref={dateInputRef}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="exampleInputEmail1">Meeting Title</label>
                    <textarea type="text" rows="5" className="form-control" id="title" placeholder="Enter the meeting title" ref={descInputRef}/>
                </div>
                <div className='form-group'>
                <input type="submit" className="btn" value="Add Meeting"/>
                </div>

            </form>

        </div>







    
    </div>
  )
}

export default AddMeeting;
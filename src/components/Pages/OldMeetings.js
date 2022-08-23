import './meet.css';
import { useState, useEffect } from 'react';
// import Welcome from '.././img/welcome.svg';
import NoMeetings from '../../images/noMeetings.png';

import MeetingCard from '../Meetings/MeetingCard';
// import Moment from 'react-moment';
import moment from 'moment';
function OldMeetings(){

    const [meetings, setMeetings] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    fetch('https://meeting-89647-default-rtdb.firebaseio.com/user.json')
    .then(response => response.json()).then(data => {
        const meetings = [];
        for(const key in data){
            const meeting = {
                id: key,
                ...data[key]
            }
            meetings.push(meeting);
        }
        setMeetings(meetings);
        // console.log(meetings);
        setLoading(false);
    });
    }, []);

    

    return (
        

        
        <div>
           
            <div className='container text-center my-5'>
                <h1 className='title '>Previous meetings</h1>
                <p className='desc'>Foster meaningful relationships with events, newsletters, and community analytics</p>
            
            </div>
            <div className={loading ? "loading" : "d-none"}>
                <div className='loading-animation'>loading...</div>
            </div>
            <div className={meetings.length !== 0 ? "container text-center" : "d-none"}>
                
                
                <img src={NoMeetings} alt="welcome" className="no-meetings" />
                <p>No meetings available!!</p>
            </div>
            

            <div>
                <div className="meetings-container">
                    {
                        // eslint-disable-next-line array-callback-return
                        meetings.filter((meeting)=>{
                            
                            let date = new Date();
                            let current = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
                            let today = moment(current);
                            let meetingDate = moment(meeting.date);
                            console.log(today)
                            console.log(meetingDate)

                            if(meetingDate.isSameOrBefore(today)){
                                return meeting;
                            }
                        }).map((meeting)=>{
                            return(
                                <MeetingCard key={meeting.id} {...meeting} />
                            )
                        }
                        )
                    }
                </div>
            </div>

        </div>
        
    );
}
export default OldMeetings;

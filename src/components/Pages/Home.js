import MeetingCard from '../Meetings/MeetingCard';
import { useState, useEffect } from 'react';
import Welcome from '../../images/welcome.svg';
import NoMeetings from '../../images/noMeetings.png';
import './meet.css';
import moment from 'moment';

  function Home(){
  
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
<div className="container text-center">
  <img src={Welcome} alt="welcome" className="welcome" />
    <h1 className="title mt-5 ">Welcome to Zaap⚡Meeting</h1>
    <h3 className="subtitle">Activate Your Community</h3>
    <p>Foster meaningful relationships with events, newsletters, and community analytics</p>
    </div>
    <div className={loading ? "loading" : "d-none"}>
                <div className='loading-animation'>loading...</div>
            </div>
            <div className={meetings.length === 0 ? "container text-center" : "d-none"}>
                
                
                <img src={NoMeetings} alt="welcome" className="no-meetings" />
                <p>No meetings available!!</p>
            </div>
            

            <div>
                <div className="meetings-container">
                    {
                        // eslint-disable-next-line array-callback-return
                        meetings.filter(function (meeting) {
                          let date = new Date();
                          let current = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
                          let today = moment(current);
                          let meetingDate = moment(meeting.date);
                          console.log(today);
                          console.log(meetingDate);

                          if (meetingDate.isSameOrAfter(today)) {
                            return meeting;
                          }
                        }).map(meeting => {
                            let date = moment(meeting.date).format(' MMMM Do YYYY');
                           return <MeetingCard title={meeting.title} desc={meeting.desc} date={date} img={meeting.img} />
                        })
                    }
                </div>
            </div>
    </div>
  );
}

export default Home;

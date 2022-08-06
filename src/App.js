import './index.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Pages/Home';
import AddMeeting from './components/Pages/AddMeeting';
import NotFound from "./components/Pages/NotFound";
import OldMeetings from "./components/Pages/OldMeetings";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
     <Navigation/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/add" element={<AddMeeting/>}/>
  <Route path="/old" element={<OldMeetings />} />


  
  <Route path="*" element={<NotFound/>}/>
</Routes>











    </div>
  );
}

export default App;

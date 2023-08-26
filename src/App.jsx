import Header from './components/base/header/Header'
import Footer from './components/base/footer/Footer'
import Sidebar from './components/base/sidebar/Sidebar'
import TaskBoard from './components/management/TaskBoard'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskSettings from './components/management/TaskSettings';
import TrackTasks from './components/management/TrackTasks';
import TimeTable from './components/management/TimeTable';
import Calender from './components/management/Calender';
import KeepNotes from './components/management/KeepNotes';
import AccountSettings from './components/management/AccountSettings';
import Targets from './components/management/Targets';
import Achievements from './components/management/Achievements';
import { useEffect } from 'react';
import {Modal,Ripple,Input,Select,Datepicker,Chart,initTE} from "tw-elements";
      
function App() {
  window.addEventListener('scroll',()=>{
    const isScroll = document.querySelector(".sidebar").classList.contains("hidden");
    if(!isScroll){
      openSidebar();
    }
  });
  const openSidebar = () => {
      document.querySelector(".sidebar").classList.toggle("hidden");
  }
  useEffect(() => {
    initTE({ Modal, Ripple, Input, Datepicker, Chart, Select });
  }, []);
  return (
    <>
      <Router>
        <Header openSidebar={openSidebar}/>
        <Sidebar openSidebar={openSidebar}/>
          <Routes>
            <Route path='/' element={<TaskBoard/>}/>
          </Routes>
          <Routes>
            <Route path='/task-settings' element={<TaskSettings/>}/>
          </Routes>
          <Routes>
            <Route path='/track-tasks' element={<TrackTasks/>}/>
          </Routes>
          <Routes>
            <Route path='/time-table' element={<TimeTable/>}/>
          </Routes>
          <Routes>
            <Route path='/calender' element={<Calender/>}/>
          </Routes>
          <Routes>
            <Route path='/keep-notes' element={<KeepNotes/>}/>
          </Routes>
          <Routes>
            <Route path='/targets' element={<Targets/>}/>
          </Routes>
          <Routes>
            <Route path='/achievements' element={<Achievements/>}/>
          </Routes>
          <Routes>
            <Route path='/account-settings' element={<AccountSettings/>}/>
          </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
 
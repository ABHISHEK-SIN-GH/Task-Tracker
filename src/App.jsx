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
import FormModal from "./components/modals/FormModal";
import AddTaskForm from "./components/Forms/AddTaskForm";
import { useEffect } from 'react';
import {Modal,Ripple,Input,Select,Datepicker,Chart,initTE} from "tw-elements";
      
function App() {

  document.addEventListener('scroll',()=>{
    const isCon = document.querySelector(".sidebar").classList.contains("hidden");
    if(!isCon){
      openSidebar();
    }
  });

  document.addEventListener("click", (e) => {
    const sidebarInVisible = document.querySelector(".sidebar").classList.contains("hidden");
    if(!sidebarInVisible){
      const sidebar = document.getElementById("sidebar");
      const sidebarItem = document.getElementsByClassName("sidebarItem");
      const menu = document.getElementById("Menu");
      let targetEl = e.target;
      if(targetEl == menu){
        return;
      }
      if(targetEl.classList.contains("sidebarItem")){
        document.querySelector(".sidebar").classList.add("hidden");
        return;
      }
      do {
        if(targetEl == sidebar) {
          return;
        }
        targetEl = targetEl.parentNode;
      } while (targetEl);
      document.querySelector(".sidebar").classList.add("hidden");
    }
  });

  const openSidebar = () => {
      document.querySelector(".sidebar").classList.toggle("hidden");
  }

  useEffect(() => {
    initTE({ Modal, Ripple, Input, Datepicker, Chart, Select });
  }, []);

  const action = () => {
    console.log("called action from task board");
  };

  return (
    <>
      <Router>
        <Header openSidebar={openSidebar}/>
        <Sidebar openSidebar={openSidebar}/>
        <FormModal name={"Add Task"} targetID={"AddTaskForm"} form={<AddTaskForm/>} action={action} button={"Save Task"}/>
          <Routes>
            <Route path='/' element={<TaskBoard/>}/>
            <Route path='/task-settings' element={<TaskSettings/>}/>
            <Route path='/track-tasks' element={<TrackTasks/>}/>
            <Route path='/time-table' element={<TimeTable/>}/>
            <Route path='/calender' element={<Calender/>}/>
            <Route path='/keep-notes' element={<KeepNotes/>}/>
            <Route path='/targets' element={<Targets/>}/>
            <Route path='/achievements' element={<Achievements/>}/>
            <Route path='/account-settings' element={<AccountSettings/>}/>
          </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
 
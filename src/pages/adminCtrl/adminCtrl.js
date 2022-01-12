import { useState,useEffect } from 'react';
import Sidebar from '../sidebar/sidebar';
import "./adminCtrl.css";
import axios from 'axios';


const Adminctrl = () => {
  const [locker,setLocker]=useState("select");
  const [Dashboarddata,setDashboarddata]=useState(""); 
  const [LockerInfo,setLockerInfo]=useState(""); 
  const [occupied,setOccupied]=useState("");
  if(Dashboarddata.length!==0){
    // let lockedlockers=Dashboarddata.filter((item)=>item.status==="locked")
    // console.log(lockedlockers);
  }
  const getInfo = async () =>{
      try{
          const {data} = await axios.get('http://localhost:3001/locker/lockerdata');
          setDashboarddata(data);
        }catch(err){
            console.log(err)
        }
  }

  const unlockAll = async()=>{
      for(let i=0;i<Dashboarddata.length;i++)
      {
        await axios.post("http://localhost:3001/locker/unlock",Dashboarddata[i]);
      }
  }
  useEffect(()=>{
      getInfo();
    //  if(Dashboarddata.length!==0){
    //   setLockerInfo(()=>Dashboarddata .filter((item)=>item.name.match(locker)))
    //   console.log(LockerInfo)
    //   }
  },[Dashboarddata,locker,LockerInfo]);
 
    return (
        <div className='adminctrl'>
            <Sidebar className="adminctrl_sidebar" />
            <div className='adminctrl_lockers'>
                <div className="adminctrl_lockersContainer">
                    <div className='adminctrl_lockershead'>
                        <h3 id="adminctrl_lockershead">Locker Access</h3>
                    </div>
                    <hr/>
                    <div className='adminctrl_databoard'>
                    <div className='adminctrl_databoard_top'>
                    <label className="adminctrl_label">Open Selected Locker</label>
                    <select onChange={(e)=>{
                        const lock=e.target.value;
                        setLocker(lock);
                    }}>
                    {(()=>{
                    if(Dashboarddata.length!==0){
                    return( 
                    <>   
                    {Dashboarddata.map((values,key)=>{
                     return<option className="adminctrl_option" key={key} value={values.name}>{values.name}</option>
                    })}
                    </>
                    )}})()}
                    </select>
                    <button className="adminctrl_Button" type='submit'>Open</button>
                    </div>
                    <br/>
                    <div className='adminctrl_databoard_bottom'>
                    <label className="adminctrl_label">Open All Locker</label>
                    <button type="button" className="adminctrl_Button" onClick={unlockAll}>Open</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className='adminctrl_lockerInfo'>
                <div className='adminctrl_lockerInfo_top'>
                <h6>Locker Occupied</h6>
                
                
                </div>
                <div>
                
                </div>
            </div>
        </div>
    )
}

export default Adminctrl;

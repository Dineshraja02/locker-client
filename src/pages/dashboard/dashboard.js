import {useState,useEffect} from 'react';
import Sidebar from '../sidebar/sidebar';
import "./dashboard.css";
import { Icon } from '@iconify/react';
import axios from 'axios';


const Dashboard = () => {
    const [Dashboarddata,setDashboarddata]=useState(""); 
    const [lock,setLock]=useState("unlock");;
    const [lockerInfo,setLockerInfo]= useState({});

    const getInfo = async () =>{
        try{
            const {data} = await axios.get('http://localhost:3001/locker/lockerdata');
            setDashboarddata(data);
          }catch(err){
              console.log(err)
          }
    }
    useEffect(()=>{
        getInfo();
    },[]);

    const handleUnlock = async(values)=> {
        console.log(values);
        await axios.post("http://localhost:3001/locker/unlock",values)
        const {data} = await axios.get('http://localhost:3001/locker/lockerdata');
        setDashboarddata(data);
        setLock("unlock");
        console.log(lock)
       }
    return (
        <div className='dashboard'>
            <Sidebar className="dashboard_sidebar" />
            <div className='dashboard_lockers'>
                <div className="dashboard_lockersContainer">
                    <div className='dashboard_lockershead'>
                        <h3 id="dashboard_lockershead">Lockers</h3>
                        <div className='dashboard_Search_Input'>
                            <input
                            className='dashboard_search_Inputfields'
                            placeholder='Search'
                            name='search'
                            type="text"
                            >
                            </input>
                            </div>
                    </div>
                    <div className='dashboard_lockerBox_Container'>
                    {(()=>{
                    if(Dashboarddata.length!==0){
                    return( 
                    <>   
                    {Dashboarddata.map((values,key)=>{
                     return <button className='dashboard_detailget'
                     onClick={()=>setLockerInfo(values)}>
                    <div key={key}  className='dashboard_lockerBox'>
                    <Icon icon="fa-solid:lock" id={values.status} />
                    <div>
                        <h5>{values.name}</h5>
                        <p>{values.status}</p>
                       {values.status==="locked" ? 
                       <button type='button' 
                       className='dashboard_unlockButton'
                       onClick={()=>handleUnlock(values)}>unlock</button>:""}
                    </div>
                    </div>
                    </button >
                    })} 
                     </>
                    )}})()}
                    </div>
                </div>
            </div>
            <div className='dashboard_lockerInfo'>
                <div className='dashboard_lockerInfo_top'>
                <h6>Occupied Locker Details</h6>
                <div className='dashboard_lockertop'>
                <Icon icon="fa-solid:lock" className='dashboard_lockerImg' id={lockerInfo.status}/>
                <p>{lockerInfo.name}</p>
                </div>
                </div>
                <div className="dashboard_lockerInfo_details">
                <img className = "dashboard_profileImg" src="./assets/profile.png" alt=""></img>
                    <div className='dashboard_lockerInfo_detailsdiv'>
                    <h6>First name</h6>
                    <p></p>
                    </div >
                    <div className='dashboard_lockerInfo_detailsdiv'>
                    <h6>Email</h6>
                    <p></p>
                    </div>
                    <div className='dashboard_lockerInfo_detailsdiv'>
                    <h6>Phone Number</h6>
                    <p></p>
                    </div>
                    <div className='dashboard_lockerInfo_detailsdiv'>
                    <h6>IMEI Number</h6>
                    <p></p>
                    </div>
                    <div className='dashboard_lockerInfo_detailsdiv'>
                    <h6>Login Time </h6>
                    <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;

import {useState} from 'react';
import Sidebar from '../sidebar/sidebar';
import "./dashboard.css";
import { Icon } from '@iconify/react';
import axios from 'axios';
import { Dashboarddata } from './dashboarddata';

const Dashboard = () => {
    const [lock,setLock]=useState("unlock");
    const handleUnlock = async(values)=> {
        console.log(values);
        await axios.post("http://localhost:3001/locker/unlock",values)
        setLock("unlock");
        console.log(lock)
       }
    return (
        <div className='dashboard'>
            <Sidebar className="sidebar" />
            <div className='lockers'>
                <div className="lockersContainer">
                    <div className='lockershead'>
                        <h3 id="lockershead">Lockers</h3>
                        <div className='Search_Input'>
                            <input
                            className='search_Inputfields'
                            placeholder='Search'
                            name='search'
                            type="text"
                            >
                            </input>
                            </div>
                    </div>
                    <div className='lockerBox_Container'>
                    {Dashboarddata.map((values,key)=>{
                     return <div key={key}  className='lockerBox'>
                    <Icon icon="fa-solid:lock" id={values.status} />
                    <div>
                        <h5>{values.name}</h5>
                        <p>{values.status}</p>
                       {values.status==="locked" ? 
                       <button type='button' 
                       className='unlockButton'
                       onClick={()=>handleUnlock(values)}>unlock</button>:""}
                    </div>
                    </div>
                    })}
                    </div>
                </div>
            </div>
            <div className='lockerInfo'>
                <div className='lockerInfo_top'>
                <h6>Occupied Locker Details</h6>
                <div className='lockertop'>
                <Icon icon="fa-solid:lock" className='lockerImg'/>
                <p>locker</p>
                </div>
                </div>
                <div className="lockerInfo_details">
                <img className = "profileImg" src="./assets/profile.png" alt=""></img>
                    <div className='lockerInfo_detailsdiv'>
                    <h6>First name</h6>
                    <p></p>
                    </div >
                    <div className='lockerInfo_detailsdiv'>
                    <h6>Email</h6>
                    <p></p>
                    </div>
                    <div className='lockerInfo_detailsdiv'>
                    <h6>Phone Number</h6>
                    <p></p>
                    </div>
                    <div className='lockerInfo_detailsdiv'>
                    <h6>IMEI Number</h6>
                    <p></p>
                    </div>
                    <div className='lockerInfo_detailsdiv'>
                    <h6>Login Time </h6>
                    <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;

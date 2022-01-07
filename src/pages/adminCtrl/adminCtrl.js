import Sidebar from '../sidebar/sidebar';
import "./adminCtrl.css";


const Adminctrl = () => {
    return (
        <div className='dashboard'>
            <Sidebar className="sidebar" />
            <div className='lockers'>
                <div className="lockersContainer">
                    <div className='lockershead'>
                        <h3 id="lockershead">Locker Access</h3>
                    </div>
                    <hr/>
                    <div>
                    <label>Open Selected Locker</label>
                    <select>
                        <option>locker 1</option>
                        <option>locker 2</option>
                        <option>locker 3</option>
                        <option>locker 4</option>
                        <option>locker 5</option>
                    </select>
                    <button>Open</button>
                    <br/>
                    <label>Open All Locker</label>
                    <button>Open</button>
                    </div>
                </div>
            </div>
            <div className='lockerInfo'>
                <div className='lockerInfo_top'>
                <h6>Locker Occupied</h6>
                
                
                </div>
                <div>
                
                </div>
            </div>
        </div>
    )
}

export default Adminctrl;

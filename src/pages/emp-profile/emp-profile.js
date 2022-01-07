import Sidebar from '../sidebar/sidebar';
import "./emp-profile.css";


const Empprofile = () => {
    return (
        <div className='dashboard'>
        <Sidebar className="sidebar" />
        <div className='lockers'>
            <div className="lockersContainer">
                <div className='lockershead'>
                    <h3 id="lockershead">Employee List</h3>
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
                <hr/>
                <div className='userlist-Table'>
                <table className="emi_Table">
                <tr className="table_Header">
                <th>Name</th>
                <th>Phone</th>
                <th>Emp Id</th>
                <th>Locker Status</th>
                </tr>
                </table>
                </div>
            </div>
        </div>
        <div className='lockerInfo'>
            <div className='lockerInfo_top'>
            <h6>Add Employee</h6>
            
            </div>
            <div className="lockerInfo_details">
            <img className = "profileImg" src="./assets/profile.png" alt=""></img>
              <form className='reportsForm'>
              <label>Firstname</label>
              <input type="text" className='reportsInput'></input>
              <label>Email</label>
              <input type="password" className='reportsInput'></input>
              <label>Phone</label>
              <input type="password" className='reportsInput'></input>
              <label>IMEI Number</label>
              <input type="type"className='reportsInput'></input>
              <label>Login Time</label>
              <p></p>
              <button className='input_Button'>Enter Pass Code</button>
              </form>
            </div>
        </div>
    </div>
    )
}

export default Empprofile;

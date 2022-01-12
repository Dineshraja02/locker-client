import Sidebar from '../sidebar/sidebar';
import "./emp-profile.css";


const Empprofile = () => {
    return (
        <div className='empProfile'>
        <Sidebar className="empProfile_sidebar" />
        <div className='empProfile_lockers'>
            <div className="empProfile_lockersContainer">
                <div className='empProfile_lockershead'>
                    <h3 id="empProfile_lockershead">Employee List</h3>
                    <div className='empProfile_Search_Input'>
                        <input
                        className='empProfile_search_Inputfields'
                        placeholder='Search'
                        name='search'
                        type="text"
                        >
                        </input>
                        </div>
                </div>
                <hr/>
                <div className='empProfile_Table'>
                <table className="empProfile_emp_Table">
                <tr className="empProfile_table_Header">
                <th>Name</th>
                <th>Phone</th>
                <th>Emp Id</th>
                <th>Locker Status</th>
                </tr>
                </table>
                </div>
            </div>
        </div>
        <div className='empProfile_lockerInfo'>
            <div className='empProfile_lockerInfo_top'>
            <h6>Add Employee</h6>
            
            </div>
            <div className="empProfile_lockerInfo_details">
            <img className = "empProfile_profileImg" src="./assets/profile.png" alt=""></img>
              <form className='empProfile_Form'>
              <label>Firstname</label>
              <input type="text" className='empProfile_Input'></input>
              <label>Email</label>
              <input type="password" className='empProfile_Input'></input>
              <label>Phone</label>
              <input type="password" className='empProfile_Input'></input>
              <label>IMEI Number</label>
              <input type="type"className='empProfile_Input'></input>
              <label>Login Time</label>
              <p></p>
              <button className='empProfile_input_Button'>Enter Pass Code</button>
              </form>
            </div>
        </div>
    </div>
    )
}

export default Empprofile;

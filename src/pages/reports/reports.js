import Sidebar from '../sidebar/sidebar';
import "./reports.css";



const Reports = () => {
    return (
        <div className='reports'>
            <Sidebar className="reports_sidebar" />
            <div className='reports_lockers'>
                <div className="reports_lockersContainer">
                    <div className="reports_Header">
                        <h3>Report Generator</h3>
                        <hr/>
                        <div className="reports_Headerdiv" >
                         <label>From</label>
                         <input type="text" className='reports_HeaderInput' />
                         <label>To date</label>
                         <input type="text" className='reports_HeaderInput' />
                         </div>
                         <br/>
                         <div className="reports_Headerdiv" >
                         <label>Emp Id  -</label>
                         <input type="text" className='reports_HeaderInput'/>
                         <label>Locker Num</label>
                         <input type="text" className='reports_HeaderInput'/>
                         </div>
                    </div>
                    <div className='reports_lockershead'>
                        <h3 id="reports_lockershead">User List</h3>
                        <div className='reports_Search_Input'>
                            <input
                            className='reports_search_Inputfields'
                            placeholder='Search'
                            name='search'
                            type="text"
                            >
                            </input>
                            </div>
                    </div>
                    <hr/>
                    <div className='reports_userlist-Table'>
                    <table className="reports_Table">
                    <tr className="reports_table_Header">
                    <th>Name</th>
                    <th>EmailId</th>
                    <th>Phone</th>
                    <th>User Role</th>
                    </tr>
                    </table>
                    </div>
                </div>
            </div>
            <div className='reports_lockerInfo'>
                <div className='reports_lockerInfo_top'>
                <h6>Add User</h6>
                
                </div>
                <div className="reports_lockerInfo_details">
                <img className = "reports_profileImg" src="./assets/profile.png" alt=""></img>
                  <form className='reports_Form'>
                  <label>User name</label>
                  <input type="text" className='reports_Input'></input>
                  <label>Password</label>
                  <input type="password" className='reports_Input'></input>
                  <label>Confirm Password</label>
                  <input type="password" className='reports_Input'></input>
                  <label>User Profile</label>
                  <input type="type"className='reports_Input'></input>
                  <button className='reports_input_Button'>Enter Pass Code</button>
                  </form>
                </div>
            </div>
        </div>
    )
}

export default Reports;

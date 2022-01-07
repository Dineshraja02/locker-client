import Sidebar from '../sidebar/sidebar';
import "./reports.css";



const Reports = () => {
    return (
        <div className='dashboard'>
            <Sidebar className="sidebar" />
            <div className='lockers'>
                <div className="lockersContainer">
                    <div className="reportHeader">
                        <h3>Report Generator</h3>
                        <hr/>
                        <div className="reportHeaderdiv" >
                         <label>From</label>
                         <input type="text" className='reportHeaderInput' />
                         <label>To date</label>
                         <input type="text" className='reportHeaderInput' />
                         </div>
                         <br/>
                         <div className="reportHeaderdiv" >
                         <label>Emp Id  -</label>
                         <input type="text" className='reportHeaderInput'/>
                         <label>Locker Num</label>
                         <input type="text" className='reportHeaderInput'/>
                         </div>
                    </div>
                    <div className='lockershead'>
                        <h3 id="lockershead">User List</h3>
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
                    <th>EmailId</th>
                    <th>Phone</th>
                    <th>User Role</th>
                    </tr>
                    </table>
                    </div>
                </div>
            </div>
            <div className='lockerInfo'>
                <div className='lockerInfo_top'>
                <h6>Add User</h6>
                
                </div>
                <div className="lockerInfo_details">
                <img className = "profileImg" src="./assets/profile.png" alt=""></img>
                  <form className='reportsForm'>
                  <label>User name</label>
                  <input type="text" className='reportsInput'></input>
                  <label>Password</label>
                  <input type="password" className='reportsInput'></input>
                  <label>Confirm Password</label>
                  <input type="password" className='reportsInput'></input>
                  <label>User Profile</label>
                  <input type="type"className='reportsInput'></input>
                  <button className='input_Button'>Enter Pass Code</button>
                  </form>
                </div>
            </div>
        </div>
    )
}

export default Reports;

import Sidebar from '../sidebar/sidebar';
import "./user-list.css";


const Userlist = () => {
    return (
        <div className='userlist'>
            <Sidebar className="userlist_sidebar" />
            <div className='userlist_lockers'>
                <div className="userlist_lockersContainer">
                    <div className='userlist_lockershead'>
                        <h3 id="userlist_lockershead">User List</h3>
                        <div className='userlist_Search_Input'>
                            <input
                            className='userlist_search_Inputfields'
                            placeholder='Search'
                            name='search'
                            type="text"
                            >
                            </input>
                            </div>
                    </div>
                    <hr/>
                    <div className='userlist_userlist-Table'>
                    <table className="userlist_Table">
                    <tr className="userlist_table_Header">
                    <th>Name</th>
                    <th>EmailId</th>
                    <th>Phone</th>
                    <th>User Role</th>
                    </tr>
                    </table>
                    </div>
                </div>
            </div>
            <div className='userlist_lockerInfo'>
                <div className='userlist_lockerInfo_top'>
                <h6>Add User</h6>
                
                </div>
                <div className="userlist_lockerInfo_details">
                <img className = "userlist_profileImg" src="./assets/profile.png" alt=""></img>
                  <form className='userlist_Form'>
                  <label>User name</label>
                  <input type="text" className='userlist_Input'></input>
                  <label>Password</label>
                  <input type="password" className='userlist_Input'></input>
                  <label>Confirm Password</label>
                  <input type="password" className='userlist_Input'></input>
                  <label>User Profile</label>
                  <input type="type"className='userlist_Input'></input>
                  <button className='userlist_input_Button'>Enter Pass Code</button>
                  </form>
                </div>
            </div>
        </div>
    )
}

export default Userlist;

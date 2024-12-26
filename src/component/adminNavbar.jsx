import {Link} from "react-router-dom"

const AdminNavbar = () => {
    return (  
        <div className="nav">
            <h1>NAVBAR</h1>
          
                <Link to="/admin/">home</Link>
                <br />
                <Link to="/admin/add">add</Link><br />
                <Link to="/admin/list">List</Link><br />
                <Link to="/">Logout</Link>
                
        </div>
    );
}
 
export default AdminNavbar;
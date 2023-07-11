import {Link} from 'react-router-dom'
import './css/reset.css'

function reset(){
    return(
        <div style={{backgroundColor:'silver',width:'100%',height:'100%',position:'absolute'}}>
           <div className="form">
              <h1>reset password form</h1>
              <div className="form-group">
                <label>username</label>
                <input type="text" name="username"></input>
              </div>
              <div className="form-group">
                <label>previous password</label>
                <input type="password" name="ppwd"></input>
              </div>
              <div className="form-group">
                <label>new password</label>
                <input type="password" name="npwd"></input>
              </div>
              <div className="form-group">
                <label>confirm password</label>
                <input type="password" name="cpwd"></input>
              </div>
              <div className="form-group">
                <input type="submit" name="submt" value="reset password"></input>
              </div>
              <div>
                <p>
                <Link to='/login'>login</Link>
                </p>
              </div>
           </div> 
        </div>
    )
}

export default reset
import '../../../css/controlpanel/users/view.css'
import {FaPlus,FaTrashAlt,FaRegEdit} from 'react-icons/fa';


function Viewusers(){
    return(
        <div className='viewusers'>
            <div className='wrappviewusers'>
                <div className='userstable'>
                   <table>
                     <tr>
                        <th colspan='7'>
                            <div className='tableheading'>
                                <h3>system users</h3>
                                <div className='searchform'>
                                    <form>
                                        <div className='form-group'>
                                            <input type='search' placeholder='search for the user'></input>
                                            <input type='submit' value='search'></input>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </th>
                     </tr> 
                     <tr>
                        <th>full name</th>
                        <th>email address</th>
                        <th>category</th>
                        <th>username</th>
                        <th>password</th>
                        <th colspan='2'>actions</th>
                     </tr>
                     <tr>
                        <td>lonely chisale</td>
                        <td>lonely@gmail.com</td>
                        <td>student</td>
                        <td>lochisale</td>
                        <td>1blantyre</td>
                        <td style={{textAlign:'center'}}><FaRegEdit></FaRegEdit></td>
                        <td style={{textAlign:'center'}}><FaTrashAlt></FaTrashAlt></td>
                     </tr>
                   </table> 
                </div>
            </div>
        </div>
    )
}

export default Viewusers
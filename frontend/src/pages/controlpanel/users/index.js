import '../../../css/controlpanel/users/index.css'
function Users(){
    return(
        <div className='addusers'>
            <div className='wrappusersform'>
                <div className='form'>
                    <form>
                     <div className='card'>
                        <div className='cardheader'>
                            <h3>add system users</h3>
                        </div>
                        <div className='cardbody'>
                            <div className='form-group'>
                                <label>full name</label>
                                <input type='text' name='fullname'></input>
                            </div>
                            <div className='form-group'>
                                <label>email adress</label>
                                <input type='email' name='email'></input>
                            </div>
                            <div className='form-group'>
                                <label>username</label>
                                <input type='text' name='username'></input>
                            </div>
                            <div className='form-group'>
                                <label>category</label>
                                <select name='usercategory'>
                                    <option>administrator</option>
                                    <option>lecturer</option>
                                    <option>students</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label>default password</label>
                                <input type='password' name='password'></input>
                            </div>
                            <div className='form-group submit'>
                                <input type='submit' value='add user' name='submit'></input>
                                <button>csv file</button>
                            </div>
                        </div>
                        <div className='cardfooter'></div>
                     </div>

                    </form>
                    
                </div>


                <div className='csvform'>
                    <form>
                        <div className='form-group'></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Users
import '../../../css/studentpanel/registration/register.css'
function Register(){
    return(
        <div style={{backgroundColor:'white',width:'100%',height:'100%',position:'absolute'}}>
            <div className="registration">
                <div className="registrationform">
                    <div className="form">
                        <h1>registration information</h1>

                        <form>
                            <div>
                            <h2>students information</h2>
                            <div className="form-group">
                                <label>full name</label>
                                <input type="text"></input>
                            </div>
                            <div className="form-group">
                                <label>gender</label>
                                <div className="radioinputs">
                                <input type="radio"></input><h4>male</h4>
                                <input type="radio"></input><h4>female</h4>
                                </div>
                            </div>
                            <div className="form-group" >
                                <label>age</label>
                                <input type="number"></input>
                            </div>
                            <div className="form-group">
                                <label>phone number</label>
                                <input type="tel"></input>
                            </div>
                            <div className="form-group">
                                <label>email adress</label>
                                <input type="email"></input>
                            </div>
                            <div className="form-group">
                                <label>district</label><br></br>
                                <select>
                                    <option>mzimba</option>
                                    <option>rumphi</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>residential adress</label>
                                <textarea></textarea>
                            </div>
                            <div className="form-group">
                                <label>registration number</label>
                                <input type="text"></input>
                            </div>
                            <div className="form-group">
                                <label>program of study</label>
                                <select>
                                    <option>clinical medicine</option>
                                    <option>clinical medicine</option>
                                    <option>clinical medicine</option>
                                    <option>clinical medicine</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>year of study</label>
                                <select>
                                    <option> year 1</option>
                                    <option> year 2</option>
                                    <option> year 3</option>
                                    <option> year 4</option>
                                </select>
                            </div>

                            </div>

                            <div>

                            <h2>next kin information</h2>
                            <div className="form-group">
                                <label>full name</label>
                                <input type="text"></input>
                            </div>
                            <div className="form-group">
                                <label>residential adress</label>
                                <textarea></textarea>
                            </div>
                            <div className="form-group">
                                <label>email adress</label>
                                <input type="email"></input>
                            </div>
                            <div className="form-group">
                                <label>phone number</label>
                                <input type="tel"></input>
                            </div>
                            <div className="form-group">
                                <label>distict</label>
                                <select>
                                    <option>mzimba</option>
                                    <option>mzimba</option>
                                </select>
                            </div><div className="form-group">
                                <label>relationship</label>
                                <input type="text"></input>
                            </div>

                            </div>

                            <div className="form-group">
                                <input type="submit" value="confirm your details"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
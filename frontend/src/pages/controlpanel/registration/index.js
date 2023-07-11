import '../../../css/controlpanel/registration/index.css'
function Uploadregistration(){
    return(
        <div className='uploadregistration'>
            <div className='wrappuploadregistration'>
            <div className='uploadreg card'>
                <div className='form'>
                    <form>
                        <h3>upload registration information</h3>
                        <div className='form-group'>
                            <label>program</label>
                            <select>
                                <optiop>mcm</optiop>
                                <option>dcm</option>
                                <option>fam</option>
                                <option>rn</option>
                                <option>mdw</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label>select csv file</label>
                            <input type='file'></input>
                        </div>
                        <div className='form-group'>
                            <input type='submit' value='upload'></input>
                        </div>
                    </form>

                </div>
            </div>
            </div>
        </div>
    )
}
export default Uploadregistration
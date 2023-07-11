import '../../../css/studentpanel/documents/documents.css'
function Documents(){
    return(
        <div style={{backgroundColor:'white',width:'100%',height:'100%',position:'absolute'}}>
            <div className="documentsheader">
                <div className="headerseperator">
                    <div className="leftheader"><h1>uploaded documents</h1></div>
                    <div className="rightheader">
                        <form>
                            <div>
                                <input type="text" placeholder="search the document"></input>
                                <input type="submit" value="search"></input>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <div className="documents">
                <div className ="documentsdiv">
                <div>
                    <div className="card">
                      <div className="header">
                        <h1>importance of agricure <span>posted on</span><i>10 october 2018</i></h1>
                      </div>
                      <div className="body">
                        <p>hgtjdjhfdjhjerjeknffhoeujroejorjewioioeieiwjieriowjieiiewrioeruioewruioewuieouioeuieuiueiieieriurioewriouewiuiofdjhfuaohfijdhfioauoi
                            ufjdshfuoahrfourfiowehbfgvhjrfiluerybfhzuoxeyhosadyngsgfc</p>
                      </div>
                      <div className="footer">
                        <i>hjhjhu</i>
                      </div>
                    </div>
                 </div>
            </div>
         </div>
            
        </div>
    )
}

export default Documents
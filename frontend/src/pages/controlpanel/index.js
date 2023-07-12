import '../../css/controlpanel/index.css'
import logo from '../../images/logo.jpg'
import React, { useState } from 'react';
import {FaChevronRight,FaAlignJustify, FaTachometerAlt,FaUserCircle,FaPenSquare,FaRegCalendarAlt,FaRegQuestionCircle,FaRegFolder,FaRegFileAlt,FaWarehouse,FaCoins,FaCaretDown,FaBell, FaAdjust} from 'react-icons/fa';

function Controlpanelindex(){

    const [isControlpanelRegistrationOpen, setIsControlpanelRegistrationOpen] = useState(false);
    const [isControlpanelResultsOpen, setIsControlpanelResultsOpen] = useState(false);
    const [isControlpanelAccomodationOpen,setIsControlpanelAccomodationOpen] = useState(false)
    const [isControlpanelUsersOpen,setIsControlpanelUsersOpen] = useState(false)
    const [isControlpanelFinanciesOpen, setIsControlpanelFinanciesOpen] = useState(false);
    const [isControlpanelDocumentsOpen, setIsControlpanelDocumentsOpen] = useState(false);
    const [isControlpanelEventsOpen,setIsControlpanelEventsOpen] = useState(false)


    const [isControlpanelViewaccomodationOpen,setIsControlpanelViewaccomodationOpen] = useState(false)
    const [isControlpanelDeleteaccomodationOpen,setIsControlpanelDeleteaccomodationOpen] = useState(false)
  
  
    const toggleContropanelRegistrationMenu = () => {
      setIsControlpanelRegistrationOpen(!isControlpanelRegistrationOpen);
    };
  
    const toggleControlpanelResultsMenu = () => {
      setIsControlpanelResultsOpen(!isControlpanelResultsOpen);
    };
  
    const toggleControlpanelAccomodationMenu = () => {
      setIsControlpanelAccomodationOpen(!isControlpanelAccomodationOpen)
    }
  
    const toggleControlpanelUsersMenu = () => {
      setIsControlpanelUsersOpen(!isControlpanelUsersOpen)
    }

    const toggleControlpanelDocumentsMenu = () => {
        setIsControlpanelDocumentsOpen(!isControlpanelDocumentsOpen);
      };
    
      const toggleControlpanelEventsMenu = () => {
        setIsControlpanelEventsOpen(!isControlpanelEventsOpen);
      };

      const toggleControlpanelFinancialsMenu = () => {
        setIsControlpanelFinanciesOpen(!isControlpanelFinanciesOpen);
      };
    


      const toggleControlpanelViewaccomodationMenu = () => {
        setIsControlpanelViewaccomodationOpen(!isControlpanelViewaccomodationOpen)
      }
    
      const toggleControlpanelDeleteaccomodationMenu = () => {
        setIsControlpanelDeleteaccomodationOpen(!isControlpanelDeleteaccomodationOpen)
      }
  

    return(
        <div className="controlpanel">
            <div className="controlpanelflex">
                <div className="leftdiv">
                    <div className="controlpanelmenu">
                        <ul>
                            <li className='controlpaneldashboard'>dashboard</li>
                            <li onClick={toggleControlpanelUsersMenu}>users <span><FaChevronRight></FaChevronRight></span></li>
                            { isControlpanelUsersOpen &&(
                                <ul className='dropdown users'>
                                    <li>add user</li>
                                    <li>view users</li>
                                </ul>
                            )}
                        
                            <li onClick={toggleContropanelRegistrationMenu}>registration <span><FaChevronRight></FaChevronRight></span></li>
                            { isControlpanelRegistrationOpen &&(
                                <ul className='dropdown registtration'>
                                    <li>upload</li>
                                    <li>view students</li>
                                </ul>
                            )}
                            <li onClick={toggleControlpanelFinancialsMenu}>finances <span><FaChevronRight></FaChevronRight></span></li>
                            {isControlpanelFinanciesOpen &&(
                                <ul className='dropdown financials'>
                                    <li>add financials</li>
                                    <li>view financials</li>
                                    <li>delete financials</li>
                                </ul>
                            )}
                            <li onClick={toggleControlpanelResultsMenu}>results <span><FaChevronRight></FaChevronRight></span></li>
                            {isControlpanelResultsOpen &&(
                                <ul className='dropdown results'>
                                    <li>upload</li>
                                    <li>view results</li>
                                    <li>delete results</li>
                                </ul>
                            )}
                            <li onClick={toggleControlpanelAccomodationMenu}>accomodation <span><FaChevronRight></FaChevronRight></span></li>
                            {isControlpanelAccomodationOpen &&(
                                <lu className='dropdown accommodation'>
                                    <li onClick={toggleControlpanelViewaccomodationMenu}>view application <span><FaChevronRight></FaChevronRight></span></li>

                                    {isControlpanelViewaccomodationOpen &&(
                                        <ul className='dropdown viewaccomodation'>
                                            <li>year 1</li>
                                            <li>year 2</li>
                                            <li>year 3</li>
                                            <li>year 3</li>
                                        </ul>
                                    )}
                                    
                                    <li>upload allocation</li>
                                    <li onClick={toggleControlpanelDeleteaccomodationMenu}>delete <span><FaChevronRight></FaChevronRight></span></li>
                                    {isControlpanelDeleteaccomodationOpen &&(
                                        <ul className='dropdown deleteaccomodation' hidden>
                                            <li>applications</li>
                                            <li>allocation</li>
                                        </ul>
                                    )}

                                </lu>
                            )}
                            <li onClick={toggleControlpanelDocumentsMenu}>documents <span><FaChevronRight></FaChevronRight></span></li>
                            {isControlpanelDocumentsOpen &&(
                                <ul className='dropdown documents'>
                                    <li>upload</li>
                                    <li>view</li>
                                    <li>delete</li>
                                </ul>
                            )}
                            <li onClick={toggleControlpanelEventsMenu}>events <span><FaChevronRight></FaChevronRight></span></li>
                            {isControlpanelEventsOpen &&(
                                <ul className='dropdown events'>
                                    <li>add event</li>
                                    <li>view events</li>
                                    <li>delete events</li>
                                </ul>
                            )}
                            <li>manual</li>
                            <li>logout</li>
                        </ul>
                    </div>
                </div>
                <div className="controlpanelrightdiv">
                    <div className='rightdivheader'>
                        <header>
                            <div className='upperheader'>
                                <div className='left'>
                                    <span>
                                        <FaAlignJustify></FaAlignJustify>
                                    </span>
                                </div>
                                <div className='right'>
                                    <img src={logo}></img>
                                </div>
                            </div>
                            <div className='lowerheader'>
                                <h3><span style={{textTransform:'uppercase'}}>ecohs</span> portal admin panel</h3>
                            </div>
                        </header>
                    </div>
                    

                    <div className='conntropanelcontent'>
                        <div className='wrapcontents'>
                            <div className='wrappedcontents'>
                                <div className='logindetalis'>
                                    <table cellSpacing={0}>
                                        <tr>
                                            <th>full name</th>
                                            <th>username</th>
                                            <th>password</th>
                                            <th>login time</th>
                                        </tr>
                                        <tr>
                                            <td>lonely chisale</td>
                                            <td>lonechi</td>
                                            <td>1Blantyre</td>
                                            <td>2pm</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                                 
                   
                </div>
            </div>
        </div>
    )
}

export default Controlpanelindex
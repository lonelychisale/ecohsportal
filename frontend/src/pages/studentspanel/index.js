import  '../../css/studentpanel/index.css'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {FaKey,FaLock,FaAlignJustify, FaTachometerAlt,FaUserCircle,FaPenSquare,FaRegCalendarAlt,FaRegQuestionCircle,FaRegFolder,FaRegFileAlt,FaWarehouse,FaCoins,FaCaretDown,FaBell, FaAdjust} from 'react-icons/fa';
import Logo from '../../images/logo.jpg'


function Studentdashboard(){

  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const [isAccomodationOpen,setIsAccomodationOpen] = useState(false)
  const [isHelpOpen,setIsHelpOpen] = useState(false)

  const toggleRegistrationMenu = () => {
    setIsRegistrationOpen(!isRegistrationOpen);
  };

  const toggleResultsMenu = () => {
    setIsResultsOpen(!isResultsOpen);
  };

  const toggleAccomodationMenu = () => {
    setIsAccomodationOpen(!isAccomodationOpen)
  }

  const toggleHelpMenu = () => {
    setIsHelpOpen(!isHelpOpen)
  }

  return (
    <div className='studentpanel'>
      <div className='studentpaneldivsflex'>
        <div className='leftdiv'>
          <div className='header'>
            <span><FaUserCircle></FaUserCircle></span>
            <h1>lonely chisale</h1>
          </div>
          <div className='menu'>
            <div>
              <ul>
                <li className='dashboardlist'><span><FaTachometerAlt></FaTachometerAlt></span>dashboard</li>
                <li onClick={toggleRegistrationMenu}><span><FaPenSquare></FaPenSquare></span>registration</li>
                   {isRegistrationOpen &&(
                  <ul className='dropdownmenu'>
                    <li>register</li>
                    <li> status</li>
                  </ul>
                )}
              <li><span><FaCoins></FaCoins></span>financials</li>
              <li onClick={toggleResultsMenu}><span><FaRegFolder></FaRegFolder></span>results</li>
              { isResultsOpen &&(
                <ul className='dropdownmenu'>
                <li>overal results</li>
                <li>sup courses</li>
                </ul>
              )}
              <li onClick={toggleAccomodationMenu}><span><FaWarehouse></FaWarehouse></span>accomodation</li>
              {isAccomodationOpen &&(
                <ul className='dropdownmenu'>
                  <li>book room</li>
                  <li>allocation</li>
                </ul>
              )}
              <li><span><FaRegFileAlt></FaRegFileAlt></span>e-resources</li>
              <li><span><FaKey></FaKey></span>security</li>
              <li><span><FaRegCalendarAlt></FaRegCalendarAlt></span>events</li>
              <li onClick={toggleHelpMenu}><span><FaRegQuestionCircle></FaRegQuestionCircle></span>help</li>
              {isHelpOpen &&(
                <ul className='dropdownmenu'>
                  <li>manual</li>
                  <li>send query</li>
                </ul>
              )}
              <li><span><FaLock></FaLock></span>logout</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='rightdiv'>
          <div className='rightdivheader'>
            <div className='flexingrightdivheader'>
              <div className='menucontroller'>
                <span><FaAlignJustify></FaAlignJustify></span>
              </div>
              <div className='rightdivheadertopic'>
                <h1>ecohs  portal</h1>
              </div>
            </div>
          </div>
          <div className='justifyingcontent'>
            <div className='wrappedcontent'>
              <div className='flexingdivs'>
                <div>
                  <h3>financials</h3>
                  <i>20,100000</i>
                </div>
                <div>
                  <h3>registration status</h3>
                  <i>you are registered</i>
                </div>
                <div>
                  <h3>documents</h3>
                  <i>20</i>
                </div>
                
              </div>

              <div className='resultdiv'>
                <div className='resultscard'>
                  <div className='resultscardheader'>
                    <h3>my results</h3>
                  </div>
                  <div className='resultscardbody'>
                    <i>view your results</i>
                  </div>
                  <div className='resultscardfooter'></div>
                </div>
              </div>

              <div className='accomodationdiv'>
                <div className='accomodationcard'>
                  <table cellSpacing='0px'>
                  
                      <h3 className='heading'>room allocation</h3>
                    
                    <tr>
                      <th>registration number</th>
                      <th>full name</th>
                      <th>year of study</th>
                      <th>hostel name</th>
                      <th>room number</th>
                    </tr>
                    <tr>
                      <td>cis/003/18</td>
                      <td>lonely chisale</td>
                      <td>year four</td>
                      <td>hall 4</td>
                      <td>29</td>
                    </tr>
                  </table>
                </div>
              </div>

            <div className='iframesdiv'>

              <div className='financial iframe hidden'>
                <div className='financialiframe card'>
                  <div className='financialiframe cardheader'>
                    <h3>financial report</h3>
                  </div>
                  <div className='financiliframe cardbody'>
                    <iframe src='/financials'></iframe>
                  </div>
                  <div className='financialiframe cardfooter'></div>
                </div>
              </div>

              <div className='results iframe hidden'>
                <div className='resultsiframe card'>
                  <div className='resultsiframe cardheader'>
                    <h3>my results</h3>
                  </div>
                  <div className='resultsiframe cardbody'>
                    <i>view your results</i>
                    <iframe src='/results'></iframe>
                  </div>
                  <div className='resultsiframe cardfooter'></div>
                </div>
              </div>

              <div className='sup iframe hidden'>
                <div className='supiframe card'>
                  <div className='supiframe cardheader'>
                    <h3>supplimentary courses</h3>
                  </div>
                  <div className='supiframe cardbody'>
                    <i>view sup courses</i>
                    <iframe src='/supcoarses'></iframe>
                  </div>
                  <div className='supiframe cardfooter'></div>
                </div>
              </div>

              <div className='bookroom iframe hidden'>
                <div className='bookroomiframe card'>
                  <div className='bookroomiframe cardheader'>
                    <h3>book a room using the form</h3>
                  </div>
                  <div className='bookroomifrma cardbody'>
                    <iframe src='/accomodationregistration'></iframe>
                  </div>
                  <div className='bookroomiframe cardfooter'></div>
                </div>
              </div>

              <div className='allocation iframe hidden'>
                <div className='allocationiframe card'>
                  <div className='allocationiframe cardheader'>
                    <h3>allocated room</h3>
                  </div>
                  <div className='allocationiframe cardbody'>
                    <iframe src='/accomodationallocation'></iframe>
                  </div>
                  <div className='allocationiframe cardfooter'></div>
                </div>
              </div>

              <div className='events iframe hidden'>
                <div className='eventsiframe card'>
                  <div className='eventsiframe cardheader'>
                    <h3>recent events</h3>
                  </div>
                  <div className='eventsiframe cardbody'>
                    <iframe src='/calenderevents'></iframe>
                  </div>
                  <div className='eventsiframe cardfooter'></div>
                </div>
              </div>

              <div className='contact iframe hidden'>
                <div className='contactiframe card'>
                  <div className='contactiframe cardheader'>
                    <h3>send your query</h3>
                  </div>
                  <div className='contactiframe cardbody'>
                    <iframe className='/contacthelp'></iframe>
                  </div>
                  <div className='contactiframe cardfooter'></div>
                </div>
              </div>

            </div>

            
            </div>
          </div>
          <div className="footer">
              <i>2023@lonelychisaledesign</i>
            </div>
        </div>
      </div>

    </div>
  );
}

export default Studentdashboard;
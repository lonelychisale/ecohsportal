import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/login.js'
import Studentdashboard from './pages/studentspanel/index.js';
import Controlpanelindex from './pages/controlpanel/index.js'
import Register from './pages/studentspanel/registration/register.js'
import Documents  from './pages/studentspanel/documents/index.js';
import RegisterAccomodation from './pages/studentspanel/accomodation/register.js';
import AccomodationAllocation from './pages/studentspanel/accomodation/allocation.js';
import Events from './pages/studentspanel/events/events.js';
import Resetpassword from './reset.js'
import Financial from './pages/studentspanel/finance/index.js';
import Results from './pages/studentspanel/results/results.js';
import Supplimentarycourses from './pages/studentspanel/results/sup.js';
import Help from './pages/studentspanel/help/help.js';
import Users from './pages/controlpanel/users/index.js';
import Viewusers from './pages/controlpanel/users/view.js';
import Uploadregistration from './pages/controlpanel/registration/index.js';
import Viewrgistration from './pages/controlpanel/registration/view.js';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Login />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/studentpanel' element={<Studentdashboard />}></Route>
      <Route path='/adminpanel' element={<Controlpanelindex />}></Route>
      <Route path='/resetpassword' element={<Resetpassword />}></Route>
      <Route path='/registration' element={<Register />}></Route>
      <Route path='/documents' element={<Documents />}></Route>
      <Route path='/accomodationregistration' element={<RegisterAccomodation />}></Route>
      <Route path='/accomodationallocation' element={<AccomodationAllocation />}></Route>
      <Route path='/calenderevents' element={<Events />}></Route>
      <Route path='/financials' element={<Financial />}></Route>
      <Route path='/results' element={<Results />}></Route>
      <Route path='/supcoarses' element={<Supplimentarycourses />}></Route>
      <Route path='/contacthelp' element={<Help />}></Route>
      <Route path='/adduser' element={<Users />}></Route>
      <Route path='/viewusers' element={<Viewusers />}></Route>
      <Route path='/uploadreg' element={<Uploadregistration />}></Route>
      <Route path='/viewreg' element={<Viewrgistration />}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;

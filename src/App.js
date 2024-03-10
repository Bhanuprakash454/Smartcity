import logo from './logo.svg';
import './App.css';
import Login from './Mycomponent/Login';
import Registration from './Mycomponent/Registration';
import Navigation from './Mycomponent/Navigation';
import Tourism from './Mycomponent/Tourism';
import Entertainment from './Mycomponent/Entertainment';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar } from '@material-ui/core';
import Hospitals from './Mycomponent/Hospitals';
import EducationInstitutions from './Mycomponent/EducationInstitutions';
import Helpline from './Mycomponent/Helpline';



function App() {
  return(
    <div className="App">

        <div className="App-header">
          
          <p>Smart City Project</p>
        </div>

        <div className="App-body">
          <Container>
            <Navigation />
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/reg' element={<Registration />} />
                <Route path='/tou' element={<Tourism />} />
                <Route path='/ent' element={<Entertainment />} />
                <Route path='/edu' element={<EducationInstitutions />} />
                <Route path='/hos' element={<Hospitals/>} />
                <Route path='/hel' element={<Helpline/>} />
                
              </Routes>
            </BrowserRouter>
          </Container>
        </div>
      
    </div>
  );
}

export default App;

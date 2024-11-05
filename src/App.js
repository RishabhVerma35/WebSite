import React from 'react';
import Navbar from './Components/navbar.jsx';
import SignMe from './Components/SignComponent.jsx';
import MainHead from './Components/mainHead.jsx';
import BackedUp from './Components/BackedUp.jsx';
import Risk from './Components/RiskSection.jsx';
import BootemPart from './Components/BottemPart.jsx';
import ContactUs from './Components/ContactUs.jsx';

function App() {
    return (

        <div class="container-fluid  text-center mt-4">
            <div class="row  mb-5">
                <Navbar />
            </div>
            <div class="row  mb-5">
                <MainHead />
            </div>
            <div class="row  mb-5">
                <BackedUp />
            </div>
            <div class="row  mb-5">
                <Risk />
            </div>
            <div class="row  mb-5">
                <ContactUs/>
            </div>
           
        </div>

    );

}

export default App;


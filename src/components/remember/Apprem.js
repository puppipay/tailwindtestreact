import React from 'react'
import { Routes,  Route  } from "react-router-dom";
import Userremember from './Userremember';
import Dashboard from './Dashboard';
import Interact from './Interact';
import Friend from './Friend';

function Apprem() {
  return (
    <>
    
<Routes>
<Route path="/userremember"   element={<Userremember /> }  />
<Route path="/dashboard"   element={<Dashboard  /> }  />
<Route path="/interact"   element={<Interact  /> }  />
<Route path="/friend"   element={<Friend  /> }  />
</Routes>
    </>
  )
}

export default Apprem
import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from './layout/Root';
import LandingPage from './pages/LandingPage';
import theme from './theme';
import AboutUs from './pages/aboutUs';
import ContactUs from './pages/contactUs';
import Alumni from './pages/Alumni';
import Journals from './pages/Journals';
import Programmes from './pages/Programmes';
import ProgramDetails from './pages/Programmes/ProgramDetails';
import Portal from './pages/Portal';


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <Root/> }>
        <Route index element={ <LandingPage /> }/>       
        <Route path='/about' element={ <AboutUs /> }/> 
        <Route path='/contact' element={ <ContactUs /> }/> 
        <Route path='/alumni' element={ <Alumni /> }/> 
        <Route path='/journals' element={ <Journals /> }/> 
        <Route path="/programs" element={<Programmes />} />
        <Route path="/programs/:id" element={<ProgramDetails />} />
        <Route path="/portal" element={<Portal />} />

      </Route>
    )
  )
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}/>
    </ChakraProvider>
  )
}

export default App

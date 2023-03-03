import React, { useState } from 'react'
import NavTabs from './Navtabs';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Footer from './Footer';

import Home from './Home'
import About from './About';

export default function Display() {
    const [currentPage, setCurrentPage] = useState('Home');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'home') {
        return <Home />
      }
      if (currentPage === 'about') {
        return <About />
      }
      if (currentPage === 'portfolio') {
        return <Portfolio />
      }
      if (currentPage === 'resume') {
        return <Resume />
      }
     
      return <Home />
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </div>
    );
  }
  
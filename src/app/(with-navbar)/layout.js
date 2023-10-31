import Container from '@/Components/Container/Container';
import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar';
import React from 'react';

const layout = ({ children }) => {
     return (
          <div>


               <Navbar></Navbar>

               <div>
                    {children}
               </div>


               <Footer></Footer>



          </div>
     );
};

export default layout;

import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar';
import Student from '@/Components/Student/Student';
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
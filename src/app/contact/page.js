import React from 'react';
import ContactSection from '../../Components/Contact/index'
import { getAllUser } from '@/services/users';


const Contact = async () => {
     const data = await getAllUser();
 return (
          <div>
               <ContactSection></ContactSection>
          </div>
     );
};

export default Contact;
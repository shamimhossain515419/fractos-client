import React from 'react';
import ContactSection from '../../../Components/Contact/index'
import Container from '@/Components/Container/Container';
import Student from '@/Components/Student/Student';


export const metadata = {
     title: 'Contact-fractos',
    
  }
   
const Contact = async () => {

  return (
          <div>

               <Container>
                    <ContactSection></ContactSection>
               </Container>
          </div>
     );
};

export default Contact;
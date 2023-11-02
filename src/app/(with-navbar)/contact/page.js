import React from 'react';
import ContactSection from '../../../Components/Contact/index'
import Container from '@/Components/Container/Container';


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
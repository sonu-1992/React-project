import React from 'react';
import ContactInput from './ContactInput';
import ContactLogin from './ContactLogin';


function Contact(){

    return(
        <div>
            <h1 className='ContactHeading'>Contact Us!!</h1>
            <ContactInput />
            <ContactLogin />

            <table className='Box3' >

            <tr>
                <td>M/S. GAYATRI PAINTS,</td>
                <td>Mr. Anil Parikh</td>
                
            </tr>

            <tr>
                <td>Fatepura Road,</td>
                <td>Contact no: +91-9824448143</td>
            </tr>

            <tr>
                <td>Behind NagnathMahadev,</td>
            </tr>

            <tr>
                <td>UTTARSANDA-387370</td>
                <td>Mr. Uday Prajapati</td>
            </tr>

            <tr>
                <td>TA:NADIAD, Kheda, GUJARAT, INDIA</td>
                <td>Contact no: +91-9824984815</td>
                
            </tr>

            <tr>
                <td>Contact no: +91-268-2588341</td>
                
            </tr>
        </table>
       

            <footer>
                <p>Copyright ⓒ 2012 <span>Gayatri Paints</span></p>
                <p>Designed by <span>Sonu Desai</span></p>
            </footer>

        </div>
    );
}

export default Contact;
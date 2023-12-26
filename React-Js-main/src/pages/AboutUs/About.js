import React from 'react';
import AboutApp from './AboutApp';

function About(){

    return(
        <div>
        <h1 className='AboutHeading'>About Us!!</h1>
        <AboutApp />


        

        <table className='Box2' >

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

        <footer className='AboutFooter'>
                <p>Copyright ⓒ 2012 <span>Gayatri Paints</span></p>
                <p>Designed by <span>Sonu Desai</span></p>
        </footer>
        </div>
    );
}

export default About;
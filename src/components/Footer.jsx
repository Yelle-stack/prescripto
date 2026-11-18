import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div>

       {/* ------- Left Section ------- */}
       <div>
        <img src={assets.logo} alt="" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, veritatis eveniet totam sapiente, molestias id unde distinctio nobis voluptates nihil consequatur, tempora ab aliquid itaque.</p>
       </div>
        {/* ------- Center Section ------- */}
        <div>
          <p>COMPANY</p>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

         {/* ------- Right Section ------- */}
         <div>
           <p>GET IN TOUCH</p>
           <ul>
            <li>+1-212-456-7890</li>
            <li>jelenazekovic@gmail.com</li>
           </ul>
         </div>
      </div>
      {/* ------- Copyright Text ------ */}
      <div>
         <hr />
         <p>Copyright 2026@ Prescripto - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer

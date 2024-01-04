// import React from 'react'
import './Handles.css'
import { SiLeetcode } from "react-icons/si";
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';

const Handles = () => {
  return (
    <section className='socials'>
      <a href="https://www.linkedin.com/in/rahul-prasad-b17208204/" target='_blank' rel="noopener noreferrer"><AiFillLinkedin className='icon' /></a>
      <a href="https://leetcode.com/rahulpra045/" target='_blank' rel="noopener noreferrer"><SiLeetcode className='icon' /></a>
      <a href="https://github.com/rahulpra045" target='_blank' rel="noopener noreferrer"><FaGithubSquare className='icon' />
      </a>


    </section>
  )
}

export default Handles

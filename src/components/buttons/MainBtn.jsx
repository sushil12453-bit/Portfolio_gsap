import React from 'react'
import { Link } from 'react-router-dom';
import { FaLocationArrow } from "react-icons/fa";

const MainBtn = ({ text, link = '', custome = '', forResume = false }) => {

  const downloadResume = () => {
    if (forResume) {
      const a = document.createElement('a');
      a.href = '/doc/Sushil-Kumar-FullStack-Developer-Resume.pdf';
      a.download = 'Sushil-Kumar-FullStack-Developer-Resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  if (forResume) {
    return (
      <button
        onClick={downloadResume}
        className={`main-btn flex gap-3 items-center justify-center ${custome}`}
      >
        {text}
        <FaLocationArrow className='text-md rotate-6' />
      </button>
    )
  }

  return (
    <Link to={link}>
      <button className={`main-btn flex gap-3 items-center justify-center ${custome}`}>
        {text}
        <FaLocationArrow className='text-md rotate-6' />
      </button>
    </Link>
  )
}

export default MainBtn;
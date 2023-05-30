import React from 'react';
import logo from '../../../public/img/logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className='bg-blue-900 text-white py-5 px-10 flex items-center justify-between'>
      <div className='flex items-center'>
        <a href='https://ucollege-meb.vercel.app/' className='mr-4'>
          <img src="/img/facebook.png" alt='Facebook' />
        </a>
        <a href='https://ucollege-meb.vercel.app/' className='mr-4'>
          <img src="/img/twitter.png" alt='twitter' />
        </a>
        <a href='https://ucollege-meb.vercel.app/'>
          <img src="/img/instagram.png" alt='instagram' />
        </a>
      </div>
      <div className='flex items-center'>
        <img src={logo} alt="org" className='w-16 h-auto mr-4' />
        <strong>SpeakUp</strong>
      </div>
    </footer>
  );
};

export default Footer;

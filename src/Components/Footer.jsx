import Image from 'next/image';
import navImage from '../../public/image/753647277_122094143439416815_4054143932226552697_n.jpg'
import React from 'react';
import { LogoFacebook } from '@gravity-ui/icons';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

const Footer = () => {
    return (
      <div className='m-10 bg-[#7B2024] p-10 space-y-3'>
          <div className=' flex justify-between  gap-4 sm:flex-row md:flex-row mb-10'>
            <div className=' flex items-center gap-4 p-0'>
                <div>
                    <Image src={navImage} alt='navimg' width={50} height={50} className='rounded-full'></Image>
                </div>
                <div>
                    <h2 className='font-bold text-2xl text-gray-300'>পূর্ণ স্পাইস স্টোর</h2>
                    <p className='text-yellow-100'>ঐতিহ্যের আসল স্বাদ</p>
                </div>
            </div>
            <div>
                <div className='text-gray-300'>
                    <h2>Social Links :</h2>
                    <div className='flex gap-3'>
                        <h4><FaFacebookF /></h4>
                        <h4><IoLogoWhatsapp /></h4>
                        <h4><FaTwitter /></h4>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
        <hr />
        <div className='flex justify-between sm:gap-5 text-gray-300 mt-10'>
           <p>@2026 purno spice store.All rights reserved</p> 
           <ul className='flex justify-between text-center gap-4'>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies</li>
           </ul>
        </div>
      </div>
    );
};

export default Footer;
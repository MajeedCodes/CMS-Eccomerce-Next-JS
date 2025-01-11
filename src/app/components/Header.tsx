'use client'

import { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {

    setIsMenuOpen(!isMenuOpen);

  };

  return (
    <header className='flex bg-white border-b py-3 sm:px-6 px-4  min-h-[75px] tracking-wide relative z-50'>

      <div className='flex max-w-screen-xl mx-auto w-full'>

        <div className='flex flex-wrap items-center lg:gap-y-2 gap-4 w-full'>

          <span className="max-sm:hidden">

            <Link href={'/'}>

              <img src="https://www.pikpng.com/pngl/b/222-2222562_walmart-ecommerce-logo-save-money-live-better-transparent.png" alt="logo" className='w-40' />
            </Link>
          </span>

          <span className="hidden max-sm:block">

            <img src="https://www.pikpng.com/pngl/b/222-2222562_walmart-ecommerce-logo-save-money-live-better-transparent.png" alt="logo" className='w-[120px]' />
          </span>

          <AnimatePresence>

            {
            isMenuOpen && (
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className='fixed inset-0 bg-white z-50 lg:hidden'
              >
                <div className='p-4'>

                  <button onClick={toggleMenu} className='absolute top-4 right-4'>

                    <FaTimes className="w-6 h-6" />

                  </button>
                  
                  <ul className='mt-8 space-y-4'>

                    <li>
                      <Link href="/" className='text-[#007bff] hover:text-[#004bff] text-lg font-semibold'>
                        New
                      </Link>
                    </li>

                    <li>
                      <Link href="/" className='text-[#333] hover:text-[#007bff] text-lg font-semibold'>
                        Men
                      </Link>
                    </li>

                    <li>
                      <Link href="/" className='text-[#333] hover:text-[#007bff] text-lg font-semibold'>
                        Women
                      </Link>
                    </li>

                    <li>
                      <Link href="/" className='text-[#333] hover:text-[#007bff] text-lg font-semibold'>
                        Kids
                      </Link>
                    </li>

                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className='hidden lg:flex lg:ml-6 space-x-4'>
            <Link href="/" className='text-[#007bff] hover:text-[#004bff] text-sm font-semibold'>
              New
            </Link>
            <Link href="/" className='text-[#333] hover:text-[#007bff] text-sm font-semibold'>
              Men
            </Link>
            <Link href="/" className='text-[#333] hover:text-[#007bff] text-sm font-semibold'>
              Women
            </Link>
            <Link href="/" className='text-[#333] hover:text-[#007bff] text-sm font-semibold'>
              Kids
            </Link>
          </div>

          <div className="flex items-center gap-x-6 gap-y-4 ml-auto">
            <div className='flex bg-gray-50 border focus-within:bg-transparent focus-within:border-gray-400 rounded-full px-4 py-2.5 overflow-hidden max-w-52 max-lg:hidden'>
              <input type='text' placeholder='Search something...' className='w-full text-sm bg-transparent outline-none pr-2' />
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <FaSearch className="cursor-pointer fill-gray-600" />
              </motion.div>
            </div>

            <div className='flex items-center sm:space-x-8 space-x-6'>
              <motion.div
                className="flex flex-col items-center justify-center gap-0.5 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="relative">
                  <FaHeart className="cursor-pointer fill-[#606ef3] inline w-5 h-5" />
                  
                </div>
               
              </motion.div>

              <motion.div
                className="flex flex-col items-center justify-center gap-0.5 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="relative">
                  <FaShoppingCart className="cursor-pointer fill-[#606ef3] inline w-5 h-5" />
                 
                </div>
               
              </motion.div>

              <motion.button
                className='max-lg:hidden px-4 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign In
              </motion.button>

              <motion.button
                onClick={toggleMenu}
                className='lg:hidden'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaBars className="w-5 h-7" fill="#606ef3" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


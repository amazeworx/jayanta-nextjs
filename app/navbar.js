import Image from 'next/image';

export default function Header() {
  return (
    <div className='flex px-4 py-4 bg-black sticky top-0 z-50 justify-between'>
      <div className=''>
        <a href='/' className='text-4xl font-bold'>
          <Image
            src='/images/logo-jayanta.svg'
            alt='Jayanta'
            className='h-12 lg:h-14 w-auto'
            width={724}
            height={142}
            priority
          />
        </a>
      </div>
      <div className='flex gap-x-3 text-xl'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost text-lg normal-case'>
            Services
            <svg
              class='fill-current ml-2'
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
            >
              <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z'></path>
            </svg>
          </label>
          <div
            tabIndex={0}
            className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-auto'
          >
            <ul>
              <li>
                <a
                  href='/services/penetration-testing'
                  className='whitespace-nowrap'
                >
                  Penetration Testing
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a href='#' className='btn btn-ghost text-lg normal-case'>
          Products
        </a>
        <a href='#' className='btn btn-ghost text-lg normal-case'>
          Compliance
        </a>
        <a href='#' className='btn btn-ghost text-lg normal-case'>
          About
        </a>
      </div>
      <div className=''>
        <a
          href='#'
          className='inline-block text-white bg-gradient-to-r from-red-600 to-blue-900 hover:from-red-600 hover:to-blue-500 focus:ring-4 focus:ring-indigo-700 font-medium rounded-lg text-lg px-8 py-2.5 focus:outline-none transition duration-300'
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

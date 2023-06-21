import Image from 'next/image';

export default function Footer() {
  return (
    <section className='text-white pb-8 pt-8 lg:pt-20 lg:pb-20 2xl:pb-24 bg-[#091D42]'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row lg:items-center'>
          <div className='w-full order-2 lg:order-1 lg:w-1/2 relative z-10 -mt-10'>
            <h3 className='text-4xl lg:text-5xl font-bold mt-8 mb-8 text-center lg:text-left'>
              Hubungi Kami
            </h3>
            <p className='text-lg text-center lg:text-left mb-6'>
              Siap untuk menjadikan perusahaan Anda lebih aman dari ancaman
              siber? <br />
              Hubungi kami hari ini! Tim kami akan dengan senang hati membantu
              Anda memilih layanan yang paling sesuai dengan kebutuhan keamanan
              siber perusahaan Anda.
            </p>
            <div className='text-center lg:text-left'>
              <a
                href='https://wa.me/628161326163'
                target='_blank'
                className='inline-block text-white bg-gradient-to-r from-red-600 to-blue-900 hover:from-red-600 hover:to-blue-500 focus:ring-4 focus:ring-indigo-700 font-medium rounded-lg text-xl px-10 py-4 mr-2 mb-2 focus:outline-none transition duration-300'
              >
                Let&lsquo;s Discuss
              </a>
            </div>
            <div className='mt-32 lg:mt-28 2xl:mt-40 text-center lg:text-left'>
              <Image
                src='/images/logo-jayanta.svg'
                alt='Jayanta'
                className='h-12 lg:h-16 w-auto inline-block'
                width={800}
                height={254}
                priority
              />
              <div className='text-white mt-4 text-lg'>
                <strong>PT. Mitra Konsultansi Indonesia</strong>
                <br />
                TCC Batavia Tower One, Level 6<br />
                Jl K.H Mas Mansyur Kav 126
                <br />
                Kota Jakarta Pusat – 10220
              </div>
            </div>
          </div>
          <div className='w-full order-1 lg:order-2 lg:w-1/2 lg:text-right relative z-0'>
            <div className='-mx-16 lg:-mx-0'>
              <Image
                src='/images/shield.png'
                alt='Security'
                className='-ml-20 lg:ml-auto lg:-mr-12 lg:-mt-24'
                width={721}
                height={188}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';

export default function Home() {
  const services = [
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Penetration Testing',
      description:
        'Proses evaluasi keamanan sistem TI dengan cara meniru serangan dari peretas. Tujuannya adalah untuk mengidentifikasi dan memperbaiki kelemahan keamanan sebelum peretas sebenarnya mengeksploitasi celah tersebut.',
      link: '',
    },
    {
      icon: '/images/icons/cyber-threat-intelligence.png',
      title: 'Cyber Threat Intelligence (CIT)',
      description:
        'Proses pengumpulan, analisis, dan berbagi informasi tentang ancaman siber untuk membantu organisasi dalam mengidentifikasi, memprioritaskan, dan merespon ancaman keamanan yang dihadapi.',
      link: '',
    },
    {
      icon: '/images/icons/vulnerability-assessment.png',
      title: 'Vulnerability Assessment',
      description:
        'Proses sistematis untuk mengidentifikasi, mengklasifikasikan, dan memprioritaskan kelemahan keamanan dalam sistem komputer, jaringan, dan aplikasi. Tujuannya adalah untuk membantu organisasi dalam mengurangi risiko yang dihadapi akibat celah keamanan tersebut.',
      link: '',
    },
    {
      icon: '/images/icons/incident-report-handling.png',
      title: 'Incident Response Handling',
      description:
        'Serangkaian langkah yang diambil oleh tim keamanan siber untuk mengidentifikasi, mengatasi, dan memulihkan dari insiden keamanan siber. Tujuannya adalah untuk meminimalkan dampak insiden pada bisnis dan mencegah insiden serupa di masa depan.',
      link: '',
    },
    {
      icon: '/images/icons/digital-forensics.png',
      title: 'Digital Forensics',
      description:
        'Proses pengumpulan, analisis, dan penyajian bukti digital yang berkaitan dengan kejahatan siber atau pelanggaran kebijakan. Tujuannya adalah untuk membantu dalam investigasi kejahatan siber dan memastikan bahwa bukti yang dikumpulkan dapat digunakan dalam proses hukum.',
      link: '',
    },
    {
      icon: '/images/icons/litigation-support.png',
      title: 'Litigation Support',
      description:
        'Layanan yang membantu perusahaan dan pengacara dalam menghadapi tuntutan hukum yang berkaitan dengan keamanan siber. Layanan ini mencakup penyelidikan, analisis, dan presentasi bukti untuk membantu pengacara dalam membangun kasus yang kuat.',
      link: '',
    },
    {
      icon: '/images/icons/compliance-advisory.png',
      title: 'Compliance Advisory',
      description:
        'Layanan konsultasi yang membantu organisasi memahami dan memenuhi persyaratan kepatuhan keamanan siber yang relevan dengan industri mereka. Layanan ini mencakup pengkajian kepatuhan, pengembangan kebijakan, dan dukungan dalam implementasi praktik keamanan terbaik.',
      link: '',
    },
    {
      icon: '/images/icons/darkweb-monitoring.png',
      title: 'Dark Web Monitoring',
      description:
        'Layanan yang memantau aktivitas di dark web untuk mengidentifikasi informasi sensitif atau data yang telah dicuri dan dijual di pasar gelap. Tujuannya adalah untuk memberikan peringatan dini tentang kemungkinan ancaman keamanan dan membantu perusahaan mengambil tindakan pencegahan.',
      link: '',
    },
    {
      icon: '/images/icons/security-operation-center.png',
      title: 'Security Operation Center (SOC)',
      description:
        'Pusat pengendalian yang didedikasikan untuk mengawasi, mengelola, dan melindungi infrastruktur TI dari ancaman keamanan siber. SOC menggunakan teknologi, proses, dan personel yang terlatih untuk mendeteksi, menganalisis, dan merespon insiden keamanan secara real-time.',
      link: '',
    },
  ];

  const products = [
    {
      icon: '/images/products/recordedfuture.svg',
      title: 'Recorded Future',
      description:
        'Platform Threat Intelligence yang membantu Anda mengidentifikasi, memahami, dan mengurangi ancaman siber secara real-time dengan informasi ancaman yang komprehensif dan relevan.',
      link: '',
    },
    {
      icon: '/images/products/cyberark.svg',
      title: 'CyberArk',
      description:
        'Solusi Privileged Access Management (PAM) untuk melindungi dan mengelola akses ke akun dengan hak istimewa, mencegah penyalahgunaan dan mengurangi risiko kebocoran data.',
      link: '',
    },
    {
      icon: '/images/products/sailpoint.svg',
      title: 'SailPoint',
      description:
        'Platform Identity and Access Management (IAM) yang memungkinkan perusahaan untuk mengelola akses pengguna, mengotomatisasi proses-proses terkait, dan memastikan kepatuhan terhadap kebijakan keamanan.',
      link: '',
    },
    {
      icon: '/images/products/logrythm.svg',
      title: 'LogRhythm',
      description:
        'Security Operation Center (SOC) yang menyediakan alat dan layanan untuk mendeteksi, menganalisis, dan merespon insiden keamanan secara real-time, melindungi organisasi Anda dari ancaman siber yang terus berkembang.',
      link: '',
    },
    {
      icon: '/images/products/appdome.svg',
      title: 'AppDome',
      description:
        'Platform Mobile DevSecOps yang memungkinkan integrasi keamanan, mobilitas, dan fungsi lainnya ke dalam aplikasi seluler tanpa perlu mengubah kode sumber.',
      link: '',
    },
  ];

  return (
    <>
      <section className='lg:h-screen -mt-20 bg-brand-bluedark text-white flex items-center'>
        <div className='container pt-6 lg:pt-16 pb-16'>
          <div className='flex flex-col lg:flex-row lg:items-center'>
            <div className='w-full order-2 lg:order-1 lg:w-1/2 relative z-0'>
              <div className='-mx-24 -mt-16 lg:mt-0 lg:-mr-0 lg:-ml-16 xl:-ml-24 xl:pr-20'>
                <Image
                  src='/images/cyber-security.png'
                  alt='Cyber Security'
                  className=''
                  width={740}
                  height={740}
                  priority
                />
              </div>
            </div>
            <div className='w-full order-1 lg:order-2 lg:w-1/2 relative z-10'>
              <div className='2xl:max-w-[680px]'>
                <h2 className='text-4xl lg:text-[2.75rem]/tight font-bold'>
                  Solusi keamanan siber yang inovatif dan terpercaya untuk
                  melindungi bisnis Anda
                </h2>
                <div className='text-base lg:text-xl my-8 2xl:max-w-[640px]'>
                  Kami menawarkan berbagai layanan yang dirancang untuk memenuhi
                  kebutuhan keamanan siber perusahaan Anda, sehingga Anda dapat
                  fokus pada pertumbuhan bisnis dengan tenang.
                </div>
              </div>
              <div className='mt-8'>
                <a
                  href='#'
                  className='inline-block text-white bg-gradient-to-r from-red-600 to-blue-900 hover:from-red-600 hover:to-blue-500 focus:ring-4 focus:ring-indigo-700 font-medium rounded-lg text-xl px-10 py-4 mr-2 mb-2 focus:outline-none transition duration-300'
                >
                  Konsultasi Gratis
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-4 pb-0 lg:pt-8 lg:pb-24 relative z-10'>
        <div className='container'>
          <div className='mx-auto text-center'>
            <h2 className='text-4xl lg:text-[2.75rem] text-white font-bold mb-4'>
              Layanan Kami
            </h2>
            <p className='text-base lg:text-xl text-white mx-auto'>
              Kami menyediakan rangkaian layanan keamanan siber yang mencakup
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 mt-12 lg:mt-20'>
            {services &&
              services.map((item, i) => (
                <div
                  className='bg-gradient-to-br from-[#1E2472] to-[#111543] rounded-xl p-6 lg:p-12 text-white'
                  key={i}
                >
                  <div className='mb-4'>
                    <Image
                      src={item.icon}
                      alt=''
                      className='w-16 h-auto'
                      width={128}
                      height={128}
                      priority
                    />
                  </div>
                  <h3 className='text-2xl mb-4 font-bold text-cyan-400'>
                    {item.title}
                  </h3>
                  <div className='text-base text-white/70'>
                    {item.description}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section className='pt-4 pb-0 lg:pt-12 lg:pb-24 relative z-10'>
        <div className='container'>
          <div className='mx-auto text-center'>
            <h2 className='text-4xl lg:text-[2.75rem] text-white font-bold mb-4'>
              Produk Unggulan Kami
            </h2>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4 mt-12 lg:mt-16'>
            {products &&
              products.map((item, i) => (
                <div
                  className='bg-[#0B2347] border border-solid border-[#FFFFFF2B] rounded-xl p-6 lg:py-8 lg:px-8 text-white'
                  key={i}
                >
                  <div className='mb-6'>
                    <Image
                      src={item.icon}
                      alt='{item.title}'
                      className='w-auto h-12'
                      width={128}
                      height={128}
                      priority
                    />
                  </div>
                  <h3 className='text-3xl mb-4 font-bold text-cyan-400 hidden'>
                    {item.title}
                  </h3>
                  <div className='text-[15px] leading-snug text-white/80'>
                    {item.description}
                  </div>
                </div>
              ))}
          </div>
          <div className='prose prose-lg max-w-screen-md text-center text-white mx-auto mt-12 lg:mt-16'>
            <p>
              Dengan menggunakan layanan kami dan produk unggulan ini, Anda akan
              mendapatkan manfaat seperti perlindungan yang lebih baik terhadap
              ancaman siber, peningkatan kepatuhan terhadap regulasi, dan
              efisiensi operasional yang lebih baik. Jangan ragu untuk membaca
              testimonial pelanggan kami untuk memahami bagaimana kami telah
              membantu organisasi lain seperti Anda.
            </p>
          </div>
        </div>
      </section>
      <section className='pt-4 pb-0 lg:pt-12 lg:pb-24 relative z-10 bg-gradient-to-b from-transparent to-[#091D42]'>
        <div className='container py-12 mx-auto'>
          <div className='grid gap-4 xl:gap-8 xl:grid-cols-5'>
            <div className='max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left'>
              <h2 className='text-4xl lg:text-[2.5rem] font-bold mb-4 mt-16 lg:mb-8'>
                Mengapa Memilih Kami?
              </h2>
              <div className='flex flex-col gap-y-3'>
                <div className='inline-flex gap-x-3'>
                  <svg
                    className='text-cyan-400'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10.6 13.8L8.45 11.65C8.26667 11.4667 8.03333 11.375 7.75 11.375C7.46667 11.375 7.23333 11.4667 7.05 11.65C6.86667 11.8333 6.775 12.0667 6.775 12.35C6.775 12.6333 6.86667 12.8667 7.05 13.05L9.9 15.9C10.1 16.1 10.3333 16.2 10.6 16.2C10.8667 16.2 11.1 16.1 11.3 15.9L16.95 10.25C17.1333 10.0667 17.225 9.83333 17.225 9.55C17.225 9.26667 17.1333 9.03333 16.95 8.85C16.7667 8.66667 16.5333 8.575 16.25 8.575C15.9667 8.575 15.7333 8.66667 15.55 8.85L10.6 13.8ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z'
                      fill='currentColor'
                    />
                  </svg>
                  <span>
                    Tim ahli yang berpengalaman dan bersertifikasi di bidang
                    keamanan siber
                  </span>
                </div>
                <div className='inline-flex gap-x-3'>
                  <svg
                    className='text-cyan-400'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10.6 13.8L8.45 11.65C8.26667 11.4667 8.03333 11.375 7.75 11.375C7.46667 11.375 7.23333 11.4667 7.05 11.65C6.86667 11.8333 6.775 12.0667 6.775 12.35C6.775 12.6333 6.86667 12.8667 7.05 13.05L9.9 15.9C10.1 16.1 10.3333 16.2 10.6 16.2C10.8667 16.2 11.1 16.1 11.3 15.9L16.95 10.25C17.1333 10.0667 17.225 9.83333 17.225 9.55C17.225 9.26667 17.1333 9.03333 16.95 8.85C16.7667 8.66667 16.5333 8.575 16.25 8.575C15.9667 8.575 15.7333 8.66667 15.55 8.85L10.6 13.8ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z'
                      fill='currentColor'
                    />
                  </svg>
                  <span>
                    Pendekatan yang disesuaikan dengan kebutuhan bisnis Anda
                  </span>
                </div>
                <div className='inline-flex gap-x-3'>
                  <svg
                    className='text-cyan-400'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10.6 13.8L8.45 11.65C8.26667 11.4667 8.03333 11.375 7.75 11.375C7.46667 11.375 7.23333 11.4667 7.05 11.65C6.86667 11.8333 6.775 12.0667 6.775 12.35C6.775 12.6333 6.86667 12.8667 7.05 13.05L9.9 15.9C10.1 16.1 10.3333 16.2 10.6 16.2C10.8667 16.2 11.1 16.1 11.3 15.9L16.95 10.25C17.1333 10.0667 17.225 9.83333 17.225 9.55C17.225 9.26667 17.1333 9.03333 16.95 8.85C16.7667 8.66667 16.5333 8.575 16.25 8.575C15.9667 8.575 15.7333 8.66667 15.55 8.85L10.6 13.8ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z'
                      fill='currentColor'
                    />
                  </svg>
                  <span>
                    Teknologi terkini untuk mendeteksi dan mengatasi ancaman
                    siber
                  </span>
                </div>
                <div className='inline-flex gap-x-3'>
                  <svg
                    className='text-cyan-400'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10.6 13.8L8.45 11.65C8.26667 11.4667 8.03333 11.375 7.75 11.375C7.46667 11.375 7.23333 11.4667 7.05 11.65C6.86667 11.8333 6.775 12.0667 6.775 12.35C6.775 12.6333 6.86667 12.8667 7.05 13.05L9.9 15.9C10.1 16.1 10.3333 16.2 10.6 16.2C10.8667 16.2 11.1 16.1 11.3 15.9L16.95 10.25C17.1333 10.0667 17.225 9.83333 17.225 9.55C17.225 9.26667 17.1333 9.03333 16.95 8.85C16.7667 8.66667 16.5333 8.575 16.25 8.575C15.9667 8.575 15.7333 8.66667 15.55 8.85L10.6 13.8ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z'
                      fill='currentColor'
                    />
                  </svg>
                  <span>Layanan dukungan responsif dan profesional</span>
                </div>
              </div>
            </div>
            <div className='p-6 xl:col-span-3'>
              <div className='grid gap-4 md:grid-cols-2'>
                <div className='grid gap-4'>
                  <div className='p-6 rounded-lg bg-black/20'>
                    <p>
                      Ini adalah pengalaman pertama kami bekerja sama dengan tim
                      ini, dan kami sangat puas dengan hasilnya. Mereka telah
                      membantu kami mengidentifikasi dan memperbaiki celah
                      keamanan dalam sistem kami, sehingga kami merasa lebih
                      aman dan percaya diri.
                    </p>
                    <div className='flex items-center mt-4 space-x-4'>
                      <img
                        src='https://source.unsplash.com/50x50/?portrait?1'
                        alt=''
                        className='w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500'
                      />
                      <div>
                        <p className='text-lg font-semibold'>Bpk. Hendri</p>
                        <p className='text-sm dark:text-gray-400'>
                          CEO Bank Persero
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='p-6 rounded-lg bg-black/20'>
                    <p>
                      Kami sangat merekomendasikan layanan mereka. Tim ini
                      sangat kompeten, responsif, dan selalu siap membantu kami
                      menghadapi tantangan keamanan siber.
                    </p>
                    <div className='flex items-center mt-4 space-x-4'>
                      <img
                        src='https://source.unsplash.com/50x50/?portrait?2'
                        alt=''
                        className='w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500'
                      />
                      <div>
                        <p className='text-lg font-semibold'>Ibu Rina</p>
                        <p className='text-sm dark:text-gray-400'>
                          CIO Perusahaan Retail
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='grid gap-4'>
                  <div className='p-6 rounded-lg bg-black/20'>
                    <p>
                      Layanan keamanan siber yang mereka tawarkan sangat efektif
                      dalam mengurangi risiko serangan siber terhadap bisnis
                      kami. Dukungan dan komunikasi yang baik dari tim mereka
                      membuat proses ini berjalan lancar dan sukses.
                    </p>
                    <div className='flex items-center mt-4 space-x-4'>
                      <img
                        src='https://source.unsplash.com/50x50/?portrait?3'
                        alt=''
                        className='w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500'
                      />
                      <div>
                        <p className='text-lg font-semibold'>Bpk. Andi</p>
                        <p className='text-sm dark:text-gray-400'>
                          Direktur IT Bank Swasta
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='p-6 rounded-lg bg-black/20'>
                    <p>
                      Setelah bekerja sama dengan tim ini, kami telah melihat
                      peningkatan signifikan dalam keamanan infrastruktur TI
                      kami. Mereka selalu memberikan saran dan rekomendasi yang
                      bermanfaat untuk membantu kami terus melindungi bisnis
                      kami.
                    </p>
                    <div className='flex items-center mt-4 space-x-4'>
                      <img
                        src='https://source.unsplash.com/50x50/?portrait?4'
                        alt=''
                        className='w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500'
                      />
                      <div>
                        <p className='text-lg font-semibold'>Ibu Dian</p>
                        <p className='text-sm dark:text-gray-400'>
                          IT Security Head Bank Umum
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

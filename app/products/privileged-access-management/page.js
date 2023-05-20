import Image from 'next/image';

export default function RecordedFuture() {
  const why = [
    {
      title: 'Perlindungan Aset Kritis',
      description:
        '<p>CyberArk melindungi akses ke sistem kritis, aplikasi, dan data, termasuk server, database, dan perangkat jaringan, untuk memastikan bahwa hanya pengguna yang berwenang yang dapat mengakses sumber daya ini.</p>',
    },
    {
      title: 'Otomatisasi dan Integrasi',
      description:
        '<p>CyberArk menyediakan otomatisasi pengelolaan akses istimewa, termasuk penyediaan, pembatalan, dan rotasi kredensial. Solusi ini juga dapat diintegrasikan dengan berbagai alat keamanan lainnya, seperti SIEM, GRC, dan solusi manajemen identitas.</p>',
    },
    {
      title: 'Audit dan Pelaporan',
      description:
        '<p>CyberArk menyediakan alat pelaporan yang komprehensif dan audit trail yang rinci, yang memungkinkan Anda untuk melacak dan memantau akses istimewa di seluruh organisasi Anda. Ini sangat penting untuk mematuhi standar regulasi dan kepatuhan yang ketat.</p>',
    },
    {
      title: 'Kesadaran Ancaman',
      description:
        '<p>CyberArk terus memonitor ancaman yang berkaitan dengan akses istimewa dan menggabungkan wawasan tersebut ke dalam solusi PAM mereka, sehingga Anda selalu up-to-date dengan ancaman terbaru dan teknik mitigasi.</p>',
    },
  ];

  const features = [
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'CyberArk Enterprise Password Vault',
      description:
        'Penyimpanan terpusat yang aman dan terenkripsi untuk menyimpan dan mengelola kredensial akses istimewa. Password Vault memastikan bahwa kredensial tersebut hanya dapat diakses oleh pengguna yang berwenang dan mengotomatiskan proses rotasi kata sandi sesuai dengan kebijakan yang ditentukan.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'CyberArk Privileged Session Manager',
      description:
        'Modul yang mengontrol dan memantau sesi akses istimewa secara real-time. Privileged Session Manager mencatat aktivitas pengguna dalam sesi tersebut, memungkinkan auditor untuk mengkaji tindakan yang dilakukan selama sesi dan memastikan kepatuhan dengan kebijakan keamanan internal dan eksternal.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'CyberArk Endpoint Privilege Manager',
      description:
        'Komponen yang mengurangi risiko serangan di titik akhir dengan mengendalikan hak istimewa pengguna pada perangkat mereka. Endpoint Privilege Manager membatasi penggunaan hak istimewa yang tidak perlu dan melindungi sistem dari ancaman yang berasal dari perangkat yang dikompromikan.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'CyberArk Application Access Manager',
      description:
        'Solusi yang mengelola dan mengamankan akses istimewa ke aplikasi bisnis kritis, termasuk aplikasi web, server aplikasi, dan aplikasi seluler. Application Access Manager mengenkripsi kredensial, membatasi hak istimewa, dan memantau aktivitas aplikasi untuk mengurangi risiko serangan.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'CyberArk Central Policy Manager',
      description:
        'Alat yang memungkinkan Anda untuk mendefinisikan, menerapkan, dan mengelola kebijakan akses istimewa di seluruh organisasi. Central Policy Manager memastikan bahwa kebijakan keamanan yang konsisten diterapkan di seluruh infrastruktur TI Anda dan membantu menjaga kepatuhan dengan standar regulasi.',
      link: '',
    },
  ];

  const faqs = [
    {
      title: 'Apa itu CyberArk?',
      description:
        '<p>CyberArk adalah pemimpin industri dalam solusi Privileged Access Management (PAM) yang membantu organisasi mengelola dan melindungi akses istimewa ke sistem, aplikasi, dan data sensitif.</p>',
    },
    {
      title: 'Mengapa Privileged Access Management penting?',
      description:
        '<p>PAM penting untuk melindungi sistem dan data organisasi dari ancaman keamanan siber, seperti peretasan dan kebocoran data. Dengan mengelola akses istimewa, organisasi dapat memastikan bahwa hanya pengguna yang berwenang yang memiliki akses ke sumber daya kritis dan bahwa akses ini diberikan sesuai dengan kebijakan keamanan.</p>',
    },
    {
      title: 'Bagaimana CyberArk melindungi akses istimewa?',
      description:
        '<p>CyberArk menggunakan beberapa komponen, seperti Enterprise Password Vault, Privileged Session Manager, Endpoint Privilege Manager, Application Access Manager, dan Central Policy Manager untuk mengelola dan melindungi akses istimewa dalam organisasi.</p>',
    },
    {
      title:
        'Apakah CyberArk mudah diintegrasikan dengan solusi keamanan lainnya?',
      description:
        '<p>Ya, CyberArk dapat diintegrasikan dengan berbagai alat keamanan lainnya, seperti SIEM, GRC, dan solusi manajemen identitas, untuk memberikan visibilitas dan kontrol yang lebih baik terhadap akses istimewa di seluruh organisasi.</p>',
    },
    {
      title: 'Apakah CyberArk cocok untuk organisasi dari semua ukuran?',
      description:
        '<p>CyberArk menawarkan solusi PAM yang fleksibel dan skalabel yang cocok untuk organisasi dari semua ukuran, mulai dari bisnis kecil hingga perusahaan multinasional. Solusi ini dapat disesuaikan dengan kebutuhan dan kebijakan keamanan spesifik organisasi Anda.</p>',
    },
    {
      title:
        'Bagaimana CyberArk membantu mematuhi standar keamanan dan regulasi?',
      description:
        '<p>CyberArk menyediakan alat pelaporan yang komprehensif dan audit trail yang rinci, yang memungkinkan Anda untuk melacak dan memantau akses istimewa di seluruh organisasi Anda. Hal ini membantu memastikan kepatuhan dengan standar regulasi seperti GDPR, HIPAA, PCI DSS, dan sebagainya.</p>',
    },
    {
      title: 'Apakah CyberArk mendukung penyimpanan sandi multiplatform?',
      description:
        '<p>Ya, CyberArk mendukung penyimpanan kredensial untuk berbagai sistem operasi dan platform, termasuk Windows, Linux, UNIX, macOS, dan mainframe.</p>',
    },
  ];

  return (
    <>
      <section className='relative pt-24 pb-16 min-h-[360px]'>
        <Image
          src='/images/bg-banner.jpg'
          alt='Header'
          className='absolute inset-0 object-cover object-bottom h-full w-full'
          width={1512}
          height={1008}
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-brand-bluenight from-0% via-brand-bluenight/50 via-50% to-transparent'></div>
        <div className='relative z-10 mt-16'>
          <div className='container max-w-screen-xl'>
            <div className='flex gap-16'>
              <div className='w-2/3'>
                <h3 className='mb-4 uppercase'>
                  Privileged Access Management (PAM)
                </h3>
                <h1 className='text-5xl font-bold mb-6'>CyberArk</h1>
                <p className='text-lg mt-4'>
                  Dalam lingkungan TI yang semakin kompleks dan terancam,
                  melindungi akun dengan akses istimewa menjadi sangat penting
                  untuk menjaga keamanan organisasi Anda. Layanan PAM kami
                  menggunakan teknologi CyberArk untuk membantu Anda mengelola
                  dan melindungi akses istimewa ke sistem, aplikasi, dan data
                  Anda.
                </p>
              </div>
              <div className='w-1/3'>
                <div className='aspect-w-4 aspect-h-3'>
                  <div className='w-full h-full flex rounded-xl bg-brand-bluenight p-8'>
                    <Image
                      src='/images/products/cyberark.svg'
                      alt='CyberArk'
                      className=''
                      width={580}
                      height={120}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-4 pb-0 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-20'>
            <h2 className='text-4xl font-bold mb-6'>
              Apa itu Privileged Access Management?
            </h2>
            <div className='prose prose-lg max-w-none text-white'>
              <p>
                Privileged Access Management adalah praktik yang mencakup
                pengelolaan dan pengawasan akses istimewa ke sistem, aplikasi,
                dan data sensitif dalam organisasi. PAM membantu memastikan
                bahwa pengguna yang memiliki akses istimewa hanya dapat
                mengakses sumber daya yang benar-benar diperlukan untuk
                menjalankan tugas mereka dan bahwa akses ini diberikan sesuai
                dengan kebijakan keamanan organisasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-4 pb-0 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-20'>
            <div className='mb-8'>
              <h2 className='text-4xl lg:text-4xl text-white font-bold mb-4'>
                Mengapa Memilih CyberArk?
              </h2>
              <div className='prose prose-lg max-w-none text-white'>
                <p>
                  CyberArk adalah solusi PAM terkemuka di industri yang telah
                  digunakan oleh ribuan organisasi di seluruh dunia untuk
                  melindungi akses istimewa. Beberapa keunggulan CyberArk
                  meliputi:
                </p>
              </div>
            </div>
            <div className='bg-[#0B2347] bg-black/20 rounded-xl p-6 lg:p-10 text-white -mx-10'>
              <div className='grid grid-cols-2 gap-6 lg:gap-10'>
                {why &&
                  why.map((item, i) => (
                    <div
                      className='pb-6 text-white border-b border-white/10'
                      key={i}
                    >
                      <h3 className='text-2xl mb-3 font-bold text-cyan-400'>
                        {item.title}
                      </h3>
                      <div className='text-base text-white/80'>
                        <div
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-4 pb-0 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-20'>
            <div className=''>
              <h2 className='text-4xl lg:text-4xl text-white font-bold mb-4'>
                Bagaimana CyberArk Bekerja?
              </h2>
              <p className='text-base lg:text-xl text-white mx-auto'>
                CyberArk menyediakan solusi PAM yang efektif dan aman dengan
                menggabungkan beberapa komponen utama untuk melindungi akses
                istimewa dalam organisasi Anda:
              </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 mt-10'>
              {features &&
                features.map((item, i) => (
                  <div
                    className='bg-[#0B2347] border border-solid border-[#ffffff1a] rounded-xl p-6 lg:p-8 text-white'
                    key={i}
                  >
                    {/* <div className='mb-4'>
                    <Image
                      src={item.icon}
                      alt=''
                      className='w-16 h-auto'
                      width={128}
                      height={128}
                      priority
                    />
                  </div> */}
                    <h3 className='text-2xl mb-4 font-bold text-cyan-400'>
                      {item.title}
                    </h3>
                    <div className='text-base text-white/80'>
                      {item.description}
                    </div>
                  </div>
                ))}
            </div>
            <div className='mt-8'>
              <div className='prose prose-lg max-w-none text-white'>
                <p>
                  Dengan menggabungkan komponen-komponen ini, CyberArk
                  memberikan solusi PAM yang komprehensif, efektif, dan
                  fleksibel yang dapat disesuaikan dengan kebutuhan organisasi
                  Anda. Solusi ini membantu Anda mengelola dan mengendalikan
                  akses istimewa, meminimalkan risiko serangan, dan menjaga
                  kepatuhan dengan standar keamanan dan regulasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-4 pb-0 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-20'>
            <h2 className='text-4xl lg:text-4xl text-white font-bold text-center mb-12'>
              FAQ mengenai CyberArk
            </h2>
            <div className='flex flex-col gap-y-4'>
              {faqs &&
                faqs.map((item, i) => (
                  <div
                    tabIndex={0}
                    key={i}
                    className='collapse collapse-plus border border-[#0B2347] bg-[#0B2347] rounded-lg'
                  >
                    <div className='collapse-title pl-6 text-xl font-bold text-cyan-400'>
                      <div className='flex gap-x-2'>
                        <span>{item.title}</span>
                      </div>
                    </div>
                    <div className='collapse-content px-6'>
                      <div
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

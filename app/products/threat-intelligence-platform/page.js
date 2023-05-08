import Image from 'next/image';

export default function PenTest() {
  const services = [
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Analisis Ancaman Otomatis',
      description:
        'Recorded Future menggunakan algoritma canggih dan teknologi pembelajaran mesin untuk mengumpulkan, mengindeks, dan menganalisis data dari berbagai sumber secara otomatis. Hal ini memungkinkan platform ini untuk mengidentifikasi ancaman yang relevan dengan cepat dan memberikan peringatan dini kepada tim keamanan Anda.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Konteks Ancaman yang Kaya',
      description:
        'Recorded Future menyediakan konteks yang kaya dan terperinci tentang ancaman, termasuk aktor ancaman, kampanye, teknik, dan alat yang digunakan. ',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Integrasi dengan Alat Keamanan Lainnya',
      description:
        'Menilai keamanan aplikasi seluler pada berbagai platform, seperti Android dan iOS, untuk mengidentifikasi kerentanan yang mungkin dapat dieksploitasi oleh peretas.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Akses ke Intelijen Ancaman yang Tidak Terbatas',
      description:
        'Mengidentifikasi dan mengatasi kerentanan keamanan dalam perangkat IoT dan komponen yang terhubung, termasuk sensor, aktuator, dan sistem kontrol.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Dukungan Tim Ahli',
      description:
        'Fokus pada pengujian keamanan jaringan nirkabel, termasuk Wi-Fi, Bluetooth, dan teknologi nirkabel lainnya, untuk mengungkap celah keamanan dan melindungi transmisi data.',
      link: '',
    },
  ];

  const benefits = [
    {
      title: 'Peningkatan Kesadaran Ancaman',
      description:
        '<p>Recorded Future membantu organisasi meningkatkan kesadaran terhadap ancaman siber yang dihadapi dengan menyediakan intelijen ancaman yang relevan, akurat, dan tepat waktu.</p>',
    },
    {
      title: 'Meningkatkan Keamanan',
      description:
        '<p>Dengan mengungkap dan memperbaiki kerentanan, pentest secara efektif meningkatkan keamanan sistem dan melindungi aset digital Anda dari ancaman keamanan siber.</p>',
    },
    {
      title: 'Kepatuhan Regulasi',
      description:
        '<p>Pentest membantu memastikan kepatuhan terhadap standar keamanan dan regulasi industri, seperti GDPR, HIPAA, dan PCI DSS, yang sering kali mengharuskan pengujian keamanan berkala.</p>',
    },
    {
      title: 'Mengurangi Risiko Keuangan',
      description:
        '<p>Serangan siber yang berhasil dapat menimbulkan kerugian finansial yang signifikan. Pentest membantu mengurangi risiko kehilangan data, waktu henti sistem, dan potensi denda dari pelanggaran kepatuhan.</p>',
    },
    {
      title: 'Mempertahankan Reputasi',
      description:
        '<p>Serangan siber dapat merusak reputasi perusahaan dan mengurangi kepercayaan pelanggan. Dengan melakukan pentest, Anda menunjukkan komitmen terhadap keamanan dan melindungi reputasi organisasi Anda.</p>',
    },
    {
      title: 'Prioritaskan Pengelolaan Risiko',
      description:
        '<p>Pentest memberikan wawasan tentang risiko keamanan yang dihadapi organisasi, memungkinkan Anda untuk mengalokasikan sumber daya dan menetapkan prioritas pengelolaan risiko dengan lebih efektif.</p>',
    },
    {
      title: 'Meningkatkan Kesadaran Keamanan',
      description:
        '<p>Pentest dapat meningkatkan kesadaran keamanan di seluruh organisasi, memastikan bahwa karyawan memahami ancaman keamanan dan bagaimana melindungi sistem dan data yang mereka gunakan.</p>',
    },
    {
      title: 'Tes Respons Insiden',
      description:
        '<p>Pentest juga dapat digunakan untuk menguji kesiapan tim respons insiden dan prosedur keamanan internal, memastikan bahwa organisasi Anda siap untuk menghadapi serangan siber.</p>',
    },
    {
      title: 'Validasi Kontrol Keamanan',
      description:
        '<p>Pentest memungkinkan Anda untuk memverifikasi efektivitas kontrol keamanan yang ada dalam menghadapi ancaman nyata, dan memberikan informasi tentang area yang memerlukan perbaikan.</p>',
    },
    {
      title: 'Mengurangi Waktu Recovery',
      description:
        '<p>Dengan mengidentifikasi kerentanan sebelum terjadinya insiden keamanan, pentest dapat membantu mengurangi waktu yang diperlukan untuk memulihkan sistem dan kembali beroperasi setelah serangan.</p>',
    },
  ];

  const faqs = [
    {
      title: 'Apa itu Recorded Future?',
      description:
        '<p>Recorded Future adalah platform intelijen ancaman terkemuka yang menggabungkan analisis otomatis dan manual untuk memberikan wawasan yang jelas dan komprehensif tentang ancaman siber. Platform ini mengumpulkan data dari berbagai sumber, termasuk internet terbuka, dark web, dan sumber intelijen tertutup, untuk mengidentifikasi ancaman yang sedang berkembang dan memberikan pemahaman yang lebih dalam tentang potensi risiko yang dihadapi oleh organisasi Anda.</p>',
    },
    {
      title: 'Bagaimana Recorded Future bekerja?',
      description:
        '<p>Platform Recorded Future menggunakan algoritma canggih dan teknologi pembelajaran mesin untuk mengumpulkan, mengindeks, dan menganalisis data dari berbagai sumber secara otomatis. Ini memungkinkan platform untuk mengidentifikasi ancaman yang relevan dengan cepat dan memberikan peringatan dini kepada tim keamanan Anda. Selain itu, Recorded Future menyediakan konteks yang kaya dan terperinci tentang ancaman, termasuk aktor ancaman, kampanye, teknik, dan alat yang digunakan.</p>',
    },
    {
      title: 'Bagaimana Recorded Future membantu melindungi organisasi saya?',
      description:
        '<p>Dengan menggunakan platform Recorded Future, organisasi Anda akan meningkatkan kesadaran terhadap ancaman siber yang dihadapi, memungkinkan Anda untuk mengambil langkah-langkah pencegahan yang tepat untuk melindungi aset dan data penting Anda. Selain itu, platform ini memungkinkan tim keamanan Anda untuk merespon insiden dengan lebih cepat dan efisien, mengurangi dampak negatif pada organisasi.</p>',
    },
    {
      title:
        'Apakah Recorded Future dapat diintegrasikan dengan alat keamanan lainnya?',
      description:
        '<p>Ya, platform Recorded Future dapat dengan mudah diintegrasikan dengan berbagai alat keamanan lainnya, seperti SIEM, firewall, dan sistem manajemen ancaman. Integrasi ini memungkinkan tim keamanan Anda untuk merespon insiden dengan lebih cepat dan meningkatkan efektivitas strategi keamanan organisasi Anda secara keseluruhan.</p>',
    },
    {
      title: 'Bagaimana dukungan yang diberikan oleh Recorded Future?',
      description:
        '<p>Recorded Future didukung oleh tim ahli keamanan siber yang berpengalaman dan berdedikasi, yang siap untuk membantu Anda mengatasi ancaman siber dan memastikan bahwa organisasi Anda tetap terlindungi. Tim ini dapat membantu Anda mengatasi masalah teknis, memberikan rekomendasi taktis, dan membantu merumuskan strategi keamanan yang efektif.</p>',
    },
  ];

  return (
    <>
      <section className='relative py-24 min-h-[360px]'>
        <Image
          src='/images/bg-banner.jpg'
          alt='Header'
          className='absolute inset-0 object-cover object-bottom h-full w-full'
          width={1512}
          height={1008}
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#091D42] from-0% via-[#091D42]/50 via-50% to-transparent'></div>
        <div className='relative z-10 mt-16'>
          <div className='container text-center text-white'>
            <h1 className='text-5xl font-bold'>Threat Intelligence Platform</h1>
            <p className='text-2xl mt-4'>Recorded Future</p>
          </div>
        </div>
      </section>
      <section className='bg-[#091D42]'>
        <div className='container max-w-screen-xl'>
          <div className='relative pl-60'>
            <div className='absolute left-0 top-1/2 -translate-y-1/2'>
              <Image
                src='/images/content/security-badge.png'
                alt='Security'
                className='rounded-xl max-w-[420px]'
                width={543}
                height={543}
                priority
              />
            </div>
            <div className='bg-black/20 rounded-xl p-20 pl-60'>
              <h2 className='text-4xl font-bold mb-6'>
                Apa Itu Recorded Future?
              </h2>
              <div className='prose prose-lg max-w-none text-white'>
                <p>
                  Recorded Future adalah platform intelijen ancaman (Threat
                  Intelligence Platform) terdepan yang menggabungkan analisis
                  otomatis dan manual untuk memberikan wawasan yang jelas dan
                  komprehensif tentang ancaman siber. Platform ini mengumpulkan
                  data dari berbagai sumber, termasuk internet terbuka, dark
                  web, dan sumber intelijen tertutup, untuk mengidentifikasi
                  ancaman yang sedang berkembang dan memberikan pemahaman yang
                  lebih dalam tentang potensi risiko yang dihadapi oleh
                  organisasi Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-4 pb-0 lg:pt-24 lg:pb-24 relative z-10 bg-[#091D42]'>
        <div className='container'>
          <div className='mx-auto text-center'>
            <h2 className='text-4xl lg:text-4xl text-white font-bold mb-4'>
              Fitur Utama Recorded Future
            </h2>
            {/* <p className='text-base lg:text-2xl text-white mx-auto'>
              Berikut adalah beberapa manfaat penting dari melakukan penetrasi
              testing (pentest):
            </p> */}
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mt-12 lg:mt-16'>
            {services &&
              services.map((item, i) => (
                <div
                  className='bg-[#0B2347] border border-solid border-[#FFFFFF2B] rounded-xl p-6 lg:p-8 text-white'
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
                  <h3 className='text-3xl mb-4 font-bold text-cyan-400'>
                    {item.title}
                  </h3>
                  <div className='text-lg text-white/80'>
                    {item.description}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section className='pt-4 pb-0 lg:pt-36 lg:pb-36 relative z-10 bg-[#091D42]'>
        <div className='container'>
          <div className='flex gap-x-16'>
            <div className='w-2/5'>
              <h2 className='text-4xl lg:text-4xl text-white font-bold mb-4'>
                Benefit yang didapat
              </h2>
              <div className='prose prose-lg text-white'>
                <p>
                  Dengan memanfaatkan platform Recorded Future, organisasi Anda
                  akan merasakan berbagai keuntungan berikut:
                </p>
              </div>
            </div>
            <div className='w-3/5'>
              <div className='flex flex-col gap-y-3'>
                {benefits &&
                  benefits.map((item, i) => (
                    <div
                      tabIndex={0}
                      key={i}
                      className='collapse collapse-plus border border-[#0B2347] bg-[#0B2347] rounded-lg'
                    >
                      <div className='collapse-title pl-6 text-xl font-bold text-cyan-400'>
                        <div className='flex gap-x-2'>
                          <svg
                            className='text-cyan-400 mt-0.5'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M10.6 13.8L8.45 11.65C8.26667 11.4667 8.03333 11.375 7.75 11.375C7.46667 11.375 7.23333 11.4667 7.05 11.65C6.86667 11.8333 6.775 12.0667 6.775 12.35C6.775 12.6333 6.86667 12.8667 7.05 13.05L9.9 15.9C10.1 16.1 10.3333 16.2 10.6 16.2C10.8667 16.2 11.1 16.1 11.3 15.9L16.95 10.25C17.1333 10.0667 17.225 9.83333 17.225 9.55C17.225 9.26667 17.1333 9.03333 16.95 8.85C16.7667 8.66667 16.5333 8.575 16.25 8.575C15.9667 8.575 15.7333 8.66667 15.55 8.85L10.6 13.8ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22Z'
                              fill='currentColor'
                            />
                          </svg>

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
              <div className='prose prose-lg max-w-none text-white mt-8'></div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-4 pb-0 lg:pt-20 lg:pb-36 relative z-10 bg-[#091D42]'>
        <div className='container'>
          <div className='max-w-screen-md mx-auto'>
            <h2 className='text-4xl lg:text-4xl text-white font-bold text-center mb-8'>
              FAQ mengenai Recorded Future
            </h2>
            <div className='flex flex-col gap-y-3'>
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

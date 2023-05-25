import Image from 'next/image';

export default function PenTest() {
  const services = [
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Penetration Testing Jaringan',
      description:
        'Fokus pada pengujian keamanan infrastruktur jaringan perusahaan, mencakup perangkat keras jaringan, sistem operasi, dan protokol komunikasi untuk mengidentifikasi dan memperbaiki kerentanan.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Penetration Testing Aplikasi Web',
      description:
        'Mengevaluasi keamanan aplikasi berbasis web, termasuk mencari celah dalam otorisasi, autentikasi, manajemen sesi, dan konfigurasi keamanan.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Penetration Testing Aplikasi Seluler',
      description:
        'Menilai keamanan aplikasi seluler pada berbagai platform, seperti Android dan iOS, untuk mengidentifikasi kerentanan yang mungkin dapat dieksploitasi oleh peretas.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Penetration Testing IoT (Internet of Things)',
      description:
        'Mengidentifikasi dan mengatasi kerentanan keamanan dalam perangkat IoT dan komponen yang terhubung, termasuk sensor, aktuator, dan sistem kontrol.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Penetration Testing Nirkabel',
      description:
        'Fokus pada pengujian keamanan jaringan nirkabel, termasuk Wi-Fi, Bluetooth, dan teknologi nirkabel lainnya, untuk mengungkap celah keamanan dan melindungi transmisi data.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Penetration Testing Sosial',
      description:
        'Melakukan tes yang melibatkan manipulasi individu atau kelompok melalui teknik social engineering, seperti phishing, pretexting, dan tailgating, untuk mendapatkan akses ke sistem atau informasi yang dilindungi.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Penetration Testing Fisik',
      description:
        'Mengevaluasi keamanan fisik suatu fasilitas, termasuk kontrol akses, sistem pengawasan, dan deteksi pergerakan, untuk mengungkap kelemahan dalam perlindungan aset fisik dan digital.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Penetration Testing Berkelanjutan',
      description:
        'Melakukan serangkaian pengujian keamanan secara berkelanjutan untuk menilai keamanan sistem secara berkala dan mengatasi kerentanan yang ditemukan seiring waktu.',
      link: '',
    },
  ];

  const benefits = [
    {
      title: 'Identifikasi Kerentanan',
      description:
        '<p>Pentest membantu mengidentifikasi kerentanan keamanan dalam sistem, aplikasi, dan infrastruktur jaringan sebelum peretas dapat mengeksploitasi celah tersebut.</p>',
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
      title: 'Mengapa pentest penting?',
      description:
        '<p>Pentest membantu mengidentifikasi kerentanan keamanan dalam infrastruktur TI sebelum peretas dapat mengeksploitasi celah tersebut. Dengan mengungkap dan memperbaiki kerentanan, pentest secara efektif meningkatkan keamanan sistem dan melindungi aset digital Anda dari ancaman keamanan siber.</p>',
    },
    {
      title: 'Kapan sebaiknya melakukan pentest?',
      description:
        '<p>Pentest sebaiknya dilakukan secara berkala, atau setiap kali terjadi perubahan signifikan pada infrastruktur TI, seperti pengenalan sistem atau aplikasi baru, perubahan konfigurasi, atau setelah insiden keamanan. Selain itu, pentest mungkin diperlukan untuk memenuhi persyaratan kepatuhan industri atau regulasi.</p>',
    },
    {
      title: 'Berapa lama waktu yang dibutuhkan untuk melakukan pentest?',
      description:
        '<p>Durasi pentest sangat bergantung pada lingkup pengujian, kompleksitas sistem atau aplikasi yang diuji, dan jenis pentest yang dilakukan. Pentest dapat berlangsung mulai dari beberapa hari hingga beberapa minggu.</p>',
    },
    {
      title: 'Siapa yang harus melakukan pentest?',
      description:
        '<p>Pentest sebaiknya dilakukan oleh tim profesional dan berpengalaman yang memiliki pengetahuan dan keterampilan yang diperlukan untuk mengidentifikasi dan mengevaluasi kerentanan keamanan. Tim pentest mungkin termasuk konsultan eksternal, atau anggota tim keamanan internal yang telah melalui pelatihan khusus.</p>',
    },
    {
      title: 'Apakah pentest akan mengganggu operasi bisnis?',
      description:
        '<p>Sebagian besar pentest dirancang untuk tidak mengganggu operasi bisnis. Namun, ada risiko kecil bahwa pengujian tertentu dapat menyebabkan gangguan atau downtime. Pentester dan klien biasanya akan bekerja sama untuk meminimalkan risiko ini dan merencanakan pengujian di luar jam kerja atau selama periode yang kurang sibuk.</p>',
    },
    {
      title: 'Apa perbedaan antara pentest dan pemindaian kerentanan?',
      description:
        '<p>Pemindaian kerentanan adalah proses otomatis yang menggunakan alat untuk mengidentifikasi kerentanan yang diketahui dalam sistem, aplikasi, atau jaringan. Sementara itu, pentest melibatkan upaya yang lebih aktif dan manual untuk mengeksploitasi kerentanan yang ditemukan dan menilai dampak potensial dari eksploitasi tersebut.</p>',
    },
    {
      title: 'Bagaimana cara memilih penyedia layanan pentest yang tepat?',
      description:
        '<p>Memilih penyedia layanan pentest yang tepat melibatkan pertimbangan seperti reputasi, pengalaman, kredensial industri (seperti sertifikasi), metodologi pengujian yang digunakan, dan kemampuan untuk bekerja sama dengan tim Anda dalam mengatasi kerentanan yang diidentifikasi.</p>',
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
        <div className='relative z-10 mt-8 xl:mt-10 2xl:mt-16'>
          <div className='container max-w-screen-xl'>
            <div className='flex flex-wrap md:flex-nowrap md:gap-8 lg:gap-12 xl:gap-16'>
              <div className='w-full order-2 md:w-3/4 lg:w-2/3 md:order-1'>
                <h3 className='mb-4'>LAYANAN KAMI</h3>
                <h1 className='text-4xl xl:text-5xl font-bold mb-4 xl:mb-6'>
                  Penetration Testing
                </h1>
                <h2 className='text-2xl font-semibold mb-6'>
                  Layanan profesional untuk mengidentifikasi dan mengatasi
                  kerentanan keamanan di sistem, aplikasi, dan situs web Anda
                </h2>
                <p className='text-base/relaxed xl:text-lg mt-4'>
                  Di era digital saat ini, keamanan sistem informasi dan
                  infrastruktur IT menjadi sangat penting. Ancaman keamanan
                  siber yang terus berkembang mengharuskan perusahaan dan
                  individu untuk melindungi aset digital mereka. Layanan
                  penetrasi testing kami dirancang untuk membantu Anda
                  mengungkap kerentanan keamanan, melindungi data sensitif, dan
                  memastikan kepatuhan terhadap standar industri.
                </p>
              </div>
              <div className='w-1/3'>
                <Image
                  src='/images/content/security-badge.png'
                  alt='Security'
                  className='rounded-xl max-w-[420px]'
                  width={543}
                  height={543}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className='relative z-10 mt-8 xl:mt-10 2xl:mt-16'>
          <div className='container text-center text-white'>
            <h1 className='text-5xl font-bold'>Penetration Testing</h1>
            <p className='text-2xl mt-4'>
              Jamin Keamanan Sistem Anda dan Lindungi Aset Digital Anda
            </p>
          </div>
        </div>
      </section>
      {/* <section className='relative py-24 min-h-[360px]'>
        <Image
          src='/images/bg-banner.jpg'
          alt='Header'
          className='absolute inset-0 object-cover object-bottom h-full w-full'
          width={1512}
          height={1008}
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#091D42] from-0% via-[#091D42]/50 via-50% to-transparent'></div>
        <div className='relative z-10 mt-8 xl:mt-10 2xl:mt-16'>
          <div className='container text-center text-white'>
            <h1 className='text-5xl font-bold'>Penetration Testing</h1>
            <p className='text-2xl mt-4'>
              Jamin Keamanan Sistem Anda dan Lindungi Aset Digital Anda
            </p>
          </div>
        </div>
      </section> */}
      {/* <section className='py-20'>
        <div className='container'>
          <div className='flex gap-x-12'>
            <div className='w-1/2'>
              <h2 className='text-4xl font-bold mb-6'>
                Layanan profesional untuk mengidentifikasi dan mengatasi
                kerentanan keamanan di sistem, aplikasi, dan situs web Anda
              </h2>
            </div>
            <div className='w-1/2'>
              <p>
                Di era digital saat ini, keamanan sistem informasi dan
                infrastruktur IT menjadi sangat penting. Ancaman keamanan siber
                yang terus berkembang mengharuskan perusahaan dan individu untuk
                melindungi aset digital mereka. Layanan penetrasi testing kami
                dirancang untuk membantu Anda mengungkap kerentanan keamanan,
                melindungi data sensitif, dan memastikan kepatuhan terhadap
                standar industri.
              </p>
            </div>
          </div>
        </div>
      </section> */}
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
                Apa itu Penetration Testing?
              </h2>
              <div className='prose xl:prose-lg max-w-none text-white'>
                <p>
                  Penetration testing, atau pentesting, adalah metode evaluasi
                  keamanan siber yang etis yang bertujuan untuk menemukan,
                  mengeksploitasi dengan aman, dan membantu memperbaiki
                  kerentanan di sistem komputer, aplikasi, dan situs web. Dengan
                  menggunakan alat dan teknik yang sama dengan yang digunakan
                  oleh peretas, pentesting mensimulasikan kondisi serangan
                  nyata.
                </p>
                <p>
                  Menggunakan layanan penetrasi testing memungkinkan organisasi
                  untuk mengurangi risiko keamanan dan meningkatkan kepercayaan
                  diri dalam keamanan infrastruktur IT mereka, dengan mengatasi
                  kelemahan sebelum dapat dieksploitasi secara jahat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='pt-20 pb-0 bg-[#091D42]'>
        <div className='container'>
          <h2 className='text-4xl font-bold mb-6'>
            Apa itu Penetration Testing?
          </h2>
          <div>
            <div className='columns-2 gap-12 prose prose-lg max-w-none text-white'>
              <p>
                Penetration testing, atau pentesting, adalah metode evaluasi
                keamanan siber yang etis yang bertujuan untuk menemukan,
                mengeksploitasi dengan aman, dan membantu memperbaiki kerentanan
                di sistem komputer, aplikasi, dan situs web. Dengan menggunakan
                alat dan teknik yang sama dengan yang digunakan oleh peretas,
                pentesting mensimulasikan kondisi serangan nyata.
              </p>
              <p>
                Menggunakan layanan penetrasi testing memungkinkan organisasi
                untuk mengurangi risiko keamanan dan meningkatkan kepercayaan
                diri dalam keamanan infrastruktur IT mereka, dengan mengatasi
                kelemahan sebelum dapat dieksploitasi secara jahat.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section className='pt-4 pb-0 lg:pt-36 lg:pb-36 relative z-10 bg-[#091D42]'>
        <div className='container'>
          <div className='flex gap-x-16'>
            <div className='w-2/5'>
              <h2 className='text-3xl xl:text-4xl font-bold mb-4 lg:mb-6'>
                Manfaat melakukan penetration testing
              </h2>
              <div className='prose xl:prose-lg max-w-none text-white'>
                <p>
                  Secara keseluruhan, pentest merupakan investasi yang penting
                  untuk melindungi organisasi Anda dari ancaman keamanan siber
                  yang terus berkembang dan memastikan keamanan serta
                  keberlanjutan operasi bisnis.
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
                      <div className='collapse-title p-4 pr-12 lg:pl-6 xl:text-xl font-bold text-cyan-400'>
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
            </div>
          </div>
        </div>
      </section>
      <section className='pt-4 pb-0 lg:pt-0 lg:pb-24 relative z-10 bg-[#091D42]'>
        <div className='container'>
          <div className='mx-auto text-center'>
            <h2 className='text-4xl lg:text-5xl text-white font-bold mb-4'>
              Jenis layanan Pentest
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
      <section className='pt-4 pb-0 lg:pt-20 lg:pb-36 relative z-10 bg-[#091D42]'>
        <div className='container'>
          <div className='max-w-screen-md mx-auto'>
            <h2 className='text-3xl xl:text-4xl font-bold text-center mb-4 lg:mb-6'>
              FAQ Pentest
            </h2>
            <div className='flex flex-col gap-y-3'>
              {faqs &&
                faqs.map((item, i) => (
                  <div
                    tabIndex={0}
                    key={i}
                    className='collapse collapse-plus border border-[#0B2347] bg-[#0B2347] rounded-lg'
                  >
                    <div className='collapse-title p-4 pr-12 lg:pl-6 xl:text-xl font-bold text-cyan-400'>
                      <div className='flex gap-x-2'>
                        <span>{item.title}</span>
                      </div>
                    </div>
                    <div className='collapse-content px-4 lg:px-6'>
                      <div
                        className='text-base xl:text-lg'
                        dangerouslySetInnerHTML={{
                          __html: item.description,
                        }}
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

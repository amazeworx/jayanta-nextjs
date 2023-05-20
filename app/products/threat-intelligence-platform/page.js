import Image from 'next/image';

export default function RecordedFuture() {
  const features = [
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

  const support = [
    {
      title: 'Bantuan Teknis',
      description:
        '<p>Tim dukungan Recorded Future siap membantu Anda dengan masalah teknis yang mungkin Anda hadapi saat menggunakan platform ini. Mereka akan membantu Anda mengatasi masalah, memecahkan kesalahan, dan memastikan bahwa platform berfungsi dengan baik.</p>',
    },
    {
      title: 'Konsultasi Strategis',
      description:
        '<p>Tim ahli keamanan di Recorded Future dapat membantu Anda merumuskan strategi keamanan yang efektif dan berdasarkan intelijen ancaman. Mereka akan membantu Anda mengidentifikasi ancaman utama yang dihadapi organisasi Anda dan merencanakan tindakan pencegahan yang tepat.</p>',
    },
    {
      title: 'Rekomendasi Taktis',
      description:
        '<p>Selain strategi keamanan, tim Recorded Future juga dapat memberikan rekomendasi taktis untuk menghadapi ancaman siber. Mereka akan membantu Anda memahami teknik dan alat yang digunakan oleh aktor ancaman dan bagaimana melindungi organisasi Anda dari serangan.</p>',
    },
    {
      title: 'Pelatihan dan Edukasi',
      description:
        '<p>Recorded Future menyediakan pelatihan dan materi edukasi untuk membantu pengguna memahami dan memanfaatkan platform intelijen ancaman mereka secara maksimal. Ini mencakup panduan pengguna, video tutorial, dan sesi pelatihan langsung dengan instruktur.</p>',
    },
    {
      title: 'Integrasi dengan Alat Keamanan Lainnya',
      description:
        '<p>Tim dukungan Recorded Future akan membantu Anda mengintegrasikan platform dengan alat keamanan lainnya yang digunakan oleh organisasi Anda, seperti SIEM, firewall, dan sistem manajemen ancaman. Integrasi ini akan memungkinkan Anda untuk merespon insiden keamanan dengan lebih cepat dan efisien.</p>',
    },
    {
      title: 'Respons Cepat',
      description:
        '<p>Tim Recorded Future berkomitmen untuk memberikan dukungan respons cepat terhadap pertanyaan dan masalah yang diajukan oleh pelanggan. Mereka akan bekerja sama dengan Anda untuk memastikan bahwa masalah Anda diatasi dengan cepat dan efisien.</p>',
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
                <h3 className='mb-4'>Threat Intelligence Platform</h3>
                <h1 className='text-5xl font-bold mb-6'>Recorded Future</h1>
                <p className='text-lg mt-4'>
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
              <div className='w-1/3'>
                <div className='aspect-w-4 aspect-h-3'>
                  <div className='w-full h-full flex rounded-xl bg-brand-bluenight p-8'>
                    <Image
                      src='/images/products/recordedfuture.svg'
                      alt='Recorded Future'
                      className=''
                      width={433}
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
            <div className='mx-auto text-center'>
              <h2 className='text-4xl lg:text-4xl text-white font-bold mb-4'>
                Fitur Utama Recorded Future
              </h2>
              {/* <p className='text-base lg:text-2xl text-white mx-auto'>
              Berikut adalah beberapa manfaat penting dari melakukan penetrasi
              testing (pentest):
            </p> */}
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 mt-12 lg:mt-16'>
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
          </div>
        </div>
      </section>

      <section className='pt-4 pb-0 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-20'>
            <div className='mb-8'>
              <h2 className='text-4xl lg:text-4xl text-white font-bold mb-4'>
                Benefit yang didapat
              </h2>
              <div className='prose prose-lg max-w-none text-white'>
                <p>
                  Dengan memanfaatkan platform Recorded Future, organisasi Anda
                  akan merasakan berbagai keuntungan berikut:
                </p>
              </div>
            </div>
            <div className='bg-[#0B2347] bg-black/20 rounded-xl p-6 lg:p-10 text-white -mx-10'>
              <div className='grid grid-cols-2 gap-6 lg:gap-10'>
                {benefits &&
                  benefits.map((item, i) => (
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
            <div className='mb-8'>
              <h2 className='text-4xl lg:text-4xl text-white font-bold mb-4'>
                Dukungan Recorded Future
              </h2>
              <div className='prose prose-lg max-w-none text-white'>
                <p>
                  Dukungan Recorded Future adalah layanan yang disediakan oleh
                  tim ahli keamanan siber di Recorded Future untuk membantu
                  pelanggan dalam menggunakan platform intelijen ancaman mereka.
                  Dukungan ini mencakup berbagai aspek, termasuk:
                </p>
              </div>
            </div>
            <div className='bg-[#0B2347] bg-black/20 rounded-xl p-6 lg:p-10 text-white -mx-10'>
              <div className='grid grid-cols-2 gap-6 lg:gap-10'>
                {support &&
                  support.map((item, i) => (
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
            <div className='mt-8'>
              <div className='prose prose-lg max-w-none text-white'>
                <p>
                  Dengan dukungan yang kuat dari tim Recorded Future, Anda dapat
                  memastikan bahwa organisasi Anda dapat memanfaatkan platform
                  intelijen ancaman secara maksimal dan melindungi diri dari
                  ancaman siber yang terus berkembang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-4 pb-0 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-20'>
            <h2 className='text-4xl lg:text-4xl text-white font-bold text-center mb-8'>
              FAQ mengenai Recorded Future
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

import Image from 'next/image';
// import IntroText from '../../components/intro-text';

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

  const vulnerabilities = [
    {
      title: 'Kesalahan Pemrograman',
      description:
        '<p>Kesalahan dalam kode sumber aplikasi atau sistem operasi dapat menghasilkan kerentanan yang dapat dieksploitasi oleh peretas. Contoh umum termasuk buffer overflow, cross-site scripting (XSS), dan injection attacks (seperti SQL injection).</p>',
    },
    {
      title: 'Konfigurasi yang Tidak Aman',
      description:
        '<p>Pengaturan sistem yang tidak aman atau default yang tidak diubah dapat menyebabkan kerentanan. Contoh meliputi penggunaan protokol yang tidak aman, password default, atau akses yang tidak dibatasi.</p>',
    },
    {
      title: 'Kekurangan Keamanan Protokol',
      description:
        '<p>Beberapa protokol komunikasi memiliki kelemahan yang diketahui yang dapat dieksploitasi oleh peretas. Contoh meliputi SSL/TLS yang rentan terhadap serangan "man-in-the-middle", atau protokol Wi-Fi yang rentan terhadap "cracking".</p>',
    },
    {
      title: 'Perangkat Lunak Usang',
      description:
        '<p>Perangkat lunak yang tidak diperbarui atau tidak lagi didukung oleh pembuatnya dapat mengandung kerentanan yang diketahui dan tidak akan diperbaiki. Peretas sering menargetkan perangkat lunak yang ketinggalan zaman untuk mengeksploitasi celah keamanan ini.</p>',
    },
    {
      title: 'Kelemahan Fisik',
      description:
        '<p>Keamanan fisik yang tidak memadai, seperti kontrol akses yang lemah atau pengawasan yang tidak efektif, dapat menciptakan peluang bagi peretas untuk mendapatkan akses langsung ke sistem atau perangkat.</p>',
    },
    {
      title: 'Kesalahan Manusia',
      description:
        '<p>Kesalahan yang dilakukan oleh pengguna atau administrator sistem dapat menyebabkan kerentanan keamanan. Contoh meliputi penggunaan password yang lemah, pengungkapan informasi yang tidak sengaja, atau instalasi perangkat lunak yang tidak aman.</p>',
    },
  ];

  const methodology = [
    {
      title: 'Pra-penilaian',
      description:
        '<p>Kami akan bekerja sama dengan Anda untuk menentukan cakupan dan tujuan penetrasi testing, serta mengumpulkan informasi awal yang relevan tentang sistem Anda.</p>',
    },
    {
      title: 'Penilaian risiko',
      description:
        '<p>Tim kami akan melakukan penilaian risiko awal untuk mengidentifikasi area yang paling rentan dan memprioritaskan tes yang akan dilakukan.</p>',
    },
    {
      title: 'Pengujian',
      description:
        '<p>Kami akan melakukan serangkaian tes penetrasi, termasuk pemindaian kerentanan, serangan injeksi, pengujian autentikasi dan otorisasi, pengujian manajemen sesi, dan evaluasi konfigurasi keamanan.</p>',
    },
    {
      title: 'Analisis dan eksploitasi',
      description:
        '<p>Setelah mengidentifikasi kerentanan, tim kami akan mencoba mengeksploitasi celah keamanan untuk menguji sejauh mana potensi kerugian yang mungkin terjadi.</p>',
    },
    {
      title: 'Pelaporan',
      description:
        '<p>Anda akan menerima laporan rinci yang mencakup temuan kami, analisis risiko, dan rekomendasi praktis untuk mengatasi kerentanan yang ditemukan.</p>',
    },
    {
      title: 'Mitigasi',
      description:
        '<p>Setelah Anda mengimplementasikan rekomendasi yang disarankan, kami akan melakukan pengujian ulang untuk memastikan bahwa semua kerentanan telah diatasi dengan benar dan keamanan sistem Anda telah ditingkatkan.</p>',
    },
  ];

  const reporting = [
    {
      title: 'Ringkasan Eksekutif',
      description:
        '<p>Sebuah ikhtisar singkat tentang tujuan pengujian, metodologi yang digunakan, temuan utama, dan tingkat risiko yang terkait dengan setiap kerentanan yang ditemukan. Ringkasan eksekutif ini ditujukan untuk manajemen dan pemangku kepentingan non-teknis.</p>',
    },
    {
      title: 'Daftar Kerentanan',
      description:
        '<p>Sebuah daftar lengkap kerentanan yang diidentifikasi selama pentest, termasuk informasi tentang lokasi, tingkat risiko, dan dampak potensial dari setiap kerentanan.</p>',
    },
    {
      title: 'Analisis Risiko',
      description:
        '<p>Sebuah penilaian terperinci tentang risiko yang terkait dengan setiap kerentanan yang ditemukan, serta potensi dampaknya pada organisasi atau sistem yang diuji. Analisis risiko ini membantu tim keamanan dan manajemen dalam menentukan prioritas tindakan perbaikan.</p>',
    },
    {
      title: 'Deskripsi Teknis',
      description:
        '<p>Penjelasan rinci tentang setiap kerentanan yang diidentifikasi, termasuk bagaimana kerentanan itu ditemukan, cara kerjanya, dan bagaimana peretas dapat mengeksploitasi celah tersebut. Deskripsi teknis ini ditujukan untuk tim teknis yang akan bekerja pada mitigasi kerentanan.</p>',
    },
    {
      title: 'Bukti Penyusupan',
      description:
        '<p>Jika eksploitasi berhasil dilakukan selama pengujian, laporan pentest akan mencakup bukti penyusupan, seperti tangkapan layar, log, atau informasi lain yang menunjukkan bagaimana peretas dapat mengakses sistem.</p>',
    },
    {
      title: 'Rekomendasi',
      description:
        '<p>Laporan pentest harus mencakup rekomendasi praktis tentang cara mengatasi setiap kerentanan yang diidentifikasi. Rekomendasi ini harus disesuaikan dengan lingkungan yang diuji dan harus mencakup langkah-langkah spesifik yang dapat diambil untuk mengurangi risiko yang terkait dengan setiap kerentanan.</p>',
    },
    {
      title: 'Tindak Lanjut',
      description:
        '<p>Sebuah bagian yang mencakup informasi tentang bagaimana melanjutkan setelah pentest, termasuk kapan dan bagaimana melakukan pengujian ulang, serta saran untuk meningkatkan keamanan secara keseluruhan.</p>',
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
      <section className='relative pt-8 pb-8 xl:pt-24 xl:pb-16'>
        <Image
          src='/images/bg-banner.jpg'
          alt='Header'
          className='absolute inset-0 object-cover object-bottom h-full w-full'
          width={1512}
          height={1008}
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-brand-bluenight from-0% via-brand-bluenight/50 via-50% to-transparent'></div>
        <div className='relative z-10 mt-8 xl:mt-10 2xl:mt-16'>
          <div className='container max-w-screen-xl'>
            <div className='flex flex-wrap md:flex-nowrap md:gap-8 lg:gap-12 xl:gap-16'>
              <div className='w-full order-2 md:w-3/4 lg:w-2/3 md:order-1'>
                <h3 className='mb-4'>LAYANAN KAMI</h3>
                <h1 className='text-4xl xl:text-5xl font-bold mb-4 xl:mb-6'>
                  Penetration Testing
                </h1>
                <h2 className='text-lg xl:text-2xl font-semibold mb-4 xl:mb-6'>
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
              <div className='w-1/3 order-1 mb-6 md:mb-0 md:w-1/4 lg:w-1/3 md:order-2'>
                <div className='aspect-w-1 aspect-h-1'>
                  <div className='w-full h-full rounded-xl bg-brand-bluenight p-6 md:p-8 flex items-center justify-center'>
                    <Image
                      src='/images/icons/penetration-testing.png'
                      alt='Penetration Testing'
                      className=''
                      width={192}
                      height={192}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20'>
            <h2 className='text-3xl xl:text-4xl font-bold mb-4 lg:mb-6'>
              Apa itu Penetration Testing?
            </h2>
            <div className='prose xl:prose-lg max-w-none text-white'>
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
      </section>

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20'>
            <div className='mb-6 lg:mb-8 xl:mb-10 max-w-prose'>
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
            <div className=''>
              <div className='flex flex-col gap-y-4'>
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
        </div>
      </section>

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20'>
            <div className='mx-auto text-center'>
              <h2 className='text-3xl xl:text-4xl font-bold mb-4 lg:mb-6'>
                Jenis layanan Pentest
              </h2>
              {/* <p className='text-base lg:text-2xl text-white mx-auto'>
              Berikut adalah beberapa manfaat penting dari melakukan penetrasi
              testing (pentest):
            </p> */}
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6 mt-12 lg:mt-16'>
              {services &&
                services.map((item, i) => (
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

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20'>
            <div className='mb-8'>
              <h2 className='text-3xl xl:text-4xl font-bold mb-4 lg:mb-6'>
                Vulnerabilities
              </h2>
              <div className='prose prose-lg max-w-none text-white'>
                <p>
                  Kerentanan (vulnerabilities) adalah kelemahan dalam sistem,
                  aplikasi, atau jaringan yang dapat dieksploitasi oleh peretas
                  untuk mengakses atau mengendalikan sistem tersebut. Kerentanan
                  dapat berasal dari berbagai sumber, seperti kesalahan dalam
                  kode, konfigurasi yang tidak aman, atau kelemahan dalam
                  protokol komunikasi.
                </p>
                <p>Berikut adalah beberapa contoh umum dari kerentanan:</p>
              </div>
            </div>
            <div className='bg-[#0B2347] bg-black/20 rounded-xl p-6 lg:p-10 text-white -mx-10'>
              <div className='grid grid-cols-2 gap-6 lg:gap-10'>
                {vulnerabilities &&
                  vulnerabilities.map((item, i) => (
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
                  Mengidentifikasi dan mengatasi kerentanan adalah langkah
                  penting dalam melindungi sistem, aplikasi, dan jaringan dari
                  ancaman keamanan siber. Pentest, pemindaian kerentanan, dan
                  proses manajemen risiko yang efektif adalah bagian penting
                  dalam menjaga keamanan infrastruktur TI dan melindungi aset
                  digital Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20'>
            <div className='mb-8'>
              <h2 className='text-3xl xl:text-4xl font-bold mb-4 lg:mb-6'>
                Metodologi Penetration Testing
              </h2>
              <div className='prose prose-lg max-w-none text-white'>
                <p>
                  Kami menggunakan metodologi penetrasi testing yang terstruktur
                  dan komprehensif, yang meliputi langkah-langkah berikut:
                </p>
              </div>
            </div>
            <div className='bg-[#0B2347] bg-black/20 rounded-xl p-6 lg:p-10 text-white -mx-10'>
              <div className='grid grid-cols-2 gap-6 lg:gap-10'>
                {methodology &&
                  methodology.map((item, i) => (
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
            {/* <div className='mt-8'>
              <div className='prose prose-lg max-w-none text-white'>
                <p>
                  Mengidentifikasi dan mengatasi kerentanan adalah langkah
                  penting dalam melindungi sistem, aplikasi, dan jaringan dari
                  ancaman keamanan siber. Pentest, pemindaian kerentanan, dan
                  proses manajemen risiko yang efektif adalah bagian penting
                  dalam menjaga keamanan infrastruktur TI dan melindungi aset
                  digital Anda.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20'>
            <div className='mb-8'>
              <h2 className='text-3xl xl:text-4xl font-bold mb-4 lg:mb-6'>
                Pelaporan
              </h2>
              <div className='prose prose-lg max-w-none text-white'>
                <p>
                  Pelaporan adalah tahap penting dalam proses pentest, karena
                  menyediakan informasi rinci tentang temuan, analisis risiko,
                  dan rekomendasi untuk mengatasi kerentanan yang ditemukan.
                  Laporan pentest harus disusun dengan cara yang jelas, mudah
                  dipahami, dan dapat digunakan oleh berbagai pemangku
                  kepentingan, mulai dari tim teknis hingga manajemen eksekutif.
                </p>
                <p>
                  Berikut adalah beberapa elemen penting yang umumnya termasuk
                  dalam laporan pentest:
                </p>
              </div>
            </div>
            <div className='bg-[#0B2347] bg-black/20 rounded-xl p-6 lg:p-10 text-white -mx-10'>
              <div className='grid grid-cols-2 gap-6 lg:gap-10'>
                {reporting &&
                  reporting.map((item, i) => (
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
                  Laporan pentest harus disampaikan kepada klien dalam format
                  yang aman, seperti melalui portal klien yang aman atau melalui
                  enkripsi email. Setelah laporan diserahkan, pentester biasanya
                  akan bekerja sama dengan klien untuk membahas temuan, menjawab
                  pertanyaan, dan memberikan dukungan dalam mengatasi kerentanan
                  yang diidentifikasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20'>
            <h2 className='text-4xl lg:text-4xl text-white font-bold text-center mb-8'>
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

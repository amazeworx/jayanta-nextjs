import Image from 'next/image';

export default function About() {
  const services = [
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Penetration Testing',
      description:
        'Proses evaluasi keamanan sistem TI dengan cara meniru serangan dari peretas. Tujuannya adalah untuk mengidentifikasi dan memperbaiki kelemahan keamanan sebelum peretas sebenarnya mengeksploitasi celah tersebut.',
      link: '/services/penetration-testing',
    },
    {
      icon: '/images/icons/cyber-threat-intelligence.png',
      title: 'Cyber Threat Intelligence (CIT)',
      description:
        'Proses pengumpulan, analisis, dan berbagi informasi tentang ancaman siber untuk membantu organisasi dalam mengidentifikasi, memprioritaskan, dan merespon ancaman keamanan yang dihadapi.',
      link: '/services/cyber-threat-intelligence',
    },
    {
      icon: '/images/icons/vulnerability-assessment.png',
      title: 'Vulnerability Assessment',
      description:
        'Proses sistematis untuk mengidentifikasi, mengklasifikasikan, dan memprioritaskan kelemahan keamanan dalam sistem komputer, jaringan, dan aplikasi. Tujuannya adalah untuk membantu organisasi dalam mengurangi risiko yang dihadapi akibat celah keamanan tersebut.',
      link: '/services/vulnerability-assessment',
    },
    {
      icon: '/images/icons/incident-response-handling.png',
      title: 'Incident Response Handling',
      description:
        'Serangkaian langkah yang diambil oleh tim keamanan siber untuk mengidentifikasi, mengatasi, dan memulihkan dari insiden keamanan siber. Tujuannya adalah untuk meminimalkan dampak insiden pada bisnis dan mencegah insiden serupa di masa depan.',
      link: '/services/incident-response-handling',
    },
    {
      icon: '/images/icons/digital-forensics.png',
      title: 'Digital Forensics',
      description:
        'Proses pengumpulan, analisis, dan penyajian bukti digital yang berkaitan dengan kejahatan siber atau pelanggaran kebijakan. Tujuannya adalah untuk membantu dalam investigasi kejahatan siber dan memastikan bahwa bukti yang dikumpulkan dapat digunakan dalam proses hukum.',
      link: '/services/digital-forensic',
    },
    {
      icon: '/images/icons/litigation-support.png',
      title: 'Litigation Support',
      description:
        'Layanan yang membantu perusahaan dan pengacara dalam menghadapi tuntutan hukum yang berkaitan dengan keamanan siber. Layanan ini mencakup penyelidikan, analisis, dan presentasi bukti untuk membantu pengacara dalam membangun kasus yang kuat.',
      link: '/services/litigation-support',
    },
    {
      icon: '/images/icons/compliance-advisory.png',
      title: 'Compliance Advisory',
      description:
        'Layanan konsultasi yang membantu organisasi memahami dan memenuhi persyaratan kepatuhan keamanan siber yang relevan dengan industri mereka. Layanan ini mencakup pengkajian kepatuhan, pengembangan kebijakan, dan dukungan dalam implementasi praktik keamanan terbaik.',
      link: '/services/compliance-advisory',
    },
    {
      icon: '/images/icons/darkweb-monitoring.png',
      title: 'Dark Web Monitoring',
      description:
        'Layanan yang memantau aktivitas di dark web untuk mengidentifikasi informasi sensitif atau data yang telah dicuri dan dijual di pasar gelap. Tujuannya adalah untuk memberikan peringatan dini tentang kemungkinan ancaman keamanan dan membantu perusahaan mengambil tindakan pencegahan.',
      link: '/services/dark-web-monitoring',
    },
    {
      icon: '/images/icons/security-operation-center.png',
      title: 'Security Operation Center (SOC)',
      description:
        'Pusat pengendalian yang didedikasikan untuk mengawasi, mengelola, dan melindungi infrastruktur TI dari ancaman keamanan siber. SOC menggunakan teknologi, proses, dan personel yang terlatih untuk mendeteksi, menganalisis, dan merespon insiden keamanan secara real-time.',
      link: '#',
    },
  ];

  const certified = [
    {
      title: 'CISSP ',
      subtitle: 'Certified Information Systems Security Professional',
      description:
        '<p>Sertifikasi ini dikeluarkan oleh ISC² (International Information System Security Certification Consortium) dan dianggap sebagai salah satu sertifikasi keamanan siber yang paling dihormati di industri.</p>',
    },
    {
      title: 'CEH',
      subtitle: 'Certified Ethical Hacker',
      description:
        '<p>Sertifikasi ini dikeluarkan oleh EC-Council (International Council of E-Commerce Consultants) dan fokus pada kemampuan hacking etis serta teknik dan alat yang digunakan oleh peretas untuk mengeksploitasi sistem.</p>',
    },
    {
      title: 'CISM',
      subtitle: 'Certified Information Security Manager',
      description:
        '<p>Sertifikasi ini dikeluarkan oleh ISACA (Information Systems Audit and Control Association) dan dirancang untuk para profesional yang bertanggung jawab atas pengelolaan, desain, dan penilaian program keamanan informasi perusahaan.</p>',
    },
    {
      title: 'CompTIA',
      subtitle: 'Security+',
      description:
        'Sertifikasi dasar yang dikeluarkan oleh CompTIA, yang mencakup pengetahuan dasar tentang keamanan jaringan, kepatuhan, operasi keamanan, ancaman, dan kerentanan.',
    },
    {
      title: 'SSCP',
      subtitle: 'Systems Security Certified Practitioner',
      description:
        '<p>Sertifikasi ini juga dikeluarkan oleh ISC² dan ditujukan untuk para profesional keamanan IT yang terlibat dalam implementasi, pemantauan, dan administrasi infrastruktur keamanan TI.</p>',
    },
    {
      title: 'CCSP',
      subtitle: 'Certified Cloud Security Professional',
      description:
        '<p>Sertifikasi ini dikeluarkan oleh ISC² dan dirancang untuk para profesional keamanan yang fokus pada keamanan infrastruktur cloud dan pengelolaan risiko yang terkait dengan teknologi cloud.</p>',
    },
    {
      title: 'OSCP',
      subtitle: 'Offensive Security Certified Professional',
      description:
        '<p>Sertifikasi ini dikeluarkan oleh Offensive Security dan dianggap sebagai salah satu sertifikasi pentesting praktis yang paling dihormati, yang menekankan kemampuan praktis dan pemecahan masalah secara langsung dalam lingkungan yang diuji.</p>',
    },
    {
      title: 'CISA',
      subtitle: 'Certified Information Systems Auditor',
      description:
        '<p>Sertifikasi ini dikeluarkan oleh ISACA dan ditujukan untuk para profesional yang bertanggung jawab atas pengawasan, pemantauan, dan evaluasi sistem dan teknologi informasi organisasi.</p>',
    },
    {
      title: 'CRISC',
      subtitle: 'Certified in Risk and Information Systems Control',
      description:
        '<p>Sertifikasi ini dikeluarkan oleh ISACA dan ditujukan untuk para profesional yang bertanggung jawab atas identifikasi dan pengelolaan risiko keamanan informasi.</p>',
    },
    {
      title: 'GSEC',
      subtitle: 'GIAC Security Essentials Certification',
      description:
        '<p>Sertifikasi ini dikeluarkan oleh GIAC (Global Information Assurance Certification) dan mencakup berbagai topik keamanan siber, seperti manajemen akses, enkripsi, dan perlindungan jaringan.</p>',
    },
  ];

  const value = [
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Integritas',
      description:
        'Kami selalu bekerja dengan kejujuran dan transparansi, menjaga kepentingan terbaik klien kami sebagai prioritas utama kami.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Inovasi',
      description:
        'Kami terus-menerus mencari cara baru untuk meningkatkan layanan kami dan mengadaptasi teknologi terbaru untuk memenuhi kebutuhan keamanan siber yang selalu berubah.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Kepedulian',
      description:
        'Kami peduli tentang keamanan dan kesuksesan klien kami dan selalu siap untuk memberikan dukungan dan bantuan yang mereka butuhkan.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Profesionalisme',
      description:
        'Kami menjaga standar tertinggi dalam layanan kami dan berkomitmen untuk memberikan hasil yang melebihi harapan klien kami.',
      link: '',
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
        <div className='absolute inset-0 bg-gradient-to-t from-[#091D42] from-0% via-[#091D42]/50 via-50% to-transparent'></div>
        <div className='relative z-10 mt-8 xl:mt-10 2xl:mt-16'>
          <div className='container text-left text-white'>
            <div className='max-w-prose'>
              <h2 className='mb-4'>TENTANG KAMI</h2>
              <h1 className='text-4xl xl:text-5xl font-bold mb-4 xl:mb-6'>
                Solusi Keamanan Siber yang Profesional dan Terpercaya
              </h1>
              <p className='text-base/relaxed xl:text-lg mt-4'>
                Selamat datang di Jayanta.ID, perusahaan profesional yang
                berfokus pada solusi keamanan siber yang inovatif dan efektif.
                Didirikan pada tahun 2015, kami berkomitmen untuk membantu
                organisasi dan individu melindungi aset digital mereka dari
                ancaman siber yang terus berkembang.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='relative bg-[#091D42]'>
        <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 xl:gap-12 2xl:gap-16'>
            <div className='bg-black/20 rounded-xl p-6 lg:p-10 text-white'>
              <h3 className='text-3xl xl:text-4xl mb-4 font-bold text-cyan-400'>
                Visi
              </h3>
              <div className='text-base xl:text-lg text-white/80'>
                Visi kami adalah menjadi pemimpin industri dalam solusi keamanan
                siber, memberikan layanan yang unggul dan terpercaya untuk
                memastikan keamanan dan privasi data klien kami. Kami percaya
                bahwa keberhasilan kami bergantung pada kepuasan klien, dan oleh
                karena itu, kami selalu berusaha memberikan layanan yang
                melebihi harapan mereka.
              </div>
            </div>
            <div className='bg-black/20 rounded-xl p-6 lg:p-10 text-white'>
              <h3 className='text-3xl xl:text-4xl mb-4 font-bold text-cyan-400'>
                Misi
              </h3>
              <div className='text-base xl:text-lg text-white/80'>
                Misi kami adalah melindungi bisnis dan individu dari ancaman
                siber dengan menyediakan layanan keamanan siber yang
                komprehensif dan terintegrasi. Kami menyadari betapa pentingnya
                keamanan data dalam era digital saat ini, dan kami bekerja tanpa
                henti untuk menciptakan lingkungan yang aman dan terlindungi
                bagi klien kami.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-12 pb-12 md:pt-16 md:pb-16 lg:pb-24 xl:pt-24 relative z-10 bg-gradient-to-b from-[#091D42] to-brand-bluedark'>
        <div className='container'>
          <div className='max-w-prose mb-10'>
            <h2 className='text-3xl xl:text-4xl text-white font-bold mb-4'>
              Tim Kami
            </h2>
            <div className='prose xl:prose-lg text-white'>
              <p>
                Tim Jayanta.ID terdiri dari para ahli keamanan siber yang
                berpengalaman dan berdedikasi, yang memiliki pengetahuan dan
                keterampilan yang diperlukan untuk mengatasi berbagai tantangan
                keamanan. Para ahli kami memiliki sertifikasi industri yang
                diakui dan menjaga pengetahuan mereka tetap mutakhir dengan
                mengikuti tren dan perkembangan terbaru dalam bidang keamanan
                siber.
              </p>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4'>
            {certified &&
              certified.map((item, i) => (
                <div
                  className='bg-[#0B2347] border border-solid border-[#FFFFFF2B] rounded-xl p-5 lg:p-6 text-white'
                  key={i}
                >
                  <h3 className='text-3xl xl:text-4xl mb-1 font-bold text-cyan-400'>
                    {item.title}
                  </h3>
                  <h4 className='text-cyan-400 text-base/tight lg:text-lg/tight mb-4'>
                    {item.subtitle}
                  </h4>
                  <div className='text-[15px] leading-normal text-white/80'>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className='pt-8 pb-8 lg:pb-24 relative z-10 bg-brand-bluedark'>
        <div className='container'>
          <div className='mx-auto max-w-prose text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-[2.75rem] text-white font-bold mb-4'>
              Layanan Kami
            </h2>
            <p className='text-base lg:text-xl text-white mx-auto'>
              Kami menawarkan berbagai layanan keamanan siber yang dirancang
              untuk memenuhi kebutuhan spesifik klien kami, termasuk:
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 xl:gap-6 2xl:gap-8 mt-8 md:mt-12 lg:mt-12 xl:mt-12'>
            {services &&
              services.map((item, i) => (
                <a
                  href={item.link}
                  className='block bg-gradient-to-br from-[#1E2472] to-[#111543] rounded-xl p-5 md:p-6 lg:p-8 xl:p-10 text-white hover:shadow-[inset_0px_0px_0px_2px_#06b6d4] transition-all duration-500'
                  key={i}
                >
                  <div className='mb-4'>
                    <Image
                      src={item.icon}
                      alt=''
                      className='w-14 md:w-16 h-auto'
                      width={128}
                      height={128}
                      priority
                    />
                  </div>
                  <h3 className='text-xl md:text-2xl mb-3 font-bold text-cyan-400'>
                    {item.title}
                  </h3>
                  <div className='text-sm md:text-[15px] text-white/70'>
                    {item.description}
                  </div>
                </a>
              ))}
          </div>
        </div>
      </section>

      <section className='pt-8 pb-8 lg:pt-12 lg:pb-24 relative z-10 bg-gradient-to-b from-brand-bluedark to-[#091D42]'>
        <div className='container'>
          <div className='flex flex-wrap gap-y-4 xl:gap-16 xl:items-end'>
            <div className='mx-auto max-w-prose text-center'>
              <h2 className='text-3xl md:text-4xl lg:text-[2.75rem] text-white font-bold mb-4'>
                Nilai Kami
              </h2>
              <p className='text-base lg:text-xl text-white mx-auto'>
                Kami bangga dengan nilai-nilai yang kami pegang teguh dalam
                bisnis kami, yang meliputi:
              </p>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mt-6 lg:mt-12'>
            {value &&
              value.map((item, i) => (
                <div
                  className='bg-[#0B2347] border border-solid border-[#FFFFFF2B] rounded-xl p-6 lg:p-6 text-white'
                  key={i}
                >
                  <h3 className='text-2xl xl:text-3xl mb-4 font-bold text-cyan-400'>
                    {item.title}
                  </h3>
                  <div className='text-[15px] leading-normal xl:text-base text-white/80'>
                    {item.description}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className='pt-4 pb-0 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-6 lg:p-8 xl:px-20 xl:py-12'>
            <div className='prose prose-lg xl:prose-xl max-w-none text-white'>
              <p>
                Kami siap untuk membantu Anda menghadapi tantangan keamanan
                siber dan melindungi aset digital Anda. Hubungi kami hari ini
                untuk mengetahui lebih lanjut tentang layanan kami dan bagaimana
                kami dapat membantu Anda mencapai keamanan dan ketenangan
                pikiran yang Anda butuhkan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from 'next/image';

export default function BreachAttack() {
  const services = [
    {
      title: '1.	Penilaian Keamanan Jaringan',
      description:
        'Simulasi serangan pada jaringan Anda untuk menguji keefektifan langkah-langkah keamanan seperti firewall, sistem deteksi intrusi, dan kontrol akses.',
      link: '',
    },
    {
      title: '2.	Penilaian Keamanan Aplikasi',
      description:
        'Simulasi serangan pada aplikasi web dan seluler untuk mengidentifikasi kerentanan dalam kode, konfigurasi, dan integrasi sistem.',
      link: '',
    },
    {
      title: '3.	Penilaian Keamanan Endpoint',
      description:
        'Simulasi serangan pada perangkat endpoint seperti komputer, server, dan perangkat IoT untuk menguji keamanan perangkat keras dan perangkat lunak.',
      link: '',
    },
    {
      title: '4.	Penilaian Keamanan Sistem',
      description:
        'Simulasi serangan pada sistem TI penting, seperti server database atau sistem manajemen informasi, untuk menguji keamanan data dan proses bisnis.',
      link: '',
    },
    {
      title: '5.	Latihan Respon Insiden',
      description:
        'Simulasi serangan siber untuk melatih tim keamanan Anda dalam mendeteksi, merespon, dan memulihkan dari insiden keamanan siber. Latihan ini membantu meningkatkan kesiapan tim dan memperkuat prosedur respon insiden yang ada.',
      link: '',
    },
  ];

  const why = [
    {
      title: '1.	Evaluasi Keamanan yang Realistis',
      description:
        '<p>Layanan BAS menggabungkan berbagai teknik dan skenario serangan yang digunakan oleh aktor ancaman nyata, memberikan gambaran yang akurat tentang seberapa baik sistem Anda melawan ancaman yang ada.</p>',
    },
    {
      title: '2.	Identifikasi Titik Lemah',
      description:
        '<p>Setelah mengidentifikasi titik lemah, layanan BAS akan memberikan rekomendasi konkret untuk mengatasi celah tersebut, memungkinkan Anda untuk mengoptimalkan strategi keamanan dan lebih efektif melindungi organisasi Anda dari serangan.</p>',
    },
    {
      title: '3.	Optimalisasi Strategi Keamanan',
      description:
        '<p>Kami akan melakukan serangkaian tes penetrasi, termasuk pemindaian kerentanan, serangan injeksi, pengujian autentikasi dan otorisasi, pengujian manajemen sesi, dan evaluasi konfigurasi keamanan.</p>',
    },
    {
      title: '4.	Meningkatkan Kesiapan Tim',
      description:
        '<p>Simulasi serangan tidak hanya membantu mengidentifikasi kelemahan dalam sistem Anda, tetapi juga memberikan kesempatan bagi tim keamanan Anda untuk berlatih merespon insiden dan meningkatkan kesiapan mereka dalam menghadapi serangan nyata.</p>',
    },
    {
      title: '5.	Kepatuhan Regulasi',
      description:
        '<p>Dalam beberapa industri, seperti perbankan dan layanan kesehatan, regulasi memerlukan penilaian keamanan berkala. Layanan BAS dapat membantu organisasi memenuhi persyaratan ini dengan menyediakan bukti bahwa langkah-langkah keamanan yang tepat telah diambil untuk melindungi data sensitif dan sistem penting.</p>',
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
                  Breach and Attack Simulation
                </h1>
                <h2 className='text-2xl font-semibold mb-6'>
                  Tingkatkan Keamanan Sistem Anda
                </h2>
                <p className='text-base/relaxed xl:text-lg mt-4'>
                  Dalam dunia keamanan siber yang terus berkembang, ancaman baru
                  dan teknik serangan yang lebih canggih terus bermunculan.
                  Untuk melindungi data, sistem, dan reputasi organisasi,
                  penting untuk memastikan bahwa langkah-langkah keamanan yang
                  ada mampu menghadapi ancaman yang ada. Layanan Breach and
                  Attack Simulation (BAS) dirancang untuk menguji dan
                  mengoptimalkan strategi keamanan Anda melalui simulasi
                  serangan yang otentik dan terencana.
                </p>
              </div>
              <div className='w-1/3 order-1 mb-6 md:mb-0 md:w-1/4 lg:w-1/3 md:order-2'>
                <div className='aspect-w-1 aspect-h-1'>
                  <div className='w-full h-full rounded-xl bg-brand-bluenight p-6 md:p-8 flex items-center justify-center'>
                    <Image
                      src='/images/icons/breach-attack-simulation.png'
                      alt='Breach Attack Simulation'
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
            <div className='mb-8'>
              <h2 className='text-3xl xl:text-4xl font-bold mb-4 lg:mb-6'>
                Mengapa Memilih Layanan Breach and Attack Simulation?
              </h2>
            </div>
            <div className='bg-[#0B2347] bg-black/20 rounded-xl p-6 lg:p-10 text-white -mx-10'>
              <div className='grid grid-cols-1 gap-6 lg:gap-10'>
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

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20'>
            <div className=''>
              <h2 className='text-4xl lg:text-4xl/snug text-white font-bold mb-4'>
                Layanan Kami
              </h2>
              <div className='prose prose-lg max-w-none text-white'>
                <p>
                  Layanan Breach and Attack Simulation kami mencakup berbagai
                  aspek keamanan siber, termasuk:
                </p>
              </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6 mt-12 lg:mt-12'>
              {services &&
                services.map((item, i) => (
                  <div
                    className='bg-[#0B2347] border border-solid border-[#ffffff1a] rounded-xl p-6 lg:p-8 text-white'
                    key={i}
                  >
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
            <h2 className='text-4xl lg:text-4xl text-white font-bold text-center mb-8'>
              FAQ tentang Breach and Attack Simulation
            </h2>
            <div className='flex flex-col gap-y-4 mt-10'>
              <div
                tabIndex={0}
                className='collapse collapse-plus border border-[#0B2347] bg-[#0B2347] rounded-lg'
              >
                <div className='collapse-title pl-8 py-6 text-xl font-bold text-cyan-400'>
                  <div className='flex gap-x-2'>
                    <span>Apa itu Breach and Attack Simulation (BAS)?</span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Breach and Attack Simulation (BAS) adalah layanan keamanan
                      siber yang dirancang untuk menguji dan mengoptimalkan
                      strategi keamanan organisasi melalui simulasi serangan
                      yang otentik dan terencana. Layanan ini membantu
                      mengidentifikasi kelemahan keamanan, mengoptimalkan
                      strategi keamanan, dan meningkatkan kesiapan tim keamanan
                      dalam menghadapi serangan nyata.
                    </p>
                  </div>
                </div>
              </div>
              <div
                tabIndex={0}
                className='collapse collapse-plus border border-[#0B2347] bg-[#0B2347] rounded-lg'
              >
                <div className='collapse-title pl-8 py-6 text-xl font-bold text-cyan-400'>
                  <div className='flex gap-x-2'>
                    <span>Apakah BAS sama dengan penetration testing?</span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      BAS dan penetration testing memiliki tujuan yang sama,
                      yaitu mengidentifikasi kelemahan dalam sistem keamanan
                      organisasi. Namun, BAS lebih fokus pada simulasi serangan
                      secara otomatis dan berkelanjutan, menggunakan teknologi
                      canggih untuk mengevaluasi seberapa baik sistem Anda
                      melawan ancaman yang ada. Penetration testing, di sisi
                      lain, melibatkan penilaian keamanan yang lebih manual dan
                      rinci, yang biasanya dilakukan oleh ahli keamanan siber.
                    </p>
                  </div>
                </div>
              </div>
              <div
                tabIndex={0}
                className='collapse collapse-plus border border-[#0B2347] bg-[#0B2347] rounded-lg'
              >
                <div className='collapse-title pl-8 py-6 text-xl font-bold text-cyan-400'>
                  <div className='flex gap-x-2'>
                    <span>Apakah layanan BAS cocok untuk organisasi saya?</span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Layanan BAS cocok untuk organisasi dari berbagai ukuran
                      dan sektor industri yang ingin mengevaluasi dan
                      mengoptimalkan strategi keamanan mereka. Dengan
                      mengidentifikasi kelemahan keamanan dan memberikan
                      rekomendasi untuk mengatasi celah tersebut, BAS membantu
                      organisasi meminimalkan risiko serangan siber dan
                      melindungi data serta sistem mereka.
                    </p>
                  </div>
                </div>
              </div>
              <div
                tabIndex={0}
                className='collapse collapse-plus border border-[#0B2347] bg-[#0B2347] rounded-lg'
              >
                <div className='collapse-title pl-8 py-6 text-xl font-bold text-cyan-400'>
                  <div className='flex gap-x-2'>
                    <span>Berapa lama proses BAS?</span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Durasi proses BAS dapat bervariasi tergantung pada
                      kompleksitas sistem dan infrastruktur organisasi Anda,
                      serta cakupan dan tujuan penilaian. Setelah menentukan
                      ruang lingkup penilaian, tim kami akan bekerja dengan Anda
                      untuk mengembangkan jadwal yang sesuai dengan kebutuhan
                      organisasi Anda.
                    </p>
                  </div>
                </div>
              </div>
              <div
                tabIndex={0}
                className='collapse collapse-plus border border-[#0B2347] bg-[#0B2347] rounded-lg'
              >
                <div className='collapse-title pl-8 py-6 text-xl font-bold text-cyan-400'>
                  <div className='flex gap-x-2'>
                    <span>Bagaimana hasil layanan BAS disajikan?</span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Setelah penilaian BAS selesai, kami akan menyediakan
                      laporan yang mendalam yang mencakup temuan penilaian,
                      rekomendasi untuk mengatasi celah keamanan, dan panduan
                      langkah demi langkah untuk mengimplementasikan perbaikan.
                      Laporan ini akan membantu Anda memahami kelemahan sistem
                      Anda dan mengambil tindakan yang diperlukan untuk
                      meningkatkan keamanan organisasi Anda.
                    </p>
                  </div>
                </div>
              </div>
              <div
                tabIndex={0}
                className='collapse collapse-plus border border-[#0B2347] bg-[#0B2347] rounded-lg'
              >
                <div className='collapse-title pl-8 py-6 text-xl font-bold text-cyan-400'>
                  <div className='flex gap-x-2'>
                    <span>
                      Apakah data organisasi saya aman selama proses BAS?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Keamanan data dan sistem Anda adalah prioritas utama kami.
                      Selama proses BAS, tim kami akan bekerja dengan Anda untuk
                      memastikan bahwa semua tindakan yang diambil tidak
                      mengganggu operasi bisnis Anda atau mengekspos data
                      sensitif. Selain itu, kami akan mematuhi semua persyaratan
                      kepatuhan dan kebijakan keamanan yang relevan untuk
                      memastikan keamanan data Anda.
                    </p>
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

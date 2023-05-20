import Image from 'next/image';

export default function DarkWebMonitoring() {
  const services = [
    {
      title: 'Pemantauan 24/7',
      description:
        'Tim ahli keamanan kami akan memantau Dark Web secara terus-menerus, mencari informasi yang terkait dengan bisnis Anda, seperti email karyawan, kata sandi, dan data keuangan. Pemantauan ini akan dilakukan 24/7 untuk memastikan deteksi dini atas potensi ancaman.',
      link: '',
    },
    {
      title: 'Deteksi dan Peringatan Real-time',
      description:
        'Jika data atau informasi sensitif perusahaan Anda ditemukan di Dark Web, sistem kami akan segera mengirimkan peringatan kepada Anda, sehingga Anda dapat mengambil langkah-langkah pencegahan yang diperlukan.',
      link: '',
    },
    {
      title: 'Laporan dan Analisis',
      description:
        'Anda akan menerima laporan berkala yang mencakup temuan pemantauan, analisis tren ancaman, dan rekomendasi tindakan yang dapat diambil untuk melindungi bisnis Anda dari ancaman Dark Web.',
      link: '',
    },
    {
      title: 'Konsultasi dan Dukungan',
      description:
        'Tim ahli kami akan selalu siap untuk memberikan dukungan dan konsultasi mengenai cara terbaik untuk melindungi bisnis Anda dari ancaman keamanan siber yang berasal dari Dark Web.',
      link: '',
    },
  ];

  const why = [
    {
      title: 'Deteksi Kerentanan',
      description:
        '<p>Layanan Vulnerability Assessment membantu Anda mengidentifikasi potensi celah keamanan dalam sistem dan aplikasi Anda, termasuk perangkat keras, perangkat lunak, dan konfigurasi yang rentan terhadap serangan.</p>',
    },
    {
      title: 'Prioritasi Risiko',
      description:
        '<p>Dengan menilai risiko yang terkait dengan setiap kerentanan yang ditemukan, layanan ini memungkinkan Anda untuk mengalokasikan sumber daya keamanan Anda dengan lebih efektif, dengan fokus pada masalah yang paling kritis</p>',
    },
    {
      title: 'Mitigasi Kerentanan',
      description:
        '<p>Layanan kami menyediakan rekomendasi praktis untuk mengatasi kerentanan yang ditemukan, sehingga Anda dapat mengurangi risiko serangan siber dan melindungi data serta sistem organisasi Anda.</p>',
    },
    {
      title: 'Kepatuhan Regulasi',
      description:
        '<p>Dalam beberapa industri, seperti perbankan dan layanan kesehatan, regulasi memerlukan penilaian keamanan berkala. Layanan Vulnerability Assessment dapat membantu organisasi memenuhi persyaratan ini dengan menyediakan bukti bahwa langkah-langkah keamanan yang tepat telah diambil untuk melindungi data sensitif dan sistem penting.</p>',
    },
  ];

  const methodology = [
    {
      title: '1. Pengumpulan Data',
      description:
        '<p>Proses ini melibatkan pengumpulan informasi tentang infrastruktur TI dan aplikasi organisasi, seperti arsitektur jaringan, sistem operasi, perangkat keras, perangkat lunak, dan konfigurasi sistem.</p>',
    },
    {
      title: '2. Pemindaian Kerentanan',
      description:
        '<p>Menggunakan alat pemindaian kerentanan otomatis, seperti Nessus atau OpenVAS, untuk mengidentifikasi celah keamanan yang mungkin ada dalam sistem dan aplikasi. Pemindaian ini bisa bersifat pasif, di mana alat memindai sistem tanpa mengganggu operasi normal, atau aktif, di mana alat mencoba mengeksploitasi kerentanan yang ditemukan.</p>',
    },
    {
      title: '3. Analisis Manual',
      description:
        '<p>Ahli keamanan siber melakukan analisis manual untuk melengkapi pemindaian otomatis. Ini melibatkan peninjauan kode, konfigurasi, dan dokumentasi untuk mengidentifikasi kerentanan yang mungkin tidak terdeteksi oleh alat pemindaian otomatis.</p>',
    },
    {
      title: '4. Validasi Kerentanan',
      description:
        '<p>Tim keamanan akan mengkonfirmasi keberadaan kerentanan yang ditemukan untuk memastikan bahwa temuan tersebut akurat dan bukan positif palsu.</p>',
    },
    {
      title: '5. Klasifikasi dan Penilaian Risiko',
      description:
        '<p>Setelah kerentanan diidentifikasi dan divalidasi, tim keamanan akan mengklasifikasikannya berdasarkan tingkat risiko yang mereka representasikan. Ini melibatkan penilaian dampak potensial pada organisasi jika kerentanan dieksploitasi, serta kemungkinan eksploitasi oleh penyerang.</p>',
    },
    {
      title: '6. Mitigasi dan Rekomendasi',
      description:
        '<p>Berdasarkan penilaian risiko, tim keamanan akan menyusun rekomendasi untuk mengatasi kerentanan yang ditemukan. Ini termasuk langkah-langkah teknis seperti pembaruan perangkat lunak, perubahan konfigurasi, atau peningkatan kontrol akses, serta langkah-langkah prosedural seperti pelatihan karyawan atau perubahan kebijakan keamanan.</p>',
    },
    {
      title: '7.	Pelaporan',
      description:
        '<p>Setelah proses penilaian selesai, tim keamanan akan menyusun laporan yang mencakup temuan penilaian, klasifikasi risiko, dan rekomendasi untuk mengatasi kerentanan yang ditemukan.</p>',
    },
    {
      title: '8. Tindak Lanjut dan Pemantauan',
      description:
        '<p>Setelah rekomendasi diterapkan, tim keamanan akan melakukan tindak lanjut dan pemantauan untuk memastikan bahwa kerentanan telah ditangani secara efektif dan sistem tetap aman dari ancaman yang ada.</p>',
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
                <h3 className='mb-4'>LAYANAN KAMI</h3>
                <h1 className='text-5xl font-bold mb-6'>Dark Web Monitoring</h1>
                <h2 className='text-2xl font-semibold mb-6'>
                  Lindungi Bisnis Anda dari Ancaman yang Tak Terlihat
                </h2>
                <p className='text-lg mt-4'>
                  Di era digital saat ini, ancaman keamanan siber tidak hanya
                  berasal dari permukaan internet yang kita kenal. Bahaya yang
                  tak terlihat juga mengintai di Dark Web, bagian tersembunyi
                  dari internet di mana penjahat siber sering beroperasi dan
                  berbagi informasi yang dicuri. Layanan Dark Web Monitoring
                  kami dirancang untuk membantu melindungi bisnis Anda dari
                  ancaman yang berasal dari kedalaman ini, dengan memantau,
                  mendeteksi, dan melaporkan aktivitas mencurigakan yang
                  melibatkan data atau informasi perusahaan Anda.
                </p>
              </div>
              <div className='w-1/3'>
                <div className='aspect-w-1 aspect-h-1'>
                  <div className='w-full h-full rounded-xl bg-brand-bluenight p-8 flex items-center justify-center'>
                    <Image
                      src='/images/icons/darkweb-monitoring.png'
                      alt='Dark Web Monitoring'
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

      <section className='pt-4 pb-0 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-20'>
            <h2 className='text-4xl font-bold mb-6'>
              Mengapa Dark Web Monitoring Penting?
            </h2>
            <div className='prose prose-lg max-w-none text-white'>
              <p>
                Dark Web menjadi tempat yang ideal bagi penjahat siber untuk
                menjual dan membeli informasi yang dicuri, seperti data pribadi,
                kartu kredit, dan informasi login. Dengan memantau aktivitas di
                Dark Web, Anda dapat mengidentifikasi jika data perusahaan atau
                karyawan Anda telah dicuri atau dikompromikan, sehingga Anda
                dapat mengambil tindakan segera untuk melindungi bisnis Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-4 pb-0 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-20'>
            <div className=''>
              <h2 className='text-4xl lg:text-4xl/snug text-white font-bold mb-4'>
                Fitur Utama Layanan Dark Web Monitoring
              </h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 mt-12 lg:mt-12'>
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

      <section className='pt-4 pb-0 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-20'>
            <div className='mb-8'>
              <h2 className='text-4xl lg:text-4xl text-white font-bold mb-4'>
                Mengapa Memilih Layanan Vulnerability Assessment?
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

      <section className='pt-4 pb-0 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-20'>
            <h2 className='text-4xl/snug font-bold mb-6'>
              Manfaat Dark Web Monitoring
            </h2>
            <div className='prose prose-lg max-w-none text-white'>
              <ul className='checklist-ul'>
                <li>
                  Mendeteksi kebocoran data secara dini, sehingga Anda dapat
                  mengambil tindakan segera untuk mencegah kerugian lebih
                  lanjut.
                </li>
                <li>
                  Mengurangi risiko serangan siber yang berasal dari informasi
                  yang dicuri atau dikompromikan.
                </li>
                <li></li>
                <li>
                  Memberi Anda pemahaman yang lebih baik tentang ancaman
                  keamanan yang dihadapi oleh bisnis Anda.
                </li>
                <li>
                  Meningkatkan kepercayaan pelanggan dan reputasi bisnis dengan
                  menunjukkan komitmen Anda terhadap keamanan siber.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-4 pb-0 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-20'>
            <h2 className='text-4xl lg:text-4xl text-white font-bold text-center mb-8'>
              FAQ Mengenai Dark Web Monitoring
            </h2>
            <div className='flex flex-col gap-y-4 mt-10'>
              <div
                tabIndex={0}
                className='collapse collapse-plus border border-[#0B2347] bg-[#0B2347] rounded-lg'
              >
                <div className='collapse-title pl-8 py-6 text-xl font-bold text-cyan-400'>
                  <div className='flex gap-x-2'>
                    <span>Apa itu Dark Web Monitoring?</span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Dark Web Monitoring adalah layanan yang secara proaktif
                      memantau Dark Web untuk mencari informasi atau data yang
                      terkait dengan bisnis atau individu Anda yang mungkin
                      telah dicuri, dibocorkan, atau dikompromikan. Layanan ini
                      bertujuan untuk memberi peringatan dini tentang potensi
                      ancaman keamanan siber yang dapat mempengaruhi Anda atau
                      bisnis Anda.
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
                    <span>Apa perbedaan antara Dark Web dan Deep Web?</span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Deep Web adalah bagian dari internet yang tidak diindeks
                      oleh mesin pencari tradisional, seperti Google. Dark Web
                      adalah bagian kecil dari Deep Web yang hanya dapat diakses
                      menggunakan perangkat lunak khusus seperti Tor. Dark Web
                      sering dikaitkan dengan aktivitas ilegal dan penjahat
                      siber.
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
                      Bagaimana cara kerja layanan Dark Web Monitoring?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Layanan Dark Web Monitoring menggunakan teknologi canggih
                      dan tim ahli keamanan siber untuk memantau Dark Web secara
                      terus-menerus, mencari informasi yang terkait dengan Anda
                      atau bisnis Anda. Jika data atau informasi sensitif
                      ditemukan, layanan ini akan mengirimkan peringatan kepada
                      Anda agar Anda dapat mengambil tindakan pencegahan yang
                      diperlukan.
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
                      Bagaimana hasil Vulnerability Assessment disajikan?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Hasil Vulnerability Assessment biasanya disajikan dalam
                      bentuk laporan yang mencakup temuan penilaian, klasifikasi
                      risiko, dan rekomendasi untuk mengatasi kerentanan yang
                      ditemukan. Laporan ini akan membantu organisasi memahami
                      kelemahan sistem mereka dan mengambil tindakan yang
                      diperlukan untuk meningkatkan keamanan.
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
                    <span>Apakah Dark Web Monitoring melanggar hukum?</span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Tidak, Dark Web Monitoring adalah layanan keamanan siber
                      yang sah yang dirancang untuk membantu melindungi Anda dan
                      bisnis Anda dari ancaman yang berasal dari Dark Web.
                      Layanan ini tidak terlibat dalam aktivitas ilegal dan
                      hanya berfokus pada identifikasi informasi yang dicuri
                      atau dikompromikan yang mungkin mempengaruhi Anda atau
                      bisnis Anda.
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
                      Apakah Dark Web Monitoring dapat mencegah serangan siber?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Dark Web Monitoring bukanlah solusi pencegahan serangan
                      siber, tetapi lebih berfungsi sebagai sistem peringatan
                      dini yang dapat membantu Anda mengidentifikasi jika data
                      Anda telah dikompromikan. Dengan mengetahui bahwa
                      informasi Anda telah bocor, Anda dapat mengambil
                      langkah-langkah pencegahan yang diperlukan untuk
                      melindungi bisnis Anda dan mencegah serangan lebih lanjut.
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
                      Bagaimana cara melindungi bisnis saya dari ancaman Dark
                      Web?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Selain menggunakan layanan Dark Web Monitoring, Anda dapat
                      melindungi bisnis Anda dari ancaman Dark Web dengan
                      mengimplementasikan praktik keamanan siber yang baik,
                      seperti menjaga perangkat lunak antivirus dan sistem
                      operasi Anda up-to-date, mengenkripsi data sensitif, dan
                      melatih karyawan Anda tentang keamanan siber dan bahaya
                      phishing.
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
                      Seberapa sering saya harus menggunakan layanan Dark Web
                      Monitoring?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Layanan Dark Web Monitoring idealnya harus digunakan
                      secara terus-menerus, karena ancaman keamanan siber selalu
                      ada dan berkembang. Pemantauan 24/7 memastikan bahwa Anda
                      mendapatkan peringatan dini tentang potensi ancaman dan
                      memungkinkan Anda untuk mengambil tindakan segera untuk
                      melindungi bisnis Anda.
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

import Image from 'next/image';

export const metadata = {
  title: 'Layanan Cyber Threat Intelligence | Jayanta.id',
  description:
    'Layanan Cyber Threat Intelligence kami dirancang untuk membantu organisasi dalam mengidentifikasi, menganalisis, dan menghadapi ancaman siber yang terus berkembang, sehingga memungkinkan mereka untuk melindungi aset digital mereka dan menjaga kelangsungan operasional.',
};

export default function CyberThreatIntelligence() {
  const services = [
    {
      title: 'Pengumpulan Intelijen',
      description:
        'Tim ahli kami akan mengumpulkan intelijen ancaman siber dari berbagai sumber, termasuk sumber terbuka, jaringan pribadi, dan mitra industri. Proses ini memungkinkan kami untuk mengidentifikasi ancaman yang mungkin berdampak pada organisasi Anda, serta mengevaluasi tingkat risikonya.',
      link: '',
    },
    {
      title: 'Analisis Ancaman',
      description:
        'Kami akan menganalisis intelijen yang dikumpulkan untuk mengidentifikasi pola, tren, dan taktik yang digunakan oleh aktor ancaman. Hasil analisis ini akan membantu Anda dalam memahami ancaman yang dihadapi dan bagaimana cara terbaik untuk melindungi organisasi Anda.',
      link: '',
    },
    {
      title: 'Penyajian Intelijen',
      description:
        'Tim kami akan menyajikan hasil analisis ancaman dalam format yang mudah dipahami, seperti laporan, dashboard, atau peringatan. Informasi ini akan membantu Anda membuat keputusan yang lebih baik tentang bagaimana mengalokasikan sumber daya keamanan dan merespon ancaman yang dihadapi.',
      link: '',
    },
    {
      title: 'Konsultasi dan Dukungan',
      description:
        'Layanan Cyber Threat Intelligence kami mencakup konsultasi dan dukungan dari tim ahli kami sepanjang proses. Kami akan membantu Anda dalam menginterpretasikan intelijen yang disajikan, serta memberikan rekomendasi tentang bagaimana menghadapi ancaman dan mengurangi risiko.',
      link: '',
    },
    {
      title: 'Pembaruan dan Penyesuaian',
      description:
        'Ancaman siber terus berkembang, sehingga layanan Cyber Threat Intelligence kami dirancang untuk beradaptasi dengan perubahan ini. Kami akan terus memantau ancaman dan menyediakan pembaruan serta penyesuaian yang diperlukan untuk menjaga keamanan organisasi Anda.',
      link: '',
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
                  Cyber Threat Intelligence
                </h1>
                <p className='text-base/relaxed xl:text-lg mt-4'>
                  Di era digital yang semakin kompleks dan saling terhubung,
                  ancaman keamanan siber menjadi tantangan yang harus dihadapi
                  oleh organisasi dari berbagai industri. Layanan Cyber Threat
                  Intelligence kami dirancang untuk membantu organisasi dalam
                  mengidentifikasi, menganalisis, dan menghadapi ancaman siber
                  yang terus berkembang, sehingga memungkinkan mereka untuk
                  melindungi aset digital mereka dan menjaga kelangsungan
                  operasional.
                </p>
              </div>
              <div className='w-1/3 order-1 mb-6 md:mb-0 md:w-1/4 lg:w-1/3 md:order-2'>
                <div className='aspect-w-1 aspect-h-1'>
                  <div className='w-full h-full rounded-xl bg-brand-bluenight p-6 md:p-8 flex items-center justify-center'>
                    <Image
                      src='/images/icons/cyber-threat-intelligence.png'
                      alt='Cyber Threat Intelligence'
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
          <div className='bg-black/20 rounded-none md:rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20 -mx-4 md:-mx-0'>
            <h2 className='text-3xl xl:text-4xl font-bold mb-4 lg:mb-6'>
              Mengapa Layanan Cyber Threat Intelligence Penting?
            </h2>
            <div className='prose xl:prose-lg max-w-none text-white'>
              <ul className='checklist-ul'>
                <li>
                  Mendeteksi ancaman siber secara proaktif sebelum menimbulkan
                  kerusakan
                </li>
                <li>
                  Melindungi aset dan informasi penting dari serangan keamanan
                  siber
                </li>
                <li>
                  Mengurangi risiko kehilangan data, gangguan operasional, dan
                  kerugian reputasi
                </li>
                <li>
                  Meningkatkan kesiapsiagaan dan respons terhadap insiden
                  keamanan siber
                </li>
                <li>
                  Memberdayakan pengambilan keputusan bisnis yang didasarkan
                  pada intelijen ancaman yang akurat dan tepat waktu
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-none md:rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20 -mx-4 md:-mx-0'>
            <div className=''>
              <h2 className='text-4xl lg:text-4xl/snug text-white font-bold mb-4'>
                Apa yang Dapat Anda Dapatkan dari Layanan Cyber Threat
                Intelligence Kami?
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

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-none md:rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20 -mx-4 md:-mx-0'>
            <div className='mb-8'>
              <h2 className='text-4xl lg:text-4xl/snug text-white font-bold mb-4'>
                Konsep Cyber Security lain yang sering disalah artikan sebagai
                Cyber Threat Intelligence (CTI)
              </h2>
              <div className='prose xl:prose-lg max-w-none text-white'>
                <p>
                  Beberapa konsep yang sering disalahartikan sebagai Cyber
                  Threat Intelligence (CTI) atau dianggap sama dengan CTI
                  meliputi:
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-y-4'>
              <div
                tabIndex={0}
                className='collapse collapse-plus border border-[#0B2347] bg-[#0B2347] rounded-lg'
              >
                <div className='collapse-title pl-8 py-6 text-xl font-bold text-cyan-400'>
                  <div className='flex gap-x-2'>
                    <span>
                      1. Security Information and Event Management (SIEM)
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/90 py-2'>
                    <p>
                      SIEM adalah solusi yang mengumpulkan dan menganalisis data
                      log dan peristiwa keamanan dari berbagai sumber di
                      infrastruktur TI organisasi. Meskipun SIEM digunakan untuk
                      deteksi insiden keamanan, ia tidak secara langsung fokus
                      pada pengumpulan dan analisis informasi tentang ancaman
                      siber seperti CTI.
                    </p>
                    <p>
                      Perbedaan utama antara Cyber Threat Intelligence (CTI) dan
                      Security Information and Event Management (SIEM) terletak
                      pada fokus, metode, dan cara kedua teknologi ini digunakan
                      dalam mengelola keamanan siber.
                    </p>
                    <table className='table-fixed my-8'>
                      <thead>
                        <tr>
                          <th className='w-2/12 text-white'></th>
                          <th className='w-5/12 text-white'>
                            Cyber Threat Intelligence (CTI)
                          </th>
                          <th className='w-5/12 text-white'>
                            Security Information and Event Management (SIEM)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Fokus</th>
                          <td>
                            Fokus CTI adalah pada pengumpulan, analisis, dan
                            penyajian informasi tentang ancaman siber yang
                            relevan bagi organisasi. CTI membantu organisasi
                            memahami ancaman yang dihadapi, merencanakan
                            strategi, dan mengambil tindakan pencegahan yang
                            sesuai.
                          </td>
                          <td>
                            SIEM fokus pada pemantauan, pengumpulan, dan
                            analisis data log dan peristiwa keamanan dari
                            berbagai sumber dalam infrastruktur TI organisasi.
                            SIEM membantu organisasi mendeteksi dan mengatasi
                            insiden keamanan serta menjaga kepatuhan terhadap
                            regulasi dan kebijakan keamanan.
                          </td>
                        </tr>
                        <tr>
                          <th>Metode</th>
                          <td>
                            CTI melibatkan pengumpulan data dari berbagai
                            sumber, seperti sumber terbuka, jaringan pribadi,
                            dan mitra industri, serta analisis data tersebut
                            untuk mengidentifikasi tren, pola, dan taktik yang
                            digunakan oleh aktor ancaman. Informasi ini kemudian
                            digunakan untuk meningkatkan kesiapsiagaan dan
                            respons organisasi terhadap insiden keamanan.
                          </td>
                          <td>
                            SIEM mengumpulkan dan menggabungkan data log dan
                            peristiwa keamanan dari berbagai sistem, aplikasi,
                            dan perangkat dalam infrastruktur TI organisasi.
                            SIEM menggunakan teknologi seperti korelasi
                            peristiwa, analisis perilaku, dan visualisasi data
                            untuk membantu mendeteksi kejadian yang mencurigakan
                            dan melacak tindakan yang harus diambil.
                          </td>
                        </tr>
                        <tr>
                          <th>Penerapan</th>
                          <td>
                            CTI biasanya digunakan untuk meningkatkan pemahaman
                            organisasi tentang ancaman siber yang dihadapi dan
                            membantu dalam perencanaan strategis, pengembangan
                            kebijakan keamanan, dan pengambilan keputusan
                            terkait mitigasi risiko.
                          </td>
                          <td>
                            SIEM digunakan untuk pemantauan keamanan yang
                            berkelanjutan, deteksi insiden, respons insiden, dan
                            laporan kepatuhan. SIEM membantu organisasi dalam
                            mengidentifikasi ancaman internal dan eksternal
                            serta mengambil tindakan yang tepat untuk mengurangi
                            risiko.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      Meskipun CTI dan SIEM memiliki fokus dan metode yang
                      berbeda, keduanya merupakan komponen penting dalam
                      strategi keamanan siber yang efektif. Ketika digabungkan,
                      CTI dan SIEM dapat memberikan gambaran yang lebih holistik
                      tentang ancaman siber dan membantu organisasi dalam
                      mengelola risiko keamanan siber secara lebih efisien.
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
                    <span>2. Security Operations Center (SOC)</span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/90 py-2'>
                    <p>
                      SOC adalah pusat komando keamanan siber yang
                      mengintegrasikan teknologi, proses, dan personel untuk
                      mengelola dan melindungi infrastruktur TI organisasi. SOC
                      bertujuan untuk mendeteksi dan menanggapi insiden keamanan
                      secara real-time, tetapi tidak selalu berfokus pada
                      analisis ancaman siber yang lebih luas seperti CTI.
                    </p>
                    <p>
                      Perbedaan utama antara Cyber Threat Intelligence (CTI) dan
                      Security Operations Center (SOC) terletak pada fokus dan
                      fungsi kedua konsep ini dalam upaya melindungi organisasi
                      dari ancaman siber.
                    </p>
                    <table className='table-fixed my-8'>
                      <thead>
                        <tr>
                          <th className='w-2/12 text-white'></th>
                          <th className='w-5/12 text-white'>
                            Cyber Threat Intelligence (CTI)
                          </th>
                          <th className='w-5/12 text-white'>
                            Security Operations Center (SOC)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Fokus</th>
                          <td>
                            Fokus CTI adalah pada pengumpulan, analisis, dan
                            penyajian informasi tentang ancaman siber yang
                            relevan bagi organisasi. CTI membantu organisasi
                            memahami ancaman yang dihadapi, merencanakan
                            strategi, dan mengambil tindakan pencegahan yang
                            sesuai.
                          </td>
                          <td>
                            Fokus SOC adalah pada pemantauan, deteksi, analisis,
                            dan tanggapan terhadap insiden keamanan dalam
                            lingkungan TI organisasi secara real-time. SOC
                            bertujuan untuk mengurangi risiko dan dampak insiden
                            keamanan serta menjaga kelangsungan operasional
                            organisasi.
                          </td>
                        </tr>
                        <tr>
                          <th>Fungsi</th>
                          <td>
                            CTI melibatkan pengumpulan data dari berbagai
                            sumber, seperti sumber terbuka, jaringan pribadi,
                            dan mitra industri, serta analisis data tersebut
                            untuk mengidentifikasi tren, pola, dan taktik yang
                            digunakan oleh aktor ancaman. Informasi ini kemudian
                            digunakan untuk meningkatkan kesiapsiagaan dan
                            respons organisasi terhadap insiden keamanan.
                          </td>
                          <td>
                            SOC adalah pusat komando keamanan siber yang
                            mengintegrasikan berbagai teknologi, proses, dan
                            personel untuk mengelola dan melindungi
                            infrastruktur TI organisasi. SOC mengumpulkan dan
                            menganalisis data dari berbagai sumber, seperti log
                            sistem, lalu lintas jaringan, dan peringatan
                            keamanan, untuk mendeteksi dan menanggapi insiden
                            keamanan secara efektif.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      Meskipun CTI dan SOC memiliki fokus dan fungsi yang
                      berbeda, keduanya saling melengkapi dalam strategi
                      keamanan siber yang efektif. CTI dapat digunakan oleh SOC
                      untuk meningkatkan pemahaman tentang ancaman yang dihadapi
                      organisasi dan menginformasikan tindakan yang harus
                      diambil dalam menangani insiden keamanan. Di sisi lain,
                      SOC dapat menggunakan CTI untuk meningkatkan deteksi dan
                      analisis insiden keamanan serta mengurangi risiko yang
                      terkait dengan ancaman siber.
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
                    <span>3. Vulnerability Management</span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/90 py-2'>
                    <p>
                      Vulnerability management adalah proses identifikasi,
                      klasifikasi, dan remediasi kerentanan dalam sistem TI
                      organisasi. Meskipun penting untuk mengurangi risiko
                      ancaman siber, vulnerability management berfokus pada
                      kelemahan sistem yang spesifik, bukan pada analisis tren,
                      pola, dan taktik ancaman yang digunakan oleh aktor ancaman
                      seperti CTI.
                    </p>
                    <p>
                      Perbedaan utama antara Cyber Threat Intelligence (CTI) dan
                      Vulnerability Management terletak pada fokus dan tujuan
                      dari masing-masing konsep dalam keamanan siber.
                    </p>

                    <table className='table-fixed my-8'>
                      <thead>
                        <tr>
                          <th className='w-2/12 text-white'></th>
                          <th className='w-5/12 text-white'>
                            Cyber Threat Intelligence (CTI)
                          </th>
                          <th className='w-5/12 text-white'>
                            Vulnerability Management
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Fungsi</th>
                          <td>
                            Fokus CTI adalah pada pengumpulan, analisis, dan
                            penyajian informasi tentang ancaman siber yang
                            relevan bagi organisasi. CTI membantu organisasi
                            memahami ancaman yang dihadapi, merencanakan
                            strategi, dan mengambil tindakan pencegahan yang
                            sesuai.
                          </td>
                          <td>
                            Vulnerability management berfokus pada identifikasi,
                            klasifikasi, dan remediasi kerentanan dalam sistem
                            TI organisasi. Tujuannya adalah untuk mengurangi
                            risiko ancaman siber dengan menemukan dan mengatasi
                            kelemahan sistem yang spesifik.
                          </td>
                        </tr>
                        <tr>
                          <th>Tujuan</th>
                          <td>
                            Tujuan CTI adalah untuk meningkatkan kesadaran dan
                            pemahaman organisasi tentang ancaman siber yang
                            dihadapi, serta menginformasikan strategi keamanan
                            dan tindakan pencegahan yang sesuai. CTI melibatkan
                            pengumpulan data dari berbagai sumber, seperti
                            sumber terbuka, jaringan pribadi, dan mitra
                            industri, serta analisis data tersebut untuk
                            mengidentifikasi tren, pola, dan taktik yang
                            digunakan oleh aktor ancaman.
                          </td>
                          <td>
                            Tujuan vulnerability management adalah untuk
                            mengurangi risiko ancaman siber dengan menemukan dan
                            mengatasi kelemahan sistem yang spesifik. Ini
                            melibatkan proses seperti pemindaian keamanan,
                            penilaian risiko, penetapan prioritas kerentanan,
                            dan remediasi kerentanan.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      Meskipun CTI dan Vulnerability Management memiliki fokus
                      dan tujuan yang berbeda, keduanya merupakan komponen
                      penting dalam strategi keamanan siber yang efektif. CTI
                      dapat digunakan untuk menginformasikan Vulnerability
                      Management dengan menyediakan konteks tentang ancaman
                      siber yang dihadapi organisasi, sehingga memungkinkan tim
                      keamanan untuk lebih fokus pada kerentanan yang paling
                      mungkin dieksploitasi oleh aktor ancaman. Di sisi lain,
                      Vulnerability Management membantu organisasi mengurangi
                      risiko yang terkait dengan ancaman siber dengan mengatasi
                      kelemahan sistem yang spesifik.
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
                    <span>4. Penetration Testing (Pentest)</span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/90 py-2'>
                    <p>
                      Pentest adalah proses evaluasi keamanan sistem, aplikasi,
                      dan infrastruktur TI dengan mencoba mengeksploitasi celah
                      keamanan yang ditemukan. Pentest memberikan informasi
                      tentang kerentanan sistem dan rekomendasi untuk mengatasi
                      kelemahan tersebut sebelum dimanfaatkan oleh penyerang.
                      Namun, pentest tidak fokus pada analisis ancaman siber
                      yang lebih luas seperti CTI.
                    </p>
                    <p>
                      Perbedaan utama antara Cyber Threat Intelligence (CTI) dan
                      penetration testing (pentest) terletak pada tujuan,
                      metode, dan fokus masing-masing layanan dalam upaya
                      melindungi organisasi dari ancaman siber.
                    </p>
                    <table className='table-fixed my-8'>
                      <thead>
                        <tr>
                          <th className='w-2/12 text-white'></th>
                          <th className='w-5/12 text-white'>
                            Cyber Threat Intelligence (CTI)
                          </th>
                          <th className='w-5/12 text-white'>
                            Penetration Testing (Pentest)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Tujuan</th>
                          <td>
                            Tujuan utama CTI adalah untuk mengumpulkan,
                            menganalisis, dan menyajikan informasi tentang
                            ancaman siber yang mungkin berdampak pada
                            organisasi. CTI membantu organisasi dalam
                            mengidentifikasi dan memahami ancaman yang dihadapi,
                            serta merencanakan strategi dan tindakan pencegahan
                            yang sesuai.
                          </td>
                          <td>
                            Pentest bertujuan untuk mengevaluasi keamanan
                            sistem, aplikasi, dan infrastruktur teknologi
                            informasi organisasi dengan mencoba mengeksploitasi
                            celah keamanan yang ditemukan. Hasil dari pentest
                            memberikan informasi tentang kerentanan sistem dan
                            rekomendasi untuk mengatasi kelemahan tersebut
                            sebelum dimanfaatkan oleh penyerang.
                          </td>
                        </tr>
                        <tr>
                          <th>Metode</th>
                          <td>
                            CTI melibatkan pengumpulan data dari berbagai
                            sumber, seperti sumber terbuka, jaringan pribadi,
                            dan mitra industri, serta analisis data tersebut
                            untuk mengidentifikasi tren, pola, dan taktik yang
                            digunakan oleh aktor ancaman.
                          </td>
                          <td>
                            Pentest melibatkan simulasi serangan keamanan siber
                            yang dilakukan oleh tim ahli (penetration tester)
                            yang menggunakan teknik dan alat yang sama dengan
                            penyerang sebenarnya. Pentester berusaha menemukan
                            dan mengeksploitasi kerentanan sistem dalam
                            lingkungan yang dikendalikan dan etis.
                          </td>
                        </tr>
                        <tr>
                          <th>Fokus</th>
                          <td>
                            Fokus CTI adalah pada pemahaman ancaman siber yang
                            dihadapi organisasi dan pengembangan strategi yang
                            efektif untuk menghadapinya. CTI membantu organisasi
                            mengantisipasi ancaman dan meningkatkan respons
                            mereka terhadap insiden keamanan.
                          </td>
                          <td>
                            Fokus Pentest adalah pada identifikasi dan remediasi
                            celah keamanan dalam sistem organisasi. Pentest
                            memberikan wawasan tentang sejauh mana sistem
                            organisasi dapat melawan serangan siber dan
                            bagaimana mengurangi risiko yang terkait dengan
                            kerentanan yang ditemukan.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      Meskipun CTI dan pentest memiliki tujuan, metode, dan
                      fokus yang berbeda, keduanya merupakan komponen penting
                      dalam strategi keamanan siber yang efektif. Organisasi
                      yang menggabungkan kedua layanan ini akan lebih siap
                      menghadapi ancaman siber dan melindungi aset serta
                      informasi penting anda.
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
                      5. Intrusion Detection and Prevention Systems (IDPS)
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/90 py-2'>
                    <p>
                      IDPS adalah sistem yang digunakan untuk memantau dan
                      menganalisis lalu lintas jaringan dengan tujuan untuk
                      mendeteksi dan mencegah aktivitas berbahaya. Meskipun IDPS
                      berperan dalam deteksi dan tanggapan terhadap insiden
                      keamanan, mereka tidak menyediakan wawasan yang lebih luas
                      tentang ancaman siber seperti CTI.
                    </p>

                    <p>
                      Perbedaan utama antara Cyber Threat Intelligence (CTI) dan
                      Intrusion Detection and Prevention Systems (IDPS) terletak
                      pada fokus dan tujuan dari masing-masing konsep dalam
                      keamanan siber.
                    </p>

                    <table className='table-fixed my-8'>
                      <thead>
                        <tr>
                          <th className='w-2/12 text-white'></th>
                          <th className='w-5/12 text-white'>
                            Cyber Threat Intelligence (CTI)
                          </th>
                          <th className='w-5/12 text-white'>
                            Penetration Testing (Pentest)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Fokus</th>
                          <td>
                            Fokus CTI adalah pada pengumpulan, analisis, dan
                            penyajian informasi tentang ancaman siber yang
                            relevan bagi organisasi. CTI membantu organisasi
                            memahami ancaman yang dihadapi, merencanakan
                            strategi, dan mengambil tindakan pencegahan yang
                            sesuai.
                          </td>
                          <td>
                            Fokus IDPS adalah pada pemantauan, deteksi, dan
                            pencegahan aktivitas berbahaya dalam jaringan dan
                            sistem TI organisasi. IDPS bertujuan untuk
                            mengurangi risiko dan dampak insiden keamanan dengan
                            mengidentifikasi dan mencegah aktivitas
                            mencurigakan.
                          </td>
                        </tr>
                        <tr>
                          <th>Tujuan</th>
                          <td>
                            Tujuan CTI adalah untuk meningkatkan kesadaran dan
                            pemahaman organisasi tentang ancaman siber yang
                            dihadapi, serta menginformasikan strategi keamanan
                            dan tindakan pencegahan yang sesuai. CTI melibatkan
                            pengumpulan data dari berbagai sumber, seperti
                            sumber terbuka, jaringan pribadi, dan mitra
                            industri, serta analisis data tersebut untuk
                            mengidentifikasi tren, pola, dan taktik yang
                            digunakan oleh aktor ancaman.
                          </td>
                          <td>
                            Tujuan IDPS adalah untuk melindungi jaringan dan
                            sistem TI organisasi dari aktivitas berbahaya dengan
                            memantau, mendeteksi, dan mencegah serangan serta
                            upaya penyusupan. IDPS menggunakan berbagai
                            teknologi dan metode, seperti analisis perilaku,
                            tanda tangan serangan, dan heuristik, untuk
                            mengidentifikasi dan mengatasi ancaman keamanan
                            secara real-time.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      Meskipun CTI dan IDPS memiliki fokus dan tujuan yang
                      berbeda, keduanya merupakan komponen penting dalam
                      strategi keamanan siber yang efektif. CTI dapat digunakan
                      untuk menginformasikan IDPS dengan menyediakan konteks
                      tentang ancaman siber yang dihadapi organisasi, sehingga
                      memungkinkan IDPS untuk lebih efektif dalam mendeteksi dan
                      mencegah serangan. Di sisi lain, IDPS dapat memberikan
                      informasi penting tentang aktivitas mencurigakan atau
                      serangan yang sedang berlangsung, yang dapat digunakan
                      oleh tim CTI untuk memperbarui dan meningkatkan intelijen
                      ancaman.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-none md:rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20 -mx-4 md:-mx-0'>
            <h2 className='text-3xl xl:text-4xl font-bold text-center mb-4 lg:mb-6'>
              FAQ Mengenai Layanan Cyber Threat Intelligence (CTI)
            </h2>
            <div className='flex flex-col gap-y-4 mt-10'>
              <div
                tabIndex={0}
                className='collapse collapse-plus border border-[#0B2347] bg-[#0B2347] rounded-lg'
              >
                <div className='collapse-title pl-8 py-6 text-xl font-bold text-cyan-400'>
                  <div className='flex gap-x-2'>
                    <span>Apa itu layanan Cyber Threat Intelligence?</span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Layanan Cyber Threat Intelligence adalah layanan yang
                      membantu organisasi mengidentifikasi, menganalisis, dan
                      menghadapi ancaman siber yang terus berkembang. Tujuannya
                      adalah untuk melindungi aset digital, menjaga kelangsungan
                      operasional, dan mengurangi risiko kehilangan data,
                      gangguan operasional, dan kerugian reputasi.
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
                      Mengapa layanan Cyber Threat Intelligence penting?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>Layanan Cyber Threat Intelligence penting karena:</p>
                    <ul>
                      <li>
                        Mendeteksi ancaman siber secara proaktif sebelum
                        menimbulkan kerusakan
                      </li>
                      <li>
                        Melindungi aset dan informasi penting dari serangan
                        keamanan siber
                      </li>
                      <li>
                        Mengurangi risiko kehilangan data, gangguan operasional,
                        dan kerugian reputasi
                      </li>
                      <li>
                        Meningkatkan kesiapsiagaan dan respons terhadap insiden
                        keamanan siber
                      </li>
                      <li>
                        Memberdayakan pengambilan keputusan bisnis yang
                        didasarkan pada intelijen ancaman yang akurat dan tepat
                        waktu
                      </li>
                    </ul>
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
                      Apa saja komponen utama layanan Cyber Threat Intelligence?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Layanan Cyber Threat Intelligence adalah layanan yang
                      membantu organisasi mengidentifikasi, menganalisis, dan
                      menghadapi ancaman siber yang terus berkembang. Tujuannya
                      adalah untuk melindungi aset digital, menjaga kelangsungan
                      operasional, dan mengurangi risiko kehilangan data,
                      gangguan operasional, dan kerugian reputasi.
                    </p>
                    <p>
                      Komponen utama layanan Cyber Threat Intelligence meliputi:
                    </p>
                    <ol>
                      <li>Pengumpulan intelijen</li>
                      <li>Analisis ancaman</li>
                      <li>Penyajian intelijen</li>
                      <li>Konsultasi dan dukungan</li>
                      <li>Pembaruan dan penyesuaian</li>
                    </ol>
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
                      Siapa yang memerlukan layanan Cyber Threat Intelligence?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Organisasi dari berbagai ukuran dan industri yang ingin
                      melindungi aset digital mereka dan menghadapi tantangan
                      keamanan siber dapat memanfaatkan layanan Cyber Threat
                      Intelligence. Layanan ini sangat berguna bagi organisasi
                      yang menghadapi ancaman siber yang terus berkembang dan
                      ingin meningkatkan kesiapsiagaan serta respons mereka
                      terhadap insiden keamanan.
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
                      Apakah layanan Cyber Threat Intelligence menjamin keamanan
                      organisasi saya?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Meskipun layanan Cyber Threat Intelligence dirancang untuk
                      membantu organisasi menghadapi ancaman siber, tidak ada
                      jaminan mutlak bahwa organisasi Anda akan selalu aman dari
                      serangan. Namun, dengan mengikuti rekomendasi dan
                      intelijen yang disediakan oleh layanan Cyber Threat
                      Intelligence, Anda akan secara signifikan meningkatkan
                      kemampuan organisasi Anda untuk mengelola risiko keamanan
                      siber dan mengurangi dampak serangan.
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
                      Berapa lama waktu yang dibutuhkan untuk layanan Cyber
                      Threat Intelligence?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Durasi layanan Cyber Threat Intelligence bervariasi
                      tergantung pada ukuran, kompleksitas, dan kebutuhan
                      organisasi Anda. Layanan ini biasanya disediakan dalam
                      bentuk langganan berkelanjutan, dengan pembaruan dan
                      penyesuaian yang diperlukan untuk menjaga keamanan
                      organisasi Anda seiring berjalannya waktu.
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

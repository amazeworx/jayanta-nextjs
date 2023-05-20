import Image from 'next/image';

export default function SailPoint() {
  const features = [
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Konsultasi dan Perencanaan',
      description:
        'Kami akan membantu Anda menilai kebutuhan IAM Anda, mengidentifikasi celah keamanan, dan merancang strategi yang efektif untuk mengimplementasikan SailPoint dalam organisasi Anda.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Implementasi dan Integrasi',
      description:
        'Tim kami akan menginstal, mengkonfigurasi, dan mengintegrasikan SailPoint dengan sistem, aplikasi, dan sumber data yang ada dalam organisasi Anda.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Pelatihan dan Dukungan',
      description:
        'Kami menyediakan pelatihan dan dukungan yang diperlukan untuk membantu tim Anda memahami dan mengelola solusi IAM SailPoint secara efektif.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Pemeliharaan dan Peningkatan',
      description:
        'Kami akan memastikan bahwa solusi IAM SailPoint Anda tetap up-to-date dengan perubahan kebijakan keamanan, standar regulasi, dan perkembangan teknologi.',
      link: '',
    },
  ];

  const implementation = [
    {
      title: '1. Penilaian Kebutuhan dan Perencanaan',
      description:
        '<p>Tahap awal ini melibatkan konsultasi dengan tim Anda untuk menilai kebutuhan IAM, mengidentifikasi celah keamanan, dan merancang strategi yang efektif untuk mengimplementasikan SailPoint dalam organisasi Anda.</p>',
    },
    {
      title: '2. Persiapan dan Desain',
      description:
        '<p>Pada tahap ini, tim kami akan membantu Anda merancang arsitektur sistem, menentukan peran dan tanggung jawab pengguna, serta membuat kebijakan akses yang sesuai dengan kebutuhan organisasi Anda.</p>',
    },
    {
      title: '3. Konfigurasi dan Integrasi',
      description:
        '<p>Setelah merancang arsitektur dan kebijakan akses yang sesuai, tim kami akan menginstal, mengkonfigurasi, dan mengintegrasikan SailPoint dengan sistem, aplikasi, dan sumber data yang ada dalam organisasi Anda.</p>',
    },
    {
      title: '4. Pengujian dan Validasi',
      description:
        '<p>Sebelum meluncurkan solusi IAM SailPoint secara penuh, kami akan melakukan pengujian menyeluruh untuk memastikan bahwa sistem berfungsi dengan baik, kebijakan akses diterapkan dengan benar, dan integrasi dengan sistem lain berjalan lancar.</p>',
    },
    {
      title: '5. Pelatihan dan Dukungan',
      description:
        '<p>Setelah berhasil mengimplementasikan SailPoint, kami akan menyediakan pelatihan dan dukungan yang diperlukan untuk membantu tim Anda memahami dan mengelola solusi IAM SailPoint secara efektif.</p>',
    },
    {
      title: '6. Pemantauan dan Pemeliharaan',
      description:
        '<p>Setelah implementasi, kami akan terus memantau kinerja sistem, menangani masalah yang mungkin muncul, dan melakukan penyesuaian yang diperlukan untuk memastikan kepatuhan dengan perubahan kebijakan keamanan, standar regulasi, dan perkembangan teknologi.</p>',
    },
    {
      title: '7. Peninjauan dan Peningkatan',
      description:
        '<p>Secara berkala, kami akan melakukan peninjauan terhadap solusi IAM SailPoint Anda untuk memastikan bahwa sistem tetap efektif dalam mengelola identitas dan akses pengguna, serta mengusulkan peningkatan yang mungkin diperlukan untuk menghadapi tantangan keamanan baru.</p>',
    },
  ];

  const why = [
    {
      title: 'Otomatisasi Proses IAM',
      description:
        '<p>SailPoint mengotomatiskan proses-proses penting seperti onboarding pengguna, manajemen akses, dan offboarding, sehingga mengurangi beban kerja tim TI dan meminimalkan risiko kesalahan manusia.</p>',
    },
    {
      title: 'Kepatuhan dan Pelaporan',
      description:
        '<p>SailPoint menyediakan alat pelaporan yang kuat dan audit trail yang rinci untuk memastikan kepatuhan dengan standar keamanan dan regulasi, seperti GDPR, HIPAA, dan PCI DSS.</p>',
    },
    {
      title: 'Integrasi Mudah',
      description:
        '<p>SailPoint dapat diintegrasikan dengan berbagai sistem, aplikasi, dan sumber data, termasuk Active Directory, LDAP, sistem ERP, dan aplikasi cloud, untuk memberikan visibilitas dan kontrol yang lebih baik terhadap identitas dan akses pengguna.</p>',
    },
    {
      title: 'Manajemen Akses Berbasis Peran',
      description:
        '<p>SailPoint memungkinkan organisasi untuk mengelola akses pengguna berdasarkan peran dan tanggung jawab mereka dalam organisasi, sehingga memastikan bahwa pengguna hanya memiliki akses yang diperlukan untuk menjalankan pekerjaan mereka.</p>',
    },
    {
      title: 'Kemampuan Machine Learning dan AI',
      description:
        '<p>SailPoint memanfaatkan teknologi Machine Learning dan AI untuk membantu mengidentifikasi perilaku akses yang mencurigakan, mendeteksi kelemahan keamanan, dan memberikan rekomendasi kebijakan yang lebih baik.</p>',
    },
  ];

  const support = [
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
      title: 'Apa itu SailPoint?',
      description:
        '<p>SailPoint adalah platform Identity and Access Management (IAM) terkemuka yang membantu organisasi mengelola identitas pengguna dan mengontrol akses mereka ke sumber daya sistem secara efektif, aman, dan efisien.</p>',
    },
    {
      title: 'Mengapa perlu menggunakan SailPoint?',
      description:
        '<p>SailPoint membantu perusahaan mengotomatiskan proses IAM, memastikan kepatuhan terhadap standar keamanan dan regulasi, mengurangi risiko kebocoran data, dan meningkatkan efisiensi operasional.</p>',
    },
    {
      title: 'Apa saja fitur utama SailPoint?',
      description:
        '<p>Beberapa fitur utama SailPoint meliputi otomatisasi proses IAM, manajemen akses berbasis peran, integrasi dengan berbagai sistem dan aplikasi, pelaporan dan audit yang kuat, serta penggunaan teknologi Machine Learning dan AI.</p>',
    },
    {
      title: 'Bagaimana SailPoint berintegrasi dengan sistem yang ada?',
      description:
        '<p>SailPoint dapat diintegrasikan dengan berbagai sistem, aplikasi, dan sumber data, seperti Active Directory, LDAP, sistem ERP, dan aplikasi cloud, untuk memberikan visibilitas dan kontrol yang lebih baik terhadap identitas dan akses pengguna.</p>',
    },
    {
      title:
        'Apakah SailPoint sesuai untuk bisnis ukuran kecil hingga menengah?',
      description:
        '<p>Ya, SailPoint menawarkan solusi IAM yang fleksibel dan skalabel yang cocok untuk bisnis dengan berbagai ukuran dan kebutuhan. Perusahaan kecil hingga menengah dapat memilih paket layanan yang paling sesuai dengan kebutuhan mereka.</p>',
    },
    {
      title: 'Apa perbedaan antara SailPoint dan solusi IAM lainnya?',
      description:
        '<p>SailPoint terkenal dengan kemampuannya untuk mengotomatiskan proses IAM, menyediakan integrasi yang luas, dan menggunakan teknologi AI dan Machine Learning untuk memberikan rekomendasi kebijakan yang lebih baik dan mendeteksi ancaman keamanan lebih awal.</p>',
    },
    {
      title:
        'Berapa lama waktu yang diperlukan untuk mengimplementasikan SailPoint?',
      description:
        '<p>Waktu implementasi SailPoint bervariasi tergantung pada kompleksitas lingkungan TI, jumlah pengguna, dan kebutuhan integrasi. Secara umum, proses implementasi dapat memakan waktu beberapa minggu hingga beberapa bulan.</p>',
    },
    {
      title: 'Apakah SailPoint menawarkan dukungan dan pelatihan?',
      description:
        '<p>Ya, SailPoint menawarkan dukungan dan pelatihan yang diperlukan untuk membantu tim Anda memahami dan mengelola solusi IAM SailPoint secara efektif.</p>',
    },
    {
      title:
        'Apakah SailPoint memenuhi standar keamanan dan regulasi seperti GDPR, HIPAA, dan PCI DSS?',
      description:
        '<p>SailPoint dirancang untuk membantu organisasi memenuhi berbagai standar keamanan dan regulasi, termasuk GDPR, HIPAA, dan PCI DSS, dengan menyediakan alat pelaporan yang kuat dan audit trail yang rinci.</p>',
    },
    {
      title: 'Bagaimana cara memulai dengan SailPoint?',
      description:
        '<p>Untuk memulai dengan SailPoint, Anda dapat menghubungi tim penjualan SailPoint atau mitra resmi mereka untuk menjadwalkan konsultasi dan mendapatkan informasi lebih lanjut tentang paket layanan yang paling sesuai dengan kebutuhan organisasi Anda.</p>',
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
                <h3 className='mb-4'>Identity and Access Management</h3>
                <h1 className='text-5xl font-bold mb-6'>SailPoint</h1>
                <p className='text-lg mt-4'>
                  Dalam dunia yang semakin kompleks dan terkoneksi, mengelola
                  identitas dan akses pengguna menjadi penting untuk melindungi
                  data sensitif dan aset bisnis Anda. SailPoint merupakan solusi
                  IAM terkemuka yang membantu organisasi mengelola identitas
                  pengguna dan akses mereka secara efektif, aman, dan efisien.
                </p>
              </div>
              <div className='w-1/3'>
                <div className='aspect-w-4 aspect-h-3'>
                  <div className='w-full h-full flex rounded-xl bg-brand-bluenight p-8'>
                    <Image
                      src='/images/products/sailpoint.svg'
                      alt='SailPoint'
                      className=''
                      width={420}
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
            <div className='mb-8'>
              <h2 className='text-4xl lg:text-4xl text-white font-bold mb-4'>
                Mengapa Memilih SailPoint untuk IAM?
              </h2>
              <div className='prose prose-lg max-w-none text-white'>
                <p>
                  SailPoint menawarkan platform IAM komprehensif yang dirancang
                  untuk mengatasi tantangan keamanan dan kepatuhan yang dihadapi
                  oleh organisasi modern. Berikut adalah beberapa keunggulan
                  yang ditawarkan oleh SailPoint:
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
            <div className='mx-auto text-center'>
              <h2 className='text-4xl lg:text-4xl text-white font-bold mb-4'>
                Layanan IAM SailPoint Kami
              </h2>
              <p className='text-base lg:text-xl text-white mx-auto'>
                Kami menawarkan berbagai layanan SailPoint IAM, termasuk:
              </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 mt-12 lg:mt-12'>
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
                Tahapan Implementasi SailPoint
              </h2>
              <div className='prose prose-lg max-w-none text-white'>
                <p>
                  Implementasi SailPoint melibatkan beberapa tahapan untuk
                  memastikan integrasi yang efektif dan efisien dengan
                  infrastruktur TI dan kebijakan keamanan organisasi Anda.
                  Berikut adalah tahapan umum dalam proses implementasi
                  SailPoint:
                </p>
              </div>
            </div>
            <div className='bg-[#0B2347] bg-black/20 rounded-xl p-6 lg:p-10 text-white -mx-10'>
              <div className='grid grid-cols-1 gap-6 lg:gap-10'>
                {implementation &&
                  implementation.map((item, i) => (
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
                  Dengan mengikuti tahapan ini, Anda dapat memastikan bahwa
                  solusi IAM SailPoint diimplementasikan dengan baik dalam
                  organisasi Anda, memberikan manfaat maksimal dalam melindungi
                  data dan aset bisnis Anda dari ancaman keamanan siber.
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
              FAQ mengenai SailPoint
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

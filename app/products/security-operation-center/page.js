import Image from 'next/image';

export default function LogRhytm() {
  const features = [
    {
      title: 'Deteksi Ancaman Proaktif',
      description:
        'LogRhythm menggunakan algoritma pembelajaran mesin dan analisis perilaku untuk mendeteksi ancaman secara proaktif, bahkan sebelum mereka menimbulkan kerusakan pada infrastruktur TI Anda.',
    },
    {
      title: 'Investigasi dan Respon Cepat',
      description:
        'Dengan fitur SOAR yang terintegrasi, LogRhythm memungkinkan tim keamanan untuk secara otomatis menginvestigasi ancaman, merespon insiden, dan mengambil tindakan pencegahan untuk mengurangi risiko serangan lanjutan.',
    },
    {
      title: 'Kepatuhan Regulasi',
      description:
        'LogRhythm memudahkan organisasi untuk mematuhi berbagai regulasi keamanan dan standar industri, seperti GDPR, HIPAA, dan PCI DSS, dengan menyediakan laporan kepatuhan yang rinci dan fungsionalitas audit yang kuat.',
    },
    {
      title: 'Integrasi yang Luas',
      description:
        'LogRhythm mendukung integrasi dengan berbagai sistem keamanan dan teknologi infrastruktur TI, seperti sistem deteksi intrusi, firewall, dan aplikasi manajemen keamanan lainnya.',
    },
    {
      title: 'Skalabilitas dan Fleksibilitas',
      description:
        'LogRhythm dirancang untuk menyesuaikan diri dengan kebutuhan organisasi yang berkembang, sehingga memastikan bahwa SOC Anda tetap efektif dalam menghadapi tantangan keamanan yang terus berkembang.',
      link: '',
    },
    {
      title: 'Dukungan dan Pelatihan',
      description:
        'LogRhythm menawarkan dukungan pelanggan yang andal dan pelatihan untuk membantu tim keamanan Anda memahami dan mengelola platform secara efektif.',
    },
  ];

  const implementation = [
    {
      title: '1. Persiapan',
      description:
        '<p>Sebelum memulai implementasi, pastikan Anda telah menilai kebutuhan keamanan organisasi Anda dan mengidentifikasi sumber daya yang diperlukan. Ini termasuk mengumpulkan informasi tentang infrastruktur TI Anda, sistem keamanan yang ada, dan kebijakan keamanan yang relevan.</p>',
    },
    {
      title: '2. Perencanaan',
      description:
        '<p>Buat rencana implementasi yang mencakup tujuan, lingkup, dan jadwal proyek. Pertimbangkan anggaran, sumber daya manusia, dan dukungan teknis yang diperlukan selama implementasi.</p>',
    },
    {
      title: '3. Instalasi dan Konfigurasi',
      description:
        '<p>Pasang perangkat keras dan perangkat lunak yang diperlukan untuk menjalankan platform LogRhythm. Konfigurasikan pengaturan platform sesuai dengan kebijakan keamanan organisasi Anda dan integrasikan dengan sistem keamanan yang ada, seperti firewall, IDS/IPS, dan aplikasi lainnya.</p>',
    },
    {
      title: '4. Pengumpulan dan Pengolahan Data',
      description:
        '<p>Tentukan sumber data keamanan yang akan dikumpulkan oleh LogRhythm, seperti log server, log perangkat jaringan, dan data keamanan lainnya. Sesuaikan pengaturan pengumpulan data dan atur algoritma analisis untuk mendeteksi ancaman yang relevan dengan lingkungan Anda.</p>',
    },
    {
      title: '5. Pengujian dan Validasi',
      description:
        '<p>Lakukan pengujian untuk memastikan platform LogRhythm berfungsi dengan baik dan mampu mendeteksi ancaman secara efektif. Validasikan hasil deteksi dengan mengkaji insiden keamanan yang terjadi dan memeriksa respons terhadap ancaman.</p>',
    },
    {
      title: '6. Pelatihan dan Dukungan',
      description:
        '<p>Berikan pelatihan kepada tim keamanan Anda tentang cara menggunakan dan mengelola platform LogRhythm secara efektif. Pastikan dukungan teknis yang memadai tersedia selama implementasi dan setelahnya.</p>',
    },
    {
      title: '7. Pemantauan dan Pemeliharaan',
      description:
        '<p>Setelah implementasi berhasil, terus pantau dan kelola platform LogRhythm untuk memastikan keamanan siber yang berkelanjutan. Lakukan peninjauan berkala untuk mengoptimalkan pengaturan platform, memperbarui kebijakan keamanan, dan menjaga platform tetap up-to-date.</p>',
    },
    {
      title: '8. Evaluasi dan Penyempurnaan',
      description:
        '<p>Secara berkala, evaluasi kinerja platform LogRhythm dalam mengidentifikasi dan merespon ancaman keamanan. Lakukan perubahan yang diperlukan untuk meningkatkan efektivitas platform dan menyesuaikan dengan perubahan lingkungan keamanan atau kebutuhan organisasi.</p>',
    },
  ];

  const faqs = [
    {
      title: 'Apa itu LogRhythm?',
      description:
        '<p>LogRhythm adalah platform keamanan terpadu yang menggabungkan fitur SIEM (Security Information and Event Management), UEBA (User and Entity Behavior Analytics), NDR (Network Detection and Response), dan SOAR (Security Orchestration, Automation, and Response). LogRhythm membantu organisasi mendeteksi, menganalisis, dan merespon ancaman keamanan siber secara real-time.</p>',
    },
    {
      title: 'Bagaimana LogRhythm membantu dalam mendeteksi ancaman?',
      description:
        '<p>LogRhythm menggunakan algoritma pembelajaran mesin dan analisis perilaku untuk mendeteksi ancaman secara proaktif. Platform ini mengumpulkan dan menganalisis data keamanan dari berbagai sumber, sehingga memungkinkan tim keamanan untuk mengidentifikasi ancaman yang kompleks dan meresponnya dengan cepat.</p>',
    },
    {
      title: 'Apakah LogRhythm sesuai untuk organisasi saya?',
      description:
        '<p>LogRhythm dirancang untuk mengakomodasi organisasi dari berbagai ukuran dan industri. Solusi ini skalabel dan fleksibel, sehingga dapat menyesuaikan diri dengan kebutuhan organisasi yang berkembang. LogRhythm juga membantu mematuhi berbagai regulasi keamanan dan standar industri.</p>',
    },
    {
      title: 'Bagaimana LogRhythm dapat membantu mematuhi regulasi keamanan?',
      description:
        '<p>LogRhythm menyediakan laporan kepatuhan yang rinci dan fungsionalitas audit yang kuat untuk memudahkan organisasi mematuhi berbagai regulasi keamanan dan standar industri, seperti GDPR, HIPAA, dan PCI DSS.</p>',
    },
    {
      title:
        'Apakah LogRhythm mudah diintegrasikan dengan sistem keamanan yang ada?',
      description:
        '<p>LogRhythm mendukung integrasi dengan berbagai sistem keamanan dan teknologi infrastruktur TI, seperti sistem deteksi intrusi, firewall, dan aplikasi manajemen keamanan lainnya.</p>',
    },
    {
      title:
        'Berapa lama waktu yang diperlukan untuk mengimplementasikan LogRhythm?',
      description:
        '<p>Waktu yang diperlukan untuk mengimplementasikan LogRhythm bervariasi tergantung pada kompleksitas lingkungan TI dan kebutuhan organisasi. Umumnya, implementasi dapat memakan waktu beberapa minggu hingga beberapa bulan.</p>',
    },
    {
      title: 'Apakah LogRhythm menawarkan dukungan pelanggan dan pelatihan?',
      description:
        '<p>LogRhythm menawarkan dukungan pelanggan yang andal dan pelatihan untuk membantu tim keamanan Anda memahami dan mengelola platform secara efektif.</p>',
    },
    {
      title: 'Apa perbedaan antara LogRhythm dan solusi SIEM lainnya?',
      description:
        '<p>LogRhythm menawarkan fitur yang lebih luas daripada solusi SIEM tradisional. Selain fungsionalitas SIEM, LogRhythm juga mencakup UEBA, NDR, dan SOAR dalam satu platform terpadu. Ini memungkinkan deteksi ancaman yang lebih canggih dan respons yang lebih cepat terhadap insiden keamanan.</p>',
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
                <h3 className='mb-4 uppercase'>Security Operation Center</h3>
                <h1 className='text-4xl xl:text-5xl font-bold mb-4 xl:mb-6'>
                  LogRhythm
                </h1>
                <p className='text-base/relaxed xl:text-lg mt-4'>
                  Menyadari pentingnya keamanan siber dalam menjaga integritas
                  dan keberlanjutan bisnis, perusahaan kini semakin fokus pada
                  membangun Security Operation Center (SOC) yang efektif. SOC
                  bertujuan untuk mendeteksi, menganalisis, dan merespon ancaman
                  keamanan siber secara real-time. LogRhythm, sebagai solusi
                  keamanan siber terkemuka, memungkinkan organisasi untuk
                  membangun dan mengelola SOC yang andal dan efisien.
                </p>
              </div>
              <div className='w-1/2 order-1 mb-6 md:mb-0 md:w-1/4 lg:w-1/3 md:order-2'>
                <div className='aspect-w-4 aspect-h-3'>
                  <div className='w-full h-full rounded-xl bg-brand-bluenight p-4 md:p-8 flex items-center justify-center'>
                    <Image
                      src='/images/products/logrhytm.svg'
                      alt='LogRhytm'
                      className=''
                      width={553}
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

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20'>
            <h2 className='text-3xl xl:text-4xl font-bold mb-4 lg:mb-6'>
              LogRhythm: Platform Keamanan Terpadu
            </h2>
            <div className='prose prose-lg max-w-none text-white'>
              <p>
                LogRhythm merupakan platform keamanan terpadu yang menggabungkan
                fitur SIEM (Security Information and Event Management), UEBA
                (User and Entity Behavior Analytics), NDR (Network Detection and
                Response), dan SOAR (Security Orchestration, Automation, and
                Response) dalam satu solusi. LogRhythm memungkinkan tim keamanan
                untuk mengumpulkan, menganalisis, dan mengkorelasikan data
                keamanan dari berbagai sumber, sehingga mempermudah deteksi
                ancaman yang kompleks dan meresponnya dengan cepat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20'>
            <div className='mx-auto text-center'>
              <h2 className='text-3xl xl:text-4xl font-bold mb-4 lg:mb-6'>
                Keunggulan Security Operation Center dengan LogRhythm:
              </h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 mt-10'>
              {features &&
                features.map((item, i) => (
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
            <div className='mb-8'>
              <h2 className='text-3xl xl:text-4xl font-bold mb-4 lg:mb-6'>
                Implementasi LogRhythm
              </h2>
              <div className='prose prose-lg max-w-none text-white'>
                <p>
                  Menerapkan solusi LogRhythm dalam organisasi Anda melibatkan
                  beberapa tahap penting untuk memastikan kesuksesan
                  implementasi dan efektivitas platform dalam mengelola keamanan
                  siber. Berikut adalah langkah-langkah utama yang terlibat
                  dalam implementasi LogRhythm:
                </p>
              </div>
            </div>
            <div className='bg-[#0B2347] bg-black/20 rounded-xl p-6 lg:p-10 text-white -mx-10'>
              <div className='grid grid-cols-2 gap-6 lg:gap-10'>
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
                  Dengan mengikuti langkah-langkah ini, Anda akan dapat
                  mengimplementasikan solusi LogRhythm dengan sukses dan
                  memanfaatkannya untuk membangun Security Operation Center yang
                  efektif dan efisien dalam organisasi Anda.
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
              FAQ mengenai LogRhythm
            </h2>
            <div className='flex flex-col gap-y-4'>
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

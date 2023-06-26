import Image from 'next/image';

export const metadata = {
  title: 'Endpoint Protection Platform - SentinelOne | Jayanta.id',
  description:
    'Appdome adalah platform Mobile DevSecOps yang inovatif, dirancang untuk membantu pengembang aplikasi seluler dan perusahaan melindungi aplikasi mereka dari ancaman keamanan siber.',
};

export default function Appdome() {
  const features = [
    {
      title: 'Active EDR (Endpoint Detection and Response)',
      description:
        'Algoritma AI SentinelOne terus-menerus memonitor dan menganalisis aktivitas endpoint. Hal ini memberdayakan sistem untuk mendeteksi ancaman potensial secara real-time, termasuk ancaman zero-day dan ancaman persisten lanjutan (APT), sehingga meminimalkan kerusakan potensial.',
    },
    {
      title: 'Penanganan Ancaman Otomatis',
      description:
        'Saat mendeteksi ancaman, SentinelOne langsung mengambil tindakan otomatis untuk mengeliminasi ancaman, sehingga mengurangi kebutuhan intervensi manual dan memastikan operasi sehari-hari organisasi Anda dapat berlanjut dengan gangguan minimal.',
    },
    {
      title: 'Manajemen Vulnerabilities',
      description:
        'SentinelOne menawarkan sistem manajemen kerentanan yang kuat, terus-menerus memindai kelemahan dalam jaringan Anda dan memberikan rekomendasi untuk pengurangan risiko dan pemulihan.',
    },
    {
      title: 'Deteksi AI berdasarkan behaviour',
      description:
        'AI SentinelOne dibangun untuk belajar dan beradaptasi seiring waktu. Itu menggunakan pola perilaku untuk mengidentifikasi aktivitas yang tidak biasa yang mungkin mengindikasikan ancaman cyber, memberikan pendekatan yang lebih proaktif terhadap keamanan endpoint.',
    },
    {
      title: 'Kendali Perangkat Lengkap',
      description:
        'SentinelOne memberikan kendali penuh atas setiap perangkat di jaringan Anda, menawarkan wawasan menyeluruh tentang kesehatan perangkat, inventaris perangkat lunak, dan informasi lokasi perangkat dan jaringan secara real-time.',
    },
  ];

  const implementation = [
    {
      title: 'Perlindungan Tak Tertandingi',
      description:
        '<p>Perlindungan multi-layer dari SentinelOne menawarkan keamanan yang tak tertandingi untuk endpoint Anda, memastikan data dan operasi sehari-hari organisasi Anda selalu aman.</p>',
    },
    {
      title: 'Efisiensi Waktu dan Sumber Daya',
      description:
        '<p>Dengan mitigasi dan respon ancaman otomatis, tim IT Anda dibebaskan dari tugas manual yang memakan waktu, memungkinkan mereka untuk fokus pada aktivitas strategis yang menambah nilai.</p>',
    },
    {
      title: 'Peningkatan Kepatuhan',
      description:
        '<p>Visibilitas dan kontrol yang luas yang ditawarkan oleh SentinelOne memastikan bahwa organisasi Anda tetap patuh dengan regulasi dan standar industri.</p>',
    },
    {
      title: 'Keamanan Masa Depan',
      description:
        '<p>Dengan AI di intinya, SentinelOne selalu belajar dan beradaptasi terhadap ancaman baru, memastikan infrastruktur keamanan organisasi Anda tetap kuat dan relevan dalam lanskap digital yang selalu berubah.</p>',
    },
  ];

  const advantages = [
    {
      title: 'Dukungan Global 24/7',
      description:
        '<p>Tim profesional kami tersedia sepanjang waktu, menawarkan bantuan segera di mana pun Anda berada, kapan pun Anda membutuhkannya. Dengan jangkauan luas Jayanta.id, kami menjamin bahwa bantuan selalu dalam jangkauan untuk menavigasi masalah apa pun yang mungkin Anda temui dengan platform perlindungan endpoint SentinelOne.</p>',
    },
    {
      title: 'Sumber Daya Online yang Mudah Diakses',
      description:
        '<p>Kami menyediakan berbagai sumber daya online, yang mencakup panduan komprehensif, FAQ, video tutorial, dan webinar. Sumber daya ini bertujuan memberdayakan Anda dengan pemahaman mendalam yang diperlukan untuk memanfaatkan potensi penuh dari platform perlindungan endpoint kami.</p>',
    },
    {
      title: 'Layanan Ahli dan Profesional ',
      description:
        '<p>Tim Layanan Profesional kami yang berpengalaman siap membantu dengan masalah yang rumit. Kami menawarkan bantuan dengan pengaturan sistem, konfigurasi, optimalisasi kebijakan, dan perburuan ancaman tingkat lanjut. Tim khusus ini dilengkapi untuk memberikan dukungan yang disesuaikan dengan kebutuhan keamanan cyber Anda.</p>',
    },
    {
      title: 'Manajemen Keberhasilan Pelanggan yang Didedikasikan',
      description:
        '<p>Tim Manajemen Keberhasilan Pelanggan kami berkomitmen untuk memastikan Anda mendapatkan manfaat maksimal dari SentinelOne. Dari pengaturan dan penyebaran awal hingga manajemen dan optimalisasi yang berkelanjutan, tim Keberhasilan Pelanggan kami adalah panduan terpercaya Anda untuk mencapai tujuan keamanan Anda.</p>',
    },
    {
      title: 'Komunitas Pengguna yang Aktif',
      description:
        '<p>Bergabunglah dengan komunitas pengguna aktif kami untuk berbagi wawasan, mendiskusikan praktik terbaik, dan belajar dari pengguna SentinelOne lainnya. Komunitas pengguna kami adalah ruang yang kaya untuk mendapatkan wawasan dari profesional keamanan cyber lainnya yang menavigasi tantangan serupa.</p>',
    },
  ];

  const faqs = [
    {
      title: 'Apa itu SentinelOne?',
      description:
        '<p>SentinelOne adalah Platform Perlindungan Endpoint (EPP) canggih yang dirancang untuk melindungi perangkat organisasi Anda dari berbagai ancaman cyber. Ini menggunakan teknologi AI dan pembelajaran mesin untuk memberikan keamanan yang proaktif dan real-time, termasuk deteksi, pencegahan, respons, dan perburuan ancaman.</p>',
    },
    {
      title: 'Bagaimana SentinelOne melindungi dari ancaman?',
      description:
        '<p>SentinelOne menggunakan model berbasis AI dan pelacakan perilaku untuk mengidentifikasi ancaman potensial. Itu terus-menerus memantau aktivitas endpoint, mendeteksi dan mengeliminasi ancaman secara real time. Ini mencakup ancaman yang dikenal, seperti malware, dan ancaman yang tidak diketahui seperti eksploitasi zero-day.</p>',
    },
    {
      title: 'Bagaimana SentinelOne menangani ancaman yang teridentifikasi?',
      description:
        '<p>Setelah ancaman terdeteksi, SentinelOne secara otomatis mengisolasi endpoint yang terkena dampak dan mengeliminasi ancaman tersebut. Respons otomatis ini meminimalkan kerusakan potensial dan mengurangi kebutuhan intervensi manual.</p>',
    },
    {
      title: 'Apa manfaat penggunaan AI di SentinelOne?',
      description:
        '<p>AI memungkinkan SentinelOne untuk beradaptasi dan merespons ancaman baru dengan cepat. Hal ini memungkinkan respon otomatis dan real-time dan belajar dari setiap interaksi, meningkatkan kemampuan deteksi dan responsnya seiring waktu.</p>',
    },
    {
      title: 'Bagaimana SentinelOne dapat membantu dengan kepatuhan regulasi?',
      description:
        '<p>SentinelOne menawarkan visibilitas yang komprehensif atas endpoint organisasi Anda, membantu Anda memantau dan mengendalikan akses data. Itu memberikan jejak audit, memastikan Anda memiliki dokumentasi yang diperlukan untuk menunjukkan kepatuhan dengan berbagai regulasi industri.</p>',
    },
    {
      title:
        'Apakah SentinelOne hanya melindungi terhadap ancaman yang diketahui?',
      description:
        '<p>Tidak, SentinelOne melindungi terhadap ancaman yang dikenal dan tidak diketahui. AI perilakunya dapat mendeteksi pola aktivitas yang tidak biasa yang dapat mengindikasikan ancaman cyber, termasuk ancaman persisten lanjutan dan eksploitasi zero-day.</p>',
    },
    {
      title: 'Jenis perangkat apa yang dapat dilindungi oleh SentinelOne?',
      description:
        '<p>SentinelOne dapat melindungi berbagai perangkat, termasuk desktop, laptop, perangkat seluler, dan server. Ini menawarkan kompatibilitas lintas platform dan dapat digunakan dengan berbagai sistem operasi, termasuk Windows, macOS, Linux, dan Android.</p>',
    },
    {
      title: 'Bagaimana saya bisa mendapatkan SentinelOne?',
      description:
        '<p>Sebagai mitra SentinelOne yang terpercaya, Jayanta.id dapat menyediakan platform perlindungan endpoint canggih ini. Hubungi kami untuk lebih jelas tentang bagaimana melindungi organisasi Anda dengan SentinelOne.</p>',
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
                <h3 className='mb-4 uppercase'>
                  Masa Depan Perlindungan Endpoint
                </h3>
                <h1 className='text-4xl xl:text-5xl font-bold mb-4 xl:mb-6'>
                  SentinelOne
                </h1>
                <p className='text-base/relaxed xl:text-lg mt-4'>
                  SentinelOne adalah Platform Perlindungan Endpoint (EPP) yang
                  inovatif, dirancang untuk melindungi organisasi Anda dari
                  berbagai ancaman cyber. Dalam dunia yang semakin digital,
                  SentinelOne memberikan perlindungan real-time yang ditenagai
                  oleh AI ke endpoint Anda, menawarkan pendekatan multi-layer
                  terhadap keamanan cyber yang efektif melindungi dari ancaman
                  yang dikenal dan muncul. Pada tahun 2021, SentinelOne
                  ditempatkan di kuadran "Pemimpin" dalam Magic Quadrant Gartner
                  untuk Platform Perlindungan Endpoint, menandakan kemampuannya
                  dalam eksekusi dan kelengkapan visinya.
                </p>
              </div>
              <div className='w-1/2 order-1 mb-6 md:mb-0 md:w-1/4 lg:w-1/3 md:order-2'>
                <div className='aspect-w-4 aspect-h-3'>
                  <div className='w-full h-full rounded-xl bg-brand-bluenight p-4 md:p-8 flex items-center justify-center'>
                    <Image
                      src='/images/products/sentinelone.svg'
                      alt='sentinelone'
                      className=''
                      width={397}
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
          <div className='bg-black/20 rounded-none md:rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20 -mx-4 md:-mx-0'>
            <div className='mx-auto text-center'>
              <h2 className='text-3xl xl:text-4xl font-bold mb-4 lg:mb-6'>
                Fitur Utama SentinelOne
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

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-none md:rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20 -mx-4 md:-mx-0'>
            <div className='mb-6 lg:mb-8 xl:mb-10 max-w-prose'>
              <h2 className='text-3xl xl:text-4xl font-bold mb-4 lg:mb-6'>
                Manfaat
              </h2>
              <div className='prose xl:prose-lg max-w-none text-white'>
                <p>
                  Berkolaborasi dengan SentinelOne memberikan organisasi Anda
                  berbagai manfaat:
                </p>
              </div>
            </div>
            <div className='bg-black/20 rounded-xl p-5 lg:p-6 xl:p-8 2xl:p-10 text-white -mx-4 lg:-mx-6 xl:-mx-8 2xl:-mx-10'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 xl:gap-10'>
                {implementation &&
                  implementation.map((item, i) => (
                    <div
                      className='pb-6 text-white border-b border-white/10'
                      key={i}
                    >
                      <h3 className='text-xl md:text-2xl mb-3 font-bold text-cyan-400'>
                        {item.title}
                      </h3>
                      <div className='text-[15px]/normal md:text-base text-white/80'>
                        <div
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className='mt-8'>
              <div className='prose xl:prose-lg max-w-none text-white'>
                <p>
                  Percayakan SentinelOne untuk menyediakan keamanan endpoint
                  yang proaktif dan efektif yang dibutuhkan organisasi Anda
                  untuk berkembang dalam dunia yang terhubung secara digital.
                  Amanlah masa depan Anda dengan SentinelOne, di mana keamanan
                  bertemu efisiensi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-none md:rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20 -mx-4 md:-mx-0'>
            <div className='mb-6 lg:mb-8 xl:mb-10 max-w-prose'>
              <h2 className='text-3xl xl:text-4xl font-bold mb-4 lg:mb-6'>
                Dukungan SentinelOne dari Jayanta.id: Memberikan Layanan Luar
                Biasa untuk Ketenteraman Anda
              </h2>
              <div className='prose xl:prose-lg max-w-none text-white'>
                <p>
                  Sebagai mitra resmi dari SentinelOne, Jayanta.id berdedikasi
                  untuk menyediakan layanan dukungan kelas atas untuk memastikan
                  kebutuhan keamanan cyber Anda terpenuhi dengan cepat dan
                  efektif.
                </p>
              </div>
            </div>
            <div className='bg-black/20 rounded-xl p-5 lg:p-6 xl:p-8 2xl:p-10 text-white -mx-4 lg:-mx-6 xl:-mx-8 2xl:-mx-10'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 xl:gap-10'>
                {advantages &&
                  advantages.map((item, i) => (
                    <div
                      className='pb-6 text-white border-b border-white/10'
                      key={i}
                    >
                      <h3 className='text-xl md:text-2xl mb-3 font-bold text-cyan-400'>
                        {item.title}
                      </h3>
                      <div className='text-[15px]/normal md:text-base text-white/80'>
                        <div
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className='mt-8'>
              <div className='prose xl:prose-lg max-w-none text-white'>
                <p>
                  Di Jayanta.id, misi kami adalah memberikan pengalaman dukungan
                  luar biasa, membuat klien kami merasa percaya diri dan aman
                  saat menggunakan Platform Perlindungan Endpoint SentinelOne.
                  Ketenteraman Anda mendefinisikan kesuksesan kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-none md:rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20 -mx-4 md:-mx-0'>
            <h2 className='text-3xl xl:text-4xl font-bold text-center mb-4 lg:mb-6'>
              FAQ mengenai SentinelOne
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

      {/* <section className='pt-4 pb-0 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-6 lg:p-8 xl:px-20 xl:py-12'>
            <div className='prose prose-lg xl:prose-xl max-w-none text-white'>
              <p>
                Secara keseluruhan, Appdome adalah solusi keamanan aplikasi
                seluler yang inovatif dan efisien yang memberikan integrasi
                fitur keamanan tanpa mengubah kode sumber aplikasi. Dengan
                kompatibilitas platform yang luas, kustomisasi fitur keamanan,
                dukungan untuk solusi keamanan pihak ketiga, skalabilitas, dan
                dukungan teknis yang kuat, Appdome menjadi pilihan utama bagi
                banyak organisasi yang mencari cara untuk melindungi aplikasi
                seluler mereka dari ancaman siber.
              </p>
              <p>
                Dengan memilih Appdome, Anda tidak hanya melindungi aplikasi
                Anda dan data pengguna, tetapi juga menghemat waktu dan sumber
                daya yang biasanya diperlukan untuk mengintegrasikan fitur
                keamanan secara manual. Jadi, jika Anda mencari solusi keamanan
                aplikasi seluler yang efektif dan mudah digunakan, Appdome
                mungkin menjadi pilihan yang tepat untuk Anda.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

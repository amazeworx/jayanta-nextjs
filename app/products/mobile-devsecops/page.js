import Image from 'next/image';

export default function Appdome() {
  const features = [
    {
      title: 'Integrasi Keamanan Otomatis',
      description:
        'Appdome memungkinkan pengembang untuk mengintegrasikan fitur keamanan canggih ke dalam aplikasi seluler mereka secara otomatis, tanpa perlu mengubah kode sumber atau memiliki keahlian keamanan yang mendalam. Dengan beberapa klik saja, Appdome memungkinkan Anda menambahkan enkripsi data, perlindungan API, deteksi jailbreak/root, dan banyak lagi ke dalam aplikasi Anda.',
    },
    {
      title: 'Perlindungan Aplikasi Tanpa Coding',
      description:
        'Appdome menggunakan teknologi paten yang dinamakan "Fusion" untuk menggabungkan keamanan, kinerja, dan fitur privasi ke dalam aplikasi seluler tanpa perlu mengakses atau mengubah kode sumber. Ini memungkinkan pengembang untuk melindungi aplikasi mereka dengan cepat dan efisien, mengurangi waktu dan biaya yang terkait dengan pengembangan keamanan tradisional.',
    },
    {
      title: 'Platform yang Fleksibel dan Mudah Digunakan',
      description:
        'Appdome menawarkan antarmuka yang intuitif dan mudah digunakan, yang memungkinkan pengembang untuk mengkonfigurasi dan menerapkan fitur keamanan dengan mudah. Platform ini juga sangat fleksibel, mendukung berbagai bahasa pemrograman, kerangka kerja, dan perangkat seluler.',
    },
    {
      title: 'Kompatibilitas Lintas Platform',
      description:
        'Appdome mendukung platform seluler utama seperti Android dan iOS, memungkinkan pengembang untuk melindungi aplikasi mereka di berbagai perangkat dan sistem operasi dengan mudah.',
    },
    {
      title: 'Pemantauan dan Analisis Keamanan',
      description:
        'Appdome menyediakan alat pemantauan dan analisis keamanan yang kuat, memungkinkan perusahaan untuk melacak dan mengelola ancaman keamanan yang mungkin mempengaruhi aplikasi seluler mereka. Ini membantu tim keamanan mengidentifikasi dan merespon ancaman secara real-time, sekaligus memberikan wawasan berharga untuk meningkatkan keamanan aplikasi di masa depan.',
    },
    {
      title: 'Dukungan dan Pembaruan Berkala',
      description:
        'Appdome berkomitmen untuk menyediakan dukungan pelanggan yang luar biasa dan pembaruan berkala untuk memastikan platform tetap efektif dalam melindungi aplikasi seluler dari ancaman keamanan yang terus berkembang.',
    },
  ];

  const features2 = [
    {
      title: 'Enkripsi Data',
      description:
        'Appdome menyediakan enkripsi data tingkat lanjut untuk melindungi informasi sensitif yang disimpan atau ditransmisikan oleh aplikasi seluler Anda.',
    },
    {
      title: 'Perlindungan API',
      description:
        'Appdome melindungi API aplikasi Anda dari serangan Man-in-the-Middle (MITM) dan serangan pemalsuan permintaan lintas-situs (CSRF) dengan mengenkripsi komunikasi antara aplikasi dan server backend.',
    },
    {
      title: 'Deteksi Jailbreak/Root',
      description:
        'Appdome dapat mendeteksi jika perangkat pengguna telah di-root atau di-jailbreak, dan mengambil tindakan yang sesuai untuk melindungi data dan aplikasi Anda.',
    },
    {
      title: 'Proteksi Kode',
      description:
        'Appdome melindungi kode sumber aplikasi Anda dari reverse engineering dan manipulasi dengan menggunakan teknologi obfuscation dan anti-tamper.',
    },
    {
      title: 'Otentikasi dan Otorisasi',
      description:
        'Appdome menyediakan dukungan untuk berbagai skema otentikasi dan otorisasi, termasuk otentikasi multi-faktor (MFA) dan integrasi dengan penyedia identitas eksternal.',
    },
    {
      title: 'Integrasi Keamanan Pihak Ketiga',
      description:
        'Appdome memungkinkan integrasi mudah dengan solusi keamanan pihak ketiga, seperti antivirus, firewall, dan sistem deteksi intrusi, untuk meningkatkan keamanan aplikasi seluler Anda.',
    },
    {
      title: 'Monitor Keamanan dan Analisis',
      description:
        'Appdome menyediakan alat pemantauan dan analisis keamanan untuk membantu tim keamanan mengidentifikasi dan merespon ancaman keamanan secara real-time.',
    },
    {
      title: 'Kebijakan Akses Kondisional',
      description:
        'Appdome memungkinkan Anda untuk menentukan kebijakan akses kondisional berdasarkan konteks pengguna, seperti lokasi, perangkat, atau waktu, untuk mengontrol akses ke aplikasi dan data Anda.',
    },
    {
      title: 'Kontrol Data dan Privasi',
      description:
        'Appdome membantu Anda mematuhi peraturan privasi dan melindungi data pengguna dengan menyediakan kontrol granular atas pengumpulan, penggunaan, dan penyimpanan data.',
    },
    {
      title: 'Kesesuaian Regulasi',
      description:
        'Appdome memudahkan untuk mematuhi berbagai standar keamanan dan regulasi industri, seperti GDPR, HIPAA, dan PCI DSS, dengan menyediakan laporan kepatuhan dan alat audit yang kuat.',
    },
  ];

  const implementation = [
    {
      title: '1. Daftar dan Buat Akun',
      description:
        '<p>Pertama, Anda harus mendaftar dan membuat akun di platform Appdome. Setelah mendaftar, Anda akan memiliki akses ke dashboard Appdome yang memungkinkan Anda mengelola aplikasi, konfigurasi keamanan, dan pemantauan.</p>',
    },
    {
      title: '2. Unggah Aplikasi Seluler',
      description:
        '<p>Langkah berikutnya adalah mengunggah file aplikasi seluler Anda (APK untuk Android atau IPA untuk iOS) ke platform Appdome. Setelah diunggah, Appdome akan menganalisis aplikasi untuk mengidentifikasi komponen dan struktur yang relevan dengan keamanan.</p>',
    },
    {
      title: '3.	Pilih Fitur Keamanan',
      description:
        '<p>Dari dashboard Appdome, Anda dapat memilih fitur keamanan yang ingin diintegrasikan ke dalam aplikasi Anda. Appdome menawarkan berbagai fitur keamanan, termasuk enkripsi data, perlindungan API, deteksi jailbreak/root, dan banyak lagi.</p>',
    },
    {
      title: '4. Konfigurasi Fitur Keamanan',
      description:
        '<p>Setelah memilih fitur keamanan yang diinginkan, Anda harus mengkonfigurasi pengaturan khusus untuk setiap fitur. Ini bisa mencakup konfigurasi algoritma enkripsi, aturan akses, dan lainnya.</p>',
    },
    {
      title: '5. Build Aplikasi dengan Fitur Keamanan',
      description:
        '<p>Setelah mengkonfigurasi fitur keamanan, Anda dapat memulai proses "Fusion" Appdome. Proses ini menggabungkan fitur keamanan yang dipilih ke dalam aplikasi Anda tanpa perlu mengakses atau mengubah kode sumber. Appdome akan memberi Anda aplikasi yang telah diintegrasikan dengan fitur keamanan yang dipilih.</p>',
    },
    {
      title: '6. Validasi Aplikasi',
      description:
        '<p>Setelah proses "Fusion" selesai, Anda harus menguji dan memvalidasi aplikasi untuk memastikan bahwa fitur keamanan berfungsi dengan baik dan tidak mengganggu fungsionalitas aplikasi.</p>',
    },
    {
      title: '7. Implementasi Aplikasi yang Diintegrasikan',
      description:
        '<p>Setelah aplikasi telah diuji dan divalidasi, Anda dapat menerapkannya ke pengguna melalui toko aplikasi atau metode distribusi internal.</p>',
    },
  ];

  const advantages = [
    {
      title: 'Integrasi Otomatis',
      description:
        '<p>Salah satu keunggulan terbesar dari Appdome adalah kemampuannya untuk mengintegrasikan fitur keamanan ke dalam aplikasi secara otomatis tanpa mengubah kode sumber aplikasi. Proses "Fusion" Appdome menghemat waktu dan usaha pengembang, serta mengurangi risiko kesalahan manusia selama proses integrasi.</p>',
    },
    {
      title: 'Kompatibilitas Platform',
      description:
        '<p>Appdome mendukung kedua platform aplikasi seluler utama, Android dan iOS, sehingga Anda dapat menggunakan solusi yang sama untuk mengamankan aplikasi Anda di kedua platform.</p>',
    },
    {
      title: 'Kustomisasi Fitur Keamanan',
      description:
        '<p>Appdome menawarkan berbagai fitur keamanan yang dapat dikonfigurasi secara kustom sesuai kebutuhan aplikasi Anda. Hal ini memungkinkan Anda untuk memilih tingkat perlindungan yang tepat untuk aplikasi Anda dan mengadaptasi strategi keamanan sesuai dengan ancaman dan risiko yang dihadapi.</p>',
    },
    {
      title: 'Integrasi Keamanan Pihak Ketiga',
      description:
        '<p>Appdome memungkinkan integrasi mudah dengan solusi keamanan pihak ketiga, seperti antivirus, firewall, dan sistem deteksi intrusi. Hal ini memungkinkan Anda untuk membangun lapisan keamanan tambahan di sekitar aplikasi Anda dan melindungi dari ancaman yang lebih luas.</p>',
    },
    {
      title: 'Skalabilitas',
      description:
        '<p>Appdome dirancang untuk bekerja dengan aplikasi seluler dari berbagai ukuran dan kompleksitas, mulai dari aplikasi kecil hingga aplikasi korporat skala besar. Ini memastikan bahwa solusi keamanan Anda dapat tumbuh bersama dengan aplikasi Anda dan tetap efektif seiring berkembangnya ancaman keamanan.</p>',
    },
    {
      title: 'Dukungan dan Pembaruan Berkala',
      description:
        '<p>Appdome menawarkan dukungan teknis yang kuat dan pembaruan berkala untuk memastikan bahwa aplikasi Anda tetap aman dari ancaman keamanan terbaru. Tim Appdome terus-menerus memonitor tren ancaman dan bekerja untuk memperbarui platform dengan fitur keamanan baru dan peningkatan.</p>',
    },
  ];

  const faqs = [
    {
      title: 'Apa itu Appdome?',
      description:
        '<p>Appdome adalah platform DevSecOps untuk aplikasi seluler yang memungkinkan pengembang mengintegrasikan fitur keamanan, melindungi data, dan memenuhi persyaratan kepatuhan dengan cepat dan mudah tanpa perlu mengubah kode sumber aplikasi.</p>',
    },
    {
      title: 'Apakah Appdome mendukung aplikasi Android dan iOS?',
      description:
        '<p>Ya, Appdome mendukung aplikasi seluler pada platform Android dan iOS, memungkinkan Anda mengamankan aplikasi Anda di kedua platform dengan satu solusi.</p>',
    },
    {
      title: 'Bagaimana Appdome melindungi aplikasi saya dari ancaman siber?',
      description:
        '<p>Appdome mengintegrasikan fitur keamanan seperti enkripsi data, proteksi kode, deteksi jailbreak/root, dan lainnya secara otomatis ke dalam aplikasi Anda. Platform ini juga mendukung integrasi dengan solusi keamanan pihak ketiga untuk melindungi aplikasi Anda dari berbagai ancaman.</p>',
    },
    {
      title:
        'Apakah saya harus menjadi ahli keamanan siber untuk menggunakan Appdome?',
      description:
        '<p>Tidak, Appdome dirancang untuk digunakan oleh pengembang dengan berbagai tingkat keahlian keamanan. Platform ini menyediakan antarmuka yang mudah digunakan dan proses integrasi yang otomatis, sehingga Anda tidak perlu menjadi ahli keamanan untuk melindungi aplikasi Anda.</p>',
    },
    {
      title:
        'Apakah Appdome menggantikan kebutuhan akan uji penetrasi atau audit keamanan?',
      description:
        '<p>Meskipun Appdome membantu mengamankan aplikasi Anda, itu tidak menggantikan kebutuhan akan uji penetrasi atau audit keamanan. Pengujian keamanan dan audit penting untuk mengidentifikasi dan memperbaiki kelemahan keamanan di aplikasi Anda yang mungkin tidak tercakup oleh fitur Appdome.</p>',
    },
    {
      title:
        'Berapa lama waktu yang diperlukan untuk mengintegrasikan fitur keamanan dengan Appdome?',
      description:
        '<p>Waktu yang diperlukan untuk mengintegrasikan fitur keamanan dengan Appdome tergantung pada kompleksitas aplikasi Anda dan fitur keamanan yang ingin Anda tambahkan. Namun, karena Appdome menggunakan teknologi otomatis, proses integrasi biasanya jauh lebih cepat daripada metode manual.</p>',
    },
    {
      title: 'Apakah ada biaya untuk menggunakan Appdome?',
      description:
        '<p>Appdome menawarkan berbagai paket harga yang dirancang untuk memenuhi kebutuhan organisasi dengan berbagai ukuran dan anggaran. Untuk informasi lebih lanjut tentang harga, Anda dapat menghubungi tim penjualan Appdome atau mengunjungi situs web mereka.</p>',
    },
    {
      title: 'Apakah Appdome menawarkan dukungan teknis?',
      description:
        '<p>Ya, Appdome menawarkan dukungan teknis yang kuat untuk membantu Anda mengatasi masalah yang mungkin Anda hadapi saat menggunakan platform. Dukungan meliputi panduan online, dokumentasi, dan bantuan langsung dari tim dukungan Appdome.</p>',
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
                <h3 className='mb-4 uppercase'>Mobile DevSecOps </h3>
                <h1 className='text-5xl font-bold mb-6'>Appdome </h1>
                <p className='text-lg mt-4'>
                  Appdome adalah platform Mobile DevSecOps yang inovatif,
                  dirancang untuk membantu pengembang aplikasi seluler dan
                  perusahaan melindungi aplikasi mereka dari ancaman keamanan
                  siber. Dengan fokus pada integrasi keamanan, kinerja, dan
                  privasi ke dalam siklus hidup pengembangan aplikasi seluler,
                  Appdome menyediakan solusi lengkap untuk menghadapi tantangan
                  keamanan dalam era aplikasi yang terus berkembang.
                </p>
              </div>
              <div className='w-1/3'>
                <div className='aspect-w-4 aspect-h-3'>
                  <div className='w-full h-full flex rounded-xl bg-brand-bluenight p-8'>
                    <Image
                      src='/images/products/appdome.svg'
                      alt='appdome'
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

      <section className='pt-4 pb-0 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-20'>
            <div className='mx-auto text-center'>
              <h2 className='text-4xl lg:text-4xl text-white font-bold mb-4'>
                Fitur Utama Appdome
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
                Fitur – fitur Appdome
              </h2>
              <div className='prose prose-lg max-w-none text-white'>
                <p>
                  Appdome menyediakan berbagai fitur untuk membantu melindungi
                  dan mengamankan aplikasi seluler Anda. Berikut adalah beberapa
                  fitur utama yang ditawarkan oleh Appdome:
                </p>
              </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6 mt-10'>
              {features2 &&
                features2.map((item, i) => (
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
            <div className='mt-8'>
              <div className='prose prose-lg max-w-none text-white'>
                <p>
                  Dengan fitur-fitur ini, Appdome membantu organisasi
                  mengamankan aplikasi seluler mereka dan melindungi data
                  pengguna dari ancaman keamanan siber yang terus berkembang.
                </p>
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
                Implementasi Appdome
              </h2>
              <div className='prose prose-lg max-w-none text-white'>
                <p>
                  Implementasi Appdome melibatkan beberapa langkah penting yang
                  memungkinkan pengembang aplikasi seluler untuk
                  mengintegrasikan fitur keamanan ke dalam aplikasi mereka
                  dengan mudah dan cepat. Berikut adalah proses implementasi
                  Appdome:
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
                  Dengan mengikuti proses implementasi ini, Anda dapat
                  mengintegrasikan fitur keamanan Appdome ke dalam aplikasi
                  seluler Anda dengan cepat dan mudah, memastikan keamanan
                  aplikasi dan perlindungan data pengguna.
                </p>
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
                Keunggulan Appdome dibanding lainnya
              </h2>
              <div className='prose prose-lg max-w-none text-white'>
                <p>
                  Appdome menawarkan beberapa keunggulan dibandingkan dengan
                  solusi keamanan aplikasi seluler lainnya di pasar. Berikut
                  adalah beberapa poin yang membedakan Appdome:
                </p>
              </div>
            </div>
            <div className='bg-[#0B2347] bg-black/20 rounded-xl p-6 lg:p-10 text-white -mx-10'>
              <div className='grid grid-cols-2 gap-6 lg:gap-10'>
                {advantages &&
                  advantages.map((item, i) => (
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
                  Ketika membandingkan Appdome dengan solusi keamanan aplikasi
                  seluler lainnya, penting untuk mempertimbangkan keunggulan
                  yang ditawarkan oleh Appdome, serta kebutuhan dan tujuan
                  keamanan spesifik aplikasi Anda. Dengan mengevaluasi
                  faktor-faktor ini, Anda dapat menentukan apakah Appdome adalah
                  solusi yang tepat untuk aplikasi seluler Anda.
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
              FAQ mengenai Appdome
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

      <section className='pt-4 pb-0 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-20'>
            <div className='prose prose-lg max-w-none text-white'>
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
      </section>
    </>
  );
}

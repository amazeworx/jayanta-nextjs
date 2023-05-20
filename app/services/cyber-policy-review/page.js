import Image from 'next/image';

export default function CyberPolicyReview() {
  const services = [
    {
      title: '1. Peninjauan Kebijakan Sekarang',
      description:
        'Kami akan memulai dengan meninjau kebijakan keamanan siber Anda saat ini, termasuk kebijakan akses, kebijakan penggunaan perangkat, dan kebijakan respons insiden.',
      link: '',
    },
    {
      title: '2. Analisis Kebutuhan',
      description:
        'Tim kami akan bekerja dengan Anda untuk memahami kebutuhan bisnis Anda, lingkungan teknologi, dan persyaratan kepatuhan yang relevan.',
      link: '',
    },
    {
      title: '3. Benchmarking',
      description:
        'Kami akan membandingkan kebijakan Anda dengan praktik terbaik industri dan standar keamanan yang relevan, seperti ISO 27001, UU PDP, NIST, dan GDPR.',
      link: '',
    },
    {
      title: '4. Identifikasi Area yang Memerlukan Perbaikan',
      description:
        'Berdasarkan analisis kami, kami akan mengidentifikasi area kebijakan yang memerlukan perhatian dan menyusun rekomendasi yang disesuaikan dengan kebutuhan organisasi Anda.',
      link: '',
    },
    {
      title: '5. Implementasi Rekomendasi',
      description:
        'Tim kami akan membantu Anda dalam merancang dan mengimplementasikan perubahan kebijakan yang diperlukan, serta memberikan dukungan untuk melatih karyawan dan memastikan pemahaman yang luas tentang kebijakan yang baru.',
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
                <h1 className='text-5xl font-bold mb-6'>
                  Review Kebijakan Keamanan Siber
                </h1>
                <p className='text-lg mt-4'>
                  Seiring dengan perkembangan teknologi dan ancaman keamanan
                  siber yang terus berkembang, penting bagi organisasi untuk
                  secara berkala meninjau kebijakan keamanan siber mereka.
                  Layanan Review Kebijakan Keamanan Siberkami membantu Anda
                  mengidentifikasi area kebijakan yang memerlukan perhatian,
                  menyelaraskan kebijakan dengan praktik terbaik industri, dan
                  memastikan kepatuhan terhadap standar dan regulasi yang
                  relevan.
                </p>
              </div>
              <div className='w-1/3'>
                <div className='aspect-w-1 aspect-h-1'>
                  <div className='w-full h-full rounded-xl bg-brand-bluenight p-8 flex items-center justify-center'>
                    <Image
                      src='/images/icons/cyber-policy-review.png'
                      alt='Cyber Policy Review'
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
            <h2 className='text-4xl/snug font-bold mb-6'>
              Mengapa Review Kebijakan Keamanan Siber Penting?
            </h2>
            <div className='prose prose-lg max-w-none text-white'>
              <ul className='checklist-ul'>
                <li>Menilai keefektifan kebijakan keamanan siber yang ada</li>
                <li>
                  Mempertahankan kepatuhan terhadap standar dan regulasi
                  industri
                </li>
                <li>
                  Mengurangi risiko insiden keamanan dan kerugian finansial
                </li>
                <li>
                  Memastikan bahwa organisasi Anda siap menghadapi ancaman
                  keamanan siber yang terus berkembang
                </li>
                <li>Meningkatkan kesadaran keamanan di seluruh organisasi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-4 pb-0 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-20'>
            <div className=''>
              <h2 className='text-4xl lg:text-4xl/snug text-white font-bold mb-4'>
                Proses Review Kebijakan Keamanan Siber
              </h2>
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

      <section className='pt-4 pb-0 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-20'>
            <h2 className='text-4xl lg:text-4xl text-white font-bold text-center mb-8'>
              FAQ Mengenai Layanan Cyber Threat Intelligence (CTI)
            </h2>
            <div className='flex flex-col gap-y-4 mt-10'>
              <div
                tabIndex={0}
                className='collapse collapse-plus border border-[#0B2347] bg-[#0B2347] rounded-lg'
              >
                <div className='collapse-title pl-8 py-6 text-xl font-bold text-cyan-400'>
                  <div className='flex gap-x-2'>
                    <span>Apa itu review kebijakan keamanan siber?</span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Review kebijakan keamanan siber adalah proses evaluasi
                      kebijakan keamanan TI suatu organisasi untuk memastikan
                      keefektifan, kepatuhan terhadap regulasi, dan kesesuaian
                      dengan praktik terbaik industri.
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
                      Mengapa review kebijakan keamanan siber penting?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Review kebijakan keamanan siber membantu mengidentifikasi
                      area kebijakan yang memerlukan perbaikan, mengurangi
                      risiko insiden keamanan, memastikan kepatuhan terhadap
                      regulasi, dan meningkatkan kesadaran keamanan di seluruh
                      organisasi.
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
                      Seberapa sering sebaiknya review kebijakan keamanan siber
                      dilakukan?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Frekuensi review kebijakan keamanan siber bergantung pada
                      faktor seperti perubahan dalam teknologi, regulasi, dan
                      lingkungan bisnis. Sebagai pedoman umum, sebaiknya review
                      dilakukan setidaknya setahun sekali atau setiap kali
                      terjadi perubahan signifikan pada infrastruktur TI atau
                      regulasi.
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
                      Siapa yang sebaiknya melakukan review kebijakan keamanan
                      siber?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Review kebijakan keamanan siber sebaiknya dilakukan oleh
                      tim profesional yang berpengalaman dalam bidang keamanan
                      siber, yang memahami regulasi industri dan standar
                      keamanan yang relevan. Tim ini bisa terdiri dari konsultan
                      eksternal atau anggota tim keamanan internal yang telah
                      melalui pelatihan khusus.
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
                      Apakah review kebijakan keamanan siber sama dengan
                      pengujian penetrasi (pentest)?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Tidak, review kebijakan keamanan siber berfokus pada
                      evaluasi kebijakan dan prosedur keamanan TI organisasi,
                      sementara pengujian penetrasi melibatkan upaya aktif untuk
                      menemukan dan mengeksploitasi kerentanan dalam sistem,
                      jaringan, atau aplikasi.
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
                      Bagaimana hasil review kebijakan keamanan siber disajikan?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Hasil review kebijakan keamanan siber biasanya disajikan
                      dalam bentuk laporan yang mencakup temuan, rekomendasi,
                      dan langkah-langkah perbaikan yang perlu diambil. Laporan
                      ini akan membantu organisasi dalam merancang dan
                      mengimplementasikan perubahan kebijakan yang diperlukan
                      untuk meningkatkan keamanan siber mereka.
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
                      Apakah review kebijakan keamanan siber melibatkan
                      pelatihan karyawan?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Walaupun pelatihan karyawan bukan merupakan bagian utama
                      dari review kebijakan keamanan siber, namun penting bagi
                      karyawan untuk memahami perubahan kebijakan yang
                      dihasilkan dari proses review. Oleh karena itu, tim yang
                      melakukan review mungkin akan memberikan dukungan untuk
                      melatih karyawan dan memastikan pemahaman yang luas
                      tentang kebijakan yang baru.
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
                      Apa saja langkah-langkah dalam proses review kebijakan
                      keamanan siber?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Proses review kebijakan keamanan siber meliputi peninjauan
                      kebijakan saat ini, analisis kebutuhan, benchmarking
                      terhadap praktik terbaik industri, identifikasi area yang
                      memerlukan perbaikan, implementasi rekomendasi, serta
                      monitoring dan tinjauan berkala.
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
                      Apakah review kebijakan keamanan siber melibatkan
                      pengujian sistem atau aplikasi?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Review kebijakan keamanan siber lebih fokus pada penilaian
                      kebijakan dan prosedur yang ada, daripada pengujian sistem
                      atau aplikasi secara teknis. Namun, penilaian teknis
                      seperti pentest mungkin diperlukan untuk memverifikasi
                      keefektifan kebijakan keamanan yang diterapkan.
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
                      Bagaimana cara memilih penyedia layanan review kebijakan
                      keamanan siber yang tepat?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Memilih penyedia layanan review kebijakan keamanan siber
                      yang tepat melibatkan pertimbangan seperti reputasi,
                      pengalaman, kredensial industri (seperti sertifikasi), dan
                      kemampuan untuk bekerja sama dengan tim Anda dalam
                      mengatasi masalah yang diidentifikasi.
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
                      Apakah review kebijakan keamanan siber mempengaruhi
                      operasional bisnis?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Review kebijakan keamanan siber umumnya tidak mengganggu
                      operasional bisnis, karena fokus utamanya adalah pada
                      penilaian dan perbaikan kebijakan dan prosedur.
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

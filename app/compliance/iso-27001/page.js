import Image from 'next/image';

export default function PenTest() {
  const services = [
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Konsultasi Awal',
      description:
        'Kami akan mulai dengan mengidentifikasi kebutuhan dan tujuan spesifik organisasi Anda terkait ISO 27001. Dalam tahap ini, kami akan memahami lingkungan operasional Anda dan menilai tingkat kesiapan Anda untuk sertifikasi.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Gap Analysis',
      description:
        'Kami akan melakukan analisis celah untuk menilai sejauh mana sistem manajemen keamanan informasi Anda saat ini memenuhi persyaratan ISO 27001. Hasil dari analisis ini akan menjadi dasar untuk rekomendasi perbaikan dan rencana tindakan.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Desain dan Implementasi ISMS',
      description:
        'Berdasarkan analisis celah dan tujuan Anda, kami akan membantu Anda merancang dan mengimplementasikan ISMS yang sesuai dengan persyaratan ISO 27001. Proses ini mencakup pengembangan kebijakan, prosedur, dan kontrol yang diperlukan untuk melindungi informasi Anda.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Pelatihan dan Kesadaran',
      description:
        'Kami akan memberikan pelatihan dan dukungan untuk meningkatkan kesadaran keamanan di seluruh organisasi Anda, membantu memastikan bahwa semua karyawan memahami peran mereka dalam menjaga keamanan informasi dan mematuhi persyaratan ISO 27001.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Audit Internal dan Pemantauan',
      description:
        'Kami akan membantu Anda dalam menjalankan audit internal dan pemantauan terus-menerus terhadap kinerja ISMS Anda, untuk memastikan bahwa sistem Anda tetap efektif dan memenuhi persyaratan ISO 27001.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Bantuan Sertifikasi',
      description:
        'Ketika Anda siap untuk menjalani audit sertifikasi eksternal, kami akan membantu Anda dalam proses ini, memberikan dukungan sepanjang jalan untuk memastikan hasil yang sukses.',
      link: '',
    },
    {
      icon: '/images/icons/penetration-testing.png',
      title: 'Pemeliharaan dan Peningkatan Berkelanjutan',
      description:
        'Setelah sertifikasi, kami akan terus mendukung Anda dalam menjaga dan meningkatkan kepatuhan ISO 27001, membantu Anda mengatasi perubahan dalam teknologi, ancaman, dan persyaratan regulasi.',
      link: '',
    },
  ];

  const benefits = [
    {
      title: 'Pengurangan risiko',
      description:
        '<p>Dengan mengidentifikasi dan mengatasi kelemahan dalam sistem keamanan informasi Anda, Anda akan mengurangi risiko pelanggaran data dan insiden keamanan yang dapat merugikan bisnis Anda.</p>',
    },
    {
      title: 'Kesesuaian dengan persyaratan peraturan',
      description:
        '<p>Dengan mengimplementasikan sistem manajemen keamanan informasi yang efektif, Anda akan meningkatkan efisiensi operasional dan mengurangi waktu dan sumber daya yang diperlukan untuk mengelola keamanan informasi.</p>',
    },
    {
      title: 'Efisiensi operasional yang lebih baik',
      description:
        '<p>Dengan mengimplementasikan sistem manajemen keamanan informasi yang efektif, Anda akan meningkatkan efisiensi operasional dan mengurangi waktu dan sumber daya yang diperlukan untuk mengelola keamanan informasi.</p>',
    },
    {
      title: 'Mendukung pertumbuhan bisnis',
      description:
        '<p>Kepatuhan terhadap standar seperti ISO 27001 dapat membuka pintu untuk peluang bisnis baru, seperti kontrak dengan organisasi yang mengharuskan mitra mereka untuk mematuhi standar keamanan yang ketat.</p>',
    },
  ];

  const faqs = [
    {
      title: 'Apa itu ISO 27001?',
      description:
        '<p>ISO 27001 adalah standar internasional yang diakui untuk sistem manajemen keamanan informasi (ISMS). Standar ini menetapkan persyaratan untuk merencanakan, mengimplementasikan, mengoperasikan, memantau, meninjau, memelihara, dan meningkatkan ISMS. Tujuannya adalah untuk membantu organisasi melindungi informasi yang penting dan mengurangi risiko keamanan.</p>',
    },
    {
      title: 'Siapa yang harus mempertimbangkan sertifikasi ISO 27001?',
      description:
        '<p>Organisasi dari semua ukuran dan sektor industri dapat memanfaatkan sertifikasi ISO 27001. Jika Anda mengelola informasi sensitif, seperti data pelanggan, informasi keuangan, atau informasi pribadi karyawan, sertifikasi ISO 27001 dapat membantu Anda mengelola dan melindungi informasi tersebut dengan lebih baik.</p>',
    },
    {
      title: 'Apa perbedaan antara ISO 27001 dan ISO 27002?',
      description:
        '<p>ISO 27001 adalah standar yang menetapkan persyaratan untuk sistem manajemen keamanan informasi. ISO 27002 adalah panduan yang memberikan praktik terbaik untuk mengimplementasikan kontrol keamanan informasi. ISO 27002 dirancang untuk digunakan bersama dengan ISO 27001 untuk membantu organisasi mengembangkan dan mengelola ISMS yang efektif.</p>',
    },
    {
      title: 'Apakah sertifikasi ISO 27001 wajib?',
      description:
        '<p>Sertifikasi ISO 27001 tidak diwajibkan oleh hukum, tetapi dapat menjadi persyaratan kontrak dalam beberapa kasus. Organisasi yang mencari sertifikasi ISO 27001 biasanya melakukannya untuk meningkatkan keamanan informasi mereka, memenuhi persyaratan peraturan, dan membangun kepercayaan dengan pelanggan dan mitra bisnis.</p>',
    },
    {
      title:
        'Berapa lama waktu yang diperlukan untuk mencapai sertifikasi ISO 27001?',
      description:
        '<p>Waktu yang dibutuhkan untuk mencapai sertifikasi ISO 27001 akan bervariasi tergantung pada ukuran dan kompleksitas organisasi Anda. Proses ini bisa memakan waktu beberapa bulan hingga lebih dari satu tahun. Menggabungkan dukungan dari tim ahli dapat membantu mempercepat proses ini dan memastikan keberhasilan.</p>',
    },
    {
      title: 'Apakah ada biaya yang terkait dengan sertifikasi ISO 27001?',
      description:
        '<p>Ada beberapa biaya yang terkait dengan sertifikasi ISO 27001, termasuk biaya konsultasi, pelatihan, audit, dan sertifikasi itu sendiri. Namun, investasi ini dapat menghasilkan penghematan jangka panjang dengan mengurangi risiko pelanggaran data dan insiden keamanan serta meningkatkan efisiensi operasional.</p>',
    },
    {
      title:
        'Bagaimana cara mempertahankan kepatuhan ISO 27001 setelah sertifikasi?',
      description:
        '<p>Setelah mencapai sertifikasi ISO 27001, Anda perlu menjalankan audit internal secara teratur dan mengikuti audit eksternal yang dijadwalkan untuk memastikan kepatuhan berkelanjutan. Selain itu, penting untuk secara proaktif mengelola dan meningkatkan ISMS Anda untuk menjaga keamanan informasi yang efektif.</p>',
    },
  ];

  return (
    <>
      <section className='relative py-24 min-h-[360px]'>
        <Image
          src='/images/bg-banner.jpg'
          alt='Header'
          className='absolute inset-0 object-cover object-bottom h-full w-full'
          width={1512}
          height={1008}
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#091D42] from-0% via-[#091D42]/50 via-50% to-transparent'></div>
        <div className='relative z-10 mt-16'>
          <div className='container'>
            <div className='max-w-screen-md text-white'>
              <h1 className='text-5xl font-bold mb-6'>
                Layanan Konsultasi Pemenuhan Kepatuhan Sertifikasi ISO 27001
              </h1>
              <p className='text-xl mt-4'>
                ISO 27001 adalah standar internasional yang menetapkan
                persyaratan untuk Sistem Manajemen Keamanan Informasi (ISMS).
                Tujuannya adalah untuk membantu organisasi mengelola dan
                melindungi informasi mereka dengan cara yang efisien dan
                efektif. Dengan mencapai kepatuhan ISO 27001, organisasi Anda
                akan menunjukkan komitmen yang kuat terhadap keamanan informasi,
                meningkatkan reputasi di mata pelanggan, mitra, dan pemangku
                kepentingan, serta mengurangi risiko pelanggaran data dan
                insiden keamanan.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-4 pb-0 lg:pt-0 lg:pb-24 relative z-10 bg-[#091D42]'>
        <div className='container'>
          <div className=''>
            <h2 className='text-4xl lg:text-4xl text-white font-bold mb-4'>
              Layanan kami meliputi:
            </h2>
            {/* <p className='text-base lg:text-2xl text-white mx-auto'>
              Berikut adalah beberapa manfaat penting dari melakukan penetrasi
              testing (pentest):
            </p> */}
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 mt-12 lg:mt-10'>
            {services &&
              services.map((item, i) => (
                <div
                  className='bg-[#0B2347] border border-solid border-[#FFFFFF2B] rounded-xl p-6 lg:p-8 text-white'
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
                  <h3 className='text-3xl mb-4 font-bold text-cyan-400'>
                    {item.title}
                  </h3>
                  <div className='text-lg text-white/80'>
                    {item.description}
                  </div>
                </div>
              ))}
            <div className='col-span-2 bg-black/20 p-8 rounded-xl flex items-center'>
              <div className='text-xl'>
                <p>
                  Dengan mengandalkan layanan pemenuhan kepatuhan ISO 27001
                  kami, Anda akan mendapatkan dukungan yang komprehensif dan
                  berkesinambungan dalam upaya Anda untuk mencapai dan
                  mempertahankan kepatuhan ISO 27001. Dari pengembangan sistem
                  manajemen keamanan informasi yang kuat hingga pelatihan dan
                  audit, tim kami akan bermitra dengan Anda untuk memastikan
                  bahwa organisasi Anda tidak hanya mematuhi standar
                  internasional yang diakui, tetapi juga mendapatkan manfaat
                  yang luas dari peningkatan keamanan informasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-4 pb-0 lg:pt-36 lg:pb-36 relative z-10 bg-[#091D42]'>
        <div className='container'>
          <div className='flex gap-x-16'>
            <div className='w-2/5'>
              <h2 className='text-4xl lg:text-4xl text-white font-bold mb-4'>
                Benefit dari sertifikasi ISO 27001 bagi perusahaan anda
              </h2>
              <div className='prose prose-lg text-white'>
                <p>
                  Meningkatkan kepercayaan pelanggan, mitra, dan pemangku
                  kepentingan: Menunjukkan kepatuhan terhadap standar keamanan
                  informasi yang diakui seperti ISO 27001 akan meningkatkan
                  reputasi Anda dan membangun kepercayaan di kalangan pemangku
                  kepentingan.
                </p>
              </div>
            </div>
            <div className='w-3/5'>
              <div className='flex flex-col gap-y-3'>
                {benefits &&
                  benefits.map((item, i) => (
                    <div
                      tabIndex={0}
                      key={i}
                      className='collapse collapse-plus border border-[#0B2347] bg-[#0B2347] rounded-lg'
                    >
                      <div className='collapse-title pl-6 text-xl font-bold text-cyan-400'>
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
        </div>
      </section>
      <section className='pt-4 pb-0 lg:pt-20 lg:pb-36 relative z-10 bg-[#091D42]'>
        <div className='container'>
          <div className='max-w-screen-md mx-auto'>
            <h2 className='text-4xl lg:text-4xl text-white font-bold text-center mb-8'>
              FAQ mengenai ISO 27001
            </h2>
            <div className='flex flex-col gap-y-3'>
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
      <section className='pt-4 pb-0 lg:pt-20 lg:pb-36 relative z-10 bg-[#091D42]'>
        <div className='container'>
          <div className='prose prose-xl text-white mx-auto'>
            <p>
              Dalam menghadapi tantangan keamanan siber yang semakin kompleks,
              layanan konsultasi pemenuhan kepatuhan ISO 27001 kami berkomitmen
              untuk membantu organisasi Anda mengimplementasikan dan memelihara
              sistem manajemen keamanan informasi yang efektif. Dengan dukungan
              dari tim ahli kami, Anda akan meningkatkan perlindungan terhadap
              ancaman siber, membangun kepercayaan dengan pelanggan dan mitra
              bisnis, serta mencapai standar keamanan yang diakui secara
              internasional. Hubungi kami hari ini untuk memulai perjalanan Anda
              menuju kepatuhan ISO 27001 dan keamanan informasi yang lebih baik.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

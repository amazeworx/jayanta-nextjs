import Image from 'next/image';

export const metadata = {
  title: 'Konsultasi Pemenuhan Kepatuhan Sertifikasi ISO 27001 | Jayanta.id',
  description:
    'ISO 27001 adalah standar internasional yang menetapkan persyaratan untuk Sistem Manajemen Keamanan Informasi (ISMS).',
};

export default function Iso27001() {
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
            <div className='flex gap-20'>
              <div className='w-2/3'>
                <h3 className='mb-4'>LAYANAN KONSULTASI</h3>
                <h1 className='text-5xl/snug font-bold mb-6'>
                  Pemenuhan Kepatuhan Sertifikasi ISO 27001
                </h1>
                <p className='text-lg mt-4'>
                  ISO 27001 adalah standar internasional yang menetapkan
                  persyaratan untuk Sistem Manajemen Keamanan Informasi (ISMS).
                  Tujuannya adalah untuk membantu organisasi mengelola dan
                  melindungi informasi mereka dengan cara yang efisien dan
                  efektif. Dengan mencapai kepatuhan ISO 27001, organisasi Anda
                  akan menunjukkan komitmen yang kuat terhadap keamanan
                  informasi, meningkatkan reputasi di mata pelanggan, mitra, dan
                  pemangku kepentingan, serta mengurangi risiko pelanggaran data
                  dan insiden keamanan.
                </p>
              </div>
              <div className='w-1/3'>
                <div className='aspect-w-1 aspect-h-1'>
                  <div className='w-full h-full rounded-xl bg-brand-bluenight p-8 flex items-center justify-center'>
                    <Image
                      src='/images/compliance/iso-27001.png'
                      alt='ISO 27001'
                      className=''
                      width={543}
                      height={543}
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
            <div className=''>
              <h2 className='text-4xl/snug text-white font-bold mb-4'>
                Layanan kami meliputi:
              </h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 mt-10'>
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
            <div className='mt-8'>
              <div className='prose prose-lg max-w-none text-white'>
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

      <section className='pt-4 pb-0 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-20'>
            <div className='mb-8'>
              <h2 className='text-4xl lg:text-4xl text-white font-bold mb-4'>
                Benefit dari sertifikasi ISO 27001 bagi perusahaan anda
              </h2>
              <div className='prose prose-lg max-w-none text-white'>
                <p>
                  Meningkatkan kepercayaan pelanggan, mitra, dan pemangku
                  kepentingan: Menunjukkan kepatuhan terhadap standar keamanan
                  informasi yang diakui seperti ISO 27001 akan meningkatkan
                  reputasi Anda dan membangun kepercayaan di kalangan pemangku
                  kepentingan.
                </p>
              </div>
            </div>
            <div className='bg-[#0B2347] bg-black/20 rounded-xl p-6 lg:p-10 text-white -mx-10'>
              <div className='grid grid-cols-2 gap-6 lg:gap-10'>
                {benefits &&
                  benefits.map((item, i) => (
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
            <h2 className='text-4xl lg:text-4xl text-white font-bold text-center mb-12'>
              FAQ mengenai ISO 27001
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
                Dalam menghadapi tantangan keamanan siber yang semakin kompleks,
                layanan konsultasi pemenuhan kepatuhan ISO 27001 kami
                berkomitmen untuk membantu organisasi Anda mengimplementasikan
                dan memelihara sistem manajemen keamanan informasi yang efektif.
                Dengan dukungan dari tim ahli kami, Anda akan meningkatkan
                perlindungan terhadap ancaman siber, membangun kepercayaan
                dengan pelanggan dan mitra bisnis, serta mencapai standar
                keamanan yang diakui secara internasional. Hubungi kami hari ini
                untuk memulai perjalanan Anda menuju kepatuhan ISO 27001 dan
                keamanan informasi yang lebih baik.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

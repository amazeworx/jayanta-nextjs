import Image from 'next/image';

export default function RansomwarePreparedness() {
  const services = [
    {
      title: '1.	Peninjauan Kebijakan dan Prosedur',
      description:
        'Tim kami akan meninjau kebijakan dan prosedur keamanan siber Anda untuk memastikan bahwa mereka mencakup langkah-langkah pencegahan, deteksi, dan respons terhadap serangan ransomware.',
      link: '',
    },
    {
      title: '2.	Identifikasi Aset Kritis',
      description:
        'Kami akan membantu Anda mengidentifikasi aset kritis yang paling rentan terhadap serangan ransomware, serta mengevaluasi dampak potensial jika serangan terjadi.',
      link: '',
    },
    {
      title: '3.	Analisis Risiko',
      description:
        'Tim kami akan melakukan analisis risiko menyeluruh untuk mengidentifikasi celah keamanan yang mungkin dimanfaatkan oleh penyerang ransomware.',
      link: '',
    },
    {
      title: '4.	Rekomendasi Strategi Perlindungan',
      description:
        'Berdasarkan hasil analisis risiko, kami akan menyusun strategi perlindungan yang disesuaikan dengan kebutuhan dan lingkungan organisasi Anda, termasuk rekomendasi untuk pencegahan, deteksi, dan respons terhadap serangan ransomware.',
      link: '',
    },
    {
      title: '5.	Implementasi Strategi Perlindungan',
      description:
        'Tim kami akan membantu Anda dalam mengimplementasikan strategi perlindungan yang disarankan, serta memberikan dukungan untuk pelatihan karyawan dan pemangku kepentingan terkait.',
      link: '',
    },
    {
      title: '6.	Tinjauan dan Pembaruan Berkala',
      description:
        'Kami akan membantu Anda dalam mengatur proses tinjauan dan pembaruan berkala untuk memastikan kesiapan organisasi Anda dalam menghadapi ancaman ransomware yang terus berkembang.',
      link: '',
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
                  Asesmen Persiapan Menghadapi Serangan Ransomware
                </h1>
                <p className='text-base/relaxed xl:text-lg mt-4'>
                  Di era digital saat ini, serangan ransomware menjadi salah
                  satu ancaman keamanan siber yang paling meresahkan. Ransomware
                  mengenkripsi data penting organisasi dan menuntut tebusan
                  untuk mengembalikan akses, menyebabkan kerugian finansial dan
                  gangguan operasional yang signifikan. Oleh karena itu, sangat
                  penting bagi organisasi untuk mempersiapkan diri dalam
                  menghadapi ancaman ini. Layanan asesmen persiapan menghadapi
                  serangan ransomware kami dirancang untuk membantu Anda
                  mengidentifikasi dan mengatasi potensi kelemahan keamanan
                  serta memastikan kesiapan organisasi Anda dalam menghadapi
                  serangan ransomware.
                </p>
              </div>
              <div className='w-1/3 order-1 mb-6 md:mb-0 md:w-1/4 lg:w-1/3 md:order-2'>
                <div className='aspect-w-1 aspect-h-1'>
                  <div className='w-full h-full rounded-xl bg-brand-bluenight p-6 md:p-8 flex items-center justify-center'>
                    <Image
                      src='/images/icons/ransomware.png'
                      alt='Ransomware Preparedness'
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
            <h2 className='text-4xl/snug font-bold mb-6'>
              Mengapa Asesmen Persiapan Menghadapi Serangan Ransomware Penting?
            </h2>
            <div className='prose prose-lg max-w-none text-white'>
              <ul className='checklist-ul'>
                <li>
                  Melindungi organisasi Anda dari dampak negatif serangan
                  ransomware yang merugikan secara finansial dan reputasi
                </li>
                <li>
                  Mengurangi risiko gangguan operasional yang disebabkan oleh
                  serangan
                </li>
                <li>
                  Memastikan kepatuhan terhadap standar dan regulasi industri
                </li>
                <li>
                  Meningkatkan kesadaran keamanan siber di seluruh organisasi
                </li>
                <li>Memperkuat postur keamanan siber secara menyeluruh</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20'>
            <div className=''>
              <h2 className='text-4xl lg:text-4xl/snug text-white font-bold mb-4'>
                Proses Asesmen Persiapan Menghadapi Serangan Ransomware
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

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20'>
            <h2 className='text-4xl lg:text-4xl text-white font-bold text-center mb-8'>
              FAQ Mengenai Asesmen Persiapan Menghadapi Serangan Ransomware
            </h2>
            <div className='flex flex-col gap-y-4 mt-10'>
              <div
                tabIndex={0}
                className='collapse collapse-plus border border-[#0B2347] bg-[#0B2347] rounded-lg'
              >
                <div className='collapse-title pl-8 py-6 text-xl font-bold text-cyan-400'>
                  <div className='flex gap-x-2'>
                    <span>Apa itu serangan ransomware?</span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Serangan ransomware adalah jenis serangan keamanan siber
                      di mana penyerang mengenkripsi data penting organisasi dan
                      menuntut tebusan untuk mengembalikan akses ke data
                      tersebut. Serangan ini dapat menyebabkan kerugian
                      finansial, reputasi, dan gangguan operasional yang
                      signifikan.
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
                      Mengapa asesmen persiapan menghadapi serangan ransomware
                      penting?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Asesmen persiapan menghadapi serangan ransomware membantu
                      organisasi mengidentifikasi dan mengatasi potensi
                      kelemahan keamanan, meningkatkan kesadaran keamanan siber,
                      serta memastikan kesiapan dalam menghadapi serangan
                      ransomware. Layanan ini bertujuan untuk melindungi aset
                      penting organisasi dan mengurangi risiko kerugian
                      finansial dan reputasi.
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
                      Siapa yang memerlukan asesmen persiapan menghadapi
                      serangan ransomware?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Setiap organisasi yang menggunakan teknologi informasi
                      dalam operasionalnya, terlepas dari ukuran atau industri,
                      dapat menjadi sasaran serangan ransomware. Oleh karena
                      itu, asesmen persiapan menghadapi serangan ransomware
                      direkomendasikan untuk semua organisasi yang ingin
                      melindungi data dan aset penting mereka.
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
                      Bagaimana proses asesmen persiapan menghadapi serangan
                      ransomware?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Proses asesmen meliputi peninjauan kebijakan dan prosedur,
                      identifikasi aset kritis, analisis risiko, penyusunan
                      strategi perlindungan, implementasi strategi, dan tinjauan
                      serta pembaruan berkala. Tujuannya adalah untuk memastikan
                      kesiapan organisasi dalam menghadapi ancaman ransomware
                      yang terus berkembang.
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
                      Berapa lama waktu yang dibutuhkan untuk melakukan asesmen
                      persiapan menghadapi serangan ransomware?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Durasi asesmen tergantung pada ukuran dan kompleksitas
                      organisasi Anda, serta tingkat kesiapan keamanan siber
                      yang telah ada. Namun, umumnya asesmen ini memerlukan
                      waktu beberapa minggu hingga beberapa bulan untuk
                      diselesaikan.
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
                      Apakah layanan asesmen persiapan menghadapi serangan
                      ransomware menjamin keamanan organisasi saya?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Meskipun asesmen persiapan menghadapi serangan ransomware
                      dapat membantu memperkuat postur keamanan siber organisasi
                      Anda, tidak ada jaminan mutlak bahwa organisasi Anda akan
                      terlindungi dari semua serangan. Namun, dengan mengikuti
                      rekomendasi dari hasil asesmen, Anda akan secara
                      signifikan mengurangi risiko dan dampak potensial dari
                      serangan ransomware.
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
                      Bagaimana cara menghubungi Anda untuk layanan asesmen
                      persiapan menghadapi serangan ransomware?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Untuk mendapatkan informasi lebih lanjut atau mengatur
                      konsultasi mengenai layanan asesmen persiapan menghadapi
                      serangan ransomware, Anda dapat menghubungi kami melalui
                      telepon, email, atau mengisi formulir kontak yang tersedia
                      di situs web kami. Tim kami akan segera menghubungi Anda
                      untuk membahas kebutuhan dan langkah selanjutnya.
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

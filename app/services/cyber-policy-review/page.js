import Image from 'next/image';

export const metadata = {
  title: 'Layanan Review Kebijakan Keamanan Siber | Jayanta.id',
  description:
    'Layanan Review Kebijakan Keamanan Siber kami membantu Anda mengidentifikasi area kebijakan yang memerlukan perhatian, menyelaraskan kebijakan dengan praktik terbaik industri, dan memastikan kepatuhan terhadap standar dan regulasi yang relevan.',
};

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
                  Review Kebijakan Keamanan Siber
                </h1>
                <p className='text-base/relaxed xl:text-lg mt-4'>
                  Seiring dengan perkembangan teknologi dan ancaman keamanan
                  siber yang terus berkembang, penting bagi organisasi untuk
                  secara berkala meninjau kebijakan keamanan siber mereka.
                  Layanan Review Kebijakan Keamanan Siber kami membantu Anda
                  mengidentifikasi area kebijakan yang memerlukan perhatian,
                  menyelaraskan kebijakan dengan praktik terbaik industri, dan
                  memastikan kepatuhan terhadap standar dan regulasi yang
                  relevan.
                </p>
              </div>
              <div className='w-1/3 order-1 mb-6 md:mb-0 md:w-1/4 lg:w-1/3 md:order-2'>
                <div className='aspect-w-1 aspect-h-1'>
                  <div className='w-full h-full rounded-xl bg-brand-bluenight p-6 md:p-8 flex items-center justify-center'>
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

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-none md:rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20 -mx-4 md:-mx-0'>
            <h2 className='text-4xl/snug font-bold mb-6'>
              Mengapa Review Kebijakan Keamanan Siber Penting?
            </h2>
            <div className='prose xl:prose-lg max-w-none text-white'>
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

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-none md:rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20 -mx-4 md:-mx-0'>
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

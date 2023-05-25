import Image from 'next/image';

export const metadata = {
  title: 'Layanan Dukungan Litigasi | Jayanta.id',
  description:
    'Layanan Dukungan Litigasi kami dirancang untuk membantu organisasi dan individu dalam proses litigasi yang rumit dan seringkali membingungkan.',
};

export default function LitigationSupport() {
  const features = [
    {
      title: 'Konsultasi pra-litigasi',
      description:
        'Sebelum proses litigasi dimulai, kami membantu Anda menilai kekuatan dan kelemahan kasus Anda, serta mengidentifikasi langkah-langkah yang diperlukan untuk mempersiapkan kasus dengan baik.',
    },
    {
      title: 'E-discovery',
      description:
        'Proses e-discovery melibatkan pengumpulan, pengolahan, dan analisis data elektronik yang relevan untuk kasus Anda. Tim kami membantu Anda mengelola proses ini secara efisien dan efektif, memastikan kepatuhan terhadap peraturan yang berlaku dan menjaga integritas bukti.',
    },
    {
      title: 'Analisis data dan dukungan teknologi',
      description:
        'Kami menggunakan teknologi canggih dan metode analisis data untuk mengidentifikasi pola, tren, dan bukti penting yang dapat mendukung klaim Anda. Selain itu, tim kami siap membantu dengan masalah teknis yang mungkin muncul selama proses litigasi.',
    },
    {
      title: 'Dukungan pengadilan',
      description:
        'Tim kami menyediakan dukungan pengadilan yang meliputi penyusunan dan penyajian bukti, pembuatan presentasi visual yang menarik, dan koordinasi dengan saksi ahli.',
    },
    {
      title: 'Penyelidikan dan investigasi digital',
      description:
        'Dalam kasus yang melibatkan kejahatan siber atau pelanggaran hukum lainnya, layanan dukungan litigasi kami mencakup penyelidikan digital dan forensik untuk mengumpulkan bukti dan membangun kasus yang kuat.',
    },
  ];

  const faqs = [
    {
      title: 'Apa itu Dukungan Litigasi?',
      description:
        '<p>Dukungan Litigasi adalah layanan yang ditawarkan oleh penyedia layanan hukum dan teknologi untuk membantu organisasi dan individu dalam proses litigasi. Layanan ini meliputi berbagai aspek litigasi, seperti pengumpulan bukti, e-discovery, analisis data, dukungan pengadilan, dan investigasi digital.</p>',
    },
    {
      title: 'Siapa yang memerlukan layanan Dukungan Litigasi?',
      description:
        '<p>Organisasi dan individu yang terlibat dalam proses litigasi, baik sebagai penggugat maupun tergugat, dapat memanfaatkan layanan Dukungan Litigasi untuk membantu mereka menghadapi tantangan yang timbul selama proses hukum.</p>',
    },
    {
      title: 'Apa manfaat menggunakan layanan Dukungan Litigasi?',
      description:
        '<p>Manfaat utama menggunakan layanan Dukungan Litigasi meliputi:</p><ul className="checklist-ul"><li>Meningkatkan peluang keberhasilan litigasi dengan dukungan ahli dan teknologi canggih</li><li>Mengurangi biaya dan waktu yang terkait dengan proses litigasi</li><li>Mempersiapkan dan menyajikan bukti secara efektif dan persuasif</li><li>Meningkatkan kepercayaan diri dan kesiapan saat menghadapi proses hukum</li></ul>',
    },
    {
      title: 'Apa yang dimaksud dengan e-discovery?',
      description:
        '<p>E-discovery adalah proses pengumpulan, pengolahan, dan analisis data elektronik yang relevan untuk suatu kasus hukum. Proses ini merupakan bagian penting dari dukungan litigasi dan memastikan kepatuhan terhadap peraturan yang berlaku serta integritas bukti yang disajikan.</p>',
    },
    {
      title:
        'Apakah layanan Dukungan Litigasi melibatkan digital forensics?      ',
      description:
        '<p>Ya, layanan Dukungan Litigasi seringkali melibatkan digital forensics, terutama dalam kasus yang melibatkan kejahatan siber atau pelanggaran hukum lainnya. Digital forensics membantu mengumpulkan bukti dan membangun kasus yang kuat.</p>',
    },
    {
      title:
        'Bagaimana cara memilih penyedia layanan Dukungan Litigasi yang tepat?',
      description:
        '<p>Saat memilih penyedia layanan Dukungan Litigasi, pastikan untuk mempertimbangkan faktor-faktor seperti keahlian, pengalaman, reputasi, dan layanan yang ditawarkan. Selain itu, carilah penyedia yang menawarkan layanan yang disesuaikan dengan kebutuhan spesifik Anda dan menjaga kerahasiaan serta integritas data Anda.</p>',
    },
    {
      title:
        'Berapa lama waktu yang dibutuhkan untuk menyelesaikan suatu kasus dengan bantuan layanan Dukungan Litigasi?',
      description:
        '<p>Durasi penyelesaian kasus sangat bervariasi, tergantung pada kompleksitas kasus, jumlah bukti yang perlu dikumpulkan dan dianalisis, serta kerjasama dari pihak-pihak yang terlibat. Dukungan Litigasi bertujuan untuk mempercepat proses litigasi dan mencapai hasil yang optimal dalam waktu yang lebih singkat.</p>',
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
                  Dukungan Litigasi
                </h1>
                <h2 className='text-2xl font-semibold mb-6'>
                  Bantu Anda Menavigasi Kompleksitas Kasus Hukum
                </h2>
                <p className='text-base/relaxed xl:text-lg mt-4'>
                  Layanan Dukungan Litigasi kami dirancang untuk membantu
                  organisasi dan individu dalam proses litigasi yang rumit dan
                  seringkali membingungkan. Dengan menggabungkan keahlian hukum
                  dan teknologi, kami menyediakan dukungan yang komprehensif
                  untuk membantu Anda menghadapi berbagai tantangan yang muncul
                  selama proses hukum, seperti pengumpulan bukti, e-discovery,
                  analisis data, dan penyajian temuan di pengadilan.
                </p>
              </div>
              <div className='w-1/3 order-1 mb-6 md:mb-0 md:w-1/4 lg:w-1/3 md:order-2'>
                <div className='aspect-w-1 aspect-h-1'>
                  <div className='w-full h-full rounded-xl bg-brand-bluenight p-6 md:p-8 flex items-center justify-center'>
                    <Image
                      src='/images/icons/litigation-support.png'
                      alt='Litigation Support'
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
            <div className='mb-6 lg:mb-8 xl:mb-10 max-w-prose'>
              <h2 className='text-3xl xl:text-4xl font-bold mb-4 lg:mb-6'>
                Layanan Dukungan Litigasi kami mencakup
              </h2>
              {/* <div className='prose xl:prose-lg max-w-none text-white'>
                <p>
                  Layanan Digital Forensics kami mencakup berbagai aspek,
                  termasuk:
                </p>
              </div> */}
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 mt-8'>
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
          <div className='bg-black/20 rounded-none md:rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20 -mx-4 md:-mx-0'>
            <h2 className='text-4xl/snug font-bold mb-6'>
              Manfaat menggunakan layanan Dukungan Litigasi kami meliputi:
            </h2>
            <div className='prose xl:prose-lg max-w-none text-white'>
              <ul className='checklist-ul'>
                <li>
                  Memaksimalkan peluang keberhasilan litigasi Anda dengan
                  dukungan ahli dan sumber daya teknologi yang canggih
                </li>
                <li>
                  Mengurangi biaya dan waktu yang terkait dengan proses litigasi
                  melalui pendekatan yang efisien dan terstruktur
                </li>
                <li>
                  Mempersiapkan dan menyajikan bukti dengan cara yang jelas,
                  konsisten, dan persuasif untuk mempengaruhi hakim
                </li>
                <li>
                  Meningkatkan kepercayaan diri dan kesiapan Anda saat
                  menghadapi tantangan yang timbul selama proses hukum
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-none md:rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20 -mx-4 md:-mx-0'>
            <h2 className='text-3xl xl:text-4xl font-bold text-center mb-4 lg:mb-6'>
              FAQ Mengenai Dukungan Litigasi
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

      <section className='pt-4 pb-0 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-6 lg:p-8 xl:px-20 xl:py-12'>
            <div className='prose prose-lg xl:prose-xl max-w-none text-white'>
              <p>
                Lindungi kepentingan Anda dan navigasi proses litigasi dengan
                kepercayaan diri dengan bantuan layanan Dukungan Litigasi kami.
                Hubungi kami hari ini untuk mengetahui lebih lanjut tentang
                bagaimana kami dapat membantu Anda menghadapi berbagai tantangan
                hukum dan memastikan hasil yang optimal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from 'next/image';

export default function DigitalForensic() {
  const features = [
    {
      title: 'Analisis perangkat',
      description:
        'Kami mampu menganalisis berbagai perangkat, seperti komputer, ponsel, dan perangkat IoT, untuk mengumpulkan bukti digital yang relevan dan mengungkap aktivitas yang mencurigakan.',
    },
    {
      title: 'Pemulihan data',
      description:
        'Jika data Anda hilang atau rusak karena kegagalan perangkat, serangan perangkat lunak berbahaya, atau tindakan sengaja, tim kami dapat membantu memulihkan data yang penting bagi organisasi Anda.',
    },
    {
      title: 'E-discovery',
      description:
        'Dalam proses litigasi atau penyelidikan, kami membantu mengidentifikasi, mengumpulkan, dan memproses informasi elektronik yang relevan untuk kasus Anda. Layanan e-discovery kami memastikan integritas bukti dan kepatuhannya terhadap standar hukum yang berlaku.',
    },
    {
      title: 'Investigasi keamanan siber',
      description:
        'Tim Digital Forensics kami dapat membantu dalam menyelidiki insiden keamanan siber, seperti peretasan, serangan DDoS, dan kebocoran data, untuk mengidentifikasi pelaku, menganalisis taktik mereka, dan memberikan rekomendasi tindakan pencegahan.',
    },
    {
      title: 'Analisis malware',
      description:
        'Kami menganalisis perangkat lunak berbahaya yang mungkin menginfeksi sistem Anda untuk menentukan sumber, tujuan, dan cara kerjanya, serta memberikan rekomendasi tentang cara menghapus dan mencegah malware di masa depan.',
    },
  ];

  const faqs = [
    {
      title: 'Apa itu Digital Forensics?',
      description:
        '<p>Digital Forensics adalah proses pengumpulan, analisis, dan penyajian bukti digital dalam konteks hukum dan investigasi. Ini melibatkan pemeriksaan perangkat dan sistem digital untuk menemukan bukti kegiatan yang mencurigakan atau tidak sah, serta memastikan integritas dan keabsahan bukti yang ditemukan.</p>',
    },
    {
      title: 'Mengapa Digital Forensics penting?',
      description:
        '<p>Digital Forensics penting karena membantu dalam mengidentifikasi pelaku kejahatan siber, mengungkap metode dan alat yang digunakan, serta memberikan bukti yang diperlukan untuk mendukung tuntutan hukum atau tindakan penegakan hukum. Selain itu, digital forensics juga membantu organisasi memahami dan mengatasi risiko keamanan siber.</p>',
    },
    {
      title: 'Siapa yang memerlukan layanan Digital Forensics?',
      description:
        '<p>Layanan Digital Forensics dapat bermanfaat bagi perusahaan, organisasi pemerintah, dan individu yang menghadapi insiden keamanan siber, kasus hukum yang melibatkan bukti digital, atau perselisihan perdata yang memerlukan analisis data elektronik.</p>',
    },
    {
      title:
        'Berapa lama waktu yang dibutuhkan untuk menyelesaikan investigasi Digital Forensics?',
      description:
        '<p>Durasi investigasi Digital Forensics sangat bervariasi, tergantung pada kompleksitas kasus, jumlah perangkat dan data yang perlu dianalisis, serta kerjasama dari pihak-pihak yang terlibat. Beberapa kasus mungkin dapat diselesaikan dalam beberapa hari, sementara yang lain mungkin memerlukan beberapa minggu atau lebih.</p>',
    },
    {
      title: 'Apakah Digital Forensics legal?',
      description:
        '<p>Ya, Digital Forensics legal selama dilakukan oleh profesional yang kompeten dan sesuai dengan hukum yang berlaku. Penting untuk memastikan bahwa proses digital forensics mematuhi aturan bukti dan prosedur hukum yang relevan agar hasilnya dapat diterima di pengadilan.</p>',
    },
    {
      title:
        'Bagaimana cara memilih penyedia layanan Digital Forensics yang tepat?      ',
      description:
        '<p>Saat memilih penyedia layanan Digital Forensics, pastikan untuk mempertimbangkan keahlian, pengalaman, dan reputasi perusahaan. Selain itu, carilah penyedia yang menawarkan layanan yang disesuaikan dengan kebutuhan Anda, memiliki sertifikasi industri yang relevan, dan menjaga kerahasiaan dan integritas data Anda.</p>',
    },
    {
      title:
        'Apakah layanan Digital Forensics dapat membantu mencegah serangan keamanan siber di masa depan?',
      description:
        '<p>Walaupun layanan Digital Forensics lebih fokus pada investigasi insiden keamanan siber yang sudah terjadi, hasil dari investigasi tersebut dapat memberikan wawasan penting tentang cara penyerang bekerja, metode yang digunakan, dan bagaimana mencegah serangan serupa di masa depan.</p>',
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
                <h1 className='text-5xl font-bold mb-6'>Digital Forensics</h1>
                <h2 className='text-2xl font-semibold mb-6'>
                  Temukan Bukti dan Ketahui Kebenaran
                </h2>
                <p className='text-lg mt-4'>
                  Digital Forensics adalah ilmu yang mempelajari cara
                  mengumpulkan, menganalisis, dan menyajikan bukti digital dalam
                  konteks hukum dan investigasi. Layanan Digital Forensics kami
                  membantu organisasi dan individu menemukan bukti yang sah,
                  mengungkap fakta, dan menjaga kepentingan mereka dalam
                  berbagai kasus keamanan siber, pelanggaran hukum, dan
                  perselisihan perdata.
                </p>
              </div>
              <div className='w-1/3'>
                <div className='aspect-w-1 aspect-h-1'>
                  <div className='w-full h-full rounded-xl bg-brand-bluenight p-8 flex items-center justify-center'>
                    <Image
                      src='/images/icons/digital-forensics.png'
                      alt='Digital Forensics'
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
            <div className='mb-8'>
              <h2 className='text-4xl lg:text-4xl text-white font-bold mb-4'>
                Layanan Digital Forensics
              </h2>
              <div className='prose prose-lg max-w-none text-white'>
                <p>
                  Layanan Digital Forensics kami mencakup berbagai aspek,
                  termasuk:
                </p>
              </div>
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

      <section className='pt-4 pb-0 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-20'>
            <h2 className='text-4xl/snug font-bold mb-6'>
              Manfaat Digital Forensics
            </h2>
            <div className='prose prose-lg max-w-none text-white'>
              <p>
                Manfaat menggunakan layanan Digital Forensics kami meliputi:
              </p>
              <ul className='checklist-ul'>
                <li>
                  Mengungkap bukti penting yang dapat mendukung klaim Anda dalam
                  proses hukum atau investigasi
                </li>
                <li>
                  Meningkatkan keamanan siber melalui pemahaman yang lebih baik
                  tentang ancaman dan taktik yang digunakan oleh penyerang
                </li>
                <li>
                  Memulihkan data yang hilang atau rusak untuk mengurangi dampak
                  pada bisnis Anda
                </li>
                <li>
                  Memastikan kepatuhan terhadap peraturan dan standar industri
                  yang berlaku
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-4 pb-0 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-20'>
            <h2 className='text-4xl lg:text-4xl text-white font-bold text-center mb-8'>
              FAQ mengenai Incident Response
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
                Lindungi organisasi Anda dan ketahui kebenaran dengan bantuan
                layanan Digital Forensics kami. Hubungi kami hari ini untuk
                mengetahui lebih lanjut tentang bagaimana layanan kami dapat
                membantu Anda menghadapi berbagai tantangan keamanan siber dan
                hukum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

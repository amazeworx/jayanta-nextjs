import Image from 'next/image';

export default function IncidentResponse() {
  const features = [
    {
      title: 'Deteksi dan Analisis Insiden',
      description:
        'Tim kami akan membantu Anda mengidentifikasi insiden keamanan siber, menentukan sumber dan dampaknya, serta memberikan analisis menyeluruh tentang insiden tersebut.',
    },
    {
      title: 'Penanganan dan Penyelidikan',
      description:
        'Setelah insiden diidentifikasi, tim kami akan bekerja untuk menangani dan mengatasi insiden tersebut. Ini termasuk memeriksa sistem yang terinfeksi, mengisolasi area yang terpengaruh, dan melakukan penyelidikan untuk menemukan cara penyerang masuk ke sistem Anda.',
    },
    {
      title: 'Pemulihan dan Rekomendasi',
      description:
        'Setelah insiden ditangani, tim kami akan membantu Anda memulihkan operasi bisnis dan memberikan rekomendasi untuk mencegah insiden serupa di masa depan.',
    },
    {
      title: 'Laporan dan Dokumentasi',
      description:
        'Anda akan menerima laporan detail yang mencakup analisis insiden, langkah-langkah yang diambil untuk mengatasi insiden, dan rekomendasi untuk meningkatkan keamanan siber Anda.',
    },
  ];

  const benefits = [
    {
      title: 'Respon cepat',
      description:
        '<p>Tim kami siap untuk memberikan dukungan cepat saat insiden keamanan siber terjadi, meminimalkan dampak pada bisnis Anda.</p>',
    },
    {
      title: 'Ahli keamanan siber',
      description:
        '<p>Anda akan bekerja dengan tim ahli keamanan siber yang berpengalaman dan terampil dalam menangani insiden keamanan siber.</p>',
    },
    {
      title: 'Mencegah insiden di masa depan',
      description:
        '<p>Layanan kami membantu Anda mengidentifikasi celah keamanan dan memberikan rekomendasi untuk mencegah insiden serupa di masa depan.</p>',
    },
    {
      title: 'Menjaga reputasi bisnis',
      description:
        '<p>Dengan menangani insiden keamanan siber secara efektif, Anda dapat menjaga reputasi bisnis Anda dan kepercayaan pelanggan.</p>',
    },
    {
      title: 'Kepatuhan dengan peraturan',
      description:
        '<p>Menangani insiden keamanan siber dengan tepat dapat membantu memastikan bahwa organisasi Anda mematuhi peraturan dan standar industri yang berlaku, seperti GDPR, HIPAA, dan PCI DSS.</p>',
    },
    {
      title: 'Mengurangi biaya',
      description:
        '<p>Dengan menangani insiden keamanan siber secara efisien dan efektif, Anda dapat mengurangi biaya yang terkait dengan insiden tersebut, seperti denda, biaya pemulihan, dan potensi kerugian bisnis.</p>',
    },
    {
      title: 'Meningkatkan kesadaran keamanan',
      description:
        '<p>Melalui proses respons insiden, organisasi Anda akan lebih memahami risiko keamanan siber dan mengambil langkah-langkah proaktif untuk mencegah insiden di masa depan.</p>',
    },
  ];

  const methods = [
    {
      title: '1. Persiapan',
      description:
        'Membangun dan memelihara rencana respons insiden yang mencakup prosedur, peran, tanggung jawab, dan kontak penting. Latihan dan simulasi insiden juga dilakukan untuk memastikan kesiapan tim dan efektivitas rencana.',
    },
    {
      title: '2. Identifikasi',
      description:
        'Mendeteksi dan mengkonfirmasi keberadaan insiden keamanan siber melalui pemantauan sistem, analisis log, dan laporan dari pengguna atau pihak ketiga.',
    },
    {
      title: '3. Penyelidikan',
      description:
        'Mengumpulkan dan menganalisis bukti untuk menentukan sumber, ruang lingkup, dan dampak insiden. Hal ini melibatkan penggunaan alat forensik dan teknik investigasi untuk melacak penyerang dan menilai kerugian yang mungkin terjadi.',
    },
    {
      title: '4. Penanggulangan',
      description:
        'Mengambil tindakan segera untuk mengendalikan insiden, seperti mengisolasi sistem yang terinfeksi, memutus akses penyerang, dan menerapkan patch keamanan.',
    },
    {
      title: '5. Pemulihan',
      description:
        'Memulihkan sistem dan operasi yang terpengaruh dengan mengembalikan data dari cadangan, menghapus perangkat lunak berbahaya, dan memastikan keamanan lingkungan sebelum pengoperasian normal dilanjutkan.',
    },
    {
      title: '6. Komunikasi',
      description:
        'Memberi tahu pihak-pihak yang relevan tentang insiden, seperti manajemen, karyawan, pelanggan, dan otoritas penegak hukum. Komunikasi yang jelas dan transparan sangat penting untuk menjaga kepercayaan dan menjaga reputasi organisasi.',
    },
    {
      title: '7. Evaluasi dan Pembelajaran',
      description:
        'Setelah insiden ditangani, mengulas dan menganalisis kejadian untuk menentukan penyebab, les pelajaran, dan rekomendasi untuk mengurangi risiko insiden serupa di masa depan. Ini dapat mencakup pembaruan kebijakan, prosedur, dan infrastruktur keamanan.',
    },
  ];

  const faqs = [
    {
      title: 'Apa itu Incident Response Handling?',
      description:
        '<p>Incident Response Handling adalah proses yang sistematis dan terorganisir untuk mengidentifikasi, menginvestigasi, dan menangani insiden keamanan siber. Tujuannya adalah mengurangi dampak insiden, memulihkan operasi yang terpengaruh, dan mencegah insiden serupa di masa depan.</p>',
    },
    {
      title: 'Mengapa Incident Response Handling penting?',
      description:
        '<p>Incident Response Handling penting karena membantu organisasi mengurangi risiko kerugian finansial, reputasi, dan kepercayaan pelanggan yang diakibatkan oleh insiden keamanan. Proses ini memastikan pemulihan bisnis yang cepat dan efisien serta pencegahan insiden serupa di masa depan.</p>',
    },
    {
      title: 'Siapa yang seharusnya terlibat dalam Incident Response Handling?',
      description:
        '<p>Tim respons insiden biasanya terdiri dari anggota internal seperti ahli keamanan siber, administrator sistem, dan manajemen TI. Terkadang, konsultan eksternal atau penyedia layanan keamanan siber juga dapat terlibat untuk membantu menangani insiden yang lebih kompleks atau sensitif.</p>',
    },
    {
      title:
        'Berapa lama waktu yang diperlukan untuk menangani insiden keamanan siber?',
      description:
        '<p>Waktu yang diperlukan untuk menangani insiden keamanan siber sangat bervariasi tergantung pada jenis insiden, ruang lingkup, dan kompleksitas. Beberapa insiden dapat diselesaikan dalam beberapa jam, sementara yang lain mungkin memerlukan beberapa hari atau bahkan minggu.</p>',
    },
    {
      title:
        'Apa yang harus dilakukan setelah insiden keamanan siber telah ditangani?',
      description:
        '<p>Setelah insiden keamanan siber ditangani, organisasi harus mengambil langkah-langkah untuk menganalisis insiden, menilai les pelajaran, dan menerapkan perubahan yang diperlukan untuk mengurangi risiko insiden serupa di masa depan. Ini dapat mencakup pembaruan kebijakan, prosedur, dan infrastruktur keamanan.</p>',
    },
    {
      title:
        'Bagaimana cara mempersiapkan organisasi saya untuk respons insiden yang efektif?',
      description:
        '<p>Mempersiapkan organisasi Anda untuk respons insiden yang efektif melibatkan pembuatan dan pemeliharaan rencana respons insiden, pelatihan dan pengujian tim respons insiden, serta pemantauan dan peningkatan keamanan TI secara berkelanjutan.</p>',
    },
    {
      title:
        'Apakah Incident Response Handling sama dengan penanganan bencana?',
      description:
        '<p>Meskipun keduanya melibatkan respons terhadap insiden yang merugikan, Incident Response Handling lebih fokus pada insiden keamanan siber, sementara penanganan bencana melibatkan perencanaan dan respons terhadap bencana alam atau bencana yang disebabkan oleh manusia yang mempengaruhi infrastruktur fisik dan operasional.</p>',
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
                  Incident Response Handling
                </h1>
                <h2 className='text-2xl font-semibold mb-6'>
                  Tangani Insiden Keamanan Siber dengan Cepat dan Efektif
                </h2>
                <p className='text-base/relaxed xl:text-lg mt-4'>
                  Dalam dunia keamanan siber, insiden keamanan adalah hal yang
                  tidak dapat dihindari. Serangan siber, kebocoran data, dan
                  insiden lainnya dapat menimpa organisasi mana pun, terlepas
                  dari ukuran atau industri. Oleh karena itu, penting untuk
                  memiliki strategi respons insiden yang efektif dan efisien
                  untuk menghadapi insiden keamanan siber. Layanan Incident
                  Response Handling kami memberi Anda dukungan ahli dan solusi
                  cepat untuk mengatasi insiden keamanan siber dan meminimalkan
                  dampaknya pada bisnis Anda.
                </p>
              </div>
              <div className='w-1/3 order-1 mb-6 md:mb-0 md:w-1/4 lg:w-1/3 md:order-2'>
                <div className='aspect-w-1 aspect-h-1'>
                  <div className='w-full h-full rounded-xl bg-brand-bluenight p-6 md:p-8 flex items-center justify-center'>
                    <Image
                      src='/images/icons/incident-response-handling.png'
                      alt='Incident Response Handling'
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
              Apa itu Incident Response Handling?
            </h2>
            <div className='prose prose-lg max-w-none text-white'>
              <p>
                Incident Response Handling adalah proses yang sistematis dan
                terorganisir untuk mengidentifikasi, menginvestigasi, dan
                menangani insiden keamanan siber. Tujuan utamanya adalah untuk
                mengurangi dampak insiden, memulihkan operasi yang terpengaruh,
                dan mencegah insiden serupa di masa depan. Layanan kami
                melibatkan tim ahli keamanan siber yang siap membantu Anda
                menghadapi insiden keamanan dan memastikan pemulihan bisnis yang
                cepat dan efisien.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20'>
            <div className=''>
              <h2 className='text-4xl lg:text-4xl/snug text-white font-bold mb-4'>
                Fitur Utama Layanan Incident Response Handling
              </h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 mt-12 lg:mt-12'>
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
                Manfaat Incident Response Handling
              </h2>
              {/* <div className='prose prose-lg max-w-none text-white'>
                <p>
                  Kerentanan (vulnerabilities) adalah kelemahan dalam sistem,
                  aplikasi, atau jaringan yang dapat dieksploitasi oleh peretas
                  untuk mengakses atau mengendalikan sistem tersebut. Kerentanan
                  dapat berasal dari berbagai sumber, seperti kesalahan dalam
                  kode, konfigurasi yang tidak aman, atau kelemahan dalam
                  protokol komunikasi.
                </p>
                <p>Berikut adalah beberapa contoh umum dari kerentanan:</p>
              </div> */}
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
            <div className='mt-8'>
              <div className='prose prose-lg max-w-none text-white'>
                <p>
                  Jangan biarkan insiden keamanan siber menghancurkan bisnis
                  Anda. Dapatkan dukungan ahli dari layanan Incident Response
                  Handling kami untuk mengatasi insiden keamanan dan memastikan
                  kelangsungan bisnis Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20'>
            <div className='mb-8'>
              <h2 className='text-3xl xl:text-4xl font-bold mb-4 lg:mb-6'>
                Metode Incident Response Handling
              </h2>
              <div className='prose prose-lg max-w-none text-white'>
                <p>
                  Metode Incident Response Handling melibatkan beberapa langkah
                  kritis yang membantu organisasi mengidentifikasi, menangani,
                  dan memulihkan diri dari insiden keamanan siber. Berikut ini
                  adalah metode umum yang digunakan dalam proses penanganan
                  insiden:
                </p>
              </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 mt-10'>
              {methods &&
                methods.map((item, i) => (
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
                  Menerapkan metode Incident Response Handling yang efektif
                  sangat penting untuk mengurangi dampak insiden keamanan siber
                  dan memastikan kelangsungan bisnis. Dengan rencana respons
                  insiden yang baik dan tim yang terlatih, organisasi dapat
                  lebih siap menghadapi ancaman keamanan siber dan melindungi
                  aset serta informasi penting.
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
              FAQ mengenai Incident Response
            </h2>
            <div className='flex flex-col gap-y-3'>
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
                Layanan Incident Response Handling kami dirancang untuk membantu
                Anda menghadapi dan mengatasi insiden keamanan siber dengan
                cepat dan efisien. Dengan dukungan ahli dari tim kami, Anda
                dapat meminimalkan dampak insiden pada bisnis Anda dan
                memastikan kelangsungan operasi yang lancar. Hubungi kami hari
                ini untuk mengetahui lebih lanjut tentang bagaimana layanan kami
                dapat membantu melindungi bisnis Anda dari ancaman keamanan
                siber.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

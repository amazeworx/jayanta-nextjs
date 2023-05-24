import Image from 'next/image';

export const metadata = {
  title: 'Konsultasi Pemenuhan Kepatuhan SE OJK NO. 29 03/2022 | Jayanta.id',
  description:
    'Otoritas Jasa Keuangan (OJK) Indonesia mengeluarkan Surat Edaran (SE) No. 29/POJK.03/2022 tentang Penerapan Manajemen Risiko Teknologi Informasi dan Komunikasi (TIK) bagi Lembaga Jasa Keuangan (LJK)',
};

export default function Iso27001() {
  const benefits = [
    {
      title: 'Perlindungan Data dan Informasi',
      description:
        'Dengan menerapkan kebijakan dan prosedur yang sesuai dengan SE OJK NO. 29 03.2022, Anda akan meningkatkan keamanan data dan informasi yang Anda kelola, melindungi aset penting dan informasi sensitif dari risiko keamanan siber.',
    },
    {
      title: 'Meningkatkan Reputasi',
      description:
        'Kepatuhan terhadap SE OJK NO. 29 03.2022 menunjukkan kepada nasabah, mitra bisnis, dan regulator bahwa Anda serius dalam menjaga keamanan informasi dan melindungi data mereka. Hal ini dapat meningkatkan reputasi perusahaan Anda di industri jasa keuangan.',
    },
    {
      title: 'Mengurangi Risiko Hukum',
      description:
        'Kepatuhan terhadap SE OJK NO. 29 03.2022 dapat mengurangi risiko sanksi dan denda dari OJK, serta mengurangi potensi tuntutan hukum yang mungkin dihadapi akibat kegagalan dalam menjaga keamanan informasi.',
    },
    {
      title: 'Peningkatan Kesadaran Karyawan',
      description:
        'Melalui pelatihan dan program peningkatan kesadaran, karyawan Anda akan lebih memahami pentingnya keamanan informasi dan peran mereka dalam menjaga kepatuhan terhadap SE OJK NO. 29 03.2022.',
    },
    {
      title: 'Kemampuan Adaptasi',
      description:
        'Tim ahli kami akan membantu Anda menghadapi perubahan regulasi dan ancaman keamanan yang terus berkembang, memastikan bahwa Anda selalu siap untuk menghadapi tantangan baru dalam industri jasa keuangan.',
    },
  ];

  const steps = [
    {
      title: '1. Penilaian Kebutuhan',
      description:
        '<p>Tahap awal melibatkan pemahaman tentang kebutuhan dan kondisi bisnis Anda. Tim kami akan mengumpulkan informasi tentang struktur organisasi, teknologi yang digunakan, dan proses bisnis yang ada.</p>',
    },
    {
      title: '2. Penilaian Risiko',
      description:
        '<p>Tim ahli kami akan melakukan penilaian risiko terhadap infrastruktur teknologi informasi dan komunikasi Anda, mengidentifikasi potensi celah keamanan dan area yang memerlukan perbaikan.</p>',
    },
    {
      title: '3. Pembuatan Rencana Aksi',
      description:
        '<p>Berdasarkan hasil penilaian risiko, tim kami akan mengembangkan rencana aksi yang mencakup kebijakan, prosedur, dan pengendalian yang perlu diimplementasikan untuk mencapai kepatuhan dengan SE OJK NO. 29 03.2022.</p>',
    },
    {
      title: '4. Implementasi',
      description:
        '<p>Dalam tahap ini, tim kami akan bekerja dengan Anda untuk mengimplementasikan rencana aksi, termasuk pengembangan dan pelaksanaan kebijakan dan prosedur yang diperlukan, serta pelatihan dan peningkatan kesadaran bagi karyawan.</p>',
    },
    {
      title: '5. Pengujian dan Pemantauan',
      description:
        '<p>Setelah implementasi, tim kami akan membantu Anda dalam melakukan pengujian dan pemantauan berkala terhadap sistem dan proses keamanan informasi Anda, serta membantu Anda dalam proses pelaporan yang diperlukan kepada OJK.</p>',
    },
    {
      title: '6. Tinjauan Berkala',
      description:
        '<p>Tim ahli kami akan melakukan tinjauan berkala untuk memastikan kepatuhan Anda dengan SE OJK NO. 29 03.2022, serta membantu Anda menghadapi perubahan regulasi dan ancaman keamanan yang terus berkembang.</p>',
    },
    {
      title: '7. Penyempurnaan dan Pembaruan',
      description:
        '<p>Berdasarkan tinjauan dan umpan balik, tim kami akan membantu Anda melakukan penyempurnaan dan pembaruan pada kebijakan, prosedur, dan pengendalian yang ada, untuk memastikan keamanan informasi yang optimal dan kepatuhan yang berkelanjutan.</p>',
    },
  ];

  const faqs = [
    {
      title: 'Apa tujuan dari SE OJK NO. 29 03.2022?',
      description:
        '<p>Tujuan dari SE OJK NO. 29 03.2022 adalah untuk memberikan pedoman dan standar bagi Lembaga Jasa Keuangan dalam mengelola risiko keamanan informasi dan melindungi data serta informasi yang mereka kelola.</p>',
    },
    {
      title:
        'Apakah layanan konsultasi pemenuhan kepatuhan ini cocok untuk perusahaan saya?',
      description:
        '<p>Layanan konsultasi pemenuhan kepatuhan ini cocok untuk semua Lembaga Jasa Keuangan yang ingin mencapai kepatuhan dengan SE OJK NO. 29 03.2022, termasuk bank, perusahaan asuransi, dan perusahaan sekuritas.</p>',
    },
    {
      title: 'Berapa lama proses konsultasi pemenuhan kepatuhan ini?',
      description:
        '<p>Proses konsultasi pemenuhan kepatuhan akan bervariasi tergantung pada ukuran dan kompleksitas organisasi Anda, serta tingkat kesiapan Anda saat ini dalam menghadapi persyaratan SE OJK NO. 29 03.2022. Tim kami akan bekerja dengan Anda untuk mengembangkan jadwal yang realistis dan efisien.</p>',
    },
    {
      title: 'Apakah layanan konsultasi ini mencakup pelatihan bagi karyawan?',
      description:
        '<p>Ya, layanan konsultasi kami mencakup pelatihan dan peningkatan kesadaran bagi karyawan, yang akan membantu mereka memahami pentingnya keamanan informasi dan peran mereka dalam mencapai kepatuhan dengan SE OJK NO. 29 03.2022.</p>',
    },
    {
      title:
        'Apakah konsultan Anda memiliki sertifikasi dan pengalaman yang relevan?',
      description:
        '<p>Tim konsultan kami terdiri dari para ahli yang memiliki sertifikasi dan pengalaman yang relevan dalam bidang keamanan siber, termasuk pengalaman dalam membantu organisasi mencapai kepatuhan dengan SE OJK NO. 29 03.2022 dan standar keamanan informasi lainnya.</p>',
    },
    {
      title:
        'Bagaimana cara memulai proses konsultasi pemenuhan kepatuhan ini?',
      description:
        '<p>Untuk memulai proses konsultasi pemenuhan kepatuhan, Anda dapat menghubungi kami melalui informasi kontak yang tersedia di situs web kami. Tim kami akan dengan senang hati membantu Anda dalam menentukan kebutuhan Anda dan merencanakan langkah-langkah selanjutnya dalam proses konsultasi.</p>',
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
                <h3 className='mb-4'>LAYANAN KONSULTASI</h3>
                <h1 className='text-4xl xl:text-5xl font-bold mb-4 xl:mb-6'>
                  Pemenuhan Kepatuhan SE OJK NO. 29 03/2022
                </h1>
                <p className='text-base/relaxed xl:text-lg mt-4'>
                  Dalam dunia bisnis yang semakin terkoneksi dan bergantung pada
                  teknologi, industri keuangan di Indonesia harus memastikan
                  keamanan dan integritas sistem informasi mereka. Sebagai
                  tanggapan atas tantangan ini, Otoritas Jasa Keuangan (OJK)
                  Indonesia telah mengeluarkan Surat Edaran (SE) No.
                  29/POJK.03/2022 tentang Penerapan Manajemen Risiko Teknologi
                  Informasi dan Komunikasi (TIK) bagi Lembaga Jasa Keuangan
                  (LJK).
                </p>
              </div>
              <div className='w-1/2 order-1 mb-6 md:mb-0 md:w-1/4 lg:w-1/3 md:order-2'>
                <div className='aspect-w-1 aspect-h-1'>
                  <div className='w-full h-full rounded-xl bg-brand-bluenight p-6 md:p-8 flex items-center justify-center'>
                    <Image
                      src='/images/compliance/ojk.png'
                      alt='OJK'
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

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20'>
            {/* <h2 className='text-4xl/snug font-bold mb-6'>
              Mengapa Review Kebijakan Keamanan Siber Penting?
            </h2> */}
            <div className='prose prose-lg max-w-none text-white'>
              <p>
                Layanan kami dirancang untuk membantu Lembaga Jasa Keuangan
                memahami, menerapkan, dan mematuhi ketentuan yang ditetapkan
                dalam SE OJK NO. 29 03.2022. Tim ahli kami akan bekerja sama
                dengan Anda untuk:
              </p>
              <ul className='checklist-ul'>
                <li>
                  Melakukan penilaian risiko terhadap infrastruktur teknologi
                  informasi dan komunikasi Anda, serta mengidentifikasi potensi
                  celah keamanan.
                </li>
                <li>
                  Membantu Anda dalam mengembangkan dan mengimplementasikan
                  kebijakan dan prosedur yang sesuai untuk manajemen risiko TIK,
                  termasuk pengendalian akses, pengelolaan perubahan, dan
                  pemulihan data.
                </li>
                <li>
                  Melakukan pelatihan dan peningkatan kesadaran bagi karyawan
                  Anda tentang keamanan informasi dan pentingnya kepatuhan
                  terhadap SE OJK NO. 29 03.2022.
                </li>
                <li>
                  Memastikan pengujian dan pemantauan berkala terhadap sistem
                  dan proses keamanan informasi Anda, serta membantu Anda dalam
                  proses pelaporan yang diperlukan kepada OJK.
                </li>
                <li>
                  Memberikan dukungan berkelanjutan untuk memastikan kepatuhan
                  Anda dengan SE OJK NO. 29 03.2022, serta membantu Anda
                  menghadapi perubahan regulasi dan ancaman keamanan yang terus
                  berkembang.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20'>
            <div className='mb-8'>
              <h2 className='text-3xl xl:text-4xl font-bold mb-4 lg:mb-6'>
                Manfaat
              </h2>
              <div className='prose prose-lg max-w-none text-white'>
                <p>
                  Memanfaatkan layanan konsultasi pemenuhan kepatuhan SE OJK NO.
                  29 03.2022 kami memberikan sejumlah keuntungan penting bagi
                  Lembaga Jasa Keuangan Anda, seperti:
                </p>
              </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 mt-10'>
              {benefits &&
                benefits.map((item, i) => (
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
                  Dengan memanfaatkan layanan konsultasi pemenuhan kepatuhan SE
                  OJK NO. 29 03.2022 kami, Anda akan mengambil langkah penting
                  dalam memastikan keamanan informasi dan keberlangsungan bisnis
                  Anda, serta menjaga kepercayaan dan kepuasan pelanggan.
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
                Langkah - Langkah
              </h2>
              <div className='prose prose-lg max-w-none text-white'>
                <p>
                  Berikut adalah langkah-langkah yang biasanya diikuti dalam
                  proses konsultasi pemenuhan kepatuhan SE OJK NO. 29 03.2022:
                </p>
              </div>
            </div>
            <div className='bg-[#0B2347] bg-black/20 rounded-xl p-6 lg:p-10 text-white -mx-10'>
              <div className='grid grid-cols-1 gap-6'>
                {steps &&
                  steps.map((item, i) => (
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
                  Dengan mengikuti langkah-langkah ini, Anda akan menjalani
                  proses konsultasi pemenuhan kepatuhan SE OJK NO. 29 03.2022
                  yang sistematis dan efektif, yang akan membantu Anda mencapai
                  kepatuhan dan meningkatkan keamanan informasi di organisasi
                  Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-4 pb-4 lg:pt-0 lg:pb-10 relative z-10 bg-brand-bluenight'>
        <div className='container max-w-screen-xl'>
          <div className='bg-black/20 rounded-2xl p-6 lg:p-10 xl:p-16 2xl:p-20'>
            <h2 className='text-4xl lg:text-4xl text-white font-bold text-center mb-12'>
              FAQ mengenai Layanan Konsultasi Pemenuhan Kepatuhan SE OJK NO. 29
              03/2022
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
                Kami percaya bahwa kepatuhan dan keamanan informasi adalah aspek
                penting dalam menjaga kepercayaan dan reputasi organisasi Anda
                di industri jasa keuangan yang kompetitif. Dengan layanan
                konsultasi kami, Anda akan mendapatkan dukungan dan panduan dari
                tim ahli yang berdedikasi dan berpengalaman dalam membantu
                organisasi mencapai kepatuhan dengan regulasi yang berlaku.
              </p>
              <p>
                Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan
                lebih lanjut atau jika Anda ingin memulai proses konsultasi
                pemenuhan kepatuhan. Kami siap untuk membantu Anda menghadapi
                tantangan keamanan siber dan memastikan bahwa organisasi Anda
                siap untuk menjaga integritas dan keamanan data yang Anda
                kelola. Kami berharap dapat bekerja sama dengan Anda dan
                membantu Anda mencapai kesuksesan dalam menjalankan bisnis yang
                aman, patuh, dan terpercaya.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

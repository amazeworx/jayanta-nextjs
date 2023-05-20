import Image from 'next/image';

export default function ComplianceAdvisory() {
  const services = [
    {
      title: '1. Penilaian Kepatuhan',
      description:
        'Tim ahli kami akan melakukan penilaian menyeluruh terhadap kepatuhan organisasi Anda terhadap peraturan dan standar industri yang berlaku. Proses ini mencakup peninjauan kebijakan, prosedur, dan kontrol yang ada, serta identifikasi area yang memerlukan perbaikan.',
      link: '',
    },
    {
      title: '2. Identifikasi Persyaratan Kepatuhan',
      description:
        'Kami akan membantu Anda mengidentifikasi persyaratan kepatuhan yang relevan dengan bisnis dan industri Anda, serta menyediakan panduan tentang bagaimana memenuhi persyaratan tersebut',
      link: '',
    },
    {
      title: '3. Pengembangan Strategi Kepatuhan',
      description:
        'Berdasarkan hasil penilaian kepatuhan dan identifikasi persyaratan, tim kami akan mengembangkan strategi kepatuhan yang disesuaikan dengan kebutuhan dan lingkungan organisasi Anda. Strategi ini akan mencakup rekomendasi untuk perbaikan kebijakan, prosedur, dan kontrol, serta langkah-langkah pencegahan dan mitigasi risiko.',
      link: '',
    },
    {
      title: '4.	Implementasi dan Pemantauan',
      description:
        'Tim kami akan membantu Anda dalam mengimplementasikan strategi kepatuhan yang disarankan, serta memberikan dukungan untuk pelatihan karyawan dan pemangku kepentingan terkait. Kami juga akan membantu Anda dalam mengatur proses pemantauan dan tinjauan berkala untuk memastikan kepatuhan yang berkelanjutan.',
      link: '',
    },
    {
      title: '5. Dukungan Regulator',
      description:
        'Layanan Compliance Advisory kami mencakup dukungan dalam berinteraksi dengan regulator dan menjawab pertanyaan atau pemeriksaan yang mungkin timbul sehubungan dengan kepatuhan.',
      link: '',
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
                <h1 className='text-5xl font-bold mb-6'>Compliance Advisory</h1>
                <p className='text-lg mt-4'>
                  Di dunia bisnis yang semakin kompleks dan teregulasi,
                  kepatuhan terhadap peraturan dan standar industri menjadi
                  kunci dalam mengelola risiko dan memastikan pertumbuhan yang
                  berkelanjutan. Layanan Compliance Advisory kami dirancang
                  untuk membantu organisasi dalam menavigasi labirin peraturan
                  yang berlaku, mengidentifikasi persyaratan kepatuhan yang
                  relevan, dan mengembangkan strategi yang efektif untuk
                  memastikan kepatuhan yang berkelanjutan.
                </p>
              </div>
              <div className='w-1/3'>
                <div className='aspect-w-1 aspect-h-1'>
                  <div className='w-full h-full rounded-xl bg-brand-bluenight p-8 flex items-center justify-center'>
                    <Image
                      src='/images/icons/compliance-advisory.png'
                      alt='Compliance Advisory'
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
              Mengapa Layanan Compliance Advisory Penting?
            </h2>
            <div className='prose prose-lg max-w-none text-white'>
              <ul className='checklist-ul'>
                <li>Mempromosikan budaya kepatuhan di seluruh organisasi</li>
                <li>Mengurangi risiko denda, sanksi, dan kerugian reputasi</li>
                <li>
                  Meningkatkan efisiensi operasional dan pengelolaan risiko
                </li>
                <li>
                  Mempertahankan keunggulan kompetitif dalam lingkungan bisnis
                  yang semakin teregulasi
                </li>
                <li>
                  Meningkatkan kepercayaan dari pemangku kepentingan, termasuk
                  pelanggan, regulator, dan investor
                </li>
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
                Apa yang Dapat Anda Harapkan dari Layanan Compliance Advisory
                Kami?
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
              FAQ Layanan Compliance Advisory
            </h2>
            <div className='flex flex-col gap-y-4 mt-10'>
              <div
                tabIndex={0}
                className='collapse collapse-plus border border-[#0B2347] bg-[#0B2347] rounded-lg'
              >
                <div className='collapse-title pl-8 py-6 text-xl font-bold text-cyan-400'>
                  <div className='flex gap-x-2'>
                    <span>Apa itu layanan Compliance Advisory?</span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Layanan Compliance Advisory adalah layanan yang membantu
                      organisasi dalam memahami dan mematuhi peraturan serta
                      standar industri yang berlaku. Tujuannya adalah untuk
                      mengurangi risiko denda, sanksi, dan kerugian reputasi,
                      serta meningkatkan efisiensi operasional dan kepercayaan
                      dari pemangku kepentingan.
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
                    <span>Mengapa layanan Compliance Advisory penting?</span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Layanan Compliance Advisory penting karena membantu
                      organisasi:
                    </p>
                    <ul>
                      <li>
                        Mempromosikan budaya kepatuhan di seluruh organisasi
                      </li>
                      <li>
                        Mengurangi risiko denda, sanksi, dan kerugian reputasi
                      </li>
                      <li>
                        Meningkatkan efisiensi operasional dan pengelolaan
                        risiko
                      </li>
                      <li>
                        Mempertahankan keunggulan kompetitif dalam lingkungan
                        bisnis yang semakin teregulasi
                      </li>
                      <li>
                        Meningkatkan kepercayaan dari pemangku kepentingan,
                        termasuk pelanggan, regulator, dan investor
                      </li>
                    </ul>
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
                      Siapa yang memerlukan layanan Compliance Advisory?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Organisasi dari berbagai ukuran dan industri yang ingin
                      memastikan kepatuhan terhadap peraturan dan standar yang
                      berlaku dapat memanfaatkan layanan Compliance Advisory.
                      Layanan ini sangat berguna bagi organisasi yang beroperasi
                      di lingkungan yang sangat teregulasi atau yang menghadapi
                      perubahan signifikan dalam persyaratan kepatuhan.
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
                      Apa saja langkah-langkah yang terlibat dalam layanan
                      Compliance Advisory?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Langkah-langkah utama dalam layanan Compliance Advisory
                      mencakup:
                    </p>
                    <ul>
                      <li>Penilaian kepatuhan</li>
                      <li>Identifikasi persyaratan kepatuhan</li>
                      <li>Pengembangan strategi kepatuhan</li>
                      <li>Implementasi dan pemantauan</li>
                      <li>Dukungan regulator</li>
                    </ul>
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
                      Berapa lama waktu yang dibutuhkan untuk layanan Compliance
                      Advisory?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Durasi layanan Compliance Advisory bervariasi tergantung
                      pada ukuran, kompleksitas, dan tingkat kesiapan kepatuhan
                      organisasi Anda. Proses ini dapat berkisar dari beberapa
                      minggu hingga beberapa bulan, tergantung pada lingkup dan
                      kebutuhan proyek.
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
                      Apakah layanan Compliance Advisory menjamin kepatuhan
                      organisasi saya?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Meskipun layanan Compliance Advisory dirancang untuk
                      membantu organisasi mematuhi peraturan dan standar yang
                      berlaku, tidak ada jaminan mutlak bahwa organisasi Anda
                      akan selalu patuh. Namun, dengan mengikuti rekomendasi
                      dari layanan Compliance Advisory, Anda akan secara
                      signifikan meningkatkan kemampuan organisasi Anda untuk
                      mengelola risiko kepatuhan dan mengurangi peluang denda
                      atau sanksi.
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
                      Bagaimana cara menghubungi Anda untuk layanan Compliance
                      Advisory?
                    </span>
                  </div>
                </div>
                <div className='collapse-content px-8'>
                  <div className='prose max-w-none text-white/80'>
                    <p>
                      Untuk mendapatkan informasi lebih lanjut atau mengatur
                      konsultasi mengenai layanan Compliance Advisory, Anda
                      dapat menghubungi kami melalui telepon, email, atau
                      mengisi formulir kontak yang tersedia di situs web kami.
                      Tim kami akan segera menghubungi Anda untuk membahas
                      kebutuhan dan langkah selanjutnya.
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

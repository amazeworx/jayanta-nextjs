import Image from 'next/image';

export default function Header() {
  return (
    <div className='flex px-4 py-4 bg-black sticky top-0 z-50 justify-between'>
      <div className=''>
        <a href='/' className='text-4xl font-bold'>
          <Image
            src='/images/logo-jayanta.svg'
            alt='Jayanta'
            className='h-12 lg:h-14 w-auto'
            width={724}
            height={142}
            priority
          />
        </a>
      </div>
      <div className='flex gap-x-3 text-xl'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost text-lg normal-case'>
            Services
            <svg
              className='fill-current ml-2'
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
            >
              <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z'></path>
            </svg>
          </label>
          <div
            tabIndex={0}
            className='dropdown-content menu p-2 bg-[#0B2347] rounded-box w-auto'
          >
            <div className='flex gap-x-6 w-auto'>
              <div className=''>
                <label className='block px-4 py-3 font-bold'>Safeguard</label>
                <ul className='columns-2 text-base'>
                  <li>
                    <a
                      href='/services/penetration-testing'
                      className='whitespace-nowrap'
                    >
                      Penetration Testing
                    </a>
                  </li>
                  <li>
                    <a
                      href='/services/cyber-threat-intelligence'
                      className='whitespace-nowrap'
                    >
                      Cyber Threat Intelligence
                    </a>
                  </li>
                  <li>
                    <a
                      href='/services/breach-attack-simulation'
                      className='whitespace-nowrap'
                    >
                      Breach and Attack Simulation
                    </a>
                  </li>
                  <li>
                    <a
                      href='/services/vulnerability-assessment'
                      className='whitespace-nowrap'
                    >
                      Vulnerability Assessment
                    </a>
                  </li>
                  <li>
                    <a
                      href='/services/dark-web-monitoring'
                      className='whitespace-nowrap'
                    >
                      Dark Web Monitoring
                    </a>
                  </li>
                  <li>
                    <a
                      href='/services/cyber-policy-review'
                      className='whitespace-nowrap'
                    >
                      Cyber Policy Review
                    </a>
                  </li>
                  <li>
                    <a
                      href='/services/compliance-advisory'
                      className='whitespace-nowrap'
                    >
                      Compliance Advisory
                    </a>
                  </li>
                  <li>
                    <a
                      href='/services/ransomware-preparedness'
                      className='whitespace-nowrap'
                    >
                      Ransomware Preparedness
                    </a>
                  </li>
                </ul>
              </div>
              <div className=''>
                <label className='block px-4 py-3 font-bold'>Counter</label>
                <ul className='text-base'>
                  <li>
                    <a
                      href='/services/incident-response-handling'
                      className='whitespace-nowrap'
                    >
                      Incident Response Handling
                    </a>
                  </li>
                  <li>
                    <a
                      href='/services/digital-forensic'
                      className='whitespace-nowrap'
                    >
                      Digital Forensic
                    </a>
                  </li>
                  <li>
                    <a
                      href='/services/litigation-support'
                      className='whitespace-nowrap'
                    >
                      Litigation Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost text-lg normal-case'>
            Products
            <svg
              className='fill-current ml-2'
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
            >
              <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z'></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu p-2 bg-[#0B2347] rounded-box w-auto text-base'
          >
            <li>
              <a
                href='/products/threat-intelligence-platform'
                className='whitespace-nowrap'
              >
                Threat Intelligence Platform
              </a>
            </li>
            <li>
              <a
                href='/products/privileged-access-management'
                className='whitespace-nowrap'
              >
                Privileged Access Management (PAM)
              </a>
            </li>
            <li>
              <a
                href='/products/platform-identity-and-access-management'
                className='whitespace-nowrap'
              >
                Platform Identity and Access Management (IAM)
              </a>
            </li>
            <li>
              <a
                href='/products/security-operation-center'
                className='whitespace-nowrap'
              >
                Security Operation Center (SOC)
              </a>
            </li>
            <li>
              <a
                href='/products/mobile-devsecops'
                className='whitespace-nowrap'
              >
                Mobile DevSecOps
              </a>
            </li>
          </ul>
        </div>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost text-lg normal-case'>
            Compliance
            <svg
              className='fill-current ml-2'
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
            >
              <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z'></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu p-2 bg-[#0B2347] rounded-box w-auto text-base'
          >
            <li>
              <a href='/compliance/iso-27001' className='whitespace-nowrap'>
                ISO 27001
              </a>
            </li>
            <li>
              <a
                href='/compliance/se-ojk-no-29-03-2002'
                className='whitespace-nowrap'
              >
                SE OJK No. 29 03/2002
              </a>
            </li>
          </ul>
        </div>
        <a href='/about' className='btn btn-ghost text-lg normal-case'>
          About
        </a>
      </div>
      <div className=''>
        <a
          href='#'
          className='inline-block text-white bg-gradient-to-r from-red-600 to-blue-900 hover:from-red-600 hover:to-blue-500 focus:ring-4 focus:ring-indigo-700 font-medium rounded-lg text-lg px-8 py-2.5 focus:outline-none transition duration-300'
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

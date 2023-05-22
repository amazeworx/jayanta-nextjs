import Image from 'next/image';

export default function Drawer() {
  return (
    <div className='drawer-side'>
      <label htmlFor='menu-drawer' className='drawer-overlay'></label>
      <div className='relative w-80 bg-brand-bluenight pt-16 h-screen'>
        <div className='absolute right-4 top-4'>
          <label htmlFor='menu-drawer' className='btn btn-square btn-ghost'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6'
            >
              <path
                d='M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z'
                fill='currentColor'
              />
            </svg>
          </label>
        </div>
        <div className='h-full flex flex-col'>
          <div className='grow px-3 py-6 overflow-y-auto'>
            <div className='flex flex-col gap-2 text-base'>
              <a
                href='/'
                className='px-4 py-2 rounded-lg hover:bg-brand-bluedark active:to-brand-bluedark transition duration-200'
              >
                Home
              </a>
              <div className='collapse collapse-arrow rounded-lg'>
                <input type='checkbox' className='min-h-0' />
                <div className='collapse-title min-h-0 px-4 py-3'>Services</div>
                <div className='collapse-content'>
                  <div className='flex flex-col gap-2 py-2'>
                    <div className='font-semibold px-4 py-2 uppercase text-sm text-white/70'>
                      Safeguard
                    </div>
                    <a
                      href='/services/penetration-testing'
                      className='px-4 py-2 rounded-lg hover:bg-brand-bluenight active:to-brand-bluenight transition duration-200'
                    >
                      Penetration Testing
                    </a>
                    <a
                      href='/services/cyber-threat-intelligence'
                      className='px-4 py-2 rounded-lg hover:bg-brand-bluenight active:to-brand-bluenight transition duration-200'
                    >
                      Cyber Threat Intelligence
                    </a>
                    <a
                      href='/services/breach-attack-simulation'
                      className='px-4 py-2 rounded-lg hover:bg-brand-bluenight active:to-brand-bluenight transition duration-200'
                    >
                      Breach and Attack Simulation
                    </a>
                    <a
                      href='/services/vulnerability-assessment'
                      className='px-4 py-2 rounded-lg hover:bg-brand-bluenight active:to-brand-bluenight transition duration-200'
                    >
                      Vulnerability Assessment
                    </a>
                    <a
                      href='/services/dark-web-monitoring'
                      className='px-4 py-2 rounded-lg hover:bg-brand-bluenight active:to-brand-bluenight transition duration-200'
                    >
                      Dark Web Monitoring
                    </a>
                    <a
                      href='/services/cyber-policy-review'
                      className='px-4 py-2 rounded-lg hover:bg-brand-bluenight active:to-brand-bluenight transition duration-200'
                    >
                      Cyber Policy Review
                    </a>
                    <a
                      href='/services/compliance-advisory'
                      className='px-4 py-2 rounded-lg hover:bg-brand-bluenight active:to-brand-bluenight transition duration-200'
                    >
                      Compliance Advisory
                    </a>
                    <a
                      href='/services/ransomware-preparedness'
                      className='px-4 py-2 rounded-lg hover:bg-brand-bluenight active:to-brand-bluenight transition duration-200'
                    >
                      Ransomware Preparedness
                    </a>
                  </div>
                  <div className='flex flex-col gap-3 py-2'>
                    <div className='font-semibold px-4 py-2 uppercase text-sm text-white/70'>
                      Counter
                    </div>
                    <a
                      href='/services/incident-response-handling'
                      className='px-4 py-2 rounded-lg hover:bg-brand-bluenight active:to-brand-bluenight transition duration-200'
                    >
                      Incident Response Handling
                    </a>
                    <a
                      href='/services/digital-forensic'
                      className='px-4 py-2 rounded-lg hover:bg-brand-bluenight active:to-brand-bluenight transition duration-200'
                    >
                      Digital Forensic
                    </a>
                    <a
                      href='/services/litigation-support'
                      className='px-4 py-2 rounded-lg hover:bg-brand-bluenight active:to-brand-bluenight transition duration-200'
                    >
                      Litigation Support
                    </a>
                  </div>
                </div>
              </div>
              <div tabIndex={0} className='collapse collapse-arrow rounded-lg'>
                <div className='collapse-title min-h-min px-4 py-3'>
                  Products
                </div>
                <div className='collapse-content'>
                  <div className='flex flex-col gap-2 py-2'>
                    <a
                      href='/products/threat-intelligence-platform'
                      className='px-4 py-2 rounded-lg hover:bg-brand-bluenight active:to-brand-bluenight transition duration-200'
                    >
                      Threat Intelligence Platform
                    </a>
                    <a
                      href='/products/privileged-access-management'
                      className='px-4 py-2 rounded-lg hover:bg-brand-bluenight active:to-brand-bluenight transition duration-200'
                    >
                      Privileged Access Management (PAM)
                    </a>
                    <a
                      href='/products/platform-identity-and-access-management'
                      className='px-4 py-2 rounded-lg hover:bg-brand-bluenight active:to-brand-bluenight transition duration-200'
                    >
                      Platform Identity and Access Management (IAM)
                    </a>
                    <a
                      href='/products/security-operation-center'
                      className='px-4 py-2 rounded-lg hover:bg-brand-bluenight active:to-brand-bluenight transition duration-200'
                    >
                      Security Operation Center (SOC)
                    </a>
                    <a
                      href='/products/mobile-devsecops'
                      className='px-4 py-2 rounded-lg hover:bg-brand-bluenight active:to-brand-bluenight transition duration-200'
                    >
                      Mobile DevSecOps
                    </a>
                  </div>
                </div>
              </div>
              <div tabIndex={0} className='collapse collapse-arrow rounded-lg'>
                <div className='collapse-title min-h-min px-4 py-3'>
                  Compliance
                </div>
                <div className='collapse-content'>
                  <div className='flex flex-col gap-2 py-2'>
                    <a
                      href='/compliance/iso-27001'
                      className='px-4 py-2 rounded-lg hover:bg-brand-bluenight active:to-brand-bluenight transition duration-200'
                    >
                      ISO 27001
                    </a>
                    <a
                      href='/compliance/se-ojk-no-29-03-2002'
                      className='px-4 py-2 rounded-lg hover:bg-brand-bluenight active:to-brand-bluenight transition duration-200'
                    >
                      SE OJK No. 29 03/2002
                    </a>
                  </div>
                </div>
              </div>
              <a
                href='/about'
                className='px-4 py-2 rounded-lg hover:bg-brand-bluedark active:to-brand-bluedark transition duration-200'
              >
                About
              </a>
            </div>
          </div>
          <div className='flex-none mt-auto px-6 py-4 border-t border-solid border-white/10'>
            <a
              href='#'
              className='block text-center text-white bg-gradient-to-r from-red-600 to-blue-900 hover:from-red-600 hover:to-blue-500 focus:ring-4 focus:ring-indigo-700 font-medium rounded-lg text-lg px-8 py-2.5 focus:outline-none transition duration-300'
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

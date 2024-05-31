import { SubFooter } from './subfooter'

export function Footer() {
  return (
    <div>
      <div className='bg-base-200 flex justify-center'>
        <div className='container'>
          <footer className='footer p-10 text-base-content'>
            <nav>
              <header className='footer-title'>Products</header>
              <a href='/download' className='link link-hover'>
                Desktop Client
              </a>
              <a href='/download' className='link link-hover'>
                Web Extention
              </a>
            </nav>
            <nav>
              <header className='footer-title'>Company</header>
              <a href='/about' className='link link-hover'>
                About us
              </a>
              <a href='/about' className='link link-hover'>
                Contact
              </a>
            </nav>
            <nav>
              <header className='footer-title'>Legal</header>
              <a href='/terms' className='link link-hover'>
                Terms of Service
              </a>
              <a href='/privacy' className='link link-hover'>
                Privacy policy
              </a>
            </nav>
            <nav>
              <header className='footer-title'>Tools</header>
              <a href='/cryptography' className='link link-hover'>
                Cryptography
              </a>
              <a href='/checksum' className='link link-hover'>
                Checksum
              </a>
            </nav>
          </footer>
        </div>
      </div>
      <SubFooter />
    </div>
  )
}

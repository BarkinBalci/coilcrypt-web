import * as React from 'react'
import { Icons } from '../icons'

export function SubFooter() {
  return (
    <div className='bg-base-100 flex justify-center'>
      <div className='container'>
        <footer className='footer px-10 py-4 text-base-content'>
          <aside className='items-center grid-flow-col'>
            <p>&#169; 2024 CoilCrypt. All rights reserved.</p>
          </aside>
          <nav className='md:place-self-center md:justify-self-end'>
            <div className='grid grid-flow-col gap-4'>
              <a href='https://github.com/BarkinBalci/coilcrypt'>
                <Icons.GitHub className='h-5 w-5' />
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  )
}

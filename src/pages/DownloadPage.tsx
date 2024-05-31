import { Icons } from "../icons"

export function DownloadPage() {

  return (
    <div className='flex flex-col items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mx-4'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl'>
        <div className='col-span-full text-center pt-16 pb-4'>
          <h1 className='text-3xl pb-2'>Desktop Applications</h1>
          <p>Access CoilCrypt on Windows, macOS, and Linux desktops with native applications, powered by Electron.</p>
        </div>
        <div className='card card-side bg-base-200 transform transition duration-500 hover:scale-105 hover:shadow-2xl'>
          <figure className='px-5 py-5 max-h-36 max-w-36'>
            <Icons.Windows />
          </figure>
          <div className='card-body '>
            <h2 className='card-title'>Windows</h2>
            <p>Support for Windows 10 and 11</p>
          </div>
        </div>
        <div className='card card-side bg-base-200 flex flex-1 transform transition duration-500 hover:scale-105 hover:shadow-2xl'>
          <figure className='px-5 py-5 max-h-36 max-w-36'>
            <Icons.Macos />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>MacOS</h2>
            <p>Support for MacOS 10.14+ and Safari 14+</p>
          </div>
        </div>
        <div className='card card-side bg-base-200 flex flex-1 transform transition duration-500 hover:scale-105 hover:shadow-2xl'>
          <figure className='px-5 py-5 max-h-36 max-w-36'>
            <Icons.Linux />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Linux</h2>
            <p>Support for most distributions</p>
          </div>
        </div>
        <div className='col-span-full text-center pt-16 pb-4'>
          <h1 className='text-3xl pb-2'>Web Browser Extensions</h1>
          <p>
            Integrate CoilCrypt directly into your favorite browser with browser extensions for a seamless browsing
            experience.
          </p>
        </div>
        <div className='card card-side bg-base-200 flex flex-1 transform transition duration-500 hover:scale-105 hover:shadow-2xl'>
          <figure className='px-5 py-5 max-h-36 max-w-36'>
            <Icons.Chrome />
          </figure>
          <div className='card-body '>
            <h2 className='card-title'>Chrome</h2>
          </div>
        </div>
        <div className='card card-side bg-base-200 flex flex-1 transform transition duration-500 hover:scale-105 hover:shadow-2xl'>
          <figure className='px-5 py-5 max-h-36 max-w-36'>
            <Icons.Safari />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Safari</h2>
          </div>
        </div>
        <div className='card card-side bg-base-200 flex flex-1 transform transition duration-500 hover:scale-105 hover:shadow-2xl'>
          <figure className='px-5 py-5 max-h-36 max-w-36'>
            <Icons.Firefox />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Mozilla Firefox</h2>
          </div>
        </div>
        <div className='card card-side bg-base-200 flex flex-1 transform transition duration-500 hover:scale-105 hover:shadow-2xl'>
          <figure className='px-5 py-5 max-h-36 max-w-36'>
            <Icons.Edge />
          </figure>
          <div className='card-body '>
            <h2 className='card-title'>Microsoft Edge</h2>
          </div>
        </div>
        <div className='card card-side bg-base-200 flex flex-1 transform transition duration-500 hover:scale-105 hover:shadow-2xl'>
          <figure className='px-5 py-5 max-h-36 max-w-36'>
            <Icons.Vivaldi />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Vivaldi</h2>
          </div>
        </div>
        <div className='card card-side bg-base-200 flex flex-1 transform transition duration-500 hover:scale-105 hover:shadow-2xl'>
          <figure className='px-5 py-5 max-h-36 max-w-36'>
            <Icons.Opera />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Opera</h2>
          </div>
        </div>
        <div className='col-span-full text-center pt-16 pb-16'>
          <h1 className='text-3xl pb-2'>Web Application</h1>
          <p className='pb-6'>
            Need to access account settings or are using a friend&apos;s computer?
            <br />
            Access your password manager from any web browser with the CoilCrypt web app.
            <br />
          </p>
          <a className='btn btn-accent ob' href='/vault'>
            Web Vault
          </a>
        </div>
      </div>
    </div>
  )
}

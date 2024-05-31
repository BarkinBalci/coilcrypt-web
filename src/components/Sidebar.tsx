import { useEffect, useState } from 'react'

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
  }[]
  children?: React.ReactNode
}

export function Sidebar({ className, items, children, ...props }: SidebarNavProps) {
  const [activeLink, setActiveLink] = useState(items[0].href)

  useEffect(() => {
    const handleScroll = () => {
      let currentLink = items[0].href
      for (let i = 0; i < items.length; i++) {
        const element = document.querySelector(items[i].href)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 0) {
            currentLink = items[i].href
            if (i + 1 < items.length) {
              const nextElement = document.querySelector(items[i + 1].href)
              if (nextElement) {
                const nextRect = nextElement.getBoundingClientRect()
                if (nextRect.top > 0) {
                  break
                }
              }
            }
          }
        }
      }
      setActiveLink(currentLink)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [items])

  return (
    <div className='drawer lg:drawer-open z-10'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col justify-center'>
        <label
          htmlFor='my-drawer-2'
          className='btn btn-secondary drawer-button lg:hidden fixed bottom-0 right-0 my-6 mx-6 z-20'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25'
            />
          </svg>
        </label>
        {children}
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-2' aria-label='close sidebar' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
          {items.map(item => (
            <li className='text-base' key={item.href}>
              <a
                href={item.href}
                className={item.href === activeLink ? 'font-bold' : ''}
                onClick={event => {
                  event.preventDefault()
                  const element = document.querySelector(item.href)
                  if (element) {
                    element.scrollIntoView()
                  }
                }}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

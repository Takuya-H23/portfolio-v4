import * as React from 'react'
import { IoIosMenu, IoMdClose } from 'react-icons/io'

type Props = {
  children: React.ReactNode
}

export const Container = ({ children }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleClose = () => setIsOpen(false)
  const handleOpen = () => setIsOpen(true)

  return (
    <div>
      <header className="flex justify-between p-8">
        <div>Takua Hirata</div>
        <nav className="">
          {isOpen && (
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-bg-d-primary dark:bg-bg-d-primary opacity-80 z-40" />
          )}
          <div
            className={`absolute top-0 right-0 bg-bg-secondary dark:bg-bg-d-secondary p-8 transform duration-200 z-50 ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <button type="button" onClick={handleClose}>
              <IoMdClose className="text-3xl" />
            </button>
            <ul>
              <li>Home</li>
              <li>About</li>
            </ul>
          </div>
          <button type="button" onClick={handleOpen}>
            <IoIosMenu className="text-3xl" />
          </button>
        </nav>
      </header>
      {children}
    </div>
  )
}

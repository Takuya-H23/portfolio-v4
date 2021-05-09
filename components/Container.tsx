import * as React from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'

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
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-bg-d-primary dark:bg-bg--primary bg-opacity-5 z-40" />
          )}
          <div
            className={`absolute top-0 right-0 bg-bg-secondary dark:bg-bg-d-secondary p-8 transform duration-500 z-50 ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <GrClose onClick={handleClose} className="text-3xl" />
            <ul>
              <li>Home</li>
              <li>About</li>
            </ul>
          </div>
          <AiOutlineMenu onClick={handleOpen} className="text-3xl" />
        </nav>
      </header>
      {children}
    </div>
  )
}

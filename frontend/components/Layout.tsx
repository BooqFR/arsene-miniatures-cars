import clsx from 'clsx'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  className?: string
}

function Layout({ children, className }: LayoutProps) {
  // Define ClassNames Array
  const classNames = clsx('w-screen h-screen flex flex-col overflow-hidden', className)

  return <div className={classNames}>{children}</div>
}

Layout.Header = ({ children, className }: LayoutProps) => {
  // Define ClassNames Array
  const classNames = clsx('', className)

  return <header className={classNames}>{children}</header>
}

Layout.Main = ({ children, className }: LayoutProps) => {
  // Define ClassNames Array
  const classNames = clsx('flex flex-1', className)

  return <main className={classNames}>{children}</main>
}

Layout.Footer = ({ children, className }: LayoutProps) => {
  // Define ClassNames Array
  const classNames = clsx('', className)

  return <footer className={classNames}>{children}</footer>
}

export default Layout

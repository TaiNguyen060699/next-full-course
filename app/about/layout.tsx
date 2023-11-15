import React from 'react'
import styles from './page.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Page',
  description: 'About Page'
}

const AboutLayout = ({ children } : { children: React.ReactNode}) => {
  return (
    <>
      <nav>About Nav</nav>
      <main className={styles.main}>
        { children }
      </main>
    </>
  )
}

export default AboutLayout
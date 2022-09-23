import React from 'react'
import styles from './title.module.scss'

interface TitleProps {
  children: React.ReactNode
}

const Title = ({ children }: TitleProps) => (
  <h2 className={styles.title}>{children}</h2>
)

export default Title

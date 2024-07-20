import React from 'react'
import styles from './Cars.module.css'

const Cars = ({nome, ano, preco}) => {
  return (
    <div className={styles.geral}>
        <div className={styles.nome}>nome:{nome}</div>
        <div className={styles.ano}>ano:{ano}</div>
        <div className={styles.preco}>preco:{preco}</div>
    </div>
  )
}

export default Cars
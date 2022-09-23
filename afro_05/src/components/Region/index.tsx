import React from 'react'
import CityCard from '../CityCard'
import Title from '../Title/Title'
import styles from './region.module.scss'

const Region = () => {
  return (
    <main>
      <section className={styles.region__section__sudeste}>
        <div>
          <h1>Sudeste</h1>
        </div>
      </section>
      <section>
        <div className={styles.region__grid}>
          <div>
            <p>
              <span>4</span>
              estados
            </p>
            <p>
              <span>87M</span>
              Habitantes
            </p>
            <p>
              <span>1.668</span>
              municípios
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
      <section>
        <Title>Escolha uma cidade</Title>
        <div className={styles.cityList}>
          <ul>
            <CityCard />
            <CityCard />
            <CityCard />
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Region

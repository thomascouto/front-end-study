import React from 'react'
import RegionCard from '../RegionCard'
import person from '../../assets/images/person.png'
import styles from './main.module.scss'
import Title from '../Title/Title'

const Main = () => (
  <main>
    <section className={styles.mainSection}>
      <div className={styles.welcome__content}>
        <div className={styles.welcome__content__texts}>
          <p>boas vindas a afrotour</p>
          <p>Sua viagem dos sonhos é aqui.</p>
          <p>
            Estamos empenhados em fornecer os melhores planos de viagem do
            brasil para você
          </p>
          <a href="#">
            <span className={styles.wp}></span>
            Agende sua viagem
          </a>
        </div>
        <img src={person} alt={'Happy person'} />
      </div>
    </section>
    <section>
      <div className={styles.mainRegion}>
        <Title>Para onde vamos ?</Title>
        <ul>
          <RegionCard
            title={'Sudeste'}
            description={'Hístoria - Praia - Ciomidas típicas'}
            minPrice={289}
            img={
              'https://images.unsplash.com/photo-1629984557780-4dde2292e245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
          />
          <RegionCard
            title={'Centro-Oeste'}
            description={'Passeios - Música ao vivo - Rural'}
            minPrice={249}
            img={
              'https://images.unsplash.com/photo-1625426078245-6911839409dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
            }
          />
          <RegionCard
            title={'norte'}
            description={'Passeios - Aventura - Comidas típicas'}
            minPrice={249}
            img={
              'https://images.unsplash.com/photo-1591734183571-b4310bcc25aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
            }
          />
          <RegionCard
            title={'sul'}
            description={'Passeios - Hístoria - Churrasco'}
            minPrice={259}
            img={
              'https://images.unsplash.com/photo-1598091348213-9330e09c2241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
          />
        </ul>
      </div>
    </section>
  </main>
)

export default Main

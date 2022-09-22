import React from 'react'
import person from '../../assets/images/person.png'

const Header = () => {
  return (
    <header>
      <div>
        <p className="header__text">
          Afro<span>Tour</span>
        </p>
        <div className="header__content">
          <div className="header__content__texts">
            <p>boas vindas a afrotour</p>
            <p>Sua viagem dos sonhos é aqui.</p>
            <p>
              Estamos empenhados em fornecer os melhores planos de viagem do
              brasil para você
            </p>
            <a href="#">
              <span className="wp"></span>
              Agende sua viagem
            </a>
          </div>
          <img src={person} alt={'Happy person'} />
        </div>
      </div>
    </header>
  )
}

export default Header

import React from 'react'
import { useNavigate } from 'react-router-dom'

interface RegionCardProps {
  title: string
  description: string
  minPrice: number
  img: string
}

const RegionCard = ({ title, description, minPrice, img }: RegionCardProps) => {
  const location = useNavigate()

  const handleLocation = () => {
    location('/region')
  }
  return (
    <li onClick={handleLocation}>
      <img src={img} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          A partir de <span>R$ {minPrice}</span>
        </p>
      </div>
    </li>
  )
}

export default RegionCard

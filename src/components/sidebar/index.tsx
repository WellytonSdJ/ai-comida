import { useState, useEffect } from 'react'
import { Container } from './styles'
import menuImg from '@/assets/menu.svg'

import BurgerIcon from '@/assets/burger.svg'
import PizzaIcon from '@/assets/pizza.svg'
import IcecreamIcon from '@/assets/ice-cream.svg'
import SodaIcon from '@/assets/soda.svg'

type SidebarProps = {
}

export const Sidebar = ({ }: SidebarProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [menuOption, setMenuOption] = useState<'' | 'hamburguer' | 'pizza' | 'bebidas' | 'sorvete'>('')

  const handleMenuOption = (isSelected: any) => {
    setMenuOption(isSelected);
  }


  return (
    <Container className={drawerOpen ? 'active' : ''} >
      < button onClick={() => setDrawerOpen(!drawerOpen)} type='button' >
        <img src={menuImg} alt="Menu" />
      </button >
      <nav>
        <ul>
          <li>
            <a href="#" className={menuOption === 'hamburguer' || menuOption === '' ? 'active' : ''} onClick={() => handleMenuOption('hamburguer')}>
              <img src={BurgerIcon} alt="Icone de hamburguer" />
              <span>Hamburguer</span>
            </a>
          </li>
          <li>
            <a href="#" className={menuOption === 'pizza' ? 'active' : ''} onClick={() => handleMenuOption('pizza')}>
              <img src={PizzaIcon} alt="Icone de Pizza" />
              <span>Pizza</span>
            </a>
          </li>
          <li>
            <a href="#" className={menuOption === 'bebidas' ? 'active' : ''} onClick={() => handleMenuOption('bebidas')}>
              <img src={SodaIcon} alt="Icone de refrigerante" />
              <span>Bebidas</span>
            </a>
          </li>
          <li>
            <a href="#" className={menuOption === 'sorvete' ? 'active' : ''} onClick={() => handleMenuOption('sorvete')}>
              <img src={IcecreamIcon} alt="Icone de Sorvete" />
              <span>Sorvete</span>
            </a>
          </li>

        </ul>
      </nav>
    </Container >
  )
}
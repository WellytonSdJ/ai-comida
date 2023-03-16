import { useState } from 'react'
import { Container } from './styles'
import BurgerIcon from '@/assets/burger.svg'
import menuImg from '@/assets/menu.svg'

type SidebarProps = {}

export const Sidebar = (props: SidebarProps) => {
  const [drawerOpen, setDrawerOpen] = useState(true)
  return (
    <Container>
      <button type='button'>
        <img src={menuImg} alt="Menu" />
      </button>
      <nav>
        <ul>
          <li>
            <a href="#">
              {/* <BurgerIcon/> */}
              <img src={BurgerIcon} alt="Icone de hamburguer" />
              <span>Hamburguer</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span></span>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
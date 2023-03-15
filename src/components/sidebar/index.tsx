import { useState } from 'react'
import { Container } from './styles'


type SidebarProps = {}

export const Sidebar = (props: SidebarProps) => {
  const [drawerOpen, setDrawerOpen] = useState(true)
  return (
    <Container>
      Sidebar
    </Container>
  )
}
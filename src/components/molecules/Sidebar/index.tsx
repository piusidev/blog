import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'

import { ChevronDown, ChevronUp } from 'react-feather'
import { Container, Sidebar, Item, Tab } from './styles'

import { items } from './data'

const Component: React.FC = () => {
  const location = useLocation()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container isOpen={isOpen}>
      <Tab onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <ChevronDown /> : <ChevronUp />}
      </Tab>
      <Sidebar>
        {items.map((item, index) => {
          const isActive = location.pathname === item.path

          return (
            <Link to={item.path} key={index} onClick={() => setIsOpen(false)}>
              <Item className={`${isActive && 'item-active'}`}>
                {item.icon}

                <p>{item.title}</p>

                <span>{item.total}</span>
              </Item>
            </Link>
          )
        })}
      </Sidebar>
    </Container>
  )
}

export default Component

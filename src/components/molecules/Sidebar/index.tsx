import React, { useState } from 'react'

import { ChevronDown, ChevronUp } from 'react-feather'
import { Container, Sidebar, Item, Tab } from './styles'

import { items } from './data'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Component: React.FC = () => {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container isOpen={isOpen}>
      <Tab onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <ChevronDown /> : <ChevronUp />}
      </Tab>
      <Sidebar>
        {items.map((item, index) => {
          const isActive = router.pathname === item.path

          return (
            <Link href={item.path} key={index} onClick={() => setIsOpen(false)}>
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

import React from 'react'

import { getDate } from '@/utils/date'
import { Message } from './styles'

const Welcome: React.FC = () => {
  const { day, weekday, month, hours } = getDate()

  const todayIs = () => `It's ${weekday}, ${month} ${day}`

  const getGreetingsMessage = () => {
    if (hours < 12) {
      return 'Good morning!'
    }

    if (hours < 18) {
      return 'Good afternoon!'
    }

    return 'Good evening!'
  }

  return (
    <Message>
      <h1>{`${getGreetingsMessage()}`}</h1>
      <h2>{todayIs()}</h2>
    </Message>
  )
}

export default Welcome

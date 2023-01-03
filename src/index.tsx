import React from 'react'
import reactDOM from 'react-dom/client'

import Routes from './routes'

const container = document.getElementById('root')
const root = reactDOM.createRoot(container)

root.render(<Routes />)

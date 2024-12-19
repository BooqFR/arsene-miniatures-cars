import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import HomePage from './HomePage'
import Error404Page from './Error404Page'

const routes = createRoutesFromElements([
  <Route key="Root" path="/">
    <Route key="HomePage" path="/" index element={<HomePage />} />
    <Route key="Error404Page" path="*" element={<Error404Page />} />
  </Route>
])

export default createBrowserRouter(routes)

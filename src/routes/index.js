import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../views/home'
import Table from '../views/table'
import { RouteWidthLayout } from "../components"
import { Main } from "../layouts"
const routers = () => (
    <Switch>
        
        <RouteWidthLayout
            exact
            path="/"
            component={Home}
            layout={Main}
        />
        <Route exact path="/table" component={Table} />
    </Switch>
)
export default routers
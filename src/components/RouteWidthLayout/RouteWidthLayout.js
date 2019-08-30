import React from "react"
import { Route } from "react-router-dom"
const RouteWidthLayout = props => {
    const { component: Component, layout: Layout, ...rest } = props
    return (
        <Route {...rest}
            render={matchProps => (
                <Layout>
                    <Component {...matchProps}/>
                </Layout>
            )}
        />

    )
}
export default RouteWidthLayout
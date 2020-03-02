import React from 'react';
import { Route } from 'react-router-dom';
import Link from '../styled/Link'
import Box from '../styled/Box'

const Diendan = ({ match }) => {
    return ( 
        <div> 
            <Box p={1} m={1}>This is Box</Box>
            <ul>
                <Link to={`${match.url}/khai`} activeClassName="active">khai</Link>
                <Link to={`${match.url}/shoes`} activeClassName="active">Shoes</Link>
                <Link to={`${match.url}/boots`} activeClassName="active">Boots</Link>
                <Link to={`${match.url}/footwear`} activeClassName="active">Footwear</Link>
            </ul>
            <Route path={`${match.path}/:name`} render= {({match}) =>( <div> <h3> {match.params.name} </h3></div>)}/>
        </div>
    )
}
            
export default Diendan;
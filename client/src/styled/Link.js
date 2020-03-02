import { NavLink} from 'react-router-dom';
import styled from 'styled-components'
import {grey,blue} from './colors'
import ListItemText from '@material-ui/core/ListItemText';
import purple from './colors/pink'

const PrimaryLink = styled(ListItemText)`
    color: inherit;
    text-decoration:none;
    &.active li{
        color:${blue[800]};
        background:${blue[50]};
        border-right:6px solid ${blue[300]};
        div{
            color:${blue[800]};
            span{
              font-weight: 600;  
            }
            
        }
    }
    &.active_1 span{
        background:${purple[800]};
        color:${p=>p.theme.color.grey[100]};
        font-weight: 600;  
    }
`;

const Link = PrimaryLink.withComponent(NavLink);
export default Link
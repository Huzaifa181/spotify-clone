import React from 'react';
import './Body.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Header from './Header';
import { useDataLayerValue } from "./DataLayer";
const Body = ({spotify}) => {
    const [{discover_weekly},dispatch] =useDataLayerValue();
    return (
        <div className='body'>
            <Header spotify={spotify}></Header>
            <div className="body__info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                    
                </div>
            </div>
            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledIcon/>
                    <FavoriteIcon/>
                    <MoreHorizIcon/>
                </div>
            </div>
        </div>
    );
}

export default Body;

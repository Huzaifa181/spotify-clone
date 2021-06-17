import React from 'react';
import './Body.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Header from './Header';
import SongRow from './SongRow';
import { useDataLayerValue } from "./DataLayer";
const Body = ({spotify}) => {
    const [{discover_weekly},dispatch] =useDataLayerValue();
    return (
        <div className='body'>
            <Header spotify={spotify}></Header>
            <div className="body__info">
                {discover_weekly?.images?.length && 
                <img src={discover_weekly?.images[0].url} alt="" />
               
                }
                {!discover_weekly?.images?.length && 
                 <p>No image for your playlist</p>
                }
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                    
                </div>
            </div>
            <div className="body_songs">
                <div className="body_icons" style={{display:'flex', alignItems:'center'}}>
                    <PlayCircleFilledIcon className='body__shuffle'/>
                    <FavoriteIcon fontsize='large'/>
                    <MoreHorizIcon/>
                </div>
                {discover_weekly?.images?.length && 
                discover_weekly?.tracks?.items?.map(item=>{
                    return(
                        <SongRow track={item.track}/>
                    )
                })}
                {!discover_weekly?.images?.length &&
                <p>No tracks in your playlist</p>
                }
            </div>
        </div>
    );
}

export default Body;

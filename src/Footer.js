import React from 'react';
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import {Slider, Grid} from '@material-ui/core';
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__left">
                <img className='footer__albumLogo' src="data:image/png;base64,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" alt="" />
                <div className="footer__songInfo">
                    <h4>Yeah!</h4>
                    <p>
                        Usher
                    </p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className='footer__green'/>
                <SkipPreviousIcon className='footer__icon'/>
                <PlayCircleOutlineIcon fontSize='large' className='footer__icon'/>
                <SkipNextIcon className='footer__icon'/>
                <RepeatIcon className='footer__green'/>
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;

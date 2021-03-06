import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import Login from './Login';
import Player from './Player';
import {getTokenFromUrl} from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from "./DataLayer";

const spotify =new SpotifyWebApi();
function App() {
  const [{token},dispatch] =useDataLayerValue();
  useEffect(()=>{
    const hash=getTokenFromUrl();
    window.location.hash=''
    const _token=hash.access_token;
    if(_token){
      dispatch({
        type:'SET_TOKEN',
        token:_token
      })
      spotify.setAccessToken(_token)
      spotify.getMe().then((user)=>{
        dispatch({
          type:'SET_USER',
          user:user
        })
      })
      spotify.getUserPlaylists().then(playlists=>{
        dispatch({
          type:'SET_PlAYLISTS',
          playlists:playlists
        })
      })
      spotify.getPlaylist('23jojkdsok').then(response=>{
        dispatch({
          type:'SET_DISCOVER_WEEKLY',
          discover_weekly:response
        })
      })
    }
  },[])
  return (
    <div className='app'>
      {
      token?
      <Player spotify={spotify}/>:
        <Login/>
    }
</div>
  );
}

export default App;

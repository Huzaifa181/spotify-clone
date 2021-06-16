export const authEndPoint="https://accounts.spotify.com/authorize"
const redirectUrl="http://localhost:3000/"
const clientId="1ce943d0c6454185b93dc15a96e6370d"

const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const getTokenFromUrl=()=>{
    return window.location.hash.substring(1).split("&").reduce((initial,item)=>{
        var parts=item.split("=");
        initial[parts[0]] = decodeURIComponent(parts)
        return initial
    },{})
}

export const loginUrl=`${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
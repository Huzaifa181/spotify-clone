export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    token:null,
    playlists:null
}

const reducer=(state, action)=>{
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            }
        case 'SET_PlAYLISTS':
            return{
                ...state,
                playlists:action.playlists
            }
        default:
            return state
    }
}

export default reducer;
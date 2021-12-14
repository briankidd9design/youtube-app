import axios from 'axios';
// Now we have our api key that we can use to GET api data...
const KEY = 'AIzaSyBujdnuSv8LW_GFPBkNHWz9PtEOGhFEV08';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        //the type ensures axios will only search for videos and not playlists
        type: 'video',
        key: KEY
    }
});

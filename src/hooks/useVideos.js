import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';


//The goal is for the app component to call this function. It is going to provide to it the list of inputs and it will return a list of outputs
//This function will be called within the body of the App component
const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        //When app is first rendered to screen, then the default search will be rendered
        search(defaultSearchTerm);
      }, [defaultSearchTerm]);

      const search = async (term) => {
        //take the list of videos received and set them to state on the app component
        //The App component will update and re-render
        //The newly fetched videos will be rendered on to the screen
        const response = await youtube.get("/search", {
          //you want to access the search endpoint
          params: {
            q: term,
          },
        });
    
        //the data property is what we are interested in from the response object
        //this is the array of videos that can be seen in the console log
        setVideos(response.data.items);
      };

      return [videos, search];
    }
//     return { videos, onTermSubmit }
// }

export default useVideos;
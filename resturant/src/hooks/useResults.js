import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results,setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('hi')
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit:50,
                    term: searchTerm,
                    location:'san jose'
                }
                //these params can be found at the yelp website business search parameters
            });
            setResults(response.data.businesses);
        }catch(err){
            setErrorMessage('something went wrong');
        }
      
    }

    // render searchApi when this component get first rendered
    useEffect(()=>{
        searchApi('pasta');
    },[])

    return [searchApi,results,errorMessage];
}
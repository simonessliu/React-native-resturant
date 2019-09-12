import React, {useState} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi,results,errorMessage] = useResults();

    const filterResultByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }
    // usually, we use flex:1 to handle the issue like the image or the content is out of the screen
    return (
        <> 
            <SearchBar    
                term={term} 
                onTermChange={(newTerm)=>setTerm(newTerm)}
                onTermSubmit={()=>searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList results={filterResultByPrice('$')} title="Cost Effective"/>
                <ResultsList results={filterResultByPrice('$$')} title="Bit pricer"/>
                <ResultsList results={filterResultByPrice('$$$')} title="Big Spender"/>
            </ScrollView> 
        </>
    )
};

const styles=StyleSheet.create({});
export default SearchScreen;
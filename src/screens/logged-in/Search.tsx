import React, { useState } from 'react';

import Container from '../../components/Container';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';
import FallbackScreen from '../../components/FallbackScreen';

import type { LoggedInProps } from '../../types/Navigation';

const Search: React.FC<LoggedInProps<'Search'>> = ({ navigation }) => {
  const [query, setQuery] = useState('');

  // const dataTypes = [];

  return (
    <Container scrollEnabled>
      <SearchBar
        value={query}
        placeholder="Search..."
        onChangeText={(text) => setQuery(text)}
      />

      <FallbackScreen
        title="Search for data"
        message="Type what are you looking for"
      />

      {/* <Button
        title={`Categories: ${query}`}
        onPress={() => navigation.navigate('Categories')}
      /> */}

      {/* <Button title={query} onPress={() => navigation.navigate('Finances')} /> */}

      {/* search for:
    - data
    - categories
    */}
    </Container>
  );
};

export default Search;

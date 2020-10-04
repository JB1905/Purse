import React, { useState } from 'react';

import Container from '../../components/Container';
import SearchBar from '../../components/SearchBar';
import FallbackScreen from '../../components/FallbackScreen';

import type { LoggedInProps } from '../../types/Navigation';

import { Route } from '../../enums/Route';

const Search = () => {
  const [query, setQuery] = useState('');

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
    </Container>
  );
};

export default Search;

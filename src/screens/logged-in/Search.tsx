import React, { useState } from 'react';
import { InstantSearch } from 'react-instantsearch/native';

import SearchBar from '../../components/SearchBar';
import Container from '../../components/Container';
import Splash from '../../components/Splash';

import searchClient from '../../config/algolia';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');

  return (
    <Container scrollEnabled>
      {/* <InstantSearch searchClient={searchClient} indexName="dev_search">
        <SearchBar
          placeholder="Search..."
          value={query}
          onChangeText={setQuery}
        />
      </InstantSearch> */}

      <Splash title="Search for data" message="Type what are you looking for" />
    </Container>
  );
};

export default Search;

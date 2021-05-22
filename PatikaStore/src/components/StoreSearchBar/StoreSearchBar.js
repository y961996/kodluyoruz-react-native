import React, {useState} from 'react';
import {View, TextInput} from 'react-native';

import styles from './StoreSearchBar.style';

const StoreSearchBar = () => {
  const [val, setVal] = useState('');
  const textChange = queryText => {
    setVal(queryText);
  };

  return (
    <View>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        value={val}
        onChangeText={textChange}
        placeholder="Ara..."
        style={styles.search_box}
      />
    </View>
  );
};

export default StoreSearchBar;

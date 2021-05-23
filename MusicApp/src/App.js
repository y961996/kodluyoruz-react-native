import React, {useState} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet} from 'react-native';

import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar';
import music_data from './music-data.json';

const App = () => {
  const [songList, setSongList] = useState(music_data);

  const renderSong = ({item}) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.seperator} />;

  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });

    setSongList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SearchBar onSearch={handleSearch} />
        <FlatList
          keyExtractor={item => item.id}
          data={songList}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});

export default App;

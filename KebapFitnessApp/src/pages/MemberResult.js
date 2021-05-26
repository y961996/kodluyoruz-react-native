import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const MemberResult = ({route}) => {
  const {user} = route.params;

  return (
    <SafeAreaView>
      <Text style={styles.message}> Kayıt Tamamlandı. </Text>
      <Text style={styles.label}>Üye Adı: {user.userName}</Text>
      <Text style={styles.label}>Üye Soyadı: {user.userSurname}</Text>
      <Text style={styles.label}>Üye Yaş: {user.userAge}</Text>
      <Text style={styles.label}>Üye E-posta: {user.userMail}</Text>
      <Text style={styles.label}>Üye Memleketi: {user.userHometown}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 30,
    margin: 5,
  },
  message: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
  },
});

export default MemberResult;

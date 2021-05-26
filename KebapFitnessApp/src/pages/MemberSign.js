import React, {useState} from 'react';
import {SafeAreaView, Alert} from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';

const MemberSign = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userHometown, setUserHometown] = useState(null);

  const handleSubmit = () => {
    if (!userName || !userSurname || !userAge || !userMail || !userHometown) {
      Alert.alert('Kebap Fitness Salonu', 'Bilgiler Boş Bırakılamaz!');
      return;
    }

    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
      userHometown,
    };

    navigation.navigate('MemberResultScreen', {user});
  };

  return (
    <SafeAreaView>
      <Input
        label="Üye Adı"
        placeholder="Üye ismini giriniz..."
        onChangeText={setUserName}
      />
      <Input
        label="Üye Soyadı"
        placeholder="Üye soyismini giriniz..."
        onChangeText={setUserSurname}
      />
      <Input
        label="Üye Yaşı"
        placeholder="Üyenin yaşını giriniz..."
        onChangeText={setUserAge}
      />
      <Input
        label="Üye E-posta"
        placeholder="Üyenin e-posta adresini giriniz..."
        onChangeText={setUserMail}
      />
      <Input
        label="Üye Memleketi"
        placeholder="Üyenin memleketini giriniz..."
        onChangeText={setUserHometown}
      />
      <Button text="Kaydı Tamamla" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default MemberSign;

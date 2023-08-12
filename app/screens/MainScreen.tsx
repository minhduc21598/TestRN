import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import CardFlip from 'react-native-card-flip';
import BaseButton from '@components/button';
import { HEIGHT, WIDTH } from '@configs';
import R from '@assets/R';

const FrontCard = ({ item, onPress }: { item: any; onPress: () => void }) => {
  const avatar = item?.avatar ?? '';
  const fullName = `${item?.first_name ?? ''} ${item?.last_name}`;
  const role = item?.employment?.title;
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={0.6}
      onPress={onPress}>
      <Image
        source={{ uri: avatar }}
        resizeMode="contain"
        style={styles.avatar}
      />
      <Text style={styles.fullName}>{fullName}</Text>
      <Text style={[styles.fullName, styles.role]}>{role}</Text>
    </TouchableOpacity>
  );
};

const RearCard = ({ item, onPress }: { item: any; onPress: () => void }) => {
  const address = `Address: ${item?.address?.city}, ${item?.address?.state}, ${item?.address?.country}`;
  const dateOfBirth = `Date of birth: ${item?.date_of_birth}`;
  const email = `Email: ${item?.email}`;
  const phoneNumber = `Phone: ${item?.phone_number}`;
  const gender = `Gender: ${item?.gender}`;
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={0.6}
      onPress={onPress}>
      <Text style={[styles.fullName, styles.role, styles.detail]}>
        {address}
      </Text>
      <Text style={[styles.fullName, styles.role, styles.detail]}>
        {dateOfBirth}
      </Text>
      <Text style={[styles.fullName, styles.role, styles.detail]}>
        {gender}
      </Text>
      <Text style={[styles.fullName, styles.role, styles.detail]}>{email}</Text>
      <Text style={[styles.fullName, styles.role, styles.detail]}>
        {phoneNumber}
      </Text>
    </TouchableOpacity>
  );
};

const Card = ({ item }: { item: any }) => {
  const cardFlipRef = useRef<any>();

  const initCardFlipRef = (ref: any) => {
    cardFlipRef.current = ref;
  };

  const onFlip = () => {
    cardFlipRef.current?.flip?.();
  };

  return (
    <CardFlip ref={initCardFlipRef} style={styles.cardFlip}>
      <FrontCard item={item} onPress={onFlip} />
      <RearCard item={item} onPress={onFlip} />
    </CardFlip>
  );
};

const MainScreen = () => {
  const [people, setPeople] = useState([]);

  const getDataFromAPI = async () => {
    fetch('https://random-data-api.com/api/users/random_user?size=10', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(response => {
        console.log('response ==>', response);
        setPeople(response);
      })
      .catch(error => error);
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <BaseButton
        title="Fetch Random"
        customStyle={styles.fetchButton}
        onPress={getDataFromAPI}
      />
      <FlatList
        data={people}
        extraData={people}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={(_item, index) => String(index)}
        renderItem={({ item }) => <Card item={item} />}
        columnWrapperStyle={styles.wrapperStyle}
      />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.green200,
  },
  fetchButton: {
    marginVertical: HEIGHT(16),
    backgroundColor: R.colors.redC81,
  },
  avatar: {
    width: WIDTH(120),
    height: WIDTH(120),
    alignSelf: 'center',
  },
  cardFlip: {
    width: WIDTH(160),
    height: HEIGHT(220),
    borderRadius: WIDTH(8),
    backgroundColor: R.colors.white,
    marginBottom: HEIGHT(16),
  },
  cardContainer: {
    width: WIDTH(160),
    borderRadius: WIDTH(8),
    backgroundColor: R.colors.white,
    marginBottom: HEIGHT(16),
    padding: WIDTH(12),
  },
  wrapperStyle: {
    justifyContent: 'space-between',
    paddingHorizontal: WIDTH(16),
  },
  fullName: {
    marginTop: HEIGHT(12),
    fontWeight: 'bold',
  },
  role: {
    fontWeight: 'normal',
  },
  detail: {
    marginTop: HEIGHT(3),
  },
});

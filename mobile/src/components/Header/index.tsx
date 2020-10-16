import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface IHeaderProps {
  title: string;
  showCancel?: boolean;
}

const Header: React.FC<IHeaderProps> = ({ title, showCancel = true }: IHeaderProps) => {
  const navigation = useNavigation();

  const handleNavigateToOrphanages = useCallback(() => {
    navigation.navigate('Orphanages');
  }, []);

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>
      {showCancel ? (
        <BorderlessButton onPress={handleNavigateToOrphanages}>
          <Feather name="x" size={24} color="#ff669d" />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 44,
    backgroundColor: '#f9fafc',
    borderBottomWidth: 1,
    borderBottomColor: '#dde3f0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 16,
    color: '#8fa7b3',
  },
});

export default Header;

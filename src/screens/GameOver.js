import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import routes from '@routes';
import { setScore } from '@actions';
import { CustomButton, PageContainer, CustomInput } from '@components';
import { colors, textStyles } from '@styles';

const GameOver = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { level } = route.params;
  const { replace, navigate } = navigation;
  const [nameInput, setNameInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const buttonDisabled = !nameInput || !phoneInput || nameInput.length < 2;

  const handleSubmit = () => {
    dispatch(setScore({ name: nameInput, phone: phoneInput, score: level }));
    replace(routes.menu.name);
  };

  return (
    <PageContainer style={styles.container} alignCenter dismissed>
      <Text style={textStyles.bigTextWhite}>Your score is: {level}</Text>
      <View style={styles.inputsContainer}>
        <CustomInput label="Name" onChange={setNameInput} value={nameInput} />
        <CustomInput
          keyboardType="decimal-pad"
          label="Phone"
          onChange={setPhoneInput}
          value={phoneInput}
        />
      </View>
      <View style={styles.inputsContainer}>
        <CustomButton
          text="Submit"
          style={styles.submit}
          disabled={buttonDisabled}
          onPress={handleSubmit}
        />
        <CustomButton text="Skip" onPress={() => navigate(routes.menu.name)} />
      </View>
    </PageContainer>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  container: { justifyContent: 'space-around' },
  inputsContainer: { width: '100%' },
  submit: { backgroundColor: colors.lightGreen },
});

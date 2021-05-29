import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signUp } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <View style={styles.container}>
        <Text h3 style={styles.header}>Sign up for Tracker</Text>
        <Input
          label="Email"
          value={email}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(email) => setEmail(email)} />
        <Input
          label="Password"
          value={password}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          onChangeText={(password) => setPassword(password)} />
        {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
        <Button
          title="Sign up"
          onPress={() => signUp({ email, password })} />
      </View>
    </>
  );
};


SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  },
  header: {
    paddingVertical: 16,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginBottom: 16
  }
});

export default SignupScreen;
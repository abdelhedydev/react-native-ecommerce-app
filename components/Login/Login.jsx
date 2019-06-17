import React from 'react';
import {
  View, Text, TextInput, Button, Alert
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import style from './LoginStyle';

const Login = ({ navigation }) => {
  function formSubmit({ email, password }) {
    console.log('aaaa', [email, password]);
    if (email === 'admin@admin.tn' && password === 'admin') navigation.navigate('Products');
    else {
      Alert.alert(
        'Authentification',
        'Vous devez étre authentifié pour afficher le contenu de cette Page',
        [
          { text: 'OK' },
        ],
        { cancelable: false },
      );
    }
  }
  return (
    <View style={style.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={
          yup.object().shape({
            email: yup
              .string()
              .email()
              .required(),
            password: yup.string().required()
          })}
        onSubmit={(values) => {
          formSubmit(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
        }) => (
          <View>
            <View style={style.wrapper}>
              <Text style={style.text}>Email</Text>
              <TextInput
                value={values.email}
                onChangeText={handleChange('email')}
                style={style.input}
              />
              <Text style={style.error}>
                {errors.email && touched.email && errors.email}
              </Text>
            </View>
            <View style={style.wrapper}>
              <Text style={style.text}>Password</Text>
              <TextInput
                value={values.password}
                onChangeText={handleChange('password')}
                style={style.input}
              />
              <Text style={style.error}>
                {errors.password && touched.password && errors.password}
              </Text>
            </View>
            <Button
              title="Login"
              onPress={handleSubmit}
              color="#00802b"
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;

import * as React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {Field, reduxForm} from 'redux-form';
import renderInput from "../redux-form";
import styles from "./style";

function Form(props) {

  const {handleSubmit, pristine, submitting} = props;

  return (
    <View style={styles.container}>
      <Field name="name" component={renderInput}/>
      <Field name="title" component={renderInput}/>
      <Field name="description" component={renderInput}/>
      <TouchableOpacity onPress={handleSubmit} disabled={pristine || submitting}>
        <Text style={styles.input}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

Form = reduxForm({
  form: 'articles',
})(Form);

export default Form;

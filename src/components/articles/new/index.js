import * as React from 'react';
import {pushArticles} from "../../../saga/articles/api";
import Form from "../index";

const onSubmit = (values) => {
  console.log('EDIT values', values);
  pushArticles(values);
}

function NewScreen() {
  return <Form onSubmit={onSubmit}/>;
}

export default NewScreen;

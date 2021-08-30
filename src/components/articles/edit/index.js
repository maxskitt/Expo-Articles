import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {updateArticles} from "../../../saga/articles/api";
import Form from "../index";
import {useSelector} from "react-redux";
import {find} from "lodash";

function EditScreen() {

  const route = useRoute();
  const articles = useSelector((state) => find(state.articles.collection, {id: route.params.id}));
  const [initialValues] = useState(articles);

  const onSubmit = (values) => {
    console.log('EDIT values', values);
    updateArticles(values, route.params.id);
  }

  return (
    <Form onSubmit={onSubmit} initialValues={initialValues}/>
  );
}

export default EditScreen;

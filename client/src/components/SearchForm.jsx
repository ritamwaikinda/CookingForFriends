import React from 'react';
import Form from 'react-bootstrap/Form';

/**
 * - [x] Extract the value from the text box
 * - [x] Make a simple API call
 * - [x] Get the thing in the search box inside the API
 * - [ ] Populate the thumbnails with the API
 */

const SearchForm = ({ handleSubmitProp }) => {
  return (
    <Form onSubmit={handleSubmitProp} style={{ margin: '2rem' }}>
      <Form.Row>
        <Form.Control
          id="searchbar"
          size="lg"
          type="text"
          placeholder="Search for something!"
        ></Form.Control>
      </Form.Row>
    </Form>
  );
};

export default SearchForm;

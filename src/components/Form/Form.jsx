import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input } from './Form.styled';
import { IoEasel } from 'react-icons/io5';

export const FormEl = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const inputChange = event => {
    setQuery(event.currentTarget.value);
  };

  const dataSubmit = event => {
    event.preventDefault();

    onSubmit({ query });
    reset();
  };

  const reset = () => {
    setQuery('');
  };

  return (
    <Form onSubmit={dataSubmit}>
      <Input
        name="name"
        value={query}
        onChange={inputChange}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter a query..."
        //required
      />
      <Button type="submit">
        <IoEasel />
      </Button>
    </Form>
  );
};

FormEl.propTypes = {
  onSubmit: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
};

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  font-weight: bold;
  color: #ffffff;
  background-color: #ff4136;
  border-radius: 4px;
  padding: 10px;
  margin-left: auto;
`;

const Input = styled.input`
  margin-left: 5px;
  width: 50%;
  padding: 5px;
`;

const Row = styled.div`
  color: #001f3f;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.span`
  margin-left: 20px;
`;

const Search = ({ query, handleQuery, className, label }) => (
  <Row className={className}>
    <Wrapper>{label}</Wrapper>
    <Input type="text" value={query} onChange={handleQuery} />
    <Button
      onClick={() => {
        // pass an object to satisfy event.target.value
        handleQuery({ target: { value: "" } });
      }}
    >
      Clear
    </Button>
  </Row>
);

Search.propTypes = {
  query: PropTypes.string.isRequired,
  handleQuery: PropTypes.func.isRequired,
  className: PropTypes.string,
  label: PropTypes.string.isRequired
}

export { Search };
export default Search;

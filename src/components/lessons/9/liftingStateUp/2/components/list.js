import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Row = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Container = styled.ul`
  padding-inline-start: 20px;
`;

const Label = styled.span`
  color: #001f3f;
`;

const Button = styled.button`
  font-weight: bold;
  color: #ffffff;
  background-color: #0074d9;
  border-radius: 4px;
  padding: 4px;
  padding-right: 10px;
  padding-left: 10px;
`;

const ResetButton = styled(Button)`
  background-color: #ff851b;
  margin-left: 10px;
  margin-right: 8px;
`;

const ArchivedLabel = styled(Label)`
  margin-left: 24px;
  font-size: 12px;
`;

function List(props) {
  const { list, className, archive, reset, archived } = props;
  return (
    <>
      <Container className={className}>
        {list.map((item) => (
          <Row key={item.id}>
            <Label>{item.name}</Label>
            <Button type="button" onClick={() => archive(item.id)}>
              Archive
            </Button>
          </Row>
        ))}
      </Container>
      <ArchivedLabel>
        {archived.length} item{archived.length === 1 ? '' : 's'}{' '}
        archived...
      </ArchivedLabel>
      <ResetButton onClick={() => reset()}>
        Reset Archive
      </ResetButton>
    </>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
      }
    )
  ).isRequired,
  className: PropTypes.string,
  archive: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  archived: PropTypes.arrayOf(
    PropTypes.number
  ).isRequired
}

export { List };
export default List;

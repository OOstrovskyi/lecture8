import React from 'react';
import PropTypes from 'prop-types';
import data from './data.json';

const PersonalInfo = ({ data }) => (
  <div className="personalInfo" >
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);

class ShowPersonalInfo extends React.Component {
  state = {selectedCompanyId: 'disabled'}

  onSelect = (e) => {
    const selectedCompanyId = e.target.value;
    this.setState({selectedCompanyId})
  }

  render() {
    const { companies } = this.props;
    const { selectedCompanyId } = this.state;
    const companyData = companies.find(i => selectedCompanyId === i._id);
    return (
      <>
        <h3>Select person dossier</h3>
        <select value={selectedCompanyId} onChange={this.onSelect} >
          <option key="disabled" disabled value="disabled" ></option>
          {companies.map(i => (<option key={i._id} value={i._id} >{i._id}</option>))}
        </select>
        {companyData && <PersonalInfo data={companyData} />}
      </>
    );
  }
}



const Task = () => {
  return (
    <div>
      <ShowPersonalInfo companies={data} />
    </div>
  );
};

export default Task;

PersonalInfo.propTypes = {
  data: PropTypes.exact({
      _id: PropTypes.string.isRequired,
      guid: PropTypes.string,
      isActive: PropTypes.bool,
      balance: PropTypes.string,
      age: PropTypes.number,
      name: PropTypes.shape({
        first: PropTypes.string.isRequired,
        last: PropTypes.string.isRequired,
        patronymic: PropTypes.string
      }),
      company: PropTypes.string,
      email: PropTypes.string,
      latitude: PropTypes.string,
      longitude: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]).isRequired),
      range: PropTypes.arrayOf(PropTypes.number),
      friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      })),

    }
  ).isRequired
}
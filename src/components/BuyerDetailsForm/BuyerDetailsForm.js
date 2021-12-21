import React from 'react';

class BuyerDetailsForm extends React.Component {
  render() {
    return (
      <form
        onSubmit={() => {
          alert('Form submitted!!');
        }}
      >
        <div className="form-row">
          <div className="form-group px-2">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" placeholder="Name" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group d-inline-block w-50 px-2">
            <label htmlFor="inputEmail4">Email</label>
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group d-inline-block w-50 px-2">
            <label htmlFor="inputPassword4">Phone Number</label>
            <input
              type="password"
              className="form-control"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group d-inline-block w-50 px-2">
            <label htmlFor="inputEmail4">
              No. of leads you generate in a Month
            </label>
            <input type="number" className="form-control" />
          </div>
          <div className="form-group d-inline-block w-50 px-2">
            <label htmlFor="inputPassword4">Total Leads in CRM</label>
            <input type="number" className="form-control" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group d-inline-block w-50 px-2">
            <label htmlFor="inputEmail4">What CRM do you use?</label>
            <input type="number" className="form-control" />
          </div>
          <div className="form-group d-inline-block w-50 px-2">
            <label htmlFor="inputPassword4">No. of Agents</label>
            <input type="number" className="form-control" />
          </div>
        </div>

        <div className="form-group px-2">
          <label>What is your biggest leads source?</label>
          <br />
          <label className="checkbox-inline mx-2">
            <input type="checkbox" value="" /> Option 1
          </label>
          <label className="checkbox-inline mx-2">
            <input type="checkbox" value="" /> Option 2
          </label>
          <label className="checkbox-inline mx-2">
            <input type="checkbox" value="" /> Option 3
          </label>
        </div>
        <div className="form-group px-2">
          <label>How did you hear about us?</label>
          <br />
          <label className="checkbox-inline mx-2">
            <input type="checkbox" value="" /> Google
          </label>
          <label className="checkbox-inline mx-2">
            <input type="checkbox" value="" /> Facebook
          </label>
          <label className="checkbox-inline mx-2">
            <input type="checkbox" value="" /> Email
          </label>
          <label className="checkbox-inline mx-2">
            <input type="checkbox" value="" /> Friends
          </label>
          <label className="checkbox-inline mx-2">
            <input type="checkbox" value="" /> Others
          </label>
        </div>
        <br />
        <button type="submit" className="btn btn-danger btn-primary mx-2">
          Submit
        </button>
      </form>
    );
  }
}

export default BuyerDetailsForm;

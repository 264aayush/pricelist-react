import './Card.css';
import React from 'react';
import myContext from '../../contextProvider/MyContext';

class Card extends React.Component {
  render() {
    let mostPopularVisiblity = this.props.mostPopular ? '' : 'hidden';
    return (
      <myContext.Consumer>
        {value => {
          return (
            <div className="p-1 h-100">
              <div className="card border-0 text-center d-flex flex-column">
                <div
                  className="card-header text-white"
                  style={{
                    background: '#ee5a36',
                    visibility: mostPopularVisiblity
                  }}
                >
                  <span className="h4"> Most Popular</span>
                </div>
                <div
                  className="card-header text-white"
                  style={{ background: '#606c94' }}
                >
                  <span className="h4">
                    {' '}
                    Qualified {this.props.plan.qualified}
                  </span>
                </div>
                <div
                  className={`card-body ${
                    this.props.mostPopular ? 'active' : ''
                  }`}
                  style={{ flex: '1 1 auto' }}
                >
                  <p className="h1" style={{ color: '#36455c' }}>
                    ${this.props.plan.pricePerLead}
                  </p>
                  <p className="h5" style={{ color: '#36455c' }}>
                    Per Qualified Lead
                  </p>
                  <hr />
                  <p className="h5" style={{ color: '#36455c' }}>
                    Qualified Lead Per Month
                  </p>
                  <p className="h5" style={{ color: '#36455c' }}>
                    {this.props.plan.qualified}
                  </p>
                  <hr />
                  <p className="h5" style={{ color: '#36455c' }}>
                    Monthly Charge
                  </p>
                  <p className="h5" style={{ color: '#36455c' }}>
                    {this.props.plan.monthlyPrice}
                  </p>
                </div>
                <div
                  className="card-footer text-white"
                  style={{ background: '#606c94' }}
                >
                  <span className="h4">
                    {' '}
                    $
                    {this.props.plan.pricePerLead * this.props.plan.qualified +
                      this.props.plan.monthlyPrice}
                    /month
                  </span>
                </div>
              </div>
              <button
                className={`btn btn-${
                  mostPopularVisiblity ? 'outline-' : ''
                }danger my-2`}
                style={{ width: '100%' }}
                onClick={() => {
                  value.showModal(this.props.plan);
                }}
              >
                Start Your free
              </button>
            </div>
          );
        }}
      </myContext.Consumer>
    );
  }
}
export default Card;

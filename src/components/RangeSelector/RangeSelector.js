import './RangeSelector.css';
import { priceRange } from '../../dataProviders/PriceRange';
import React from 'react';
import myContext from '../../contextProvider/MyContext';

class RangeSelector extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedRange: localStorage.getItem('selectedRange')
    };
  }
  changeSelectedRange = (index, value) => {
    value.setSelectedRange(index);
    this.setState({ selectedRange: index });
    localStorage.setItem('selectedRange', index);
  };

  render() {
    return (
      <myContext.Consumer>
        {value => {
          return (
            <div className="my-container d-md-flex flex-md-row flex-column">
              {priceRange.map((p, index) => {
                return (
                  <div
                    key={index}
                    onClick={this.changeSelectedRange.bind(this, index, value)}
                    className={`${p.max ? 'my-item' : 'last-item'} ${
                      index == this.state.selectedRange ? 'active' : ''
                    }`}
                  >
                    {p.max ? (
                      <p className="h5">
                        {' '}
                        ${p.min}k-${p.max}k
                      </p>
                    ) : (
                      <p className="h5"> ${p.min}k+</p>
                    )}
                  </div>
                );
              })}
            </div>
          );
        }}
      </myContext.Consumer>
    );
  }
}
export default RangeSelector;

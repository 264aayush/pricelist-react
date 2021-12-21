import './App.css';
import Card from './components/Card/Card';
import RangeSelector from './components/RangeSelector/RangeSelector';
import React from 'react';
import myContext from './contextProvider/MyContext';
import { packagePrice } from './dataProviders/PackagePrice';
import BuyerDetailsForm from './components/BuyerDetailsForm/BuyerDetailsForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRange: 2,
      showModal: false,
      selectedPlan: null,
      online: true
    };

    this.goOnline = this.goOnline.bind(this);
    this.goOffline = this.goOffline.bind(this);
  }

  goOnline() {
    this.setState({ online: true });
  }

  goOffline() {
    this.setState({ online: false });
  }
  componentDidMount() {
    this.setState({
      online: typeof navigator.onLine === 'boolean' ? navigator.onLine : true
    });

    window.addEventListener('online', this.goOnline);
    window.addEventListener('offline', this.goOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.goOnline);
    window.removeEventListener('offline', this.goOffline);
  }

  static getDerivedStateFromProps(props, state) {
    let range = localStorage.getItem('selectedRange');
    if (!range) {
      localStorage.setItem('selectedRange', 2);
      range = 2;
    }
    return {
      selectedRange: range
    };
  }

  render() {
    if (!this.state.online)
      return (
        <div
          style={{
            height: '100vh',
            width: '100vw',
            background: '#5a6f90',
            color: 'white'
          }}
        >
          <p
            style={{
              fontSize: '20px',
              fontWeight: '500',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)'
            }}
          >
            You are not connnected to Internet.
          </p>
        </div>
      );
    return (
      <myContext.Provider
        value={{
          selectedRange: this.state.selectedRange,
          setSelectedRange: i => {
            this.setState({ selectedRange: i });
          },
          showModal: plan => {
            this.setState({ selectedPlan: plan, showModal: true });
            console.log(plan);
          }
        }}
      >
        <div className="mt-5">
          <div className="mx-auto" style={{ width: '80%' }}>
            {' '}
            <RangeSelector />{' '}
          </div>
          <div
            className="mt-3 mx-auto d-flex flex-md-row flex-column justify-content-around"
            style={{ width: '80%' }}
          >
            {packagePrice[this.state.selectedRange].map((plan, index) => {
              return <Card plan={plan} key={index} mostPopular={index == 2} />;
            })}
          </div>
        </div>
        <div
          style={{ color: '#36455c', fontWeight: '500' }}
          className={`my-modal ${this.state.showModal ? 'is-active' : ''}`}
        >
          <div
            className="my-modal-background"
            onClick={() => {
              this.setState({ showModal: false });
            }}
          >
            <p
              className="float-right text-end h3 text-white mx-3"
              style={{ cursor: 'pointer' }}
            >
              {' '}
              <i className="fas fa-times" />{' '}
            </p>
          </div>
          <div className="my-modal-content">
            <div className="card">
              <div className="card-body">
                <p className="card-title h5 text-center">
                  Get Started with SquadVoice
                </p>
                <hr />
                <p class="mx-2">
                  Plan Selected: Qualified {this.state.selectedPlan?.qualified}
                </p>

                <BuyerDetailsForm />
              </div>
            </div>
          </div>
        </div>
      </myContext.Provider>
    );
  }
}

export default App;

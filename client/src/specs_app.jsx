import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Specifications from '../components/Specifications.jsx';
import staticObj from './Static.js';

const Wrapper = styled.div`
  color: #222;
  font-family: 'Roboto', arial, sans-serif;
  width: 50%;
  height: 5vw;
  margin-top: 100px;
`;

class SpecsApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      specsParts: '',
      specsGTIN: 0,
      brand: '',
    };
  }

  componentDidMount() {
    // const API_URL = process.env.API_URL || 'localhost:3004';
    // const API_REQUEST = process.env.API_REQUEST || 'localhost:3001';
    const location = window.location.pathname.split('/');
    const id = location[2];

    fetch(`http://54.176.68.191:3000/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('WHAT IS DATA', data);
        this.setState({
          brand: data.brand || '',
          specsParts: data.part_number || '',
          specsGTIN: data.gtin || 0,
        });
      })
      .catch((err) => {
        console.log('Unable to complete request: ', err);
        const data = staticObj[id - 1];
        const containerObj = data.category;
        containerObj.brand = data.brand;
        const specsParts = data.specs.part_Number;
        const specsGTIN = data.specs.GTIN;
        this.setState({

          brand: data.brand,

          specsParts,
          specsGTIN,
        });
      });
  }

  render() {
    const {
      brand, specsParts, specsGTIN,
    } = this.state;
    return (
      <Wrapper>
        <div>
          <Specifications
            specsParts={specsParts}
            specsGTIN={specsGTIN}
            brand={brand}
          />
        </div>

      </Wrapper>

    );
  }
}

ReactDOM.render(<SpecsApp />, document.getElementById('specs'));

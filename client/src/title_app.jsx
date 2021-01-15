import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Title from '../components/Title.jsx';
import staticObj from './Static.js';

const Wrapper = styled.div`
  color: #222;
  font-family: 'Roboto', arial, sans-serif;
  width: 50%;
  height: 5vw;
`;

class TitleApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      AverageRating: 0,
      TotalReviews: 0,
    };
  }

  componentDidMount() {
    // const API_URL = process.env.API_URL || 'localhost:3004';
    // const API_REQUEST = process.env.API_REQUEST || 'localhost:3001';
    let count = 0;
    let sumRatings = 0;
    const location = window.location.pathname.split('/');
    const id = location[2];
    const reviewID = location[2];

    fetch(`http://54.176.68.191:3000/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          title: data.title || '',
        });
      })
      .catch((err) => {
        console.log('Unable to complete request: ', err);
        const data = staticObj[id - 1];
        this.setState({
          title: data.title,
        });
      });
    // fetch(`http://18.222.37.28:3001/api/reviews/${reviewID}`)
    //   .then((response) => (response.json()))
    //   .then((data) => {
    //     while (count < data.length) {
    //       sumRatings = data[count].review_rating + sumRatings;
    //       count += 1;
    //     }

    //     let averageSum = sumRatings / 5;
    //     averageSum = Math.round(averageSum);
    //     this.setState({
    //       TotalReviews: data.length || 0,
    //       AverageRating: averageSum || 0,
    //     });
    //   });
  }

  render() {
    const {
      title, TotalReviews, AverageRating,
    } = this.state;
    return (
      <Wrapper>
        <div>
          <Title title={title} TotalReviews={TotalReviews} AverageRating={AverageRating} />
        </div>
      </Wrapper>

    );
  }
}

ReactDOM.render(<TitleApp />, document.getElementById('title'));

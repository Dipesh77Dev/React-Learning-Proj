import React from "react";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        "Golmaal3",
        "De Dana Dan",
        "Phir Hera Pheri",
        "Golmaal Return",
        "Double Dhamaal",
      ],
    };
  }

  render() {
    return(
      <div>
        {this.state.movies.map((x) => {
          return <div key={x}>{x}</div>;
        })}
      </div>
    );
  }
}

export default Movies;

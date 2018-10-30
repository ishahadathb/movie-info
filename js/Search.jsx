import React from 'react';
import { connect } from 'react-redux';
import ShowCard from './Show-card';
import Header from './Header';

const Search = props => (
  <div className="search">
    <Header showSearch />
    <div>
      {props.shows
        .filter(show =>
          `${show.title} ${show.description}`
            .toUpperCase()
            .includes(props.searchTerm.toUpperCase())
        )
        .map(show => <ShowCard key={show.imdbID} show={show} />)}
    </div>
  </div>
);
const mapStateToProps = state => ({ searchTerm: state.searchTerm });
export default connect(mapStateToProps)(Search);

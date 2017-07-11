import React from 'react';
import ReactDOM from 'react-dom';
import { songs } from '../data';
import FilterableSongList from './filterable-song-list';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(FilterableSongList, {songs: songs}, null),
    document.getElementById('mount')
  );
});

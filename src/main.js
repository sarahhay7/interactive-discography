import React from 'react';
import ReactDOM from 'react-dom';
import AlbumSearch from './album-search';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(AlbumSearch),
    document.getElementById('mount')
  );
});

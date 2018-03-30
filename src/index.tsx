import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlizClient from '@glitz/core';
import { GlitzProvider } from '@glitz/react';

const glitz = new GlizClient();

ReactDOM.render(
  <GlitzProvider glitz={glitz}>
    <App />
  </GlitzProvider>,
  document.getElementById('app'),
);

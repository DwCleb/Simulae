import React from 'react';

import GlobalState from '~/services/store';
import App from './app';

function Root(): JSX.Element {
  return (
    <GlobalState>
      <App />
    </GlobalState>
  );
}

export default Root;

import React from 'react';

import { UserContext, SystemContext } from '~/services/store/reducers';
import { UserAction, SystemAction } from '~/services/store/actions';

export default function GlobalState({ children }: { children: JSX.Element[] | JSX.Element }): JSX.Element {
  return (
    <SystemContext.Provider value={SystemAction()}>
      <UserContext.Provider value={UserAction()}>{children}</UserContext.Provider>
    </SystemContext.Provider>
  );
}

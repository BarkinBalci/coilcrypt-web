
import { Navigate, Outlet } from 'react-router-dom';import { RealmProvider, UserProvider } from '@realm/react';

import { Task } from './models/Task';
import { PageLayout } from './components/PageLayout';
import { Login } from './models/Login';
import { schemas } from './models';
import { Note } from './models/Note';
import { Card } from './models/Card';
import { Identity } from './models/Identity';

/**
 * The part of the React tree having access to an authenticated user. It
 * renders `@realm/react`'s `UserProvider` for providing the App User once
 * authenticated and `RealmProvider` for opening a Realm.
 */
export function AuthenticatedApp() {
  return (
    // The component set as the `fallback` prop will be rendered if a user has
    // not been authenticated. In this case, we will navigate the user to the
    // unauthenticated route via the `Navigate` component. Once authenticated,
    // `RealmProvider` will have access to the user and set it in the Realm
    // configuration; therefore, you don't have to explicitly provide it here.
    <UserProvider fallback={<Navigate to='/' />}>
      <RealmProvider
        schema={schemas}
        sync={{
          flexible: true,
          // To sync data to the device, we need to subscribe to our tasks.
          initialSubscriptions: {
            update: ((mutableSubs, realm) => {
              mutableSubs.add(realm.objects(Task), { name: 'allTasks' });
              mutableSubs.add(realm.objects(Login), { name: "allLogins" });
              mutableSubs.add(realm.objects(Note), { name: "allNotes" });
              mutableSubs.add(realm.objects(Card), { name: "allCards" });
              mutableSubs.add(realm.objects(Identity), { name: "allIdentities" });
            }),
          },
        }}
      >
        
          <Outlet />
        
      </RealmProvider>
    </UserProvider>
  );
}

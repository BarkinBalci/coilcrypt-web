////////////////////////////////////////////////////////////////////////////
//
// Copyright 2023 Realm Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
////////////////////////////////////////////////////////////////////////////

import { useCallback, useEffect, useState } from 'react';
import { useQuery, useRealm, useUser } from '@realm/react';

import { Login } from '../models/Login';
import { Card } from '../models/Card';
import { Identity } from '../models/Identity';
import { Note } from '../models/Note';
import { Item } from '../models';

/**
 * Provides functions for managing changes to the tasks in the Realm,
 * such as adding, updating, and deleting tasks.
 */
export function useTaskManager() {
  const realm = useRealm();
  const user = useUser();
  const [requeryFlag, setRequeryFlag] = useState(false);

  useEffect(() => {
    // Temporary solution for making `useQuery` update the `tasks` reference.
    // (The value doesn't matter, only that it is different from the initial value.)
    setRequeryFlag(true);
  }, []);

  const logins = useQuery(Login, (collection) => collection, [requeryFlag]);
  const notes = useQuery(Note, (collection) => collection, [requeryFlag]);
  const cards = useQuery(Card, (collection) => collection, [requeryFlag]);
  const identities = useQuery(Identity, (collection) => collection, [requeryFlag]);

  const addLogin = useCallback((name: string, username: string, password: string, url: string, ) => {
    const iv = '0';
    realm.write(() => {
      realm.create(Login, { name, username, password, url, iv, userId: user.id });
    });
  }, [realm, user.id]);

  const addNote = useCallback((name: string, content: string) => {
    const iv = '0';
    realm.write(() => {
      realm.create(Note, { name, content, iv, userId: user.id });
    });
  }, [realm, user.id]);

  const addCard = useCallback((name: string, ownerName: string, number: string, expirationDate: string, cvv: string) => {
    const iv = '0';
    realm.write(() => {
      realm.create(Card, { name, ownerName, number, expirationDate, cvv, iv, userId: user.id });
    });
  }, [realm, user.id]);

  const addIdentity = useCallback((name: string, firstName: string, middleName: string, lastName: string, dateOfBirth: string, identityNumber: string, email: string, phone: string ) => {
    const iv = '0';
    realm.write(() => {
      realm.create(Identity, { name, firstName, middleName, lastName, dateOfBirth, identityNumber, email, phone, iv, userId: user.id });
    });
  }, [realm, user.id]);

  const toggleFavorite = useCallback((item: Item) => {
    realm.write(() => {
      item.favorite = !item.favorite;
    });
  }, [realm]);

  const deleteItem = useCallback((item: Item) => {
    realm.write(() => {
      realm.delete(item);
    });
  }, [realm]);

  return {
    logins,
    notes,
    cards,
    identities,
    addLogin,
    addNote,
    addCard,
    addIdentity,
    toggleFavorite,
    deleteItem,
  };
}

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

import { Results } from 'realm';

import type { Task } from '../models/Task';
import { Login } from '../models/Login';
import { LoginItem } from './LoginItem';
import { Card } from '../models/Card';
import { Note } from '../models/Note';
import { Identity } from '../models/Identity';
import { NoteItem } from './NoteItem';
import { IdentityItem } from './IdentityItem';
import { CardItem } from './CardItem';
import { Item } from '../models';

type TaskListProps = {
  logins: Results<Login>;
  notes: Results<Note>;
  cards: Results<Card>;
  identities: Results<Identity>;
  onToggleFavorite: (task: Task) => void;
  onDeleteItem: (item: Item) => void;
};

/**
 * Displays a list of tasks.
 */
export function ItemList({logins, notes, cards, identities, onToggleFavorite, onDeleteItem }: TaskListProps) {
  return (
    <div className="min-h-screen h-full flex-col flex items-center mx-auto pb-64 pt-6 max-w-5xl px-4 space-y-4">
      {logins.length > 0 && <label className="text-left w-full text-opacity-50 text-secondary">Logins:</label>}
      {logins.map((login) => (
        <LoginItem key={login._id.toHexString()} login={login} onDelete={onDeleteItem} />
      ))}
      {notes.length > 0 && <label className="text-left w-full text-opacity-50 text-secondary">Notes:</label>}
      {notes.map((note) => (
        <NoteItem key={note._id.toHexString()} note={note} onDelete={onDeleteItem} />
      ))}
      {cards.length > 0 && <label className="text-left w-full text-opacity-50 text-secondary">Cards:</label>}
      {cards.map((card) => (
        <CardItem key={card._id.toHexString()} card={card} onDelete={onDeleteItem} />
      ))}
      {identities.length > 0 && <label className="text-left w-full text-opacity-50 text-secondary">Identities:</label>}
      {identities.map((identity) => (
        <IdentityItem key={identity._id.toHexString()} identity={identity} onDelete={onDeleteItem} />
      ))}
    </div>
  );
}

import { Card } from './Card';
import { Identity } from './Identity';
import { Login } from './Login';
import { Note } from './Note';
import { Task } from './Task';

export type Item = Task | Login | Note | Card | Identity;

export const schemas = [Task, Login, Identity, Note, Card];

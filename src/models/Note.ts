import Realm, { BSON, ObjectSchema } from 'realm';

export class Note extends Realm.Object {
    _id!: BSON.ObjectId;
    userId!: string;
    iv!: string;
    type!: string;
    name!: string;
    content?: string;
    favorite!: boolean;
    repromt!: boolean;
    createdAt!: Date;
    updatedAt!: Date;

    static schema: ObjectSchema = {
        name: 'Note',
        primaryKey: '_id',
        properties: {
            _id: { type: 'objectId', default: () => new BSON.ObjectId() },
            userId: 'string',
            iv: 'string',
            type: { type: 'string', default: 'note' },
            name: 'string',
            content: { type: 'string', optional: true },
            favorite: { type: 'bool', default: false },
            repromt: { type: 'bool', default: false },
            createdAt: { type: 'date', default: () => new Date() },
            updatedAt: { type: 'date', default: () => new Date() },
        },
    };
}
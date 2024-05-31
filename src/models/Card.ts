import Realm, { BSON, ObjectSchema } from 'realm';

export class Card extends Realm.Object {
    _id!: BSON.ObjectId;
    userId!: string;
    iv!: string;
    type!: string;
    name!: string;
    ownerName?: string;
    number?: string;
    expirationDate?: string;
    cvv?: string;
    favorite!: boolean;
    repromt!: boolean;
    createdAt!: Date;
    updatedAt!: Date;

    static schema: ObjectSchema = {
        name: 'Card',
        primaryKey: '_id',
        properties: {
            _id: { type: 'objectId', default: () => new BSON.ObjectId() },
            userId: 'string',
            iv: 'string',
            type: { type: 'string', default: 'card' },
            name: 'string',
            ownerName: { type: 'string', optional: true },
            number: { type: 'string', optional: true },
            expirationDate: { type: 'string', optional: true },
            cvv: { type: 'string', optional: true },
            favorite: { type: 'bool', default: false },
            repromt: { type: 'bool', default: false },
            createdAt: { type: 'date', default: () => new Date() },
            updatedAt: { type: 'date', default: () => new Date() },
        },
    };
}
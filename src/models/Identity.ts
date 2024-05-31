import Realm, { BSON, ObjectSchema } from 'realm';

export class Identity extends Realm.Object {
    _id!: BSON.ObjectId;
    userId!: string;
    iv!: string;
    type!: string;
    name!: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    dateOfBirth?: string;
    identityNumber?: string;
    email?: string;
    phone?: string;
    favorite!: boolean;
    repromt!: boolean;
    createdAt!: Date;
    updatedAt!: Date;

    static schema: ObjectSchema = {
        name: 'Identity',
        primaryKey: '_id',
        properties: {
            _id: { type: 'objectId', default: () => new BSON.ObjectId() },
            userId: 'string',
            iv: 'string',
            type: { type: 'string', default: 'identity' },
            name: 'string',
            firstName: { type: 'string', optional: true },
            middleName: { type: 'string', optional: true },
            lastName: { type: 'string', optional: true },
            dateOfBirth: { type: 'string', optional: true },
            identityNumber: { type: 'string', optional: true },
            email: { type: 'string', optional: true },
            phone: { type: 'string', optional: true },
            favorite: { type: 'bool', default: false },
            repromt: { type: 'bool', default: false },
            createdAt: { type: 'date', default: () => new Date() },
            updatedAt: { type: 'date', default: () => new Date() },
        },
    };
}
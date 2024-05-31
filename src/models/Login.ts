import Realm, { BSON, ObjectSchema } from 'realm';

export class Login extends Realm.Object {
    _id!: BSON.ObjectId;
    userId!: string;
    iv!: string;
    type!: string;
    name!: string;
    url?: string;
    username?: string;
    password?: string;
    favorite!: boolean;
    repromt!: boolean;
    createdAt!: Date;
    updatedAt!: Date;

    static schema: ObjectSchema = {
        name: 'Login',
        primaryKey: '_id',
        properties: {
            _id: { type: 'objectId', default: () => new BSON.ObjectId() },
            userId: 'string' ,
            iv: 'string' ,
            type: { type: 'string', default: 'login' },
            name: 'string',
            url: { type: 'string', optional: true },
            username: { type: 'string', optional: true },
            password: { type: 'string', optional: true },
            favorite: { type: 'bool', default: false },
            repromt: { type: 'bool', default: false },
            createdAt: { type: 'date', default: () => new Date() },
            updatedAt: { type: 'date', default: () => new Date() },
        },
    };
}
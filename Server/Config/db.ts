//=========================================
// File Name     : db.ts
// Student Name  : Menuka Pinto
// Student ID    : 200574919
// Date          : Aug 16th 2024
//=========================================
let remoteURI = (process.env.MONGO_URI) as string;
let secret = (process.env.APP_SECRET) as string;

export default {
    remoteURI: remoteURI,
    secret: secret
}
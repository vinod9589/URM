import admin from "firebase-admin";
import * as dotenv from "dotenv";
dotenv.config();
admin.initializeApp({
    credential: admin.credential.cert({
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    }),
});
export const db = admin.firestore();
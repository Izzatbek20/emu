import {
    doc,
    setDoc,
    getDoc
} from 'firebase/firestore';
import {
    db
} from '@/initFirebase';

export async function saveTokens(tokens) {
    try {
        await setDoc(doc(db, 'amocrm', 'tokens'), tokens);
        console.log('Tokens have been saved successfully!');
    } catch (error) {
        console.error('Error saving tokens:', error);
    }
}

// Access va Refresh tokenlarni olish
export async function getTokens() {
    try {
        const docSnap = await getDoc(doc(db, 'amocrm', 'tokens'));
        return docSnap.data();
    } catch (error) {
        console.error('Error getting tokens:', error);
        return null;
    }
}

// Access tokenlarni olish
export async function getAccess() {
    try {
        const docSnap = await getDoc(doc(db, 'amocrm', 'tokens'));
        return docSnap.data().access;
    } catch (error) {
        console.error('Error getting tokens:', error);
        return null;
    }
}

// Refresh tokenlarni olish
export async function getRefresh() {
    try {
        const docSnap = await getDoc(doc(db, 'amocrm', 'tokens'));
        return docSnap.data().access;
    } catch (error) {
        console.error('Error getting tokens:', error);
        return null;
    }
}
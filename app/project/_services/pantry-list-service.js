import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, doc, deleteDoc } from "firebase/firestore";

export async function getItems(userId) {
    const itemsRef = collection(db, "users", userId, "items");
    const itemsQuery = query(itemsRef);

    const querySnapshot = await getDocs(itemsQuery);
    const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));


    return items;
}

export async function addItem(userId, item, setPantryItems) {
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);
    
    const newItemWithId = { id: docRef.id, ...item };
    setPantryItems(prevItems => [...prevItems, newItemWithId]);
  
    return docRef.id;
  }
  

export async function deleteItem(userId, itemId) {
    const itemRef = doc(db, "users", userId, "items", itemId);
    await deleteDoc(itemRef);
}
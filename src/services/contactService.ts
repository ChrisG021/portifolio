import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '@/services/auth'

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const saveContactMessage = async (data: ContactFormData) => {
  try {
    const docRef = await addDoc(collection(db, "contact-messages"), {
      ...data,
      timestamp: serverTimestamp(),
      status: "unread"
    });
    
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Erro ao salvar mensagem:", error);
    return { success: false, error };
  }
};
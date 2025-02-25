import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Adjust the path based on your project structure
import { getAuth } from "firebase/auth";

export const fetchUserBudgets = async () => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      console.log("No user logged in");
      return [];
    }

    const budgetsCollection = collection(db, "budgets"); // Reference the "budgets" collection
    const q = query(budgetsCollection, where("userId", "==", user.uid)); // Filter by userId
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching budgets:", error);
    return [];
  }
};

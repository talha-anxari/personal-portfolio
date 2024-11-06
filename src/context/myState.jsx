import { useEffect, useState } from "react";
import MyContext from "./myContext";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "@/Firebase/Firebase";
const MyState = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [getAllProject, setGetAllProject] = useState([]);

  // Get all Projects from firebase
  const getAllProjectFunction = async () => {
    setLoading(true);

    try {
      const q = query(collection(db, "projects"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let projectArray = [];
        QuerySnapshot.forEach((doc) => {
          projectArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllProject(projectArray);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProjectFunction();
  }, []);
  return (
    <MyContext.Provider
      value={{
        loading,
        setLoading,
        getAllProject,
        getAllProjectFunction,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyState;

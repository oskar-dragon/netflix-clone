import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function useContent(target) {
  const [content, setContent] = useState([]);

  const getData = async target => {
    const data = await getDocs(collection(db, target));
    return data;
  };

  useEffect(() => {
    getData(target)
      .then(snapshot => {
        const allContent = snapshot.docs.map(contentObj => ({
          ...contentObj.data(),
          docId: contentObj.docId,
        }));

        setContent(allContent);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [target]);

  return { [target]: content };
}

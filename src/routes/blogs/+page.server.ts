import type { PageServerLoad } from "./$types";
import { database } from "$lib/server/database";
import { collection, getDocs } from "firebase/firestore";

export const load = (async () => {
  let BlogsData: Array<{ title: string }> = [];

  const querySnapshot = await getDocs(collection(database, "blogs"));

  querySnapshot.forEach((doc) => {
    BlogsData.push({
      title: doc.data().title,
    });
  });

  return {
    blogs: BlogsData,
  };
}) satisfies PageServerLoad;

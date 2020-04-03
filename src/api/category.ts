import { db } from '../config/firebase';

export const addCategory = async (data) => {
  try {
    const res = await db.collection('categories').add(data);

    console.log(res);

    return res;
  } catch (err) {
    return err;
  }
};

export const getCategories = async (user: string) => {
  try {
    const querySnapshot = await db
      .collection('categories')
      .where('user', '==', user)
      .get();

    const data = querySnapshot.docs.map((doc) => [doc.id, doc.data()]);

    return data;
  } catch (err) {
    return err;
  }
};

export const updateCategory = async (selected: string, data) => {
  try {
    const res = await db.collection('categories').doc(selected).update(data);

    return res;
  } catch (err) {
    return err;
  }
};

export const deleteCategory = async (selected: string) => {
  try {
    const category = await db.collection('categories').doc(selected).delete();

    const data = await db
      .collection('data')
      .where('category', '==', selected)
      .get();

    data.forEach((doc) => doc.ref.delete());

    return category;
  } catch (err) {
    return err;
  }
};

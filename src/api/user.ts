import { db, firebase } from '../config/firebase';

export const getCurrentUser = () => firebase.auth().currentUser;

export const getUserData = async (selected: string) => {
  try {
    const res = await db.collection('users').doc(selected).get();

    return res.data();
  } catch (err) {
    return err;
  }
};

export const updateUser = async (selected: string, data: any) => {
  try {
    const res = await db.collection('users').doc(selected).update(data);

    return res;
  } catch (err) {
    return err;
  }
};

export const deleteUser = async (selected: string) => {
  try {
    const categories = await db
      .collection('categories')
      .where('user', '==', selected)
      .get();

    categories.forEach((doc) => doc.ref.delete());

    const data = await db
      .collection('data')
      .where('user', '==', selected)
      .get();

    data.forEach((doc) => doc.ref.delete());

    getCurrentUser().delete();

    const res = await db.collection('users').doc(selected).delete();

    return res;
  } catch (err) {
    return err;
  }
};

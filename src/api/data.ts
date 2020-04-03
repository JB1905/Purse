import { db } from '../config/firebase';

export const addData = async (data) => {
  try {
    const res = await db.collection('data').add(data);

    return res;
  } catch {}
};

export const getDataForDay = async (
  user: string,
  type: string,
  minTimeStamp: Date,
  maxTimeStamp: Date
) => {
  try {
    const res = await db
      .collection('data')
      .where('user', '==', user)
      // .where("type", "==", type)
      .orderBy('date')
      // .startAt(minTimeStamp.getTime())
      // .endAt(maxTimeStamp.getTime())
      .get();

    const data = res.docs.map((doc) => doc.data());

    return data;
  } catch (err) {
    return err;
  }
};

export const getDataForCategory = async (category: string) => {
  try {
    const res = await db
      .collection('data')
      .where('category', '==', category)
      .get();

    const data = res.docs.map((doc) => doc.data());

    return data;
  } catch (err) {
    return err;
  }
};

export const updateData = async (selected: string, data) => {
  try {
    const res = await db.collection('data').doc(selected).update(data);

    return res;
  } catch (err) {
    return err;
  }
};

export const deleteData = async (selected: string) => {
  try {
    const res = await db.collection('data').doc(selected).delete();

    return res;
  } catch (err) {
    return err;
  }
};

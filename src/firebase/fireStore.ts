import firebase from 'firebase';
import 'firebase/firestore';
import config from './config'


if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const database = firebase.firestore();

class FireStore {
  private buildingsCollections: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;
  private buildingsCount: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;

  constructor() {
    this.buildingsCollections = database.collection('Buildings');
    this.buildingsCount = database.collection('BuildingsCount');
  }


  getBuildings = async () => {
    const querySnapshot = await this.buildingsCollections.get()
    const buildings = [];
    querySnapshot.forEach(doc => {
      buildings.push({ id: doc.id, ...doc.data() });
    });

    return buildings;
  }

  addBuilding = async (buiding) => {
    return await this.buildingsCollections
      .add(buiding)
      .then(docRef => docRef)
      .catch(error => error);
  }

  deleteBuilding = async id => {
    return await this.buildingsCollections
      .doc(id)
      .delete();
  }

  getBuildingsCount = async () => {
    const querySnapshot = await this.buildingsCount.get()
    const count = [];

    querySnapshot.forEach(doc => {
      count.push({ ...doc.data(), id: doc.id });
    });

    return count.length ? count[0] : { value: 0, id: null };
  }

  updateBuildingCount = async count => {
    return await this.buildingsCount.doc(count.id).update(count);
  }
}

export default new FireStore();

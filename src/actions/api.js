import axios from "axios";

const BASE_URL = "http://localhost:51374/api/";

export default {
  dCandidate(url = BASE_URL + "DCandidate/") {
    return {
      fetchAll: () => axios.get(url),
      fetchById: id => axios.get(url + id),
      create: newRecord => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: id => axios.delete(url + id)
    };
  }
};

import axios from "axios";

class UsersApi {
  get = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );
    return data;
  };
}

export default new UsersApi();

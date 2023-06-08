import axios from "axios";
import { useDispatch } from "react-redux";
import { trigger } from "../store/store";
axios.defaults.baseURL = "http://localhost:4000";

function usePost() {
  const dispatch = useDispatch();
  const post = async (params, id) => {
    await axios
      .post(params, { id })
      .then((data) => {
        console.log(data.data);
        dispatch(trigger());
      })
      .catch((e) => console.error(e.message));
  };
  return post;
}

export default usePost;

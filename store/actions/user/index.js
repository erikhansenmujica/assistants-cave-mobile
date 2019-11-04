import axios from "axios";
import { SET_USER } from "../../constants";
import store from "../..";
axios.defaults.withCredentials = true;
const setUser = user => ({
  type: SET_USER,
  user
});
export const fetchUser = user => dispatch =>
  axios
    .post("http://10.100.0.133:3000/login", user)
    .then(res => dispatch(setUser(res.data[0])))
    .catch(console.log);

export const checkIfLogged = () => dispatch =>
  axios
    .get("http://10.100.0.133:3000/me")
    .then(res => dispatch(setUser(res.data.credentials)))
    .catch(console.log);
export const logout = () =>
  axios
    .get("http://10.100.0.133:3000/logout")
    .then(() => store.dispatch(setUser({})))
    .catch(console.log);

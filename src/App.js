import "./index.scss";
// import Success from "./components/Sucsess";
import { Users } from "./components/Users";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  console.log(users);
  useEffect(() => {
    fetch(`https://reqres.in/api/users`)
      .then((res) => res.json())
      .then((json) => setUsers(json.data))
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении пользователей!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="App">
      <Users items={users} isLoading={isLoading} />
    </div>
  );
}

export default App;

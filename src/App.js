import "./index.scss";
// import Success from "./components/Sucsess";
import { Users } from "./components/Users";
import { useEffect, useState } from "react";
import { on } from "events";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
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
  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="App">
      <Users
        searchValue={searchValue}
        onChangeSearchValue={onChangeSearchValue}
        items={users}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;

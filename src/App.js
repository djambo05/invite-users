import "./index.scss";
// import Success from "./components/Sucsess";
import { Users } from "./components/Users";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [invites, setInvites] = useState([]);

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

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  return (
    <div className="App">
      <Users
        searchValue={searchValue}
        onChangeSearchValue={onChangeSearchValue}
        items={users}
        isLoading={isLoading}
        invites={invites}
        onClickInvite={onClickInvite}
      />
    </div>
  );
}

export default App;

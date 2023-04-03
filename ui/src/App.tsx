import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import IUser from "./models/IUser";
import Appointments from "./components/Appointments";
function App() {

  const [appointments, setAppointments] = useState<IUser[]>([])
  const callback = async(name: string | undefined) => {
    console.log("-", name);

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("user", name+'');

      const res = await fetch('http://localhost:5000/users', {
        headers: myHeaders
      })
      if (res.ok) {
        setAppointments(await res.json())
      }else{
        throw res;
      }
    } catch(error) {}
  };

  console.log ('appointments ', appointments)
  return (
    <div className="App">
      <div className="bg-slate-700 h-screen px-10 py-20 w-full">
        <Search onClickSearch={callback} />
      <Appointments appointments={appointments}/>
      </div>
    </div>
  );
}

export default App;

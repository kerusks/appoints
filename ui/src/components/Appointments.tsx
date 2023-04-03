import { FC } from "react";
import IUser from "../models/IUser";

interface IAppointments {
  appointments: IUser[];
}

const Appointments: FC<IAppointments> = ({ appointments }) => {
  console.log ('appointments', appointments)
  return (
    <div className="w-auto mt-4 table-relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
          <th scope="col" className="px-6 py-3">User</th>
          <th scope="col" className="px-6 py-3">Name</th>
          <th scope="col" className="px-6 py-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a: IUser, i: number) => (
            <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">{a.user}</td>
              <td className="px-6 py-4">{a.name}</td>
              <td className="px-6 py-4">{a.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;

import { Component } from 'solid-js';

interface Admin {
  id: number;
  name: string;
  email: string;
  role: string;
}

const AdminView: Component<{ admins: Admin[] }> = (props) => {
  return (
    <div>
      <h2>Admins</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {props.admins.map(admin => (
            <tr key={admin.id}>
              <td>{admin.name}</td>
              <td>{admin.email}</td>
              <td>{admin.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminView;

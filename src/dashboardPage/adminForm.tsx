import { createSignal } from 'solid-js';
import type { Component } from 'solid-js';
import './BGstyles.css';

const AddAdminModal: Component<{ isOpen: boolean; onClose: () => void; onAdd: (admin: { firstName: string; lastName: string; rollNumber: string; email: string; password: string }) => void }> = (props) => {
  const [firstName, setFirstName] = createSignal('');
  const [lastName, setLastName] = createSignal('');
  const [rollNumber, setRollNumber] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [confirmPassword, setConfirmPassword] = createSignal('');

  const handleAddAdmin = () => {
    if (password() !== confirmPassword()) {
      alert('Passwords do not match');
      return;
    }
    props.onAdd({ firstName: firstName(), lastName: lastName(), rollNumber: rollNumber(), email: email(), password: password() });
    setFirstName('');
    setLastName('');
    setRollNumber('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    props.onClose();
  };

  return (
    <div class={`modal ${props.isOpen ? 'active' : ''}`}>
      <h2 class="head">Add Admin</h2>
      <div class="row">
        <input type="text" placeholder="First Name" value={firstName()} onInput={(e) => setFirstName(e.currentTarget.value)} />
        <input type="text" placeholder="Last Name" value={lastName()} onInput={(e) => setLastName(e.currentTarget.value)} />
      </div>
      <input type="text" placeholder="Roll Number" value={rollNumber()} onInput={(e) => setRollNumber(e.currentTarget.value)} />
      <input type="email" placeholder="Email" value={email()} onInput={(e) => setEmail(e.currentTarget.value)} />
     <div class="row">
        <input type="password" placeholder="Password" value={password()} onInput={(e) => setPassword(e.currentTarget.value)} />
        <input type="password" placeholder="Confirm Password" value={confirmPassword()} onInput={(e) => setConfirmPassword(e.currentTarget.value)} />
     </div>
        <div class="buttonContainer">
        <button onClick={handleAddAdmin}>Add Admin</button>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddAdminModal;
interface RecipientFormProps {
  name: string;
  setName: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  address: string;
  setAddress: (value: string) => void;
  onAdd: () => void;
}

export default function RecipientForm({
  name, setName,
  phone, setPhone,
  address, setAddress,
  onAdd
}: RecipientFormProps) {
  return (
    <section className="address-section">
      <h2>Add Recipient</h2>
      <input
        type="text"
        placeholder="Recipient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={onAdd}>Add Recipient</button>
    </section>
  );
}
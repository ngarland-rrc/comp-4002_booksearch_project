type Recipient = {
  name: string;
  phone: string;
  address: string;
};

interface RecipientListProps {
  recipients: Recipient[];
  onDelete: (index: number) => void;
}

export default function RecipientList({ recipients, onDelete }: RecipientListProps) {
  return (
    <div className="saved-recipients">
      <h2>Saved Recipients</h2>
      <div className="recipient-list">
        {recipients.map((recipient, index) => (
          <div className="recipient-card" key={index}>
            <p><strong>Name:</strong> {recipient.name}</p>
            <p><strong>Phone:</strong> {recipient.phone}</p>
            <p><strong>Address:</strong> {recipient.address}</p>
            <button onClick={() => onDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
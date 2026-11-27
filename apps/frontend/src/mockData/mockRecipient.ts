// Define the TypeScript interface for a recipient
export interface Recipient {
  id: string;
  name: string;
  phone: string;
  address: string;
}

// Mock initial recipient list data (2 default items)
export const mockRecipients: Recipient[] = [
  {
    id: 'rec_001',
    name: 'John Doe',
    phone: '+1 (555) 019-2834',
    address: '123 Main Street, Apt 4B, New York, NY 10001'
  },
  {
    id: 'rec_002',
    name: 'Jane Smith',
    phone: '+1 (555) 014-5678',
    address: '456 Market Street, Suite 200, San Francisco, CA 94105'
  }
];
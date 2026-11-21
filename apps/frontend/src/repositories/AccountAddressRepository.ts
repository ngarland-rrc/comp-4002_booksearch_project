import type { Recipient } from '../mockData/mockRecipient';

const API_URL = '/api/addresses';

export const accountAddressRepository = {
  /**
   * Fetch all recipient records from the backend API.
   */
  async getRecipients(): Promise<Recipient[]> {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch addresses from backend');
    }
    return await response.json();
  },

  /**
   * Send a POST request to create a new recipient in the backend database.
   */
  async createRecipient(newRecipientData: Omit<Recipient, 'id'>): Promise<Recipient> {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecipientData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to create recipient');
    }

    return await response.json();
  }
};
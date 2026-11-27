import type { Recipient } from '../mockData/mockRecipient';
import { accountAddressRepository } from '../repositories/AccountAddressRepository';

export const recipientService = {
  /**
   * Fetch the list of recipients from the backend.
   */
  async getRecipients(): Promise<Recipient[]> {
    return await accountAddressRepository.getRecipients();
  },

  /**
   * Add a new recipient via the backend repository and return the newly created record.
   */
  async addRecipient(newRecipientData: Omit<Recipient, 'id'>): Promise<Recipient> {
    return await accountAddressRepository.createRecipient(newRecipientData);
  }
};
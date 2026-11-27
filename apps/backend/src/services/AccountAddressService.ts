import { AccountAddressRepository } from '../repositories/AccountAddressRepository';

const accountAddressRepo = new AccountAddressRepository();

export class AccountAddressService {
  
  /**
   * Retrieves all account address records
   * Business logic layer for fetching address data
   */
  async getAllAccountAddressItems() {
    return await accountAddressRepo.findAll();
  }

  /**
   * Creates a new account address record
   * Business logic layer for handling address form submission
   */
  async createAccountAddressItem(data: { 
    name: string; 
    phone: string; 
    address: string
  }) {
    // Basic validation: Ensure core fields are not all empty
    if (!data.name?.trim() && !data.phone?.trim() && !data.address?.trim()) {
      throw new Error('Please provide valid address details.');
    }

    return await accountAddressRepo.create(data);
  }
}
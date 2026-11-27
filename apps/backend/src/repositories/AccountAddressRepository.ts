import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

export class AccountAddressRepository {
  
  /**
   * Retrieves all address records
   */
  async findAll() {
    return await prisma.recipient.findMany();
  }

  /**
   * Creates a new address record
   */
  async create(data: { name: string; phone: string; address: string }) {

    const name = data.name.trim() || '';
    const phone = data.phone.trim() || '';
    const address = data.address.trim() || '';

    // 3. Create the address record linked to the role foreign key (roleId)
    return await prisma.recipient.create({
      data: {
        name: name,
        phone: phone,
        address: address
      },
    });
  }
}
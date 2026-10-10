import { connectDB } from '../config/db.js';
import { Opportunity } from '../models/Opportunity.js';
import { CampusFixTicket } from '../models/CampusFixTicket.js';
import { Application } from '../models/Application.js';
import { Service } from '../models/Service.js';
import { Event } from '../models/Event.js';
import { initialOpportunities, initialCampusFixTickets, initialApplications, initialServices, initialEvents } from './seedData.js';

export const seedDatabase = async () => {
  const isMongoConnected = await connectDB();

  if (isMongoConnected) {
    try {
      const cleanOpp = initialOpportunities.map(({ _id, ...rest }) => rest);
      const cleanFix = initialCampusFixTickets.map(({ _id, ...rest }) => rest);
      const cleanApp = initialApplications.map(({ _id, ...rest }) => rest);
      const cleanSrv = initialServices.map(({ _id, ...rest }) => rest);
      const cleanEvt = initialEvents.map(({ _id, ...rest }) => rest);

      await Opportunity.deleteMany({});
      await Opportunity.insertMany(cleanOpp);

      await CampusFixTicket.deleteMany({});
      await CampusFixTicket.insertMany(cleanFix);

      await Application.deleteMany({});
      await Application.insertMany(cleanApp);

      await Service.deleteMany({});
      await Service.insertMany(cleanSrv);

      await Event.deleteMany({});
      await Event.insertMany(cleanEvt);

      console.log('🌱 MongoDB Atlas Seeded Successfully with Stitch Project Data!');
    } catch (err) {
      console.error('⚠️ Error seeding MongoDB:', err.message);
    }
  }
};

if (process.argv[1] && process.argv[1].endsWith('seed.js')) {
  seedDatabase().then(() => {
    console.log('Seed process completed.');
    process.exit(0);
  });
}

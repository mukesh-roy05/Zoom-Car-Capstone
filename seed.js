const mongoose = require("mongoose");
const Vehicle = require("./models/Vehicle"); // Adjust the path based on your project structure
const Booking = require("./models/Booking"); // Adjust the path based on your project structure
const User = require("./models/User"); // Adjust the path based on your project structure

mongoose
  .connect("mongodb+srv://mroy:Belcome1@cluster0.avvfx.mongodb.net/zoomcar", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const seedVehicles = async () => {
  const vehicles = [
    {
      make: "Toyota",
      model: "Camry",
      price: 30,
      imageUrl: "https://example.com/images/toyota-camry.jpg",
    },
    {
      make: "Honda",
      model: "Civic",
      price: 25,
      imageUrl: "https://example.com/images/honda-civic.jpg",
    },
    {
      make: "Ford",
      model: "Mustang",
      price: 50,
      imageUrl: "https://example.com/images/ford-mustang.jpg",
    },
    {
      make: "Chevrolet",
      model: "Malibu",
      price: 28,
      imageUrl: "https://example.com/images/chevrolet-malibu.jpg",
    },
    {
      make: "Nissan",
      model: "Altima",
      price: 32,
      imageUrl: "https://example.com/images/nissan-altima.jpg",
    },
  ];

  await Vehicle.deleteMany({});
  const insertedVehicles = await Vehicle.insertMany(vehicles);
  console.log("Vehicles seeded!");
  return insertedVehicles; // Return inserted vehicles
};

const seedUsers = async () => {
  const users = [
    { username: "user1", email: "user1@example.com", password: "pass1" },
    { username: "user2", email: "user2@example.com", password: "pass2" },
  ];

  await User.deleteMany({});
  const insertedUsers = await User.insertMany(users);
  console.log("Users seeded!");
  return insertedUsers; // Return inserted users
};

const seedBookings = async (vehicles, users) => {
  const bookings = [
    {
      userId: users[0]._id, // Use actual ObjectId of the first user
      vehicleId: vehicles[0]._id, // Use actual ObjectId of the first vehicle
      pickupLocation: "Location A",
      startDate: new Date("2023-10-10"),
      endDate: new Date("2023-10-15"),
    },
    {
      userId: users[1]._id, // Use actual ObjectId of the second user
      vehicleId: vehicles[1]._id, // Use actual ObjectId of the second vehicle
      pickupLocation: "Location B",
      startDate: new Date("2023-11-01"),
      endDate: new Date("2023-11-05"),
    },
  ];

  await Booking.deleteMany({});
  await Booking.insertMany(bookings);
  console.log("Bookings seeded!");
};

const seedDatabase = async () => {
  const users = await seedUsers();
  const vehicles = await seedVehicles();
  await seedBookings(vehicles, users);
  mongoose.connection.close();
};

seedDatabase().catch((err) => {
  console.error("Error seeding database:", err);
});

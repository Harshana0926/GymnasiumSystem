db.users.insertMany([
  {
    username: "user1",
    password: "hashed_password",
    firstName: "John",
    lastName: "Doe",
    email: "user1@example.com",
    userType: "Student"
  },
  {
    username: "user2",
    password: "hashed_password",
    firstName: "Jane",
    lastName: "Smith",
    email: "user2@example.com",
    userType: "Faculty"
  },
  // Add more user documents as needed
]);

db.lockerReservations.insertMany([
    {
      lockerNumber: 101,
      userID: ObjectId("user_id_here"),
      reservationDate: ISODate("2023-06-01")
    },
    {
      lockerNumber: 102,
      userID: ObjectId("another_user_id_here"),
      reservationDate: ISODate("2023-06-02")
    },
    // Add more locker reservation documents as needed
  ]);
  
db.turfSchedules.insertMany([
    {
      userID: ObjectId("user_id_here"),
      startTime: ISODate("2023-06-01T10:00:00Z"),
      endTime: ISODate("2023-06-01T11:00:00Z")
    },
    {
      userID: ObjectId("another_user_id_here"),
      startTime: ISODate("2023-06-01T14:00:00Z"),
      endTime: ISODate("2023-06-01T15:00:00Z")
    },
    // Add more turf schedule documents as needed
  ]);
  
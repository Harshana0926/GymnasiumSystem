db.payments.insertMany([
    {
      userID: ObjectId("user_id_here"),
      paymentType: "Credit Card",
      amount: 50.00,
      paymentDate: ISODate("2023-06-01")
    },
    {
      userID: ObjectId("another_user_id_here"),
      paymentType: "PayPal",
      amount: 30.00,
      paymentDate: ISODate("2023-06-02")
    },
    // Add more payment documents as needed
  ]);
  
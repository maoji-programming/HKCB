const DATABASE = [
  {
    phone: "90000001",
    firstname: "Siu Ming",
    lastname: "Chan",

    country: "Hong Kong",
    address: "Shatin",

    gender: "female",
    status: "",
    company: "",
    email: "",
    birthday: ""
  },
  {
    phone: "90000002",
    firstname: "Lok",
    lastname: "Lee",

    country: "Hong Kong",
    address: "Sheung Wan",

    gender: "male",
    status: "Married",
    company: "CUHK",
    email: "lokl032@link.cuhk.edu.hk",
    birthday: "1997-07-01 12:00:00"
  },
  {
    phone: "90000003",
    firstname: "Simon",
    lastname: "Ko",

    country: "Hong Kong",
    address: "Shatin",

    gender: "",
    status: "Single",
    company: "",
    email: "",
    birthday: "1998-07-02 12:00:00"
  },
  {
    phone: "61234567",
    firstname: "祥",
    lastname: "何",

    country: "Hong Kong",
    address: "Hong Kong",

    gender: "male",
    status: "Single",
    company: "五毛",
    email: "",
    birthday: ""
  }
];

export function findContactByPhone(phone) {
  if (phone !== undefined) {
    return DATABASE.find((element) => element.phone === phone);
  }
}

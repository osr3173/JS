const person = {
  name: "john",
  age: 21,
  major: "computer",
};

// person.name; 둘다 같음
// const { name, major } = person; 빼기
// const { name: realName, major: superMajor } = person; 빼면서 별명 붙이기

realName; //john

const person1 = {
  name: "Jenny",
  address: {
    city: "buppyeong",
    zipcode: 1004,
  },
};

const { address } = person1; //주소

const {
  address: { zipcode: zip },
} = person1;

const { zipcode: zip1 } = person1.address;

const user = {
  username: "alice",
  email: "alice@example.com",
  details: {
    firstName: "Alice",
    lastName: "Doe",
  },
};

const { lastName: familyName } = user.details;

console.log(familyName);

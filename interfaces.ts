// Interfaces can act as Object type definitions & contracts that can be implemented by classes.
interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

let user: Authenticatable;

user = {
  email: "test@example.com",
  password: "abc1",
  login() {
    // reach out to db, check credentials, create a session
  },
  logout() {
    // clear the session
  },
  name: "Leonardo",
};

// in the case of specifying the object type definition, interfaces and types are almost the same
// for example, you could replace the above interface with the following type:
// type Authenticatable = {
//     email: string;
//     password: string;

//     login(): void;
//     logout(): void;
//   }
// and it would work the same.
// HOWEVER, interfaces have another feature in this case that types doesn't have, and that is
// declaration merging.
// That means you can call the same interface again and add another type definition to it:
interface Authenticatable {
  name: string;
}
// you have extended the requirements for objects that use that interface as an object type definition

// the same logic can be used in a Class. You can force the class to have a set of determined
// properties and methods, defined by the interface. Also, the same class can implement
// multiple interfaces.
// The class that implements an interface must have AT LEAST those methods and properties
// It can have more than that!
class AuthenticatableUser implements Authenticatable {
  constructor(
    public lastName: string, // not in the original Authenticatable interface
    public email: string,
    public password: string,
    public name: string
  ) {}

  login() {}
  logout() {}
}

// much like Classes, you can extend an interface
interface AuthenticatableAdmin extends Authenticatable {
  role: "admin" | "superadmin";
}

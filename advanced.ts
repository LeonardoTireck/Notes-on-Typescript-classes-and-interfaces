class SomeUser {
  constructor(private firstName: string, private lastName: string) {}

  //getters are used to create a new property, "on-the-fly", dynamically, possibly with values from
  //other properties, combined...
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const leo = new SomeUser("Leonardo", "Tireck");
// i cant access firstName and lastName because they're private properties
// i can, however, access fullName, which is a dynamic property,
// assign via getter, and public (can be private)
console.log(leo.fullName); // -> Leonardo Tireck

// similar to getters, there is another feature called setters, which set a value to an
// existing property, and does so not in the constructor, so not in the instantiation time.
class SomeOtherUser {
  private _firstName: string = "";
  constructor(private _lastName: string) {}

  // setters act very similarlly to a constructor, but instead of assigning a value to a property
  // when the object is instantiated, it assigns the value only when the setter is called
  set firstName(name: string) {
    // another key benefit of using setters is that you can run some validation logic for the property
    // value. Although you can also do that on the constructor, it's a good practice to use setters
    if (name.trim() == "") {
      throw new Error("Invalid name");
    }
    this._firstName = name;
  }
  get fullName() {
    return this._firstName + " " + this._lastName;
  }
}
// now you can instantiate an object from this class, and after that, change the first name property
const lara = new SomeOtherUser("Antunes");
lara.firstName = "Lara"; // note that although the property is _firstName, we use firstName to access it
// thats because we "call" the setter.

// so now if you combine both getters and setters, you can call
console.log(lara.fullName); // -> Lara Antunes

// Although getters and setters seem function-like in behavior, the key difference is that getters
// and setters allow you to abstract away the logic of accessing and modifying and internal
// property without exposing the actual implementation details of how values are set or retrieved.
// They give you control over property behavior without changing how you access the properties externally

// static methods and properties are reachable without the need to instantiate an object
class Monitor {
  static panelType = "LCD";
  static sayTypeOfPanel(panelType: string) {
    console.log(`The type of panel this class support is: ${panelType}`);
  }
}
console.log(Monitor.panelType); // --> LCD
Monitor.sayTypeOfPanel(Monitor.panelType); // --> The type of panel this class support is: LCD

// Abstract Classes are Classes that cannot be instantiated, they are only supposed to be the
// parent of other Classes
abstract class Peripheral {
  constructor(protected peripheralId: number) {}

  generateReceipt() {
    return console.log(
      `Generating the receipt for the item with id: ${this.peripheralId}`
    );
  }
}

class Keyboard extends Peripheral {
  constructor(
    protected peripheralId: number,
    private format: string,
    private price: number
  ) {
    super(peripheralId);
  }

  connect() {
    console.log(
      `Connecting the device with id: ${this.peripheralId}, of format: ${this.format}, of price: ${this.price}`
    );
  }
}

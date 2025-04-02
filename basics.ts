class User {
  constructor(protected name: string, public age: number) {}

  public surName: string = "Antunes Tireck Pinto";

  public readonly hobbies: Array<string> = [" breathing", " reading"];

  public greet() {
    console.log(
      `Hello, my name is ${this.name} ${this.surName}, my hobbies are:${this.hobbies}. I'm ${this.age} years old.`
    );
  }

  changeSurName(desiredSurName: string) {
    this.surName = desiredSurName;
  }

  addHobbies(desiredHobbies: Array<string>) {
    this.hobbies.push(...desiredHobbies.map((h) => " " + h));
  }
}

class Employee extends User {
  // since the base class User has some parameters, these need to be passed inside the constructor
  // the parameters types need to be equal.
  // PRIVATE PROPERTIES CANNOT BE INHERITED, that's why we use protected
  // you can, however, set a property value to a child without declaring it in the constructor,
  // which is the only way to use a private property on the child...
  // and to do that, you'd have to pass the value for that property inside the super() explicitly
  // super(name, 28);
  constructor(
    public jobTitle: string,
    protected name: string,
    public age: number
  ) {
    // since the base class User has some parameters, these need to be passed inside super
    super(name, age);
  }

  work() {
    console.log(`My job is ${this.jobTitle}`);
  }
}

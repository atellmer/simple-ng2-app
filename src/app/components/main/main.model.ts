export class Human {
  public name: string;
  public type: string;
  public age: number;
  public state: string;
  public image: string;
  
  
  
  constructor(name: string, type: string, age: number, state: string, image?: string, ) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.state = state;
    this.image = image;
  }
}
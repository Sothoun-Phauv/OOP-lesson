import { Resource } from "./Resource";

export class Person extends Resource implements NamedResource {
    private age: number;
    constructor(id: string, age: number) {
        super(id);
        this.age = age;
    }
}
export class Employee {
    constructor(
        public name: string,
        public designation: string,
        public email: string,
        public mobileNumber: number,
        public salary: number,
        public address: {
            street: string,
            city: string,
            state: string,
            country: string,
        }
    ) {}
}
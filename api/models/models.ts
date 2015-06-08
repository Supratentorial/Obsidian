///<reference path="../interfaces/interfaces.ts"/>

module data.models{
    export class Contact implements data.interfaces.IContact{
        address:data.interfaces.IAddress[];
        id:number;
        firstName:string;
        lastName:string;
        title: string;
        middleNames:data.interfaces.IMiddleName[];
        dateOfBirth:Date;
        phoneNumbers:data.interfaces.IPhoneNumber[];
        emailAddresses:data.interfaces.IEmailAddress[];

        getFullName() : string{
            //TODO: Iterate over array of middle names.
            return this.lastName + ', ' + this.firstName;
        }

    }

    export class Matter implements data.interfaces.IMatter{
        clients:data.interfaces.IClient[];
        events:data.interfaces.IEvent[];
    }
}
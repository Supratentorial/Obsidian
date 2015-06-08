module data.interfaces {

    export interface IRepository<T>{
        create(object : T);
        remove(id : number);
        update(id : number);
        getById(id: number);
    }

    export interface IMatter{
        clients : IClient[];
        events : IEvent[];
    }

    export interface IEvent{
        id : number;
        date : Date;
        name : string;
    }

}
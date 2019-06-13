export class User {
    user_id: number // primary key
    username: string
    password: string
    first_name: string
    last_name: string
    email: string
    address: string
    role: string[]
    permit_id: number // foreign key

    constructor(user_id:number, username:string = '', password:string = '',
    first_name: string = '', last_name:string = '', email: string = '', address: string = '',
    role: string[], permit_id:number) {
        this.user_id = user_id || 0;
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.last_name= last_name;
        this.email = email;
        this.address = address;
        this.role = role || [];
        this.permit_id = permit_id

    }
}
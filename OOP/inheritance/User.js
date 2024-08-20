//parent class
class User {
    constructor(id , username) {
        this.i= id;
        this.u=username;
    }
}
// derived class
class Admin extends User {
    constructor(id , username , permission) {
        super (id , username)
        this.p = permission ;
    }
}
let adminone = new Admin(100 , "islam", 1);
console.log(adminone.p);

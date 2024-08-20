class User {
  #e; // private
  constructor(id, username, eSalary) {
    this.i = id;
    this.u = username;
    this.#e = eSalary;
  }
  getSalary() {
    return parseInt(this.#e);
  }
}

let userOne = new User(100, "islam", 5000);
console.log(userOne.getSalary()*2);

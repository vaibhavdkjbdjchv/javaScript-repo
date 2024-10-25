const user = {
    username: "vaibahv",
    logincount: 8,
    signin: true,
    newuser: function () {
        // console.log(`username : ${this.username}`)
        console.log(this);
    }
}
console.log(user.newuser());



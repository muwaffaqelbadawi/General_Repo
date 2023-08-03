///////////////////////
//////////////////////

const myArr = ["eat", "sleep", "code"];

NameObj = {
  name: "Muwaffag",
  hobbies: ["eat", "sleep", "code"],
  logName: function () {
    console.log(this.name);
  },
};

localStorage.setItem("mySessionStore", JSON.stringify(myArr));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);

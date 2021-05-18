const express = require("express");
const path = require("path");
const app = express();
const PUERTO = 3000;

// Array de los usuartios
const users = [
  {
    user: "admin",
    password: "admin",
  },
  {
    user: "franci",
    password: "franci",
  },
];

// midellwares
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "cliente")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "cliente/login.html"));
});

app.post("/login", function (req, res) {
  let answer = false;
  if (req.body.username.trim() !== "" && req.body.pass.trim() !== "") {
    for (let i = 0; i < users.length; i++) {
      if (req.body.username == users[i].user && req.body.pass == users[i].password) {
        answer = true;
        break;
      }
    }
  }
  if (answer == true) {
    res.sendFile(path.join(__dirname, "cliente/home.html"));
  } else {
    res.sendFile(path.join(__dirname, "cliente/loginBad.html"));
  }
});

app.get("/register", function (req, res) {
  res.sendFile(path.join(__dirname, "cliente/register.html"));
});

app.post("/register", function (req, res) {
  let hasError = false;
  if (req.body.newUsers.trim() !== "" && req.body.newPass.trim() !== "" && req.body.newRepeat.trim() !== "") {
    if (req.body.newPass == req.body.newRepeat) {
      for (let i = 0; i < users.length; i++) {
        if (req.body.newUsers == users[i].user) {
          hasError = true;
          break;
        }
      }
    } else {
      hasError = false;
    }
  } else {
    hasError = false;
  }

  if (hasError == true) {
    res.sendFile(path.join(__dirname, "cliente/registerBad.html"));
  } else {
    users.push({ user: req.body.newUsers, password: req.body.newPass });
    res.sendFile(path.join(__dirname, "cliente/login.html"));
  }
  console.log(users);
});

app.listen(PUERTO, function () {
  console.log(`server iniciado en el puerto ${PUERTO}...`);
});

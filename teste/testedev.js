users = [
  {
    Prenom: "Fatou",
    Nom: "fall",
    Etat: 0,
    Role: "admin",
    Age: 18,
  },
  {
    Prenom: "Aicha",
    Nom: "Seck",
    Etat: 1,
    Role: "user",
    Age: 20,
  },
  {
    Prenom: "Papi",
    Nom: "Diouf",
    Etat: 0,
    Role: "admin",
    Age: 21,
  },
  {
    Prenom: "Baba",
    Nom: "Diallo",
    Etat: 1,
    Role: "user",
    Age: 22,
  },
  {
    Prenom: "Modou",
    Nom: "Diop",
    Etat: 0,
    Role: "admin",
    Age: 24,
  },
];
/*
    1 creer un function flecher nomméé getadmin qui prend en parametre le tableau cette fonction return les utilisateur avec le role admin 
 */
const get_admin = (users) => {
  let admins = [];
  users.forEach((user) => {
    if (user.Role === "admin") {
      admins.push(user);
    }
  });
  return admins;
};

/* .filter permet de fitre un tableau */
/* 
let utilisateur = {
  Prenom: "ulrich",
  Nom: "diatta",
  Etat: 0,
  Role: "admin",
  Age: 18,
}; */

/* recupere dans des variable le nom prenom et role et les afficher dans la console*/

/* la destructuration permet de recupere les cle et les valeur en seule ligne */
/* const {Prenom , Nom, Role} = utilisateur;

console.log(Prenom, Nom , Role) */

/* avec map cree un tableau qui recupere le prenom nom et role des utilisateur */
/* users.map((user) => {
    const { Prenom, Nom, Role } = user;
    console.log(Prenom, Nom, Role);
  }); */

let tabmap = users.map(({ Prenom, Role }) => {
  return {
    p: Prenom,
    r: Role,
  };
});

console.log(tabmap);

/* en utilisant la destruction recupere la premier utilisateur et le mettre dans un variable user1 et le 3eme dans user3 le deuxieme utilisateur est ignores" */
/* les spread operator 
 vous cree un autre tableau appeler equipecontenant tout les donne du premier tableau + un utilisateur à la fin
ensuite afficher le nouveau tableau sans utiliser push 

changer l'etat de l'utilisateur fatou 


*/

/*question1  */
const [user1, , user3] = users;

const nouveau_utilisateur = {
  Prenom: "papa",
  Nom: "diop",
  Etat: 1,
  Role: "user",
  Age: 20,
};

const equipe = [...users, nouveau_utilisateur];

console.log("Equipe :", equipe);

const nouveautableau = users.map((user) => {
  if (user.Prenom === "Fatou") {
    if (user.Etat === 1) {
      return {
        ...user,
        Etat: 0,
      };
    } else {
      return {
        ...user,
        Etat: 1,
      };
    }
  }
  return user;
});

console.table(nouveautableau);

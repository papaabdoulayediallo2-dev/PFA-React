const users = [
  { prenom: "Fatou", nom: "Fall", etat: 0, age: 18, role: "Admin" },
  { prenom: "Bintou", nom: "Diop", etat: 1, age: 20, role: "user" },
  { prenom: "Moussa", nom: "Ndiaye", etat: 0, age: 15, role: "Admin" },
  { prenom: "Mouhamed", nom: "geuye", etat: 1, age: 21, role: "user" },
  { prenom: "Astou", nom: "Fall", etat: 0, age: 22, role: "Admin" },
  { prenom: "Abdou", nom: "Geuye", etat: 1, age: 17, role: "user" },
];
/* 1 -> Creer une fonction flecher nommer getAdmin qui prend en parametres le tableau 
cette fonction retourne un tableau avec les users avec le role Admin 
*/
const getAdmin = (users) => {
  const newTab = users.filter((u) => u.role === "Admin");
  return newTab;
};
let u = {
  prenom: "Amadou",
  nom: "sarr",
  etat: 0,
  age: 18,
  role: "Admin",
};

// let nom = u.nom;
// let prenom = u.prenom;
// let role = u.role;
// console.log("nom",nom,"prenom",prenom,"role",role);
//destructuration
//const {nom,prenom,role} = u
//console.log("nom : ",nom,"\nprenom : ",prenom,"\nrole : ",role);

const tab = users.map(({ prenom, role }) => {
  return {
    p: prenom,
    r: role,
  };
});
console.log(tab);
/*desctructuration recuperer le premier utilisateur et le mettre dans une variable appeler user1
et le troisieme dans le user3 et ignorer le deuxieme uilisateur 
* les spread operator
creer un autre tableau appeler equipe contena toute les donner du premier tableau plus un nouvel utilisateur a la fin  sans utiliser le push
changer l etat  de l utilisateur fatou
*/

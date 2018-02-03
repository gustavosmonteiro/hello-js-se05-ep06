const contacts = [
    { idcontact: 1, namecontact: "Gustavo" , telephonecontact: "123456", birthdatecontact: "1991-01-11"},
    { idcontact: 2, namecontact: "Sara" , telephonecontact: "123456", birthdatecontact: "1991-01-24"},
    { idcontact: 3, namecontact: "Joao" , telephonecontact: "123456", birthdatecontact: "2000-02-11"},
    { idcontact: 4, namecontact: "Maria" , telephonecontact: "123456", birthdatecontact: "1991-08-23"},
    { idcontact: 5, namecontact: "Jose" , telephonecontact: "123456", birthdatecontact: "1991-01-11"}
   
  ]
  
  exports.up = knex => knex("contact").insert(contacts)
  
  exports.down = knex => knex("contact").del()
    .whereIn("idcontact", contacts.map(e => e.idcontact))
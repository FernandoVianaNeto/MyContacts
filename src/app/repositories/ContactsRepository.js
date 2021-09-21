const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Fernando',
    email: 'fernando.viana.nt@gmail.com',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Fernando',
    email: 'fernando.viana.nt@gmail.com',
    category_id: v4(),
  },
];

class ContactsRespository {
  findAll() {
    // Listar todos os registros de um repositório

    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    // Encontrar um usuário pelo seu id

    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  findEmail(email) {
    // Encontrar um email pelo seu email

    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }

  delete(id) {
    // Deletar um usuário pelo seu id

    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({
    name, email, phone, category_id,
  }) {
    // Criar um novo usuário com base no email, nome, telefone  e categoria

    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };
      contacts.push(newContact);
      resolve(newContact);
    });
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    // Criar um novo usuário com base no email, nome, telefone  e categoria

    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => (
        contact.id === id ? updatedContact : contact
      ));

      resolve(updatedContact);
    });
  }
}

module.exports = new ContactsRespository();

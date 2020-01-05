'use strict';

const Contact = require('../models').Contact;

class ContactController {
   static create(req, res) {
      const name = req.body.name;
      const phone = req.body.phone;
      
      Contact.create(
          {
              name,
              phone
          }
      )
      .then(() => {
          res.status(201).send();
      })
      .catch(err => {
          res.status(400).send(err.message);
      })
   }

   static readAll(req, res) {
      Contact.findAll()
      .then(contacts => {
          res.send(contacts);
      })
      .catch(err => {
          res.statucs(400).send(err.message);
      })
   }

   static readById(req, res) {
      const id = req.params.id;
      Contact.findByPk(id)
      .then(contact => {
          if(!contact) {
              res.status(404).send('Contact not found');
          } else {
              res.send(contact);
          }
      })
      .catch(err => {
          res.status(400).send(err.message);
      })
   }

   static update(req, res) {
      const id = req.params.id;
      const name = req.body.name;
      const phone = req.body.phone;

      Contact.findByPk(id)
      .then(contact => {
          if(!contact) {
              res.status(404).send('Contact not found');
          } else {
              res.send(contact);
              return Contact.update(
                {
                    name,
                    phone
                },
                {
                    where: {
                        id: id
                    }
                }
              );
          }
      })
      .then(() => {
          res.status(200).send();
      })
      .catch(err => {
          res.status(400).send(err.message);
      })
   }

   static destroy(req, res) {
      const id = req.params.id;

      Contact.findByPk(id)
      .then(contact => {
          if(!contact) {
              res.status(404).send('Contact not found');
          } else {
              return Contact.destroy(
                {
                    where: {
                        id: id
                    }
                }
              );
          }
      })
      .then(() => {
          res.status(201).send();
      })
      .catch(err => {
          res.status(400).send(err.message);
      })
   }
}

module.exports = ContactController;
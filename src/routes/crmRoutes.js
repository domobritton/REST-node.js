import { 
    addNewContact, 
    getContacts, 
    getContactWithId, 
    updateContact,
    deleteContact,
 } from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        // middleware 
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getContacts)

    // POST endpoint 
    .post(addNewContact);

    app.route('/contact/:id')
    // get specific contact
    .get(getContactWithId)

    // put request
    .put(updateContact)

    // delete request
    .delete(deleteContact);
};

export default routes;

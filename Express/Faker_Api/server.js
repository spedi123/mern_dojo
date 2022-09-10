import express from "express"
import { faker } from '@faker-js/faker';

const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }));


const createUser = () => {
    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid(),
    };
    return newFake;
};

const createCompany = () => {
    const newFake = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCodeByState(),
            country: faker.address.country()
        }
    };
    return newFake;
}

app.get("/api/users/new", (req, res) => {
    res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());
});

app.get("/api/user/company", (req, res) => {
    res.json({user: createUser(),
        company: createCompany()});
});

app.listen( port, () => console.log(`Listening on port: ${port}`));
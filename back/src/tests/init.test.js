// import requis pour les test
const request = require('supertest');
const app = require('../core/index');
const mongoose = require('mongoose');
const dbName = 'nutritiv-test';

// connection DB
beforeAll(async () => {
  const url = `mongodb://localhost:27017/${dbName}`;
  await mongoose.connect(url, { useNewUrlParser: true })
});

//Just for testing init for app
describe('Init test', () => {
  it('should return 200 nutritiv init', async () => {
    const res = await request(app)
      .get('/')
      .send();
    expect(res.status).toEqual(200);
  });
});

// TDD = test driven development;

// => model, controller, route 
// => test 
// => si erreur => modifie ton code
// => si tout va bien => passe a la suite


// Test basique

// => code tout //6 mois
// => test tout a la fin // 12 mois

// describe('Insert Aliments') { it('should create new aliment', {post, get, put, delete}, expect(res.statusCode).toEqual(201)), it('should return 400 (empty nameAliment)'.toequal(400)), it(...)}
// describe('Insert User') { it('should create new aliment', exepct(res.statusCode).toEqual(201)), it('should return 400 (empty nameAliment)'.toequal(400)), it(...)}
// describe('Insert Recette') { it('should create new aliment', exepct(res.statusCode).toEqual(201)), it('should return 400 (empty nameAliment)'.toequal(400)), it(...)}

// test Register
describe('Register tests', () => {

  //Test each conditions of the method


  it('should create new User', async () => {
    const res = await request(app)
      .post('/register')
      .send({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.domain',
        pswd: 'B3stP4ssword',
        pswdConfirm: 'B3stP4ssword',
        isProducteur: false
      });
    expect(res.status).toEqual(201);
  });

  it('should return 400 (empty firstname)', async () => {
    const res = await request(app)
      .post('/register')
      .send({
        firstName: '',
        lastName: 'Doe',
        email: 'john@doe.domain',
        pswd:'B3stP4ssword',
      });
      expect(res.status).toEqual(400);
  });

  it('should return 400 (no firstname)', async () => {
    const res = await request(app)
      .post('/register')
      .send({
        lastName: 'Doe',
        email: 'john@doe.domain',
        pswd:'B3stP4ssword',
      });
      expect(res.status).toEqual(400);
  });

  it('should return 400 (empty lastname)', async () => {
    const res = await request(app)
      .post('/register')
      .send({
        firstName: 'John',
        lastName: '',
        email: 'john@doe.domain',
        pswd:'B3stP4ssword',
      });
      expect(res.status).toEqual(400);
  });

  it('should return 400 (no lastname)', async () => {
    const res = await request(app)
      .post('/register')
      .send({
        firstName: 'John',
        email: 'john@doe.domain',
        pswd:'B3stP4ssword',
      });
      expect(res.status).toEqual(400);
  });

  it('should return 400 (wrong email format)', async () => {
    const res = await request(app)
      .post('/register')
      .send({
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe.domain',
        pswd: 'B3stP4ssword',
      });
      expect(res.status).toEqual(400);
  });

  it('should return 400 (empty email)', async () => {
    const res = await request(app)
      .post('/register')
      .send({
        firstName: 'John',
        lastName: 'Doe',
        email: '',
        pswd: 'B3stP4ssword',
      });
      expect(res.status).toEqual(400);
  });

  it('should return 400 (no email)', async () => {
    const res = await request(app)
      .post('/register')
      .send({
        firstName: 'John',
        lastName: 'Doe',
        pswd: 'B3stP4ssword',
      });
      expect(res.status).toEqual(400);
  });

  it('should return 400 (wrong password format)', async () => {
    const res = await request(app)
      .post('/register')
      .send({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.domain',
        pswd: 'bestpassword',
      });
      expect(res.status).toEqual(400);
  });

  it('should return 400 (empty password)', async () => {
    const res = await request(app)
      .post('/register')
      .send({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.domain',
        pswd: '',
      });
      expect(res.status).toEqual(400);
  });

  it('should return 400 (no password)', async () => {
    const res = await request(app)
      .post('/register')
      .send({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.domain',
      });
      expect(res.status).toEqual(400);
  });

  it('should return 400 (empty body)', async () => {
    const res = await request(app)
      .post('/register')
      .send({

      });
      expect(res.status).toEqual(400);
  });

  it('should return 400 (empty params)', async () => {
    const res = await request(app)
      .post('/register')
      .send({
        firstName: '',
        lastName: '',
        email: '',
        pswd: '',
      });
      expect(res.status).toEqual(400);
  });
});


// test Login
describe('Login tests', () => {

  // test each conditions ...
  
  it('should return 200 with token', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        email: 'john@doe.domain',
        pswd: 'B3stP4ssword',
      });
      expect(res.status).toEqual(200);
      expect(res.body).toBe.JSON;
      expect(res.body).toHaveProperty('auth', true);
      expect(res.body).toHaveProperty('token');
  });

  it('should return 400 (no email)', async () => {
    const res = await request(app)
    .post('/login')
    .send({
      pswd: 'B3stP4ssword',
    });
    expect(res.status).toEqual(400);
  });

  it('should return 400 (empty email)', async () => {
    const res = await request(app)
    .post('/login')
    .send({
      email: '',
      pswd: 'B3stP4ssword',
    });
    expect(res.status).toEqual(400);
  });

  it('should return 400 (wrong email format)', async () => {
    const res = await request(app)
    .post('/login')
    .send({
      email: 'wrongFormat',
      pswd: 'B3stP4ssword',
    });
    expect(res.status).toEqual(400);
  });

  it('should return 400 (no password)', async () => {
    const res = await request(app)
    .post('/login')
      .send({
        email: 'john@doe.domain',
      });
      expect(res.status).toEqual(400);
  });

  it('should return 400 (empty password)', async () => {
  const res = await request(app)
  .post('/login')
    .send({
      email: 'john@doe.domain',
      pswd: '',
    });
    expect(res.status).toEqual(400);
  });

  it('should return 400 (wrong password format)', async () => {
  const res = await request(app)
  .post('/login')
  .send({
    email: 'john@doe.domain',
    pswd: 'wrongformat',
    });
    expect(res.status).toEqual(400);
  });

  it('should return 500 (user not found)', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        email: 'jane@doe.domain',
        pswd: 'P4ssword',
      });
      expect(res.status).toEqual(500);
  });

  it('should return 500 (invalid password)', async () => {
    const res = await request(app)
    .post('/login')
    .send({
      email: 'john@doe.domain',
      pswd: 'Wr0ngP4ssword',
    });
    expect(res.status).toEqual(500);
  });

});


async function dropAllCollections () {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    try {
      await collection.drop();
    } catch (error) {
      if (error.message === 'ns not found') return;
      if (error.message.includes('a background operation is currently running')) return;
      console.log(error.message);
    }
  }
}
async function removeAllCollections () {
  const collections = Object.keys(mongoose.connection.collections)
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName]
    await collection.deleteMany()
  }
}
afterAll(async () => {
  // await dropAllCollections();
  // await removeAllCollections();
});

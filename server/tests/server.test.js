const expect = require('expect');
const request = require('supertest');

// Load local files

const {app} = require('./../server');
const {Todo} = require('./../models/todo');


// Add Testing Lifecycle method

beforeEach((done)=> {
  Todo.deleteMany({}).then(() => {
    done();
  });
});

describe('POST /todos', ()=> {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if(err){
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e)=> done(e)); // Statement syntax is used instead of error function expression syntax
      });
  });


    it('should not create a todo with invalid body data', (done) => {
      request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) => {
          if(err){
            return done(err);
          }

          Todo.find().then((todos) => {
            expect(todos.length).toBe(0); //Assert something about the length
            done();
          }).catch((e)=> done(e)); // Statement syntax is used instead of error function expression syntax
        });
    });
});

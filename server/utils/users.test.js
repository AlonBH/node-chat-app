const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
     id: '1',
     name: 'Mike',
     room: 'Node Course' 
    },
    {
      id: '2',
      name: 'Jen',
      room: 'React Course' 
     },
     {
      id: '3',
      name: 'Julie',
      room: 'Node Course' 
     }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Alon',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    const userToRemove = {
      id: '2',
      name: 'Jen',
      room: 'React Course' 
     };

     const removedUser = users.removeUser(userToRemove.id);
     
     expect(removedUser).toEqual(userToRemove);
     expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    const userToRemove = {
      id: '4',
      name: 'Jen',
      room: 'React Course' 
     };

     const removedUser = users.removeUser(userToRemove.id);
     
     expect(removedUser).toNotExist();
     expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    const userToFind = {
      id: '2',
      name: 'Jen',
      room: 'React Course' 
     };

     const foundUser = users.getUser(userToFind.id);
     
     expect(foundUser).toEqual(userToFind);
  });

  it('should not find user', () => {
    const userToFind = {
      id: '4',
      name: 'Jen',
      room: 'React Course' 
     };

     const foundUser = users.getUser(userToFind.id);
     
     expect(foundUser).toNotExist();
  });

  it('should return names for node course', () => {
    const userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for react course', () => {
    const userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });
  
  

});
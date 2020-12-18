//managing users, helper functions

const users = []; //users to start

//add user; change the name and room that the user enters
const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase(); //remove all white space, put to lowercase
  room = room.trim().toLowerCase();

	//looking for existing user with same name, if a new user is trying to sign up for the same room with a same user name, this is not allowed
	const existingUser = users.find((user) => user.room === room && user.name === name);
	
	//error
  if(!name || !room) return { error: 'Username and room are required.' };
  if(existingUser) return { error: 'Username is already taken. Please choose another.' };

  const user = { id, name, room }; //create new user

  users.push(user); //push new user to array

  return { user };
}

//remove user
const removeUser = (id) => {
	//try to find users; if there is a user with that id..
  const index = users.findIndex((user) => user.id === id);
	//remove user from users array 
  if(index !== -1) return users.splice(index, 1)[0];
}

//get user
//if user's id equals to the id, return user
const getUser = (id) => users.find((user) => user.id === id);

//users in a specific room
//if user's room equals to that room, then return the user to that room
const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
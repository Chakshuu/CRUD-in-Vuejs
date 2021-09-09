import userList from './components/userList.vue';
import editUser from './components/editUser.vue';
import addUser from './components/addUser.vue';

export default [
  { path: '/', name: 'user-list', component: userList },
  { path: '/users/new', name: 'add-user', component: addUser },
  { path: '/users/id/edit', name: 'edit-user', component: editUser },
];

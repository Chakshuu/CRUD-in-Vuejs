<template>
  <div>
    <ListUser></ListUser>
    
  </div>
</template> 


<script>

import ListUser from "./components/userList.vue";
export default {
  components: {
    //AddUser,
    ListUser
  },

  data() {
    return {
      //newUser: null,
      //addIsOpen: false
    };
    //console.log(newUser)
  },
  methods: {
    // addUser(user) {
    //   this.newUser = user;
    // },
    // openAdd(val) {
    //   this.addIsOpen=val
    // }
  },
};
</script>

<style>

</style>

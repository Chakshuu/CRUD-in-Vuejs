<template>
  <div class="add-user">
    <h2 class="header">Add a new User</h2>
    <form>
      <label>First Name:</label>
      <input v-model="newUser.fname" type="text" required />
      <label>Last Name:</label>
      <input v-model="newUser.lname" type="text" required />
      <label>Age</label>
      <input v-model="newUser.age" type="number" required />
      <label>Gender</label>
      <select v-model="newUser.gender">
        <option>Male</option>
        <option>Female</option>
        <option>Others</option>
      </select>
    </form>

    <div class="button_property">
      <button :disabled="isDisabled()" @click="storeUser" class="button">
        ADD
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newUser: {
          id: Math.random(),
          fname: "",
          lname: "",
          age: "",
          gender: "",
        },
      };
    },

    methods: {
      isDisabled() {
        if (
          this.newUser.fname != "" &&
          this.newUser.lname != "" &&
          this.newUser.age != "" &&
          this.newUser.gender != ""
        ) {
          return false;
        } else {
          return true;
        }
      },

      storeUser() {
        this.$router.push({
          name: "user-list",
          params: { user: this.newUser },
        });

        this.fname = "";
        this.lname = "";
        this.age = "";
        this.gender = "";
      },
    },
  };
</script>

<style>
  .add-user * {
    box-sizing: border-box;
  }

  .add-user {
    margin: 20px auto;
    max-width: 500px;
  }
  label {
    display: block;
    margin: 20px 0 10px;
  }
  input,
  select {
    display: block;
    width: 100%;
    padding: 8px;
  }

  h3 {
    margin-top: 10px;
  }
  .button_property {
    text-align: center;
    margin-top: 10px;
  }

  .button {
    text-align: center;
    padding: 10px 40px;
  }
</style>

<template>
  <div id="edit-user">
    <h2 class="header">Edit the User</h2>
    <form>
      <label>First Name:</label>
      <input
        placeholder="user.fname"
        v-model="user.fname"
        type="text"
        required/>
      <label>Last Name:</label>
      <input
        placeholder="user.lname"
        v-model="user.lname"
        type="text"
        required/>
      <label>Age</label>
      <input placeholder="user.age" v-model="user.age" type="number" required />
      <label>Gender</label>
      <select user.gender v-model="user.gender">
        <option>Male</option>
        <option>Female</option>
        <option>Others</option>
      </select>
    </form>

    <div class="button_property">
      <button :disabled="isDisabled()" @click="edit" class="button">
        SUBMIT
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        editUser: "",
        user: null,
      };
    },

    methods: {
      isDisabled() {
        if (
          this.user.fname != "" &&
          this.user.lname != "" &&
          this.user.age != "" &&
          this.user.gender != ""
        ) {
          return false;
        } else {
          return true;
        }
      },
      edit() {
        this.user.id = this.editId;
        this.$router.push({ name: "user-list", params: { editUser: this.user } });
      },
    },
    mounted() {
      this.editId = this.$route.params.editId;
      this.user = this.$route.params.editUser;
    },
  };
</script>

<style>
  #edit-user * {
    box-sizing: border-box;
  }

  #edit-user {
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
  #preview {
    padding: 10px 20px;
    border: 1px dotted black;
    margin: 20px 0;
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

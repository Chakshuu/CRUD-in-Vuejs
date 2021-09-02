<template>
  <div id="add-user">
    <h2>Add a new User</h2>
    <form>
      <label>First Name:</label>
      <input v-model="newUser.fname" type="text" required/>
      <label>Last Name</label>
      <input v-model="newUser.lname" type="text" required/>
      <label>Age</label>
      <input v-model="newUser.age" type="number" required />
      <label>Gender</label>
      <select v-model="newUser.gender">
          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
          <!-- <option v-for="sex in sexes">{{sex}}</option> -->
      </select>
    </form>
    <!-- <div id="preview">
      <h3>User Preview</h3>
      <p>First Name:{{fname}}</p>
      <p>Last Name:{{lname}}</p>
      <p>Age:{{age}}</p>
      <p>Sex:{{sex}}</p>
    </div> -->
    <div id="button_property">
      <button @click="storeUser" id="button">ADD</button>
    </div>
    
  </div>
</template>



<script>
export default {
  data() {
    return{
      newUser: {
        fname:"",
        lname:"",
        age:"",
        gender:""
      }
      
        
        // sexes:['Male', 'Female', 'Others']
    }
  },

  methods: {
    storeUser() {
      this.$emit('userStored', this.newUser)
      this.$emit('addClose','list')
      this.fname=""
      this.lname=""
      this.age=""
      this.gender
    },
    
  }


      
};
</script>


<style>

#add-user *{
    box-sizing: border-box;
}

#add-user {
    margin: 20px auto;
    max-width:500px;
}
label {
    display: block;
    margin: 20px 0 10px;
}
input[type="text"]{
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
#button_property {
  text-align: center;
  margin-top: 10px;
}

#button {
  text-align: center;
  padding: 10px 40px;
}

</style>
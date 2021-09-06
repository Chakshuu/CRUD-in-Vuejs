<template>
  <div id="edit-user">
    <h2 class="header">Edit the User</h2>
    <form>
      <label>First Name:</label>
      <input v-model="newUser.fname" type="text" required/>
      <label>Last Name:</label>
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
    
    <div class="button_property">
      <button :disabled="isDisabled()"  @click="edit" class="button">SUBMIT</button>
    </div>
    
  </div>
</template>



<script>
export default {

    //props:['users'],
    
    data(){
        return{
            newUser:{
                fname:"",
                lname:"",
                age:"",
                gender:""
            }
        }

    
  },

  methods: {
    isDisabled() {
      if(this.newUser.fname!="" && this.newUser.lname!="" && this.newUser.age!="" && this.newUser.gender!=""){
        return false;
    }
    else {
      return true;
    }

    },
    edit() {
        this.$emit('userEdited', this.newUser)
        //this.users.$set(index,{fname:this.newUser.fname,lname:this.newUser.lname,age:this.newUser.age,gender:this.newUser.gender})
        //this.$emit('userStored', this.newUser)
        this.$emit('addClose','list')
        this.fname=""
        this.lname=""
        this.age=""
        this.gender=""
    },
    
  }


      
};
</script>


<style>

#edit-user *{
    box-sizing: border-box;
}

#edit-user {
    margin: 20px auto;
    max-width:500px;
}
label {
    display: block;
    margin: 20px 0 10px;
}
input,select{
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
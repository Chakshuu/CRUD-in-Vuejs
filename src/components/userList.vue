<template>
    <div>
        <AddUser v-if="mode=='add'" @userStored="addUser($event)" @addClose="openAdd($event)" ></AddUser>
        <EditUser v-if="mode=='edit'" @userEdited="editUser($event)" @addClose="openAdd($event)"></EditUser>
        <div class="user-list" v-if="mode=='list'">
            <h1 class="header">User List</h1>
            <table class="table_layout">
            <thead >
                <tr>
                <th>SNo.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age  </th>
                <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                <tr class="active-row" v-for="(user,index) in users" :key="index">
                <th>{{index+1}}</th>
                <td>{{user.fname}}</td>
                <td>{{user.lname}}</td>
                <td>{{user.age}}</td>
                <td>{{user.gender}}</td>
                <td>
                    <form>
                    <button type="button" @click.prevent="openEdit('edit',index)" class="c-button  c-button--edit">Edit</button>
                    <button @click.prevent="deleteUser(index)" class="c-button  c-button--delete">Delete</button>
                    </form>
                </td>
                </tr>
            </tbody>
            </table>
             <div class="addUser">
                <button @click="openAdd('add')" class="c-button  c-button--add">Add User</button>
            </div>
        </div>
        
       

    </div>
</template>


<script>
import AddUser from "./addUser.vue";
import EditUser from "./editUser.vue";
export default {
    components: {
        AddUser,
        EditUser
    },
    //props:['newUser'],
    data() {
        return {
            mode:'list',
            editId:'',
            users: [
            {
                id:Math.floor(Math.random() * 100),
                fname:'Sam',
                lname:'John',
                age:'25',
                gender:'Male'
            },
            {
                fname:'Joe',
                lname:'Root',
                age:'28',
                gender:'Male'
            }
        ]
        }
        
    },
    methods: {
        openAdd(val) {
            this.mode= val
        },
        addUser(user) {
            
            this.mode='list'
            this.users.push(user)

        },
        deleteUser(index){
            this.users.splice(index,1)
        },
        openEdit(val,index) {
            this.mode=val
            this.editId=index
            console.log("index is"+index)
        },
        editUser(user) {
            this.$set(this.users,this.editId,user)
            this.editId=''
        }
        
    },   
    mounted(){
        this.mode='list'
    }
    
}
</script>


<style>


.header {
    text-align: center;
    text-transform:uppercase;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 900;

}
.addUser {
    text-align: center;
}
.c-button {
  text-align: center;
  padding: 2px 4px;
  margin: 5px 10px;
}
.c-button--edit {
    color:white;
    background-color: rgb(35, 101, 224);
}
.c-button--delete {
    color: white;
    background-color: red;
}
.c-button--add {
    padding: 8px;
    margin-top: 20px;
}
.table_layout {
    border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    text-align:center;
}

.table_layout tbody tr:nth-of-type(even) {
    background-color: #ebe7e7;
}

.table_layout th, .table_layout td {
    padding: 12px 15px;
}
.table_layout tbody tr {
    border-bottom: 1px solid #dddddd;
}



</style>
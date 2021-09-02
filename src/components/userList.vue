<template>
    <div id="userList">
        <AddUser v-if="mode=='add'" @userStored="addUser($event)" @addClose="openAdd($event)" ></AddUser>
        <div v-if="mode=='list'">
            <h3 id="header">User List</h3>
            <table>
            <thead>
                <tr>
                <th>SNo.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user,index) in users" :key="index">
                <th>{{index+1}}</th>
                <td>{{user.fname}}</td>
                <td>{{user.lname}}</td>
                <td>{{user.age}}</td>
                <td>{{user.gender}}</td>
                <td>
                    <form>
                    <button>Edit</button>
                    <button>Delete</button>
                    </form>
                </td>
                </tr>
            </tbody>
            </table>
             <div id="addUser">
                <button @click="openAdd('add')">Add User</button>
            </div>
        </div>
        
       

    </div>
</template>


<script>
import AddUser from "./addUser.vue";
export default {
    components: {
        AddUser
    },
    //props:['newUser'],
    data() {
        return {
            mode:'list',
            users: [
            {
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
            this.users.push({
                fname:user.fname,
                lname:user.lname,
                age:user.age,
                gender:user.gender
            })
            
        }
        
    },   
    mounted(){
        this.mode='list'
    }
    
}
</script>


<style>

</style>
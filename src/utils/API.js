import axios from "axios";

export default {
   getMembers: function() {
       return axios.get('https://randomuser.me/api/')
   } 
}
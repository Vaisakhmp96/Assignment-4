<template>
  <div class="todos">
    <form @submit.prevent="addTodo">
      <input
        v-model="todo"
    
        style:width="100%" 
      /> 
      
      <button type="is-info" native-type="submit">Add Item</button>
    </form>
    <div class="todo-types"> 
      <div class="incomplete"  > 
        
        <p
          v-for=" todo in incompleteTodos"
          v-bind:key="todo.id"
          class="box todo"
          
        >
          {{ todo.task }} <button @click="deleteTodo(id)">Delete todo</button>
        </p>
      </div>
      
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      todo: "",
    };
  },
  computed: mapGetters(["todos",  "incompleteTodos"]),
  methods: {
    addTodo() {
      
      this.$store.dispatch("addTodo", {
        id: this.todos.length + 1,
        task: this.todo,
        completed: false,
      });
      this.todo = "";
    },
    deleteTodo(id) {
        this.$store.dispatch("deleteTodo", {
         completed: false
        })
        this.todos.splice(id, 1)
    }

    }
};
</script>

<style>
form {
  margin-left: 20px;
  margin-top: 10px;
}
p {
  margin-left: 20px;
}
</style>
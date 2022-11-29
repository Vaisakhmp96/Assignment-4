<template>
  <div id="app"><todoData />
    
    
  </div>
</template>
<script>
import todoData from "./components/todoData.vue";
export default {
  name: "App",
  components: { todoData },
  mounted() {
    this.$store.dispatch("setTodos");
  },
};
</script>
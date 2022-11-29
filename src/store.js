import Vue from 'vue'
import Vuex from 'vuex'
import { DATASET } from './dataset'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        todos: [],
    },
    getters: {
        todos(state) {
            return state.todos
        },
        incompleteTodos(state) {
            return state.todos.filter(todo => todo.completed == false)
        },
        
    },
    mutations: {
        SET_TODOS(state, todos) {
            state.todos = todos
        },
        ADD_TODO(state, todo) {
            state.todos = [...state.todos, todo]
        },
        
    },
    actions: {
        async setTodos(context) {
           
            context.commit('SET_TODOS', DATASET)
        },
        async addTodo(context, todo) {
           
            context.commit('ADD_TODO', todo)
        },
        

    },
})
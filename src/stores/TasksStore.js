import { defineStore } from "pinia";

export const useTaskStore = defineStore('tasksStore', {
    state: () => ({
        tasks: [
            {id: 1, title: "BuY MILK", isFav: false},
            {id: 2, title: "play game", isFav: true}
        ],
    }),
    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav);
        },
        favCount() {
            return this.tasks.reduce((p, c) => {
                return c.isFav ? p + 1 : p;
            }, 0);
        },
        totalCount: (state) => {
            return state.tasks.length;
        }
    },
    actions: {
        addTask(task) {
            console.log('task1', task);
            this.tasks.push(task);
        },
        deteteTask(id){
            this.tasks = this.tasks.filter(t => {
                return t.id !== id
            })
        },
        toggleFav(id){
            console.log('id', id);
            const task = this.tasks.find(t => t.id === id);
            console.log('tasl', task);
            task.isFav = !task.isFav;
        }
    }
})

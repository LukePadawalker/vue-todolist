console.log("Vue ok", Vue)

const { createApp } = Vue;

const app = createApp({
    data: () => ({
        tasks: [
            { id: 1, done: false, text: 'Fare la spesa' },
            { id: 2, done: true, text: 'Lavare i capelli' },
            { id: 3, done: false, text: 'Comprare una marca da bollo' },
            { id: 4, done: false, text: 'Aggiornare il PC' }
        ]
    }),
    methods: {
        deleteTask(id) {
            const newTasks = this.tasks.filter(task => id !== task.id)
            this.tasks = newTasks;
        },
        addTask() {
            const newTasks = this.tasks.add()
            this.tasks = newTasks;
        }
        
    }
})


app.mount("#root");
const App = {
    data() {
        return {
            placeholderString: 'Введите название',
            title: 'Список заметок',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2']
        }
    },
    methods: {

        addNewNote() {
            if (this.inputValue !== "") {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removNote(idx) {
            this.notes.splice(idx, 1)
        }
    },


}




Vue.createApp(App).mount('#app')


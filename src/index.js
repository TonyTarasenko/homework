class ToDoList {
    #notes = [];

    addNote(noteText) {
        ToDoList.checkUnique(this.#notes, noteText);
        this.notes = [...this.#notes, {text: noteText, isComplete: false}];
    }

    editNote(targetNoteText, newText) {
        ToDoList.checkUnique(this.#notes, newText);

        this.notes = this.#notes.map(note => note.text === targetNoteText ?
            {...note, text: newText } : note);
    }


    makeCompleted(noteText) {
        this.#notes = this.#notes.map(element => element.text === noteText ?
            {...element, isComplete: true} : element);
    }

    removeNote(removedNoteText) {
        this.notes = this.#notes.filter(({ text }) => text !== removedNoteText);
    }

    get notes () {
        return this.#notes;
    }

    get stats() {
        const completedNotes = this.#notes.filter(x => x.isComplete === true);
        const pendingNotes = this.#notes.length - completedNotes.length;
        return {
            Done: completedNotes.length,
            Pending: pendingNotes,
            All: this.#notes.length,
        };
    }

    set notes (notes) {
        const isConfirmed = confirm('Are u sure?');

        this.#notes = isConfirmed ? notes : this.#notes;
    }

    static checkUnique (notes, noteText) {
        const isPresent = notes.some(element => element.text === noteText);

        if(isPresent) {
            throw new Error('This note already exists');
        }
    }
}


new ToDoList();


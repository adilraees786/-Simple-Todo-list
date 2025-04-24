

import { create } from 'zustand';

 const todostore = create((set) => ({
    tasks: [],
    input: '',
    editId: null,
    editText: '',

    setInput: (value) => set({ input: value }),
    setEditText: (value) => set({ editText: value }),


    deleteTask: (id) =>
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
        })),

    addTask: () => set((state) => {
        if (state.input === '') return {};
        const newTask = { id: Date.now(), text: state.input };
        return {
            tasks: [...state.tasks, newTask],
            input: '',
        }; 
    }),

    startEditing: (task) =>
        set({ editId: task.id, editText: task.text }),

    cancelEdit: () =>
        set({ editId: null, editText: '' }),

    saveEdit: (id) =>
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === id ? { ...task, text: state.editText } : task
            ),
            editId: null,
            editText: '',
        })),


}));

export default todostore;
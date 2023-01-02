import { Injectable } from '@angular/core';
import { Task } from "./task";
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    tasks: Task[] = [
        {
            title: 'first',
            description: 'stuff',
            priority: 'high',
            // deadline: Date,
            attachLink: {
                link: '',
                shortLink: ''
            },
            imageUrl: ''
        },
        {
            title: 'second',
            description: 'stuffer',
            priority: 'medium',
            // deadline: Date,
            attachLink: {
                link: '',
                shortLink: ''
            },
            imageUrl: ''
        },
        {
            title: 'third',
            description: 'stuffest',
            priority: 'low',
            // deadline: Date,
            attachLink: {
                link: '',
                shortLink: ''
            },
            imageUrl: ''
        },
    ];

    constructor() { }

    getTasks(): Observable<Task[]> {
        const tasks = of(this.tasks);
        return tasks
    }

    addTask(task: Task): void {
        this.tasks.push(task)
    }

    deleteTask(task: Task): void {
        const index = this.tasks.indexOf(task, 0);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    }

    updateTask(task: Task): void {

    }
}

import { Injectable } from '@angular/core';
import { Task } from "./task";
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    tasks: Task[] = [
        {
            taskId: 1,
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
            taskId: 2,
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
            taskId: 3,
            title: 'third',
            description: 'stuffest',
            priority: 'low',
            // deadline: Date,
            attachLink: {
                link: 'https://www.positronx.io/angular-show-image-preview-with-reactive-forms-tutorial/#:~:text=To%20show%20the%20image%20preview,the%20new%20FileReader()%20method.',
                shortLink: 'positronx'
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
        task.taskId = this.tasks.length + 1;
        this.tasks.push(task)
    }

    getTaskID(task:Task):number{
        return task.taskId;
    }

    getTask(taskId:number):Observable<Task>{
        const task = of(this.tasks[taskId])
        return task;
    }

    deleteTask(task: Task): void {
        const index = this.getTaskID(task)
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    }

    updateTask(task: Task): void {

    }

  
}

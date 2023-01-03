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
            done: false,
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
            done: false,
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
            done: true,
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

    getTasks(filter1: string, filter2: string): Observable<Task[]> {
        let filteredTasks: Task[];

        if (filter1 === 'all') {
            filteredTasks = this.tasks;
        }
        else {
            filteredTasks = this.tasks.filter((task) => filter1 === 'done' ? task.done : !task.done);
        }

        if (filter2 === 'high') {
            filteredTasks = filteredTasks.filter((task) => {filter2 === 'high'
        return task.priority== 'high'});
        }

        if (filter2 === 'medium') {
            filteredTasks = filteredTasks.filter((task) => {filter2 === 'medium'
            return task.priority== 'medium'
        });
        }

        if (filter2 === 'low') {
            filteredTasks = filteredTasks.filter((task) => {filter2 === 'low'
            return task.priority== 'low'});
        }
        return of(filteredTasks);

    }

    addTask(task: Task): void {
        task.taskId = this.tasks.length + 1;
        this.tasks.push(task)
    }

    getTaskID(task: Task): number {
        return task.taskId;
    }

    getTask(taskId: number): Observable<Task> {
        const task = of(this.tasks.find(task => task.taskId == taskId));
        return task;
    }

    deleteTask(task: Task): void {
        const index = this.getTaskID(task)
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    }

    updateTask(taskId: number, task: Task): void {
        task.taskId = taskId;
        const id = this.tasks.findIndex(task => task.taskId == taskId)
        this.tasks.splice(id, 1, task);
    }


}

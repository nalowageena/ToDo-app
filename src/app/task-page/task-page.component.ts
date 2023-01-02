import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from "@angular/forms";

interface Task {
    taskId: number;
    title: string|null;
    description: string|null|undefined;
    priority: string|null|undefined;
    // deadline: Date;
    // imageUrl: string|null|undefined;
}

@Component({
    selector: 'app-task-page',
    templateUrl: './task-page.component.html',
    styleUrls: ['./task-page.component.css'],
})
export class TaskPageComponent implements OnInit {
    
    taskForm = new FormGroup({
        title: new FormControl('', Validators.required),
        description: new FormControl(''),
        priority: new FormControl(''),
        // deadline:new FormControl(''),
        // imageUrl:new FormControl('')
    });

    tasks: Task[] = [];
    taskId: number = 1;
    imageUrl:string = '';

    constructor() { }

    ngOnInit(): void { }


    onClickSave() {
        let task:Task = {
            taskId: this.taskId,
            title: this.taskForm.getRawValue().title,
            description: this.taskForm.value.description,
            priority: this.taskForm.value.priority,
            // deadline: this.taskForm.value.deadline,
            // imageUrl: this.taskForm.value.imageUrl
        };
        console.log(task);
        this.taskForm.reset();
        this.tasks.push(task);
        console.log(this.tasks);
    }
}

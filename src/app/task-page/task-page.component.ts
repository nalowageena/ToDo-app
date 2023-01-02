import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Task } from "../task";

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
    image:new FormControl(''),
    link:new FormControl(''),
    shortLink:new FormControl('')
  });

  tasks: Task[] = [];
  taskId: number = 1;
  imageUrl: string = '';

  constructor() {}

  ngOnInit(): void {}

  // On file Select
  onChange(event) {
    let file = event.target.files[0];

     // File Preview
     const reader = new FileReader();
     reader.onload = () => {
       this.imageUrl = reader.result as string;
     }
     reader.readAsDataURL(file);
     console.log(this.imageUrl);
  }
  
  onClickSave() {
    let task: Task = {
      taskId: this.taskId,
      title: this.taskForm.getRawValue().title,
      description: this.taskForm.value.description,
      priority: this.taskForm.value.priority,
      // deadline: this.taskForm.value.deadline,
      imageUrl: this.imageUrl,
      attachLink: {
        link: this.taskForm.value.link,
        shortLink: this.taskForm.value.shortLink,
      }
    };
    console.log(task);
    this.tasks.push(task);
    console.log(this.tasks);
  }
}

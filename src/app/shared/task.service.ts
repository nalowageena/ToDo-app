import { Injectable } from '@angular/core';

import { Task } from "../shared/task";

import {
    AngularFireDatabase,
    AngularFireList,
    AngularFireObject,
  } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
    tasksRef: AngularFireList<any>;
    taskRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  Addtask(task: Task) {
    this.tasksRef.push({
      done: task.done,
      createdAt: task.createdAt,
      deadline: task.deadline,
      title: task.title,
      description: task.description,
      priority: task.priority,
      attachLink: task.attachLink,
      imageUrl: task.imageUrl
    });
  }
  // Fetch Single task Object
  Gettask(id: string) {
    this.taskRef = this.db.object('tasks-list/' + id);
    return this.taskRef;
  }
  // Fetch tasks List
  GettasksList() {
    this.tasksRef = this.db.list('tasks-list');
    return this.tasksRef;
  }
  // Update task Object
  Updatetask(task: Task) {
    this.taskRef.update({
        done: task.done,
        createdAt: task.createdAt,
        deadline: task.deadline,
        title: task.title,
        description: task.description,
        priority: task.priority,
        attachLink: task.attachLink,
        imageUrl: task.imageUrl
    });
  }
  // Delete task Object
  Deletetask(id: string) {
    this.taskRef = this.db.object('tasks-list/' + id);
    this.taskRef.remove();
  }
}

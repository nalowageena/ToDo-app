import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from "../task.service";
import { Task } from "../task";
import { Router } from '@angular/router';

@Component({
    selector: 'app-all-tasks',
    templateUrl: './all-tasks.component.html',
    styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {

    tasks: Task[] = [];
    filter: 'all' | 'to do' | 'done' = 'all';
    priority: 'high' | 'medium' | 'low';

    showSideBar: boolean = false;

    constructor(private taskService: TaskService, private router: Router) { }

    ngOnInit(): void {
        this.getTasks();
    }

    getTasks(): void {
        this.taskService.getTasks(this.filter, this.priority).subscribe(tasks => this.tasks = tasks);
    }

    deleteTask(task: Task): void {
        this.taskService.deleteTask(task);
    }

    handleChange(evt) {
        var target = evt.target;
        if (target.checked) {
            this.filter = evt.target.value
            this.getTasks();
        }
    }

    handlePriority(evt) {
        var target = evt.target;
        if (target.checked) {
            this.priority = evt.target.value
            this.getTasks();
        }
        console.log("here");

    }
  
    displaySideBar():void{
      this.showSideBar=!this.showSideBar;
    }
}

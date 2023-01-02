import { Component, OnInit } from '@angular/core';
import { TaskService } from "../task.service";
import { Task } from "../task";

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {

    tasks: Task[] = [] ;

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks():void{
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  selectedTask?: Task;
  onSelect(task: Task):void{
    this.selectedTask = task;
  }

  deleteTask(task):void{
    this.taskService.deleteTask(task);
  }

  viewDetails(task):void{
    this.taskService.deleteTask(task);
  }
}

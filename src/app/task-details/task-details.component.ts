import { Component, OnInit } from '@angular/core';
import { TaskService } from "../task.service";
import { Task } from "../task";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

    task:Task ;

  constructor(private taskService:TaskService, private route: ActivatedRoute,
    private router: Router ) { }

    ngOnInit(): void {
        this.getTask();
      }

  getTask(): void {
const id = Number(this.route.snapshot.paramMap.get('id'))-1;
    this.taskService.getTask(id)
      .subscribe(task => this.task = task);
  }

}

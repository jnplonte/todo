import { Component, Inject, OnInit } from '@angular/core';
import { constants } from 'fs';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    newTodo: string = '';
    todoList: Array<any> = [];
    loading: boolean = false;

    constructor(@Inject('helperService') private helperService: any, @Inject('alertService') private alertService: any) {

    }

    ngOnInit() {
        this.helperService.getData('todoList').subscribe(result => {
            result.data.forEach(element => {
                element.disabled = true;
            });

            this.todoList = result.data;
        });
    }

    get todoListCnt() {
        return this.todoList.length;
    }

    onNewTodo(form: any) {
        this.loading = true;
        const todoData: Object = {
            'value': this.helperService.cleanData(this.newTodo)
        };

        this.helperService.postData('todoList', todoData).subscribe((result) => {
            if (result) {
                this.alertService.success('added ' + this.newTodo);
                this.todoList.push({
                    'value': result.data.data.value,
                    'id': result.data.id,
                    'disabled': true,
                    'active': '1'
                });
                this.newTodo = '';
                form.resetForm();
            } else {
                this.alertService.error('failed to add ' + this.newTodo);
            }
            this.loading = false;
        });
    }

    onDeleteTodo(index: number) {
        const data: Object = this.todoList[index];
        this.helperService.deleteData('todoList', data['id']).subscribe((result) => {
            if (result) {
                this.alertService.success('delete ' + data['value']);
                this.todoList.splice(index, 1);
            } else {
                this.alertService.error('failed to delete ' + data['value']);
            }
        });
    }

    onUpdateTodo(index: number, $event: any) {
        const data: Object = this.todoList[index];
        const todoData: Object = {
            'value': this.helperService.cleanData($event.target.value)
        };
        this.helperService.putData('todoList', data['id'], todoData).subscribe((result) => {
            if (result) {
                console.log('done update');
            }
        });
    }

    onCheckTodo(index: number) {
        const data: Object = this.todoList[index];
        const isActive: boolean = !data['active'];
        const todoData: Object = {
            'active': isActive ? 1 : 0
        };
        this.helperService.putData('todoList', data['id'], todoData).subscribe((result) => {
            if (result) {
                this.todoList[index].active = isActive;
            }
        });
    }
}

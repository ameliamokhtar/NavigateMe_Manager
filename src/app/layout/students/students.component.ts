import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Service } from '../../service/service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  animations: [routerTransition()]
})
export class StudentsComponent implements OnInit {
  constructor(public service: Service) { }
  data: any;
  settings:any;
  
ngOnInit() {
    this.init();
  }

  init(){
    this.settings = {
      delete: {
        confirmDelete: true,
      },
      add: {
        confirmCreate: true,
      },
      edit: {
        confirmSave: true,
      },
      columns: {
        student_id: {
          title: 'Student ID',
          editable: false,
          addable: false,
        },
        full_name: {
          title: 'Full Name'
        },
        phone_num: {
          title: 'Phone Number'
        },
        email: {
          title: 'Email',
          editable: false,
        }
      },
    };
    this.service.getStudent().subscribe(student => {
      console.log(student);
      if (student.successful) {
        this.data = student.students;
      }
    })
  }

  onCreateConfirm(event) {
    let userData = "full_name=" + event.newData.full_name +
      "&phone_num=" + event.newData.phone_num +
      "&email=" + event.newData.email +
      "&requestType=1";

    console.log(userData)
    this.service.addStudent(userData).subscribe(res => {
      console.log(res)
      this.init();
    })
  }

  onSaveConfirm(event) {
    console.log(event)
    let userData = "full_name=" + event.newData.full_name +
      "&phone_num=" + event.newData.phone_num +
      "&email=" + event.newData.email +
      "&requestType=2";

    console.log(userData)
    this.service.addStudent(userData).subscribe(res => {
      console.log(res)
      this.init();
    })
  }

  onDeleteConfirm(event) {
    console.log(event)
    let userData = "full_name=" + event.data.full_name +
      "&phone_num=" + event.data.phone_num +
      "&email=" + event.data.email +
      "&requestType=3";

    console.log(userData)
    this.service.addStudent(userData).subscribe(res => {
      console.log(res)
      this.init();
    })
  }
}

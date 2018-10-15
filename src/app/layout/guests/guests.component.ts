import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Service } from '../../service/service';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss'],
  animations: [routerTransition()]
})
export class GuestsComponent implements OnInit {
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
        staff_id: {
          title: 'Staff ID',
          editable: false,
          addable: false,
        },
        full_name: {
          title: 'Full Name'
        },
        position: {
          title: 'Position'
        },
        address: {
          title: 'Address'
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
    this.service.getStaff().subscribe(staff => {
      console.log(staff);
      if (staff.successful) {
        this.data = staff.staffs;
      }
    })
  }

  onCreateConfirm(event) {
    let userData = "full_name=" + event.newData.full_name +
      "&position=" + event.newData.position +
      "&address=" + event.newData.address +
      "&phone_num=" + event.newData.phone_num +
      "&email=" + event.newData.email +
      "&requestType=1";

    console.log(userData)
    this.service.addStaff(userData).subscribe(res => {
      console.log(res)
      this.init();
    })
  }

  onSaveConfirm(event) {
    console.log(event)
    let userData = "full_name=" + event.newData.full_name +
      "&position=" + event.newData.position +
      "&address=" + event.newData.address +
      "&phone_num=" + event.newData.phone_num +
      "&email=" + event.newData.email +
      "&requestType=2";

    console.log(userData)
    this.service.addStaff(userData).subscribe(res => {
      console.log(res)
      this.init();
    })
  }

  onDeleteConfirm(event) {
    console.log(event)
    let userData = "full_name=" + event.data.full_name +
      "&position=" + event.data.position +
      "&address=" + event.data.address +
      "&phone_num=" + event.data.phone_num +
      "&email=" + event.data.email +
      "&requestType=3";

    console.log(userData)
    this.service.addStaff(userData).subscribe(res => {
      console.log(res)
      this.init();
    })
  }
}

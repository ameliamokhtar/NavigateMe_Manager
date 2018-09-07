import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-offices',
    templateUrl: './offices.component.html',
    styleUrls: ['./offices.component.scss'],
    animations: [routerTransition()]
})
export class OfficesComponent implements OnInit {
    constructor() {}
    settings = {
        
        columns: {
          id: {
            title: 'ID'
          },
          name: {
            title: 'Full Name'
          },
          username: {
            title: 'User Name'
          },
          email: {
            title: 'Email'
          }
        }
      };

      data = [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz"
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv"
        },
        
        {
          id: 11,
          name: "Nicholas DuBuque",
          username: "Nicholas.Stanton",
          email: "Rey.Padberg@rosamond.biz"
        }
      ];
    ngOnInit() {}
}
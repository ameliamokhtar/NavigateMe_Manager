import { async, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { StaffsComponent } from './staffs.component'
import { StaffsModule } from './staffs.module'

describe('StaffsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ StaffsModule, RouterTestingModule ],
    })
    .compileComponents()
  }))

  it('should create', () => {
    const fixture = TestBed.createComponent(StaffsComponent)
    const component = fixture.componentInstance
    expect(component).toBeTruthy()
  })
})

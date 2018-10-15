import { async, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { StudentsComponent } from './students.component'
import { StudentsModule } from './students.module'

describe('StudentsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ StudentsModule, RouterTestingModule ],
    })
    .compileComponents()
  }))

  it('should create', () => {
    const fixture = TestBed.createComponent(StudentsComponent)
    const component = fixture.componentInstance
    expect(component).toBeTruthy()
  })
})

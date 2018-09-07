import { async, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { ClassroomsComponent } from './classrooms.component'
import { ClassroomsModule } from './classrooms.module'

describe('ClassroomsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ClassroomsModule, RouterTestingModule ],
    })
    .compileComponents()
  }))

  it('should create', () => {
    const fixture = TestBed.createComponent(ClassroomsComponent)
    const component = fixture.componentInstance
    expect(component).toBeTruthy()
  })
})

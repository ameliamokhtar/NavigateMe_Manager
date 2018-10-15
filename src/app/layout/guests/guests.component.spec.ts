import { async, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { GuestsComponent } from './guests.component'
import { GuestsModule } from './guests.module'

describe('GuestsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ GuestsModule, RouterTestingModule ],
    })
    .compileComponents()
  }))

  it('should create', () => {
    const fixture = TestBed.createComponent(GuestsComponent)
    const component = fixture.componentInstance
    expect(component).toBeTruthy()
  })
})

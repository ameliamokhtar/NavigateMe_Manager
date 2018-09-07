import { async, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { FacilitiesComponent } from './facilities.component'
import { FacilitiesModule } from './facilities.module'

describe('FacilitiesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FacilitiesModule, RouterTestingModule ],
    })
    .compileComponents()
  }))

  it('should create', () => {
    const fixture = TestBed.createComponent(FacilitiesComponent)
    const component = fixture.componentInstance
    expect(component).toBeTruthy()
  })
})

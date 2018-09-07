import { async, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { OfficesComponent } from './offices.component'
import { OfficesModule } from './offices.module'

describe('OfficesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ OfficesModule, RouterTestingModule ],
    })
    .compileComponents()
  }))

  it('should create', () => {
    const fixture = TestBed.createComponent(OfficesComponent)
    const component = fixture.componentInstance
    expect(component).toBeTruthy()
  })
})

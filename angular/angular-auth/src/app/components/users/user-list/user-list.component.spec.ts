import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { UserListComponent } from './user-list.component'
import { UserItemComponent } from './user-item/user-item.component'
import { AlertModule } from 'src/app/modules/alert/alert.module'
import { AlertService } from 'src/app/modules/alert/alert.service'

describe('UserListComponent', () => {
  let component: UserListComponent
  let fixture: ComponentFixture<UserListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent, UserItemComponent],
      imports: [RouterTestingModule, AlertModule],
      providers: [AlertService]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

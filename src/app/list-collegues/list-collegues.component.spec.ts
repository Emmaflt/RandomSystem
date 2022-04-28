import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudService } from '../service/crud.service';
import { ListColleguesComponent } from './list-collegues.component';

describe('ListColleguesComponent', () => {
  let component: ListColleguesComponent;
  let fixture: ComponentFixture<ListColleguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListColleguesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListColleguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

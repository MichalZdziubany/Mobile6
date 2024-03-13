import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnaughtCountiesPage } from './connaught-counties.page';

describe('ConnaughtCountiesPage', () => {
  let component: ConnaughtCountiesPage;
  let fixture: ComponentFixture<ConnaughtCountiesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConnaughtCountiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

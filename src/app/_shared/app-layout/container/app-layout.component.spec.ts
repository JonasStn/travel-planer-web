import { BreakpointObserver } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { AppLayoutComponent } from './app-layout.component';

describe('AppLayoutComponent', () => {
  let component: AppLayoutComponent;
  let fixture: ComponentFixture<AppLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppLayoutComponent],
      imports: [
        NoopAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule
      ],
      providers: [
        {
          provide: BreakpointObserver,
          useValue: {
            observe: jest.fn().mockReturnValue(of({}))
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

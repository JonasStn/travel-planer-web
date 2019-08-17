import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit, OnDestroy {
  _isHandset$: BehaviorSubject<boolean>;
  unsubscribe$: Subject<void> = new Subject();

  get isHandset$(): Observable<boolean> {
    return this._isHandset$.asObservable();
  }

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this._isHandset$ = new BehaviorSubject(true);

    this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(
        takeUntil(this.unsubscribe$),
        pluck('matches')
      )
      .subscribe(matches => this._isHandset$.next(matches));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

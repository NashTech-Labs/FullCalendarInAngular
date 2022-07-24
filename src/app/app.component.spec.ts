import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppComponent } from './app.component';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FullCalendarModule,
        ModalModule.forRoot()
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        BsModalService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'calendarIntegration'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('calendarIntegration');
  });
});

import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calendarIntegration';
  modalRef: BsModalRef | undefined;
  @ViewChild('viewModal')viewModal: TemplateRef<any>;
  @ViewChild('deleteModal')deleteModal: TemplateRef<any>;
  eventName: string = "";
  date:any;
  newEvents = [];
  deleteEventTitle: string ="";

  constructor(private modalService: BsModalService){
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: true,
    dateClick: this.onDateClick.bind(this),
    events: [],
    eventClick: this.handleEventClick.bind(this),
  };

  onDateClick(date: { dateStr: string; }) {
    this.modalRef = this.modalService.show(this.viewModal);
    this.date = date.dateStr;
  }

  createEvent() {
    let newEvent = {
      title: this.eventName,
      date: this.date
    };
    this.newEvents.push(newEvent);
    this.calendarOptions.events = [...this.newEvents];
    this.modalService.hide();
    this.eventName = "";
      
  }

  handleEventClick(arg){
    this.deleteEventTitle = arg.event._def.title;
    this.modalRef = this.modalService.show(this.deleteModal);
  }

  deleteEvent(arg){
    for (var i = 0; i < this.newEvents.length; i++) {
      if (this.newEvents[i].title == this.deleteEventTitle) {
        this.newEvents.splice(i, 1);
        this.calendarOptions.events=[];
        break;
      }
    }
    this.calendarOptions.events = [...this.newEvents];
    this.modalService.hide();
  }

  cancelDialog(){
    this.eventName = "";
    this.modalService.hide();
  }
}

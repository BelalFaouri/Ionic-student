import { Component } from "@angular/core";

import { NavController, NavParams } from "ionic-angular";

import { ItemDetailsPage } from "../item-details/item-details";

@Component({
  selector: "page-list",
  templateUrl: "list.html"
})
export class ListPage {
  students: Array<{
    first_name: string;
    last_name: string;
    birth_date: Date;
    email: string;
  }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.students = [];
    for (let i = 1; i < 11; i++) {
      this.students.push({
        first_name: "firstName" + i,
        last_name: "lastName" + i,
        birth_date: new Date(),
        email: "placeholderemail" + i + "@email.com"
      });
    }
  }

  itemTapped(event, student) {
    this.navCtrl.push(ItemDetailsPage, {
      student: student
    });
  }
}

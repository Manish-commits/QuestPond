import { Output, EventEmitter } from "@angular/core";
import { Recepie } from "../recepie.model";

export class RecepieService {

   recepieSelected = new EventEmitter<Recepie>();

   private recepie: Recepie[] = [
        new Recepie('A test recepie 1','some description','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_32uH7tI7I3wbGL31_rmdBom8yupm76a8qDkUdpOORA&s'),
        new Recepie('A test recepie 2','some description','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_32uH7tI7I3wbGL31_rmdBom8yupm76a8qDkUdpOORA&s'),
        new Recepie('A test recepie 3','some description','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_32uH7tI7I3wbGL31_rmdBom8yupm76a8qDkUdpOORA&s')
    ];

    getRecepies() {
        return this.recepie.slice();
    }
}
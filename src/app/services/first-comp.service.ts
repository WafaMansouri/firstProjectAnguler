import { Injectable } from "@angular/core";
import { FirstComp } from "../models/first-comp.model";

@Injectable({
    providedIn: 'root'
})
export class FirstCompService {
    listExple: FirstComp[] = [
        {
            id: 1,
            title: 'Archibald',
            description: 'Mon meilleur ami depuis tout petit !',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate: new Date(),
            snaps: 100,
            localisation: "Paris"
        },
        {
            id: 2,
            title: 'un bon plat',
            description: 'This is my second example !',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate: new Date(),
            snaps: 200
        }
    ]
    getAllExples = (): FirstComp[] =>{
        return this.listExple
    }
    getExpleById(expleId: number): FirstComp {
        const snappedExple = this.listExple.find(el=>el.id === expleId)
        if (!snappedExple) {
            throw new Error("Not foud!") 
        } else {
            return snappedExple
        }
    }
    snapById (expleId: number, typeSnap : 'snap' | 'unsnap'): void {
        const snappedExple = this.getExpleById(expleId)
        if (typeSnap === 'snap') {
            snappedExple.snaps ++
        } else {
            snappedExple.snaps --

        }
    }
}
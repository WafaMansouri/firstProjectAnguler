export class FirstComp { // c'est un type personnalisé
    id!: number;
    title!: string;
    description!: string;
    imageUrl!: string;
    createdDate!: Date;
    snaps!: number;
    localisation?: string  // the "?" signifit que cette proprièté est optionnelle
} // equivalent à la code au dessous : c'est un raccourci typeScript

// export class FirstComp { 
//     constructor(public title: string,
//         public description: string,
//         public imageUrl: string,
//         public createdDate: Date,
//         public snaps: number) {
//         }
// }
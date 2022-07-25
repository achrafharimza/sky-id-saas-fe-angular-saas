import { Client } from "./client";

export interface User {

    id?: string;
    nom?: string;
    prenom?: string;
    email?: string;
    isadmin?: boolean;
    isactive?: boolean;
    password?: string;
    clientID?: Client;


    // constructor(nom: string) {
     
    //     this.nom = nom;
     
    // }


}

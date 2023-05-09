export class Event {
  id: number;
  userid: number;

  titre: string;

  description: string;

  date: Date;

  rate: number;

  nbPlaces: number;

  prix: number;

  image: string;

  localisation: string;

  type: string;

  constructor(id: number,userid: number,titre: string,description: string,date: Date,rate: number,nbPlaces: number,prix: number,image: string,localisation: string,type: string
  ) {
    this.id = id;
    this.userid = userid;
    this.titre = titre;
    this.description = description;
    this.date = date;
    this.rate = rate;
    this.nbPlaces = nbPlaces;
    this.prix = prix;
    this.image = image;
    this.localisation = localisation;
    this.type=type;
  }

  //date, description, localisation, prix, type, image, nb_places, rate, titre, user_id
}

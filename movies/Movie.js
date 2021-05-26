class Movie {
  constructor(title,descripcion,rating) {
      this.title = title;
      this.descripcion = descripcion;
      this.rating = rating;
  }

 isGood() {
   const {title,descripcion,rating} = this;

    if (rating > 7){
        console.log("Buenarda")
    }
}



}


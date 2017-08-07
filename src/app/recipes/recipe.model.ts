export class Recipe {
  public name:string
  public description:string
  public imagePath:string

//construcot executed once you create new instance of Recipe class
constructor(name:string, desc:string, imagepath:string){
    this.name= name;
    this.description= desc;
    this.imagePath= imagepath;
  }
}

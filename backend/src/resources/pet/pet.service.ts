import PetModel from "@/resources/pet/pet.model";
import Pet from "@/resources/pet/pet.interface";


class PetService {
  private pet = PetModel;

  /**
   * Create a pet
   */
  public async create(
    img: string,
    type: string,
    name: string,
    age: number,
    breed: string,
    location: string,
    spot: string
  ): Promise<Pet> {
    try {
      const pet = await this.pet.create({
        img,
        type,
        name,
        age,
        breed,
        location,
        spot,
      });
      return pet;
    } catch (error) {
      throw new Error ('Unable to create pet')
    }
  }

  public async showAll(): Promise<Pet[]> {
    try {
      const pets = await this.pet.find();
      return pets;
    } catch (error) {
      throw new Error ('Unable to get pets');
    }
  }
}

export default PetService;

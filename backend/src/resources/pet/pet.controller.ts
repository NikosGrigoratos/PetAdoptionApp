import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/utils/interfaces/controller.interface";
import HttpException from "@/utils/exceptions/http.exception";
import validationMiddleware from "@/middleware/validation.middleware";
import validate from "@/resources/pet/pet.validation";
import PetService from "@/resources/pet/pet.service";

class PetController implements Controller {
  public path = "/pets";
  public router = Router();
  private PetService = new PetService();

  constructor() {
    this.initialiseRoutes();
  }

  private initialiseRoutes(): void {
    this.router.post(
      `${this.path}`,
      validationMiddleware(validate.create),
      this.create
    );

    this.router.get(
      `${this.path}`,
      this.getAll
    )
  }

  private getAll = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const pets = await this.PetService.showAll();
      res.status(200).json({pets});
    } catch (error) {
      next(new HttpException(400, "Cannot get any pets"));
    }
  }

  private create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const { img, type, name, age, breed, location, spot } = req.body;
      console.log("Age", age);
      const pet = await this.PetService.create(
        img,
        type,
        name,
        age,
        breed,
        location,
        spot
      );
      res.status(201).json({pet});
    } catch (e) {
      next(new HttpException(400, "Cannot create pet"));
    }
  };
}

export default PetController;
import validationMiddleware from "@/middleware/validation.middleware";
import Controller from "@/utils/interfaces/controller.interface";
import HttpException from "@/utils/exceptions/http.exception";
import validate from "@/resources/user/user.validation";
import { Router, Request, Response, NextFunction } from "express";
import UserService from "@/resources/user/user.service";
import passport from "passport";

class UserController implements Controller {
  public path = "/users";
  public router = Router();
  private UserService = new UserService();

  constructor() {
    this.initialiseRoutes();
  }

  private initialiseRoutes(): void {
    //to create user
    this.router.post(
      `${this.path}`,
      validationMiddleware(validate.create),
      this.create
    );
    //to get user info by username
    this.router.get(
      `${this.path}`,
      this.getUserInfo
    )
    //to login
    this.router.post(
      `${this.path}/login`,
      passport.authenticate("local", (req, res) => {
        res.send("Successfuly authenticated");
      })
    )
  }

  private getUserInfo = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const { username } = req.body;
      const info = await this.UserService.showUserInfo(username);
      res.status(200).json({info});
    } catch (error) {
      next(new HttpException(400, "Cannot get any user"));
    }
  }

  private create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const { username, password, role } = req.body;
      const user = await this.UserService.create(
        username,
        password,
        role,
      );
      res.status(201).json({user});
    } catch (e) {
      next(new HttpException(400, "Cannot create user " + e));
    }
  };
}


export default UserController;
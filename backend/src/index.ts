import "dotenv/config";
import "module-alias/register";
import validateEnv from "@/utils/validateEnv";
import App from "./app";
import PetController from "@/resources/pet/pet.controller";
import UserController from "@/resources/user/user.controller";

validateEnv();

const app = new App([new PetController(), new UserController()], Number(process.env.PORT));

app.listen();
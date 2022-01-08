import UserModel from "@/resources/user/user.model";
import User from "@/resources/user/user.interface";
import UserInfo from "@/resources/user/userinfo.interface";
import bcrypt from "bcrypt";

class UserService {
  private user = UserModel;

  public async create(
    username: string,
    password: string,
    role: string,
  ): Promise<User | String> {
    const userExists = await this.user.findOne({username: username})
    if (userExists) {
      return "User already exists";
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const pet = await this.user.create({
        username: username,
        password: hashedPassword,
        role: role,
      });
      return pet;
    } catch (error) {
      throw new Error ('Unable to create user ' + error)
    }
  }

  public async showUserInfo(userName: String): Promise<UserInfo | String> {
    try {
      let user = await this.user.findOne({username: userName});
      if (user) {
        const info: UserInfo = {
          username: user["username"],
          role: user["role"]
        }
        return info;
      }else {
        return "No user found with that username"
      }
    } catch (error) {
      throw new Error ('Unable to get user');
    }
  }
}

export default UserService;
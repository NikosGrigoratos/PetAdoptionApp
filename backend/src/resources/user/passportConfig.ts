import passport from "passport";
import passportLocal from "passport-local";
import UserModel from "@/resources/user/user.model";
import IUser from "@/resources/user/user.interface";
import bcrypt from "bcrypt";

const LocalStrategy = passportLocal.Strategy;
const User = UserModel;

passport.serializeUser((user: any, cb) => {
  cb(undefined, user.id);
});

passport.deserializeUser((id: string, cb) => {
  User.findOne({_id: id}, (err: Error, user: IUser) => { //might need to change it to findById instead of findOne
    const userInfo = {
      username: user.username,
      role: user.role
    };
    cb(err, userInfo);
  });
});

passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({username: username}, (err: Error, user: IUser) => { //note here that the IUser might be bad, instead place any (to all IUser too)
    if (err) throw err;
    if (!user) return done(null, false);
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) throw err;
      if (result === true) {
        return done(null, user);
      }else{
        return done(null, false);
      }
    })
  })
}));
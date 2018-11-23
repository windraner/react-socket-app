import { HttpNotFoundError } from "../helpers/errors";
import User from "../models/User";

class UserProvider {
    async byPrimaryKey(_id) {
        const user = await User.findOne({ _id });
        if (!user) {
            throw new HttpNotFoundError();
        }
        return user;
    }

    async findOne(data) {
        const user = await User.findOne(data);
        console.log(data)
        if (!user) {
            throw new HttpNotFoundError();
        }
        return user;
    }

    async create({ email, password, name }) {
        const user = new User({
            name,
            email: email.toLowerCase(),
            password
        });
        await user.save();
        return user;
    }
}

export default new UserProvider();

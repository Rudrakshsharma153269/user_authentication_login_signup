const User = require('../models/User');

class UserDao {
  async createUser(userData) {
    const user = new User(userData);
    return await user.save();
  }

  async findUserByEmail(email) {
    return await User.findOne({ email });
  }

  async findUserById(id) {
    return await User.findById(id).select('-password');
  }

  async getAllUsers() {
    return await User.find().select('-password');
  }
}

module.exports = new UserDao();
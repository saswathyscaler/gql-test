import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const authResolvers = {
  Mutation: {
    // Register resolver
    register: async (_, { username, password }) => {
      try {
        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
          throw new Error('User already exists');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user and save to database
        const newUser = new User({
          username,
          password: hashedPassword,
        });

        console.log(newUser, 'newUser'); // Log to verify user is created

        await newUser.save();

        // Return a success message or a token
        return 'User registered successfully!';
      } catch (error) {
        console.error('Error during registration:', error);
        throw new Error('Registration failed');
      }
    },

    // Login resolver
    login: async (_, { username, password }) => {
      try {
        // Check if user exists
        const user = await User.findOne({ username });
        if (!user) {
          throw new Error('User does not exist');
        }

        // Check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          throw new Error('Incorrect password');
        }

        // Create a token (replace 'secretkey' with a real secret key from config or env variables)
        const token = jwt.sign(
          { userId: user._id, username: user.username, role: user.role },
          'secretkey',
          { expiresIn: '1h' }
        );

        // Return the token (or user info)
        return token;
      } catch (error) {
        console.error('Error during login:', error);
        throw new Error('Login failed');
      }
    },
  },
};

export default authResolvers;

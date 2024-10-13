import Task from '../models/Task.js';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const taskResolvers = {
  Query: {
    getTasks: async (_, __, { user }) => {
      if (user.role !== 'ADMIN') throw new Error('Not authorized');
      return await Task.find({ assignedTo: user.userId });
    },
    getUserTasks: async (_, __, { user }) => {
      return await Task.find({ submittedBy: user.userId });
    },
  },
  Mutation: {
    submitTask: async (_, { description, assignedTo }, { user }) => {
      if (!user) throw new Error('Not authenticated');
      const task = new Task({ description, assignedTo, submittedBy: user.userId });
      await task.save();
      return task;
    },
    approveTask: async (_, { taskId }, { user }) => {
      if (user.role !== 'ADMIN') throw new Error('Not authorized');
      const task = await Task.findById(taskId);
      task.status = 'ACCEPTED';
      await task.save();
      return task;
    },
    rejectTask: async (_, { taskId }, { user }) => {
      if (user.role !== 'ADMIN') throw new Error('Not authorized');
      const task = await Task.findById(taskId);
      task.status = 'REJECTED';
      await task.save();
      return task;
    },
  },
};

export default taskResolvers;

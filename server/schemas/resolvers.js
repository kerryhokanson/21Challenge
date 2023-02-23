const { saveBook } = require('../controllers/user-controller');
const {User, Book} = require('../models')

const resolvers = {
    Query: {
        getSingleUser: async (parent, {user}) => {
            return await User.findOne({
                $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
              });
        }
    },
    Mutation: {
        createUser: async (parent, {body}) => {
            const user = await User.create(body);
            return user
        },
        saveBook: async (parent, {user}) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $addToSet: { savedBooks: body } },
                { new: true, runValidators: true }
              );
            return updatedUser;
        },
        deleteBook: async (parent, {user, bookId}) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $pull: { savedBooks: { bookId: bookId } } },
                { new: true }
              );
              return updatedUser;
        },
        login: async (parent, {body}) => {
            const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
            const correctPw = await user.isCorrectPassword(body.password);
            return auth
        },

    }
};

module.exports = resolvers;
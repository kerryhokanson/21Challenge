const { saveBook } = require('../controllers/user-controller');
const {User, Book} = require('../models')

const resolvers = {
    Query: {
        getSingleUser: async () => {
            const foundUser = await User.findOne({
                $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
              });
        }
    },
    Mutation: {
        createUser: async () => {

        },
        saveBook: async () => {
            
        },
        deleteBook: async (parent, {user, params}) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $pull: { savedBooks: { bookId: params.bookId } } },
                { new: true }
              );
        }
    }
};

module.exports = resolvers;
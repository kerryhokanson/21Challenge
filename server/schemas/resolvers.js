const { saveBook } = require('../controllers/user-controller');
const {User, Book} = require('../models')
const {signToken} = require('../utils/auth')
const {AuthenticationError} = require("apollo-server-express")

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            conole.log(context.user)
            if(context.user){
                return await User.findOne({_id : context.user._id})
            }
            throw new AuthenticationError("u messed up")
        }
        

        // getSingleUser: async (parent, {user}) => {
        //     return await User.findOne({
        //         $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
        //       });
        // }
    },
    Mutation: {
        addUser: async (parent, {username, email, password}) => {
            console.log(username, email, password)
            const user = await User.create({username: username, email: email, password: password});
            const token = signToken(user)
            return {user, token}
        },
        saveBook: async (_, {bookData}, context) => {
            console.log(context.user)
            if(context.user){

            
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { savedBooks: bookData } },
                { new: true, runValidators: true }
              );
            return updatedUser;
            }
            throw new AuthenticationError("need to be logged in")
        },
        deleteBook: async (parent, {user, bookId}) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $pull: { savedBooks: { bookId: bookId } } },
                { new: true }
              );
              return updatedUser;
        },
        login: async (parent, {email, password}) => {
            const user = await User.findOne({email});
            if(!user){
                throw new AuthenticationError("incorrect credentials")
            }
            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw) {
                throw new AuthenticationError("incorrect credentials")
            }
            const token = signToken(user);
            return {token, user}
        }

    }
};

module.exports = resolvers;
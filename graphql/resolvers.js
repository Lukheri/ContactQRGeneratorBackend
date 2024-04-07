import User from "../models/User.js"

export const resolvers = {
    Query: {
        async user(_, {id}) {
            return await User.findById(id)
        }
    }, 
    Mutation: {
        async createUser(_, {userInput}) {
            const createdUser = new User({
                ...userInput
            })

            const res = await createdUser.save()
            console.log(res._doc)
            
            return {
                id: res._id,
                ...res._doc
            }
        }
    }
}
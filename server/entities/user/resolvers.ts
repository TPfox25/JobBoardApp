import { Resolvers } from "../../types/resolvers-types";

const resolvers: Resolvers = {
    Query: {
        me: () => {
            return { id: "1" };
        }
    },
};

export default resolvers;
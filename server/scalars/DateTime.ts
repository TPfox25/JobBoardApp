import { GraphQLScalarType, Kind } from "graphql";

export const DateTime = new GraphQLScalarType({
    name: "DateTime",
    description: "DateTime Custom Scalar Type",

    serialize(value: unknown) {
        if (!(value instanceof Date || typeof value === "string")) {
            return null;
        }

        return value instanceof Date ? value.toISOString() : value
    },

    parseValue(value: unknown) {
        if (typeof value !== "string") 
            return null;
            return new Date(value);
    },

    parseLiteral(ast: any) {
        if (ast.kind === Kind.STRING) {
            return new Date(ast.value);
        }
        return null;
    },
});


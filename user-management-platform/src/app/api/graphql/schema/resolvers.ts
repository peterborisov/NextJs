import { useData } from "@hooks/index";

const { fetchUsers } = useData();

export const resolvers = {
  Query: {
    users: () => {
      return fetchUsers();
    },

    user: (_, args) => {
      let name;
      if (args.name) {
        name = `${args.name}`;
      }
      return { name };
    },
  },
};

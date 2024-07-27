interface Info {
  desc: string;
  isActive: boolean;
}

interface Tag {
  name: string;
  value: number;
}

interface Reply {
  userId: number;
  id: number;
  title: string;
  info: Info;
  tags: Tag[];
}

const User: Reply = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  info: {
    desc: 'delectus aut autem',
    isActive: true,
  },
  tags: [
    {
      name: 'my name',
      value: 1000,
    },
  ],
};

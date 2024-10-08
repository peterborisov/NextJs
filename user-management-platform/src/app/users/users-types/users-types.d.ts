export type User = {
  _id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    catchPhrase: string;
    bs: string;
  };
};

export type UserFormInputs = {
  name: string;
  email: string;
  city: string;
  phone: string;
};

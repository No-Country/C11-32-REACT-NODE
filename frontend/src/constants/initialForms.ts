import { LANGUAJES, TOPICS } from ".";

export const initialFormUser = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  repeat_password: "",
  age: "",
};

export const initialFormLogin = {
  email: "",
  password: "",
};

export const initialFormRoom = {
  title: "",
  language: LANGUAJES[0].id,
  level: "",
  is_public: true,
  max_participants: 5,
  topic: TOPICS[0].id,
};

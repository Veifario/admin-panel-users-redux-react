import { configureStore } from "@reduxjs/toolkit";
import users from "../reducers/users";
import filters from "../reducers/filters";

export const store = configureStore({ reducer: { users, filters } });

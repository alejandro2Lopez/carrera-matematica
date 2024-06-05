import { authTypes } from "../types/authTypes";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case authTypes.login:
      return {
        log: true,
        teams: action.teams,
        topic: action.topic,
        level: action.level,
        pista: action.pista,
        mode: action.mode
      };

    case authTypes.logout:
      return { log: false };

    default:
      return state;
  }
};

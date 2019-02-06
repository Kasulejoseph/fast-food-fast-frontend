import menuReducer from './menuReducer';
import { FETCHMENU, REGISTER, LOGIN, BASEURL } from '../actions/type';

const initialState = {
  menu: [],
  user: []
};

let menu = {
  desc: 'best local dish',
  image: 'luwombo.jpg',
  meal: 'luwombo',
  menu_id: 1,
  price: 20
};

describe('Tests menu reducer', () => {
  it('it should return the meal info post menu action type', () => {
    let response = menuReducer(initialState, {
      type: FETCHMENU,
      payload: menu
    });
    expect(response).toEqual({
      menu: {
        desc: 'best local dish',
        image: 'luwombo.jpg',
        meal: 'luwombo',
        menu_id: 1,
        price: 20
      },
      user: []
    });
  });
    it("it should return user data on Login action type", () => {
        const user  =  {username: "kasule", email: "kasule@gmail.com", password: ""}
      let response = menuReducer(initialState, {
        type: LOGIN,
        payload: user
      });
      expect(response).toEqual({"menu": [], "user": {"email": "kasule@gmail.com", "password": "", "username": "kasule"}});
    });

    it("it should return user data on REGISTER action type", () => {
        const user  =  {username: "kasule", email: "kasule@gmail.com", password: ""}
      let response = menuReducer(initialState, {
        type: REGISTER,
        payload: user
      });
      expect(response).toEqual({"menu": [], "user": {"email": "kasule@gmail.com", "password": "", "username": "kasule"}});
    });

    it("it return initial state when no action type is defined", () => {
        const user  =  {username: "kasule", email: "kasule@gmail.com", password: ""}
      let response = menuReducer(initialState, {
        type: '',
        payload: user
      });
      expect(response).toEqual({"menu": [], "user": []});
    });
});

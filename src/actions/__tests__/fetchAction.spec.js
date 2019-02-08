import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { registerAction, loginAction, myMenu } from "../feactAction";
import REGISTER from "../type";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("test fetch actions", () => {
  let user = {
    username: "",
    email: "",
    password: "",
    location: ""
  };
  afterEach(() => {
    fetchMock.restore();
  });
  it("should create user", () => {
    fetchMock.post('https://fast-food-fast-db.herokuapp.com/api/v1/auth/signup', {
      headers: {
        "content-type": "application/json"
      },
      body: user
    });
    const store = mockStore({});
    store.dispatch(registerAction(user));
    expect(store.getActions()).toEqual([]);
  });

  it("should login user", () => {
    fetchMock.post('https://fast-food-fast-db.herokuapp.com/api/v1/auth/login', {
      headers: {
        "content-type": "application/json"
      },
      body: user
    });
    const store = mockStore({});
    store.dispatch(loginAction(user));
    expect(store.getActions()).toEqual([]);
  });

  it("should post menu action", () => {
      const menu =  {}
    fetchMock.post('https://fast-food-fast-db.herokuapp.com/api/v1/menu', {
      headers: {
        "content-type": "application/json"
      },
      body: menu
    });
    const store = mockStore({});
    store.dispatch(myMenu(menu));
    expect(store.getActions()).toEqual([]);
  });
});
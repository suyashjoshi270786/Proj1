import { Given, When, Then } from "@cucumber/cucumber";
import {
  request as playwrightRequest,
  APIRequestContext,
  APIResponse,
  expect,
} from "@playwright/test";

const API_KEY = "qaclick123";

let apiContext: APIRequestContext;
let addPlaceResponse: APIResponse;
let getPlaceResponse: APIResponse;
let updatePlaceResponse: APIResponse;
let deletePlaceResponse: APIResponse;
let payload: any;
let placeId: string;

async function getApiContext(): Promise<APIRequestContext> {
  if (!apiContext) {
    apiContext = await playwrightRequest.newContext({
      baseURL: "https://rahulshettyacademy.com",
    });
  }
  return apiContext;
}

Given("I create a new place using the Places API", async function () {
  payload = {
    location: {
      lat: -38.383494,
      lng: 33.427362,
    },
    accuracy: 50,
    name: "Frontline house",
    phone_number: "(+91) 983 893 3937",
    address: "29, side layout, cohen 09",
    types: ["shoe park", "shop"],
    website: "http://google.com",
    language: "French-IN",
  };

  const ctx = await getApiContext();

  addPlaceResponse = await ctx.post("/maps/api/place/add/json", {
    params: { key: API_KEY },
    headers: { "Content-Type": "application/json" },
    data: payload,
  });

  const body = await addPlaceResponse.json();
  placeId = body.place_id;

  expect(addPlaceResponse.status()).toBe(200);
  expect(body.status).toBe("OK");
  expect(placeId).toBeTruthy();
});

When("I fetch that place by its id", async function () {
  const ctx = await getApiContext();

  getPlaceResponse = await ctx.get("/maps/api/place/get/json", {
    params: {
      key: API_KEY,
      place_id: placeId,
    },
  });

  expect(getPlaceResponse.status()).toBe(200);
});

Then("the place details should match the request", async function () {
  const body = await getPlaceResponse.json();

  expect(body.name).toBe(payload.name);
  expect(body.address).toBe(payload.address);
  expect(body.phone_number).toBe(payload.phone_number);
  expect(body.website).toBe(payload.website);
  expect(body.language).toBe(payload.language);
});

Given("user updates place using Places API", async function () {
  payload = {
    place_id: placeId,
    address: "81 winter walk, USA",
    key: "qaclick123",
  };
  const ctx = await getApiContext();

  updatePlaceResponse = await ctx.put("maps/api/place/update/json", {
    params: { key: API_KEY, place_id: placeId },

    headers: { "Content-Type": "application/json" },
    data: payload,
  });
});

When("updates address using existing place id", async function () {
  const body = await updatePlaceResponse.json();
  let msg = body.msg;

  console.log(msg);
});

Then(
  "user address details updated and receives {int} Ok response",
  async function (int) {
    expect(updatePlaceResponse.status()).toBe(200);
  }
);

Given("user deletes place using place API", async function () {
  payload = {
    place_id: placeId,
  };

  const ctx = await getApiContext();

  deletePlaceResponse = await ctx.post("maps/api/place/delete/json", {
    params: { key: API_KEY },
    headers: { "Content-Type": "application/json" },
    data: payload,
  });
});

When("deletes place using existing place id", async function () {
  const body = await deletePlaceResponse.json();
  let status = body.status;
  expect(body.status).toBe("OK");
  console.log(status);
});

Then(
  "place details deleted and receives {int} OK response",
  async function (int) {
    expect(deletePlaceResponse.status()).toBe(200);
  }
);

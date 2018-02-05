defmodule MyContactsWeb.Router do
  use MyContactsWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", MyContactsWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  scope "/api/v1" do
    pipe_through :api

    forward "/graphiql",
      Absinthe.Plug.GraphiQL,
      schema: MyContactsWeb.Query,
      interface: :simple
  end

end

defmodule MyContactsWeb.PageController do
  use MyContactsWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end

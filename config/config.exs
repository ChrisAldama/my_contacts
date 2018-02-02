# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :my_contacts,
  ecto_repos: [MyContacts.Repo]

# Configures the endpoint
config :my_contacts, MyContactsWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "L7UW2R+dwPoNRNtetru/rEu+v9yo2upDOW4GlLYR1qT1CaCdvYLALdWEVWyASBkL",
  render_errors: [view: MyContactsWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: MyContacts.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"

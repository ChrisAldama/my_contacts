FROM node:6 AS assets
COPY assets/ /app/assets
WORKDIR /app/assets
RUN npm install
RUN ./node_modules/brunch/bin/brunch build

FROM elixir
COPY . /app
COPY --from=assets /app/priv/static /app/priv/static
WORKDIR /app
RUN mix local.hex --force && \
    mix local.rebar --force && \
    mix deps.get && \
    mix compile
EXPOSE 4000
CMD mix ecto setup && mix phx.server


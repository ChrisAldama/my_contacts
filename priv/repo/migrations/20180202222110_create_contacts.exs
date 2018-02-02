defmodule MyContacts.Repo.Migrations.CreateContacts do
  use Ecto.Migration

  def change do
    create table(:contacts) do
      add :name, :string
      add :line1, :string
      add :line2, :string
      add :city, :string
      add :state, :string
      add :zip, :string
      add :phone, :string

    end

  end
end

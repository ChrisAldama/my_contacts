defmodule MyContacts.Contact do
  use Ecto.Schema
  import Ecto.Changeset
  alias MyContacts.Contact


  schema "contacts" do
    field :city, :string
    field :line1, :string
    field :line2, :string
    field :name, :string
    field :phone, :string
    field :state, :string
    field :zip, :string

  end

  @doc false
  def changeset(%Contact{} = contact, attrs) do
    contact
    |> cast(attrs, [:name, :line1, :line2, :city, :state, :zip, :phone])
    |> validate_required([:name, :line1, :city, :state, :zip, :phone])
  end
end

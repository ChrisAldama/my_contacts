defmodule MyContactsWeb.Query do
  alias MyContacts.Resolvers
  use Absinthe.Schema
  
  object :contact do
    field :id, :integer
    field :city, :string
    field :line1, :string
    field :line2, :string
    field :name, :string
    field :phone, :string
    field :state, :string
    field :zip, :string
  end

  input_object :cursor do
    field :offset, non_null :integer
    field :limit, non_null :integer
  end

  enum :searchable do
    value :name,  description: "Full name of contact"
    value :phone, description: "Contact's phone number"
    value :address, description: "Full contact addres"
  end

  input_object :search_by do
    field :field, non_null :searchable
    field :value, non_null :string
  end

  query do
    field :all_contacts, non_null list_of :contact do
      arg :pagination, :cursor
      arg :search_by, :search_by
      resolve &Resolvers.all_contacts/3
    end
  end
end

defmodule MyContacts.Helpers do
  def to_atom_map(map) do
    for {k, v} <- map, into: %{} do 
        {String.to_atom(k), v}
    end
  end
end

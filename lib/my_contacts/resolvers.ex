defmodule MyContacts.Resolvers do
  alias MyContacts.Repo
  alias MyContacts.Contact
  import Ecto.Query

  def all_contacts(_, args, _) do
    pagination_args = args[:pagination]   
    search_by = args[:search_by]
    
    contacts =
      from(c in Contact)
      |> filter(search_by)
      |> pagination(pagination_args)
      |> order_by(:name)
      |> Repo.all()
    
    if is_list(contacts) and length(contacts) do 
      {:ok, contacts} 
    else 
      {:error, contacts}
    end
  end

  defp filter(query, %{field: :address, value: value}) do
    match = "%#{value}%"
    query
    |> where([c], ilike(c.line1, ^match))
    |> or_where([c], ilike(c.line2, ^match))
    |> or_where([c], ilike(c.city, ^match))
    |> or_where([c], ilike(c.state, ^match))
    |> or_where([c], ilike(c.zip, ^match))
  end

  defp filter(query, %{field: col, value: value}) do
    query
    |> where([c], ilike(field(c, ^col), ^"%#{value}%"))
  end

  defp filter(query, _), do: query

  defp pagination(query, %{offset: offset, limit: limit}) do
    query
    |> offset(^offset)
    |> limit(^limit)
  end

  defp pagination(query, _), do: query
end

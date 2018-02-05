# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     MyContacts.Repo.insert!(%MyContacts.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
#
alias MyContacts.Repo
alias MyContacts.Contact
alias MyContacts.Helpers
import Ecto.Query

contacts =
  from(c in Contact, select: count(c.id))
  |> Repo.one()

IO.inspect contacts, label: "number of contacts found"

if contacts == 0 do
  './contacts.json'
  |> File.read!
  |> Poison.decode!
  |> Enum.map(&Helpers.to_atom_map/1)
  |> (&Repo.insert_all(Contact, &1)).()
end

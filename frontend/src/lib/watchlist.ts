export async function getWatchList() {
  const response = await fetch("http://localhost:8080/watchlist")
  return (await response.json()) as string[]
}

export async function postWatchList(id: string) {
  const response = await fetch("http://localhost:8080/watchlist", {
    method: "POST",
    body: JSON.stringify({ id }),
    headers: {
      "Content-type": "application/json",
    },
  })
  return (await response.json()) as string[]
}

export async function deleteWatchList(id: string) {
  const response = await fetch("http://localhost:8080/watchlist", {
    method: "DELETE",
    body: JSON.stringify({ id }),
    headers: {
      "Content-type": "application/json",
    },
  })
  return (await response.json()) as string[]
}

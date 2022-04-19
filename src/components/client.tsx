const HEADERS = {
  "Accept": "application/json, text/plain, */*",
  "Content-Type": "application/json",
}

export const client = {
  async create(url: string, body: any) {
    const res = await fetch(url, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(body)
    });
    return await res.json();
  }
}
export async function postJSON(url, payload, method = "POST") {
  return await fetch(url, {
    method: method,
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function postJson(url, json) {
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(json),
        headers: {
            "Content-Type": "application/json",
        },
    });
    checkResult(res, url);
}

class HttpException extends Error {
    constructor(res, url) {
        super(`Error while loading ${url}: ${res.status} ${res.statusText}`);
        this.status = res.status;
    }
}

function checkResult(res, url) {
    if (!res.ok) {
        throw new HttpException(res, url);
    }
}

export async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(
      `Something went wrong loading ${res.url}: ${res.statusText}`
    );
  }
  return await res.json();
}

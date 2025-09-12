test("GET to /api/v1/status deve retornar 200", () => {
  fetch("http://localhost:3000/api/v1/status").then((response) => {
    expect(response.status).toBe(200);
  });
});

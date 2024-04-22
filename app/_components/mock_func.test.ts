it("モックテスト", () => {
  const mockFunc = jest.fn(() => "Hello mock");
  expect(mockFunc()).toBe("Hello mock");
});

it("mock implemetation", () => {
  const mockFunc = jest.fn().mockImplementation(() => "Hello mock2");
});

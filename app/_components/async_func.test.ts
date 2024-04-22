import { delay } from "./async_func";

it("delayが指定された時間後にメッセ時を返す", async () => {
  const res = await delay("hellow", 1000);
  expect(res).toBe("hellow");
});

it("timeがマイナスの場合はエラーが発生する", async () => {
  try {
    const res = await delay("hellow", -1);
  } catch (e: any) {
    expect(e.message).toBe("timeは0以上で指定してください");
  }
});

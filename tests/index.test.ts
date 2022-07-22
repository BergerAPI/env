import env from "../src/index"

test("tries out a simple env file", () => {
    env()

    expect(process.env.TEST).toBe("HELLO_WORLD")
    expect(process.env.TEST_2).toBe("12345")
})
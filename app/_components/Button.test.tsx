import Button from "./Button"
import {render, screen} from "@testing-library/react"

describe("Button", () => {
  it("buttonタグがレンダリングされる", () => {
    render(<Button label="button" onClick={() => alert("click")}/>)

    const el = screen.getByRole("button")
    expect(el).toBeInTheDocument()
  })
})

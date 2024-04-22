import AsyncComponent from "@/app/_components/AsyncComponent"
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"

const user = userEvent.setup()

describe("asyncComponent", () => {
  it("ボタンをクリックすると非同期処理が実行される", () => {
    render(<AsyncComponent />)
    expect(screen.getByText("Initial text")).toBeInTheDocument()
  })
})

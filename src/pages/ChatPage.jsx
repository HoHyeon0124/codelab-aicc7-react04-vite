import { css } from "@emotion/react"
import { ButtonWrapper, Button } from "@/components/common/Button"

const style = css({
  padding: "2em 0",
})

export default function ChatPage() {
  return (
    <div css={style}>
      <ButtonWrapper dir="fe">
        <Button mr="0 0.5em 0 0">채팅방 참여</Button>
        <Button>채팅방 나가기</Button>
      </ButtonWrapper>
    </div>
  )
}

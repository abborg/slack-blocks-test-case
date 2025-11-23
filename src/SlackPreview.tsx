import 'slack-blocks-to-jsx/dist/style.css'
import { Message } from 'slack-blocks-to-jsx'

export default function SlackPreview({ blocks }: { blocks: any[] }) {
  return <Message theme="dark" time={new Date()} name="Your Company" logo="logo_url" blocks={blocks} />
}
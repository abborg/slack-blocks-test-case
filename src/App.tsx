import SlackPreview from './SlackPreview'

function App() {
  return (
    <SlackPreview blocks={[{
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: 'Hello, worlde!',
      },
    }]} />
  )
}

export default App

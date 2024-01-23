import styles from './page.module.css'
import Invitation from './Invitation/page'
import Section from './Section/page'
import Music from './components/Music/Music'
import Itinerary from './Itinerary/page'
import Location  from './Location/page'
import DressCode from './DressCode/page'


export default function Home() {
  return (
    <main >
      <Music/>
      <Invitation/>
      <Section/>
      <Itinerary/>
      <Location/>
      <DressCode/>
    </main>
  )
}

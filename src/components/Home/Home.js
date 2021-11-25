import Foro from '../Foro/Foro';
import HoldUp from '../HoldUp/HoldUp';
import Start from '../Start/Start';
import Hero from './Hero/Hero'

const Home = () => {
    return<>
        <Hero />
        <HoldUp />
        <Start />
        <Foro />
    </>
}

export default Home;
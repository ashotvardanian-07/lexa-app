import Charts from './Charts/index.jsx'
import UserInfo from './UserInfo/index.jsx'
import StatsCard from './StatsCard/StatsCard.jsx'
import LatestInfo from "./LatestInfo/index.jsx";

const MainContent = () => {
    return (
        <main className="main-content">
            <StatsCard />
            <Charts />
            <UserInfo />
            <LatestInfo />
        </main>
    )
}

export default MainContent;
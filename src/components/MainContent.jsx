import Charts from './Charts/index.jsx'
import UserInfo from './UserInfo/index.jsx'
import StatsCard from './StatsCard/StatsCard.jsx'

const MainContent = () => {
    return (
        <main className="main-content">
            <StatsCard />
            <Charts />
            <UserInfo />
        </main>
    )
}

export default MainContent;
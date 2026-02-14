import StatsCard from './StatsCard/StatsCard.jsx'
import Charts from "./Charts/index.jsx";
import UserInfo from "./UserInfo/index.jsx";

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
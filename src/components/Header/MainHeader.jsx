import cls from './header.module.scss'
import GraphSvg from '../../assets/svg/state-graph.svg?react'
import NavMenu from "./NavigationMenu/NavMenu.jsx";

const MainHeader = () => {
    return (
        <div className={cls.main_header}>
            <div className={`${cls.row} container`}>
                <div>
                    <h4 className={cls.page_title}>Dashboard</h4>
                    <div className={cls.breadcrumb}>
                        <p className={cls.breadcrumb_item}>Lexa</p>
                        <div className={cls.breadcrumb_item}>
                            <i className="fas fa-angle-right"></i>
                            <p>Dashboard</p>
                        </div>
                    </div>
                </div>
                <div className={cls.graphs_block}>
                    <div className={cls.graph_item}>
                        <GraphSvg />
                        <p className={cls.info}>Item Sold 1230</p>
                    </div>
                    <div className={cls.graph_item}>
                        <GraphSvg/>
                        <p className={cls.info}>Balance $ 2,317</p>
                    </div>
                </div>
            </div>
            <NavMenu />
        </div>
    )
}

export default MainHeader
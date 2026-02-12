import cls from './TopBar.module.scss'

const Search = () => {
    return (
        <div className={cls.search}>
            <input
                type="text"
                placeholder="Search..."
            />
            <i className="fa fa-search"></i>
        </div>
    )
}

export default Search
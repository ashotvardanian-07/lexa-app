import cls from './topBar.module.scss'
import {useEffect, useRef, useState} from 'react'

const Search = () => {
    const ref = useRef(null)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])

    return (
        <div ref={ref} className={cls.search_container}>
            <button
                className={cls.mobile_search_togle}
                onClick={() => setOpen(prev => !prev)}
            >
                {open ? <i className="fa fa-close"></i> : <i className="fa fa-search"></i>}
            </button>
            <div className={`${cls.search} ${open ? cls.open : ''}`}>
                <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                />
                <button className={cls.search_btn}>
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </div>
    )
}

export default Search
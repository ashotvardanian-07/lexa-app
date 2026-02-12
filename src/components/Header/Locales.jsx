import cls from './Header.module.scss'
import { locales } from '../../data.js'
import { useRef, useState, useEffect } from 'react'

const Locales = () => {
    const ref = useRef(null);
    const [dropOpen, setDropOpen] = useState(false);
    const [currentLocale, setCurrentLocale] = useState(locales[0]);
    const filteredLocales = locales.filter(locale => locale.id !== currentLocale.id);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setDropOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])

    return (
        <div ref={ref} className={cls.locales}>
            <div
                className={cls.current_locale}
                onClick={() => setDropOpen(!dropOpen)}
            >
                <img
                    height={16}
                    src={currentLocale.img}
                    alt={`${currentLocale.name} image`}
                />
                <span className={`${dropOpen ? cls.rotate : ''}`}>
                                    {currentLocale.name}
                    {!!filteredLocales.length && <i className="fas fa-angle-down"></i>}
                                </span>
            </div>
            {!!filteredLocales.length && <div className={`${cls.locales_dropdown} ${dropOpen ? cls.drop_open : ''}`}>
                {filteredLocales.map(locale => (
                    <div
                        key={locale.id}
                        className={cls.locale}
                        onClick={() => {
                            setCurrentLocale(locale)
                            setDropOpen(false)
                        }}
                    >
                        <img
                            height={12}
                            src={locale.img}
                            alt={`${locale.name} image`}
                        />
                        <span>{locale.name}</span>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default Locales
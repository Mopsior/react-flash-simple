import { useEffect, useState, useRef } from 'react'
import './css/Flash.css'
import { gsap } from 'gsap'
import { CSSRulePlugin } from 'gsap/all'

gsap.registerPlugin(CSSRulePlugin)

export default function Flash({ title, label, color, theme }) {
    const modal = useRef()
    const [visible, setVisible] = useState(true)
    const [themeStyle, setTheme] = useState('light');
    useEffect(() => {
        const modalAfter = CSSRulePlugin.getRule('.modal::after')

        if (theme === 'dark') {
            setTheme('dark')
        }

        const tl = gsap.timeline()
        tl
            .fromTo(modal.current, { x: 300, opacity: 0 }, { duration: 0.5, x: 0, opacity: 1 })
            .fromTo(modalAfter, { width: 0 }, { width: '100%', duration: 3 })
            .to(modal.current, { x: 300, opacity: 0, display: 'none'})
        .then(() => {
            setVisible(false)
        })
    }, [theme, setTheme])

    return (
        visible ?
        <div className='modal' ref={ modal } style={{ "--color": color }} data-mode={ themeStyle }>
            <h1>{ title }</h1>
            <p>{ label }</p>
        </div>
        :
        null
    )
}

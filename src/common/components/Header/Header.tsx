import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {PATH} from "@/app/Main.tsx";


export const Header = () => {
    const linkClassName = (props: { isActive: boolean }) => props.isActive ? styles.active : ''

    return (
            <div className={styles.nav}>
                <NavLink className={linkClassName} to={PATH.COUNTER}>Counter</NavLink>
                <NavLink className={linkClassName} to={PATH.COUNTER_TOGGLE}>Counter Toggle</NavLink>
            </div>
    );
};
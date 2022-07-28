import classes from "../../UI/Globale.module.css";


const Menu = (props) => {
    return (
        <div className={classes.Menu}>
            {props.children}
        </div>
    );
}

export default Menu;
import Card from "../../UI/Card/Card";
import Menu from "../../UI/Menu/Menu";
import {useRecoilState} from "recoil";
import { selectedCount, selectedPrice, accMoney } from "../Storage/Storage";
import {BsCart, BsPersonLinesFill} from "react-icons/bs";
import Button from "../Button/Button";
import classes from "../../UI/Globale.module.css";

const Header = () => {

const [updatedCount, setUpdatedCount] = useRecoilState(selectedCount);
const [updatedPrice, setUpdatedPrice] = useRecoilState(selectedPrice);
const [updatedAccMoney, setUpdatedAccMoney] = useRecoilState(accMoney);

const reseting = () => {
    setUpdatedCount(0);
    setUpdatedPrice(0);
}

const OnResetOrderingItems = () => {
    if(selectedCount) {
        reseting();
    }
}

const onOrderHandleClick = () => {
    if(updatedAccMoney >= updatedPrice) {
        setUpdatedAccMoney(updatedAccMoney - updatedPrice);
        reseting();
    }
}


    return (
      <Menu>
        <Card>
          <BsPersonLinesFill />
          <span>profile money {updatedAccMoney} $ </span>
          <Button onClick ={OnResetOrderingItems} className={classes['menu-button']}>Reset Order Items</Button>
        </Card>
        <Card>
            <span>selected Items: {updatedCount}</span>
            <span>price of selected items {updatedPrice} $</span>
            <BsCart/>
            <Button onClick={onOrderHandleClick} className={classes['menu-button']}>Order Products</Button>
        </Card>
      </Menu>
    );
}

export default Header;
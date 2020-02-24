import React from "react";
import { Menu, Button, Icon, Image } from "semantic-ui-react";
import styles from "./TopMenu.module.scss";
const wib = require("../../assets/wib.png");

const TopMenu = () => {
	return (
		<Menu size="massive" className={styles.topMenu}>
			<Image src={wib} size="tiny" className={styles.logo} />
			<Menu.Menu position="right">
				<Button icon>
					<Icon name="world" />
				</Button>
			</Menu.Menu>
		</Menu>
	);
};

export default TopMenu;

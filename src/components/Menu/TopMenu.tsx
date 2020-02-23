import React from "react";
import { Menu, Button, Icon, Image } from "semantic-ui-react";
const wib = require("../../assets/wib.png");

const TopMenu = () => {
	return (
		<Menu size="massive">
			<Image src={wib} size="tiny" />
			<Menu.Menu position="right">
				<Button icon>
					<Icon name="world" />
				</Button>
			</Menu.Menu>
		</Menu>
	);
};

export default TopMenu;

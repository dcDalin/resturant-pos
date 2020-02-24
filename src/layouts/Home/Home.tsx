import React from "react";
import { Grid } from "semantic-ui-react";
import TopMenu from "../../components/Menu";
import styles from "./Home.module.scss";
import Cart from "../../components/Cart";
import Total from "../../components/Total";
import Categories from "../../components/Categories";

const Home = () => {
	return (
		<Grid className={styles.homeWrapper}>
			<Grid.Row style={{ padding: "0px" }}>
				<Grid.Column width={10} className={styles.rightWrapper}>
					<Categories />
				</Grid.Column>
				<Grid.Column width={6} className={styles.leftWrapper}>
					<TopMenu />
					<Cart />
					<Total />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default Home;

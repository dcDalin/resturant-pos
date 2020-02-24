import React from "react";
import { Statistic, Grid, Button } from "semantic-ui-react";
import styles from "./Total.module.scss";

const Total = () => {
	return (
		<Grid className={styles.total}>
			<Grid.Column floated="left" width={5}>
				<Statistic label="sub total" value="5,550" />
			</Grid.Column>
			<Grid.Column floated="right" width={5}>
				<Button
					positive
					content="Receive Payment"
					icon="money bill alternate"
					labelPosition="right"
					size="big"
					className={styles.receive}
				/>
			</Grid.Column>
		</Grid>
	);
};

export default Total;

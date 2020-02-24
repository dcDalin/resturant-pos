import React from "react";
import { Header, Table, Icon } from "semantic-ui-react";
import styles from "./Cart.module.scss";

const Cart = () => {
	return (
		<Table
			basic="very"
			size="large"
			celled
			collapsing
			className={styles.cartWrapper}
		>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Item</Table.HeaderCell>
					<Table.HeaderCell>Quantity</Table.HeaderCell>
					<Table.HeaderCell>Price</Table.HeaderCell>
					<Table.HeaderCell>Total</Table.HeaderCell>
				</Table.Row>
			</Table.Header>

			<Table.Body>
				<Table.Row>
					<Table.Cell>Fries</Table.Cell>
					<Table.Cell className={styles.quantity}>
						<Icon name="plus" style={{ margin: "auto" }} />
						<Header as="h2" style={{ margin: "0px" }}>
							23
						</Header>
						<Icon name="minus" style={{ margin: "auto" }} />
					</Table.Cell>
					<Table.Cell>100</Table.Cell>
					<Table.Cell>
						<Header as="h2">200 </Header>
					</Table.Cell>
					<Table.Cell>
						<Icon name="close" />
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table>
	);
};

export default Cart;

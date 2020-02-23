import React from "react";
import { Grid, Image } from "semantic-ui-react";
import TopMenu from "../../components/Menu";

const Home = () => {
	return (
		<Grid>
			<Grid.Row>
				<Grid.Column width={10}>
					<Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
				</Grid.Column>
				<Grid.Column width={6}>
					<TopMenu />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default Home;

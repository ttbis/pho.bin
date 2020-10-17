import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import food from '../img/food.png';
import './Food.css';

const osName = platform();

const Food = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Питание
		</PanelHeader>
		<img className="Food" src={food} alt="Food"/>
		<Div>
			<Button size="xl" level="2" onClick={props.go} data-to="calc">
				Калькулятор БЖУ и Ккал
			</Button>
		</Div>
		<Div>
			<Button size="xl" level="2" onClick={props.go} data-to="diet">
				Составить днейной рацион
			</Button>
		</Div>
	</Panel>
);

Food.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Food;

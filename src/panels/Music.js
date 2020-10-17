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

import music from '../img/music.png';
import './Music.css';

const osName = platform();

const Music = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Музыка
		</PanelHeader>
		<img className="Music" src={music} alt="Music"/>
		<Div>
			<Button size="xl" level="2" href="https://vk.com/music?z=audio_playlist226797314_22/984b1b2ef79701afec">
				Плавная
			</Button>
		</Div>
		<Div>
			<Button size="xl" level="2" href="https://vk.com/music?z=audio_playlist226797314_23/c3abf98fe647831627">
				Энергичная
			</Button>
		</Div>
		<Div>
			<Button size="xl" level="2" href="https://vk.com/music?z=audio_playlist226797314_24/c8d9dd7ef43274549e">
				Агрессивная
			</Button>
		</Div>
	</Panel>
);

Music.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Music;

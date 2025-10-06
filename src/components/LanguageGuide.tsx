import React from 'react';

const LanguageGuide: React.FC = () => {
	return (
		<div>
			<p>
				Ниже — краткие шаги по смене языка на Deepal S07, основанные на статье
				{' '}
				<a href="https://www.drive2.ru/l/698769327339358335/" target="_blank" rel="noreferrer">Drive2</a>.

				<br />
				<br />
				Что понадобится:
				<ul>
					<li>Deepal S07</li>
					<li>Код инженерного меню (сгенерированный на предыдущем шаге)</li>
					<li>Ноутбук на Windows</li>
					<li>Кабель USB-A ↔ USB-A или кабель USB-C ↔ USB-A (если у вас есть USB-C на вашем ноутбуке)</li>
					<li>Утилита DeepalInstaller_1.3.zip. <a href="/DeepalInstaller_1.3.zip" download>Скачать</a></li>
				</ul>
			</p>
			<ol>
				<li>
					Сгенерируйте код инженерного меню. Код формируется по последним 4 цифрам VIN и дате (по Китаю). Код действует в течение суток по китайскому времени.
				</li>
				<li>
					Откройте поле ввода пароля в инженерном меню и введите сгенерированный код. Для этого необходимо нажать 10 раз на часы в правом верхнем углу.
					<div className="step-media">
						<figure className="step-figure">
							<img src="/images/lang-1.png" alt="Поле ввода пароля в инженерном меню" className="step-image" />
							<figcaption>Поле ввода пароля</figcaption>
						</figure>
					</div>
				</li>
				<li>
					Введите сгенерированный код в поле ввода пароля.
					<div className="step-media">
						<figure className="step-figure">
							<img src="/images/lang-2.png" alt="Введите сгенерированный код в поле ввода пароля" className="step-image" />
							<figcaption>Введите сгенерированный код в поле ввода пароля</figcaption>
						</figure>
					</div>
				</li>
				<li>
					В инженерном меню выберите первый пункт меню отвечающий за режим USB.
					<div className="step-media">
						<figure className="step-figure">
							<img src="/images/lang-3.png" alt="Инженерное меню" className="step-image" />
							<figcaption>Инженерное меню</figcaption>
						</figure>
					</div>
				</li>
				<li>
					Переключите режим USB-порта с «Host» на «Device».
					<div className="step-media">
						<figure className="step-figure">
							<img src="/images/lang-4.png" alt="Переключение USB Host в Device" className="step-image" />
							<figcaption>Переключение режима USB</figcaption>
						</figure>
					</div>
				</li>
				<li>
					Подключите автомобиль к ноутбуку кабелем USB-A ↔ USB-A. USB-A в автомобиль подключется под центальной консолью. Второй USB-A(USB-C) подключается подключается к ноутбуку.
				</li>
				<li>
					Откройте утилиту DeepalInstaller_1.3.zip и запустите её.
					<div className="step-media">
						<figure className="step-figure">
							<img src="/images/lang-5.png" alt="Утилита DeepalInstaller_1.3.zip" className="step-image" />
							<figcaption>DeepalInstaller_1.3.zip</figcaption>
						</figure>
					</div>
				</li>
				<li>
					Нажмите на кнопку "Search" и выберите автомобиль в списке.
				</li>
				<li>
					Нажмите на кнопку "Open Settings". После чего откроются настройки автомобиля на устройстве автомобиля.
				</li>
				<li>
					Откройте пункт отвечающий за настройки языка и часового пояса.
					<div className="step-media">
						<figure className="step-figure">
							<img src="/images/lang-6.png" alt="Настройки автомобиля" className="step-image" />
							<figcaption>Настройки автомобиля</figcaption>
						</figure>
					</div>
				</li>
				<li>
					Откройте пункт отвечающий за настройки языка.
					<div className="step-media">
						<figure className="step-figure">
							<img src="/images/lang-7.png" alt="Настройки языка и часового пояса" className="step-image" />
							<figcaption>Настройки языка и часового пояса</figcaption>
						</figure>
					</div>
				</li>
				<li>
					Добавьте нужные языки с помощью кнопки "+" и расставьте приоритет. Например, русский — первым, английский — вторым, китайский — третьим.
					<div className="step-media">
						<figure className="step-figure">
							<img src="/images/lang-8.png" alt="Добавление языков" className="step-image" />
							<figcaption>Добавление языков</figcaption>
						</figure>
					</div>
				</li>
				<li>
					При необходимости откорректируйте часовой пояс в «Дата и время» (иконка с тремя точками → выбор часового пояса).
					<div className="step-media">
						<figure className="step-figure">
							<img src="/images/lang-9.png" alt="Настройки даты и времени — выбор часового пояса" className="step-image" />
							<figcaption>Настройка даты и времени</figcaption>
						</figure>
					</div>
				</li>
			</ol>
		</div>
	);
};

export default LanguageGuide;



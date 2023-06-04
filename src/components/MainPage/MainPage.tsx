import React , { useState , useEffect} from 'react';
import "./MainPage.css"
import "./FormsElements.css"
import BackShape from "../imgs/back-shape.svg";
import Camera from "../imgs/camera.svg";
import Player from "../imgs/player.svg";

type FormProps = {
  onNext: () => void;
  onBack: () => void;
};

const MainPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(0); 
  const listItems = [
    'Легковые',
    'Мото',
    'Коммерческий',
    'Каталог',
    'Отзывы',
    'Дилерам',
    'Осмотрщикам',
    'Логистам',
    'Кредиты',
  ];
  const [currentForm, setCurrentForm] = useState<number>(1);
  const [completedForms, setCompletedForms] = useState<number[]>([]); // Состояние для отслеживания завершенных форм


  const handleClickDiv = (index: number) => {
    setSelectedItem(index === selectedItem ? null : index);
  }

  const handleClick = (index: number) => {
    setSelectedItem(index === selectedItem ? null : index);
    if (completedForms.includes(index + 1)) {
      setCurrentForm(index + 1);
    }
  };
  
  const handleBack = () => {
    if (currentForm > 1) {
      const previousForm = currentForm - 1;
      setCurrentForm(previousForm);
      setSelectedItem(previousForm - 1);
    }
  };

  const handleNextForm = () => {
    setCompletedForms([...completedForms, currentForm]);
    setCurrentForm(currentForm + 1);
  };
  
  const renderForm = () => {
    switch (currentForm) {
      case 1:
        return <Form1 onNext={handleNextForm} onBack={handleBack}/>;
      case 2:
        return <Form2 onNext={handleNextForm} onBack={handleBack}/>;
      case 3:
        return <Form3 onNext={handleNextForm} onBack={handleBack}/>;
      case 4:
        return <Form4 onNext={handleNextForm} onBack={handleBack}/>;
      case 5:
        return <Form5 onNext={handleNextForm} onBack={handleBack}/>;
      case 6:
        return <Form6 onNext={handleNextForm} onBack={handleBack}/>;
      case 7:
        return <Form7 onNext={handleNextForm} onBack={handleBack}/>;
      case 8:
        return <Form8 onNext={handleNextForm} onBack={handleBack}/>;
      default:
        return null;
    }
  };

  return (
    <div className="main">
      <div className="head-announcement__container">
        <ul className="head-announcement__list">
          {listItems.map((item, index) => (
            <li
              key={index}
              className={index === selectedItem ? 'highlighted' : ''}
              onClick={() => handleClickDiv(index)}
            >
              <div className="content">
                <p>{item}</p>
                {index === selectedItem && (
                  <span className="selected-indicator"></span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='body-announcement__container'>
        <a className='ref__now-page'><p>Главная / Новое объявление</p></a>
        <div className='add-announcement__container'>
          <div className='list-requirements'>
            <h2>Новое объявление</h2>
            <ul>
              <li>
                <label className={`radio`}>
                  <input type="radio" className={`radio__input ${completedForms.includes(1) ? 'completed' : ''}`} checked={currentForm >= 1} onChange={() => handleClick(0)} disabled/>
                  <span className="radio__button"></span>
                  VIN номер
                </label>
              </li>
              <li>
                <label className={`radio`}>
                  <input type="radio" className={`radio__input ${completedForms.includes(2) ? 'completed' : ''}`} checked={currentForm >=  2} onChange={() => handleClick(1)} disabled/>
                  <span className="radio__button"></span>
                  Госномер
                </label>
              </li>
              <li>
                <label className={`radio`}>
                  <input type="radio" className={`radio__input ${completedForms.includes(3) ? 'completed' : ''}`} checked={currentForm >=  3} onChange={() => handleClick(2)} disabled/>
                  <span className="radio__button"></span>
                  Характеристики
                </label>
              </li>
              <li>
                <label className={`radio`}>
                  <input type="radio" className={`radio__input ${completedForms.includes(4) ? 'completed' : ''}`} checked={currentForm >=  4} onChange={() => handleClick(3)} disabled/>
                  <span className="radio__button"></span>
                  Фото и видео
                </label>
              </li>
              <li>
                <label className={`radio`}>
                  <input type="radio" className={`radio__input ${completedForms.includes(5) ? 'completed' : ''}`} checked={currentForm >=  5} onChange={() => handleClick(4)} disabled/>
                  <span className="radio__button"></span>
                  Карта повреждений
                </label>
              </li>
              <li>
                <label className={`radio`}>
                  <input type="radio" className={`radio__input ${completedForms.includes(6) ? 'completed' : ''}`} checked={currentForm >=  6} onChange={() => handleClick(5)} disabled/>
                  <span className="radio__button"></span>
                  Описание
                </label>
              </li>
              <li>
                <label className={`radio`}>
                  <input type="radio" className={`radio__input ${completedForms.includes(7) ? 'completed' : ''}`} checked={currentForm >=  7} onChange={() => handleClick(6)} disabled/>
                  <span className="radio__button"></span>
                  Контактные данные
                </label>
              </li>
              <li>
                <label className={`radio`}>
                  <input type="radio" className={`radio__input ${completedForms.includes(8) ? 'completed' : ''}`} checked={currentForm >=  8} onChange={() => handleClick(7)} disabled/>
                  <span className="radio__button"></span>
                  Стоимость
                </label>
              </li>
            </ul>
          </div>
          <div className='add-announcement__element'>
            {renderForm()}
          </div>
        </div>
      </div>
  </div>
);
}


const Form1 = ({ onNext , onBack}: FormProps) => {
  const handleContinue = () => {
    onNext();
  };
  const handleBack = () => {
    onBack();
  }
  return (
    <div className='form__container'>
      <div className='form__container-header'>
        <h3>VIN номер</h3>
        <p>Закрыть</p>
      </div>
      <p>Введите VIN и мы поможем заполнить объявление автоматически</p>
      <input className='form-number__input' placeholder="VIM номер"/>

      <div className='button-container'>
        <button className='back' onClick={handleBack}><img src={BackShape}/></button>
        <button className='continue' onClick={handleContinue}><p>Продолжить</p></button>
      </div>
    </div>
  );
};

const Form2 = ({ onNext , onBack}: FormProps) => {
  const handleContinue = () => {
    onNext();
  };
  const handleBack = () => {
    onBack();
  }
  return (
    <div className='form__container'>
      <div className='form__container-header'>
        <h3>Госномер</h3>
        <p>Закрыть</p>
      </div>
      <p>Введите госномер вашего автомобиля</p>
      <input className='form-number__input' placeholder="A 001 AA   777"/>
      <div className='input__button'>
        <p>Не стоит на учёте в РФ</p>
        <label className="switch-toggle">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
      <div className='button-container'>
        <button className='back' onClick={handleBack}><img src={BackShape}/></button>
        <button className='skip' onClick={handleContinue}><p>Пропустить</p></button>
        <button className='continue' onClick={handleContinue}><p>Продолжить</p></button>
      </div>
    </div>
  );
};

const Form3 = ({ onNext , onBack}: FormProps) => {
  const handleContinue = () => {
    onNext();
  };
  const handleBack = () => {
    onBack();
  }
  return (
    <div className='form__container-long'>
      <div className='form__container-header'>
        <h3>Характеристики</h3>
        <p>Закрыть</p>
      </div>
      <div className='form__container-inputs first'>
        <input className='form-number__input-short' placeholder="Марка"/>
        <input className='form-number__input-short' placeholder="Модель"/>
      </div>
      <div className='form__container-inputs'>
        <input className='form-number__input-short' placeholder="Год выпуска"/>
        <input className='form-number__input-short' placeholder="Тип кузова"/>
      </div>
      <div className='form__container-inputs'>
        <input className='form-number__input-short' placeholder="Поколение"/>
        <input className='form-number__input-short' placeholder="Тип двигателя"/>
      </div>
      <div className='form__container-inputs'>
        <input className='form-number__input-short' placeholder="Привод"/>
        <input className='form-number__input-short' placeholder="Коробка"/>
      </div>
      <div className='form__container-inputs'>
        <input className='form-number__input-short' placeholder="Модификация"/>
        <input className='form-number__input-short' placeholder="Руль"/>
      </div>
      <div className='form__container-inputs'>
        <input className='form-number__input-short' placeholder="Цвет"/>
        <input className='form-number__input-short' placeholder="Пробег,км"/>
      </div>
      <div className='form__container-inputs'>
        <input className='form-number__input-short' placeholder="ПТС"/>
        <input className='form-number__input-short' placeholder="Количество владельцев"/>
      </div>
      <div className='form__container-inputs'>
        <input className='form-number__input-short' placeholder="Состояние"/>
        <input className='form-number__input-short' placeholder="Газобалонное оборудование"/>
      </div>
      <input className='form-number__input-short' placeholder="Опции"/>
      <div className='button-container'>
        <button className='back' onClick={handleBack}><img src={BackShape}/></button>
        <button className='continue' onClick={handleContinue}><p>Продолжить</p></button>
      </div>
    </div>
  );
};


const Form4 = ({ onNext , onBack}: FormProps) => {
  const handleContinue = () => {
    onNext();
  };
  const handleBack = () => {
    onBack();
  }
  return (
    <div className='form__container'>
      <div className='form__container-header'>
        <h3>Фото и видео</h3>
        <p>Закрыть</p>
      </div>
      <div className="custom-file-input first__input">
        <label>
          <img src={Camera}></img>
          <p>Добавить фото</p>
          </label>
        <input id="file-input" type="file" accept="image/*" multiple/>
        <p className='small-text'>Госномер должен быть хорошо виден на фото. Он будет спрятан за брендовой табличкой. Максимум 30 фото</p>
      </div>
      <div className="custom-file-input">
        <label>
          <img src={Player}></img>
          <p>Видео</p>
          </label>
        <input id="file-input" type="file" accept="video/*" multiple/>
        <p className='small-text'>Максимальная длина видео 1 минута</p>
      </div>
      <div className='button-container'>
        <button className='back' onClick={handleBack}><img src={BackShape}/></button>
        <button className='continue' onClick={handleContinue}><p>Продолжить</p></button>
      </div>
    </div>
  );
};
const Form5 = ({ onNext , onBack}: FormProps) => {
  const handleContinue = () => {
    onNext();
  };
  const handleBack = () => {
    onBack();
  }
  return (
    <div className='form__container'>
      <div className='form__container-header'>
        <h3>Карта повреждений</h3>
        <p>Закрыть</p>
      </div>

      <div className='button-container'>
        <button className='back' onClick={handleBack}><img src={BackShape}/></button>
        <button className='continue' onClick={handleContinue}><p>Продолжить</p></button>
      </div>
    </div>
  );
};

const Form6 = ({ onNext , onBack}: FormProps) => {
  const handleContinue = () => {
    onNext();
  };
  const handleBack = () => {
    onBack();
  }
  return (
    <div className='form__container'>
      <div className='form__container-header'>
        <h3>Описание</h3>
        <p>Закрыть</p>
      </div>
      <div>
        <textarea className='form-number__textarea' placeholder="Расскажите о достоинствах и недостатках вашего автомобиля"/>
        <p className='small-text'>Не указывайте ссылки, телефоны, цену и предлагать услуги, не связанные с продажей этого транспортного средства</p>
      </div>
      <div className='button-container'>
        <button className='back' onClick={handleBack}><img src={BackShape}/></button>
        <button className='continue' onClick={handleContinue}><p>Продолжить</p></button>
      </div>
    </div>
  );
};
const Form7 = ({ onNext , onBack}: FormProps) => {
  const handleContinue = () => {
    onNext();
  };
  const handleBack = () => {
    onBack();
  }
  return (
    <div className='form__container'>
      <div className='form__container-header'>
        <h3>Контактные данные</h3>
        <p>Закрыть</p>
      </div>
      <div className='form__container-inputs first2'>
        <input className='form-number__input-short' placeholder="Имя"/>
        <input className='form-number__input-short' placeholder="Город продажи"/>
      </div>
      <div className='form__container-inputs '>
        <input className='form-number__input-short' placeholder="Способ связи"/>
        <input className='form-number__input-short' placeholder="Телефон"/>
      </div>
      <div className='input__button'>
        <p>Защита номера от спама</p>
        <label className="switch-toggle">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
      <div>
        <p className='small-text'>В объявлении мы покажем поддменный телефонный номер. <br></br> Звонок поступит на ваш ностоящий номер, без СМС</p>
      </div>
      <div className='button-container'>
        <button className='back' onClick={handleBack}><img src={BackShape}/></button>
        <button className='continue' onClick={handleContinue}><p>Продолжить</p></button>
      </div>
    </div>
  );
};
const Form8 = ({ onNext , onBack}: FormProps) => {
  const handleContinue = () => {
    onNext();
  };
  const handleBack = () => {
    onBack();
  }
  return (
    <div className='form__container'>
      <div className='form__container-header'>
        <h3>Стоимость</h3>
        <p>Закрыть</p>
      </div>
      <input className='form-number__input' placeholder="Цена"/>
      <div className='input__button'>
        <p>Возможен обмен</p>
        <label className="switch-toggle">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
      <div className='buttons'>
        <p>Размещая объявления, вы соглашаетесь с правилами Автовилл.ру</p>
        <div className='button-container'>
          <button className='back' onClick={handleBack}><img src={BackShape}/></button>
          <button className='continue' onClick={handleContinue}><p>Продолжить</p></button>
        </div>
      </div>
    </div>
  );
};
export default MainPage;




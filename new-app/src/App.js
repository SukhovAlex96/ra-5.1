import './App.css';
import Aside from './components/Aside';
import Courses from './components/Courses';
import Ether from './components/Ether';
import News from './components/News';
import Search from './components/Search';
import TVprogram from './components/TVprogram';
import UpAside from './components/UpAside';
import Visited from './components/Visited';
import Weather from './components/Weather';
import Widget from './components/Widget';

function App() {
  return (
      <div className="container">
        <UpAside>
          <News title={'Сейчас в СМИ'}
                items={[
                  {
                    icon: '',
                    name: 'Суд закрыл дело Демпартии США против России',
                    link: '#0'
                  },
                  {
                    icon: '',
                    name: 'Одна хорошая новость',
                    link: '#0'
                  }
                ]
                }
          />
          <Courses items={[
            {
              name: "USD MOEX",
              value: 63.52,
              growth: "+0.09"
            }, {
              name: "EUR MOEX",
              value: 70.86,
              growth: "+0.14"
            }, {
              name: "НЕФТЬ",
              value: 64.90,
              growth: "+1.63%"
            }
          ]}
          />
        </UpAside>
        <Search options={[
          'Видео',
          'Картинки',
          'Новости',
          'Карты',
          'Маркет',
          'ещё',
        ]} />
        <Widget advertising={{
          img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg',
          link: '#0'
        }}>
        </Widget>
        <Aside>
          <Weather title={'Погода'}
                   items={[{
                     temperatureNow: '+17',
                     temperatureMorning: '+17',
                     temperatureDay: '+20'
                   }]}>
          </Weather>
          <TVprogram title={'Телепрограмма'}>
          </TVprogram>
          <Ether title={'Эфир'}>
          </Ether>
          <Visited title={'Посещаемое'}>
          </Visited>
        </Aside>
      </div>
  );
}

export default App;
import Controller from '@ember/controller';

export default class IndexController extends Controller {
  todaysLinks = [
    {
      t: 'Latest Russian loss estimates: 26,350 troops, 1187 tanks, 199 planes...',
      url: 'https://twitter.com/KyivIndependent/status/1524287668464541697',
    },
    {
      t: 'Latest battlefield assessment',
      url: 'https://twitter.com/JominiW/status/1524228712325160960',
    },
    {
      t: 'Dead Russian colonel count hits 40',
      url: 'https://www.independent.co.uk/news/world/europe/putin-loses-39th-colonel-kharkiv-b2075368.html',
    },
    {
      t: 'UA forces north of Kharkiv close in on Russian border',
      url: 'https://twitter.com/War_Mapper/status/1523815508029714434',
    },
    {
      t: 'May 9th: scaled-back parade. "Adverse weather" cancels flyover',
      url: 'https://www.newsweek.com/russia-cancels-military-flyovers-victory-day-may-9-adverse-weather-1704656',
    },
    {
      t: 'Latest Russian War Crime: School Shelter Bombing kills Dozens',
      url: 'https://www.cnn.com/2022/05/08/europe/luhansk-school-bombing-ukraine-russia-intl/index.html',
    },
    {
      t: 'Mariupol Heroes Continue to Hold Out',
      url: 'https://www.theguardian.com/world/2022/may/08/surrender-is-not-an-option-azov-battalion-commander-in-plea-for-help-to-escape-mariupol',
    },
  ];
}
// {t: '', url: ''},

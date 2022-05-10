import Controller from '@ember/controller';

export default class IndexController extends Controller {
  todaysLinks = [
    {
      t: 'Moscow Victory Day Parade nothing burger',
      url: 'https://twitter.com/Telegraph/status/1523607492290252800',
    },
    {
      t: 'Orcs under pressure north of Kharkiv',
      url: 'https://twitter.com/worldonalert/status/1524097088128262148',
    },
    {
      t: `Russian 'Donbass Offensive' continues with little to show`,
      url: 'https://www.ukrinform.net/rubric-ato/3478614-enemy-forces-continue-offensive-effort-in-ukraines-east-general-staff.html',
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

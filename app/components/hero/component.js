import Component from '@glimmer/component';
const peopleImgDir = '/assets/images/people';
export default class HeroComponent extends Component {
  imageCiv = `${peopleImgDir}/${this.args.hero.ic}`;
  imageMil = `${peopleImgDir}/${this.args.hero.im}`;
}

import Component from '@glimmer/component';
const peopleImgDir = '/assets/images/people';
export default class HeroComponent extends Component {
  hero = this.args.hero;
  imageCiv = `${peopleImgDir}/${this.hero.ic}`;
  imageMil = `${peopleImgDir}/${this.hero.im}`;
  link = this.hero.link;
  hasLink = !!this.link;
}

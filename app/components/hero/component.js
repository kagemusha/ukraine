import Component from '@glimmer/component';
const peopleImgDir = '/assets/images/people';
const imageBaseUrl = 'https://ik.imagekit.io/ubx4wnixel/uavictory/people';
export default class HeroComponent extends Component {
  hero = this.args.hero;
  imageCiv = this.hero.iic ? `${imageBaseUrl}/${this.hero.iic}`  : `${peopleImgDir}/${this.hero.ic}`;
  imageMil = `${peopleImgDir}/${this.hero.im}`;
  link = this.hero.link;
  hasLink = !!this.link;
}

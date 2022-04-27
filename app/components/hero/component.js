import Component from '@glimmer/component';

export default class HeroComponent extends Component {
    image = `/assets/image/${this.args.hero.i}`;
}

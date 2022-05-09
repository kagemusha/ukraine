import Component from '@glimmer/component';

export default class SongComponent extends Component {
  song = this.args.song;
  vid = this.song.vid;
  src = `https://www.youtube.com/embed/${this.vid}`;
}

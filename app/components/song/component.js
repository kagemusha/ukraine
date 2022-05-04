import Component from '@glimmer/component';

export default class SongComponent extends Component {
    song = this.args.song;
    vid = this.song.vid;
    watch = `https://www.youtube.com/watch?v=${this.vid}`
    src=`https://www.youtube.com/embed/${this.vid}`; 
}

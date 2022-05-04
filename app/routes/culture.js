import Route from '@ember/routing/route';
import songs from '../content/songs';

export default class CultureRoute extends Route {
    model() {
        return {
            songs
        };
    }
}


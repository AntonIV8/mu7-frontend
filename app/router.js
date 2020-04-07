import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-mu7-rwer-l');
  this.route('i-i-s-mu7-rwer-e',
  { path: 'i-i-s-mu7-rwer-e/:id' });
  this.route('i-i-s-mu7-rwer-e.new',
  { path: 'i-i-s-mu7-rwer-e/new' });
});

export default Router;

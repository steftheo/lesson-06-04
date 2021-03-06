import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route(`call-info`, { path: `/:_id` });
  this.route(`call-edit`, { path: `/:_id/edit`});
});

export default Router;

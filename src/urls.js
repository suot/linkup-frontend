import {config} from './env'

export const urls = {
  api_url: config.url.API_URL,
  
  signup: function() {
    return this.api_url+"/users";
  },

  signin: function() {
    return this.api_url+"/oauth/token";
  },

  posts: function() {
    return this.api_url+"/posts";
  },

  post: function(id) {
    return this.api_url+"/post/:id".replace(":id", id);
  },

  comments: function(postId) {
    return this.api_url+"/posts/:postId/comments".replace(":postId", postId);
  },

  comment: function(postId, id) {
    return this.api_url+"/posts/:postId/comments/:id".replace(":postId", postId).replace(":id", id);
  }
}

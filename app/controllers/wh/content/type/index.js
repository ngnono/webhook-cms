export default Ember.ArrayController.extend({
  type: null,

  // items is the model
  // each item has fields
  // type has fields that has showInCms boolean
  // only show fields marked with showInCms
  // setCmsFields: function () {

  //   if (!this.get('type.fields')) {
  //     return;
  //   }

  //   var names = this.get('type.fields').filterBy('showInCms').getEach('name');

  //   this.forEach(function (item, index) {
  //     var fields = names.map(function (name) {
  //       return item.get(name);
  //     });
  //     item.set('cmsFields', fields);
  //   });

  // }.observes('@each'),

  actions: {
    deleteItem: function (item) {
      this.removeObject(item);
    }
  }

});
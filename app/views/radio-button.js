export default Ember.View.extend({
  tagName: "input",
  type   : "radio",

  attributeBindings: [
    "name",
    "type",
    "value",
    "checked:checked:"
  ],

  // we can't use .val() because it returns "on" when value isn't set.
  click : function() {
    this.set("selection", this.$().attr('value') || "");
  },

  checked : function() {
    return this.get("value") === this.get("selection");
  }.property('selection'),

  defaultChanged: function () {
    // if (!this.get('selection') && this.get('defaultValue')) {
      this.set('selection', this.get('defaultValue'));
    // }
  }.observes('defaultValue'),

  willInsertElement: function () {
    if (!this.get('selection') && this.get('defaultValue')) {
      this.set('selection', this.get('defaultValue'));
    }
  }
});

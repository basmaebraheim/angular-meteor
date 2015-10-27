MongoCollectionObserverFake = function() {
  this._generators = [];

  this.observer = function(generator) {
    this._generators.push(generator);
  };

  this.next = function(value) {
    for (var i = 0; i < this._generators.length; i++) {
      this._generators[i].next(value);
    }
  };

  this.clear = function() {
    this._generators.length = 0;
  };

  this.destroy = function() {}
};

ObserverFactoryFake = function(observer) {
  this._observer = observer;

  var self = this;
  this.create = function(cursor) {
    self.observer = self._observer ||
      new MongoCollectionObserverFake(cursor);
    return self.observer;
  };
};

ObserveHandleFake = function() {
  this.stop = function() {};
};

MongoCollectionCursorFake = function() {
  this._generators = [];
  this.handle = new ObserveHandleFake();

  this.observe = function(generator) {
    this._generators.push(generator);
    return this.handle;
  };

  this.fetch = function() {};

  MongoCollectionCursorFake.prototype = Object.create(Mongo.Cursor.prototype);
};
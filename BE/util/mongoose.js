module.exports = {
    mutipleMongooseObject: function mutipleMongooseObject(mongooseArrays) {
        return mongooseArrays.map(mongoose => {
          if (mongoose && typeof mongoose.toObject === 'function') {
            return mongoose.toObject();
          } else {
            return mongoose;
          }
        });
      },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
    mutipleMongooseObjects: function (mongooseObjects) {
        return mongooseObjects.map((object) => object.toObject());
    }


}
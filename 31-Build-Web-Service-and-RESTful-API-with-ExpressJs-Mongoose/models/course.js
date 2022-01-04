const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 50,
    },
    description: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 500,
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Instructor",
      required: true,
    },
    scheduleDateTime: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CourseModel = mongoose.model("Course", CourseSchema);

module.exports = CourseModel;

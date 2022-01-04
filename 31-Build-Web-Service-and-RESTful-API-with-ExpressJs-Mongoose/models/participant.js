const mongoose = require("mongoose");

const ParticipantSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 50,
      minLength: 1,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
      required: false,
      maxLength: 50,
    },
    phone: {
      type: Number,
      required: false,
      maxLength: 13,
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ParticipantModel = mongoose.model("Participant", ParticipantSchema);

module.exports = ParticipantModel;

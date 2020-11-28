const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    priority: {
      type: String,
      required: true
    },
    openedBy: {
      type: String,
      required: false
    },
    message: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    closedBy: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);

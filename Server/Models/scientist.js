"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ScientistSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    field: String,
    ethnicity: String,
    century: Number,
  },
  {
    collection: "scientists",
  }
);
const Model = mongoose_1.default.model("Scientist", ScientistSchema);
exports.default = Model;


import { SlideNav } from "./slide.js";
console.clear();

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();

slide.addArrow(".prev", ".next");
slide.addControl();

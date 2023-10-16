import { KeenSliderPlugin } from "keen-slider/react";

export const AdaptiveHeightPlugin: KeenSliderPlugin = (slider) => {
  function updateHeight() {
    // debugger;
    slider.container.style.height =
      slider.slides[slider.track.details.rel].offsetHeight + "px";
  }
  slider.on("created", () => setTimeout(updateHeight, 20));
  slider.on("slideChanged", updateHeight);
};

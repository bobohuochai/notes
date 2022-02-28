import React from "react";

const components = {
  photo:<div class="photo"></div>,
  video:<div class="video"></div>
}

function Story(props) {
  const SpecialStory = components[props.storyType]
  return <SpecialStory story={props.story} />
}
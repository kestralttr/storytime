
export const fetchStories = (success,error) => {
  $.ajax({
    type: "GET",
    url: "api/stories",
    success: success,
    error:error
  });
};

export const fetchStory = (id,success,error) => {
  $.ajax({
    type: "GET",
    url: `api/stories/${id}`,
    success: success,
    error: error
  });
};

export const createStory = (story,success,error) => {
  $.ajax({
    type: "POST",
    url: `api/stories`,
    data: story,
    success: success,
    error: error
  });
};

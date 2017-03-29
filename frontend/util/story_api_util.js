
export const fetchStories = (success,error) => {
  $.ajax({
    type:"GET",
    url: "api/stories",
    success: success,
    error:error
  });
};

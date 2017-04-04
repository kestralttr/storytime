class Api::StoriesController < ApplicationController

  def index
    @stories = Story.all.reverse
  end

  def create
    @story = Story.new(
      title: story_params[:title],
      every_word: story_params[:every_word],
      body: story_params[:body]
    )
    if @story.save
      @stories = Story.all.reverse
      render "api/stories/index"
    else
      render json: ["Story creation failed."], status:422
    end
  end

  def show
    @story = Story.find(params[:id])
  end

  def update
    @story = Story.find(params[:id])
    if @story.update({body: @story.body + " " + story_params[:body]})
      render "api/stories/show"
    else
      render json: ["Story update failed."], status:422
    end
  end

  def story_params
    params.require(:story).permit(:title,:every_word,:body,:recent_identifier,:contributions)
  end

end

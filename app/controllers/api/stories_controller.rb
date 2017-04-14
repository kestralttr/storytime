class Api::StoriesController < ApplicationController

  def index
    @stories = Story.all.order('updated_at DESC')
  end

  def create
    @story = Story.new(
      title: story_params[:title],
      every_word: story_params[:every_word],
      body: story_params[:body]
    )
    if @story.save
      # @stories = Story.all.order('updated_at DESC')
      # render "api/stories/index"
      render "api/stories/show"
    else
      render json: ["Story creation failed."], status:422
    end
  end

  def show
    @story = Story.find(params[:id])
  end

  def update
    @story = Story.find(params[:id])
    if @story.tracker_key == story_params[:tracker_key]
      render "api/stories/show"
    elsif @story.update({body: @story.body + " " + story_params[:body],tracker_key: story_params[:tracker_key]})
      render "api/stories/show"
    else
      render json: ["Story update failed."], status:422
    end
  end

  def story_params
    params.require(:story).permit(:title,:every_word,:body,:tracker_key,:contributions)
  end

end

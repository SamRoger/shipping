class BlogsController < ApplicationController

  def index

  	render json: Blog.all
  end

  def show
  	# blog: Blog.find(params[:id]),
  	# comments: blog.comments

  	render json: Blog.find(params[:id])
  end

end

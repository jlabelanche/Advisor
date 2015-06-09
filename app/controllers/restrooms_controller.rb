class RestroomsController < ApplicationController

	def home
		render 'home'
	end

	def index
		@list_restrooms = Restroom.list_of_restrooms(10)

	end
	def show
		begin
    		@restroom = Restroom.find params[:id]
    	rescue ActiveRecord::RecordNotFound
    		render 'no_record_found', layout: 'no_record_found'
   		end
   	end
  	

	private
	def vote_params
		params.require(:vote).permit(:score, :date, :comment)
	end

end



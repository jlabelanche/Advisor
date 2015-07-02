class VotesController < ApplicationController

	def index
		@restroom = Restroom.find params[:restroom_id]
		@votes = Votes.all
	end

	def new
		@restroom = Restroom.find params[:restroom_id]
		@vote = @restroom.votes.new 
	end

	def create
		@restroom = Restroom.find params[:restroom_id]
		@vote = @restroom.votes.new(score: params[:score])

		 respond_to do |format|
      		if @vote.save
       		 format.json { render :json => { :avg_rating => @restroom.avg_rating } }
      		else
        	 format.json { render :json => @vote.errors, :status => :unprocessable_entity }
      	 end
        end
    end

    def update
  		@vote = Rating.find(params[:id])
  		@restroom = Restroom.find(params[:vote][:restroom_id])
  		@vote.update_attributes(params[:vote])
                
  		 respond_to do |format|
   		  if @vote.save
     		 format.json { render :json => { :avg_rating => @restroom.avg_rating } }
    	  else
     		 format.json { render :json => @vote.errors, :status => :unprocessable_entity }
    	  end
  		end
	end
	
	private
	def vote_params
		params.require(:vote).permit(:score, :date, :comment)
	end
end
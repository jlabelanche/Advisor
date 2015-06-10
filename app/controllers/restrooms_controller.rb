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

   	def new
		@restroom = Restroom.new
	end

	def create
		@restroom = Restroom.new restroom_params
		 if @restroom.save
			redirect_to @restroom
		else
			render 'new'
		end
	end

	def edit
		@restroom = Restroom.find params[:id]
	end

	def update
		@restroom = Restroom.find params[:id]

		if @restroom.update restroom_params
			redirect_to @restroom
		else
			render 'edit'
		end
	end

	def destroy
		restroom = Restroom.find  params[:id]
		restroom.destroy
		redirect_to project_path

	end
  	

	private
	def restroom_params
		params.require(:restroom).permit(:name, :access, :facilities, :accessible_facilities, :opening, :baby_changing, :fee, :province, :city, :notes)
	end

end




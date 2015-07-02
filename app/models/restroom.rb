class Restroom < ActiveRecord::Base
	has_many :votes
	
  	geocoded_by :address
    after_validation :geocode, :if => :address_changed?


	def self.last_restrooms(param)
		Restroom.order(created_at: :desc).limit param
	end

	def avg_rating
  		average_rating = 0.0
  		count = 0
  		votes.each do |vote| 
   		average_rating += vote.score
   		count += 1
  	end
                
	  	if count != 0
	    	(average_rating / count)
	  	else
	    count
	  	end
	end

	def self.search city
   	Restroom.where("city LIKE '%" + city.to_s + "%'")
    end

end


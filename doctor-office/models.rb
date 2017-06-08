class Doctor < ActiveRecord::Base
	has_many :appointment_doctor
	has_many :patients, through: :AppointmentDoctor
end

class Appointment < ActiveRecord::Base
	belongs_to :doctor
	belongs_to :patient
end

class Patient < ActiveRecord::Base
	has_many :appointment_doctor
	has_many :doctors, through: :AppointmentDoctor
end

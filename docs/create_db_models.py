# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, Boolean, Float, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

Base = declarative_base()

class Citizen(Base):
    """description: Represents citizens registering for transport services"""
    __tablename__ = 'citizen'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    address = Column(String, nullable=False)
    household_income = Column(Float, nullable=False)
    qualifies_for_free_travel = Column(Boolean, nullable=False, default=False)


class QualifyingReason(Base):
    """description: Represents various reasons for qualification for free travel"""
    __tablename__ = 'qualifying_reason'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    description = Column(String, nullable=False)


class CitizenQualifyingReason(Base):
    """description: Links citizens with their qualifying reasons"""
    __tablename__ = 'citizen_qualifying_reason'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    citizen_id = Column(Integer, ForeignKey('citizen.id'), nullable=False)
    qualifying_reason_id = Column(Integer, ForeignKey('qualifying_reason.id'), nullable=False)


class TransportService(Base):
    """description: Represents different transport services available"""
    __tablename__ = 'transport_service'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String, nullable=True)


class Registration(Base):
    """description: Links citizens with the transport service registrations"""
    __tablename__ = 'registration'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    citizen_id = Column(Integer, ForeignKey('citizen.id'), nullable=False)
    service_id = Column(Integer, ForeignKey('transport_service.id'), nullable=False)
    registration_date = Column(DateTime, default=datetime.datetime.now)


class IncomeThreshold(Base):
    """description: Represents income thresholds for qualification"""
    __tablename__ = 'income_threshold'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    threshold_amount = Column(Float, nullable=False)


class CitizenFeedback(Base):
    """description: Stores feedback from citizens regarding the services"""
    __tablename__ = 'citizen_feedback'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    citizen_id = Column(Integer, ForeignKey('citizen.id'), nullable=False)
    feedback = Column(String, nullable=False)
    feedback_date = Column(DateTime, default=datetime.datetime.now)


class ServiceSchedule(Base):
    """description: Represents the schedule for transport services"""
    __tablename__ = 'service_schedule'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    service_id = Column(Integer, ForeignKey('transport_service.id'), nullable=False)
    schedule_details = Column(String, nullable=False)


class Discount(Base):
    """description: Represents discounts available on transport services"""
    __tablename__ = 'discount'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    service_id = Column(Integer, ForeignKey('transport_service.id'), nullable=False)
    discount_amount = Column(Float, nullable=False)
    eligibility_criteria = Column(String, nullable=False)


class Driver(Base):
    """description: Represents drivers for transport services"""
    __tablename__ = 'driver'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    license_number = Column(String, nullable=False)


class ServiceDriver(Base):
    """description: Links services with their drivers"""
    __tablename__ = 'service_driver'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    service_id = Column(Integer, ForeignKey('transport_service.id'), nullable=False)
    driver_id = Column(Integer, ForeignKey('driver.id'), nullable=False)


class ServiceUsageHistory(Base):
    """description: Tracks the usage history of services by citizens"""
    __tablename__ = 'service_usage_history'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    citizen_id = Column(Integer, ForeignKey('citizen.id'), nullable=False)
    service_id = Column(Integer, ForeignKey('transport_service.id'), nullable=False)
    usage_date = Column(DateTime, nullable=False)


# Database setup
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()

# Adding a threshold
threshold = IncomeThreshold(threshold_amount=30000.00)
session.add(threshold)

# Adding transport services
bus_service = TransportService(name="City Bus", description="General city transport bus service")
wheelchair_service = TransportService(name="Wheelchair Accessible Transport", description="Transport service for wheelchair users")
session.add_all([bus_service, wheelchair_service])

# Adding citizens
citizens = [
    Citizen(name="John Doe", address="123 Elm St", household_income=25000.00, qualifies_for_free_travel=True),
    Citizen(name="Jane Smith", address="456 Maple Ave", household_income=32000.00, qualifies_for_free_travel=False)
]
session.add_all(citizens)

# Adding qualifying reasons
reasons = [
    QualifyingReason(description="Disabled Person"),
    QualifyingReason(description="Elderly Person"),
    QualifyingReason(description="Military Veteran")
]
session.add_all(reasons)

# Linking citizens with qualifying reasons
citizen_reasons = [
    CitizenQualifyingReason(citizen_id=1, qualifying_reason_id=1),
    CitizenQualifyingReason(citizen_id=2, qualifying_reason_id=3)
]
session.add_all(citizen_reasons)

# Registering citizens for services
registrations = [
    Registration(citizen_id=1, service_id=1),
    Registration(citizen_id=2, service_id=2)
]
session.add_all(registrations)

# Adding feedbacks
feedbacks = [
    CitizenFeedback(citizen_id=1, feedback="Great service!", feedback_date=datetime.datetime.now()),
    CitizenFeedback(citizen_id=2, feedback="Needs improvement in timing.", feedback_date=datetime.datetime.now())
]
session.add_all(feedbacks)

# Adding schedules
schedules = [
    ServiceSchedule(service_id=1, schedule_details="Weekdays: 6am - 10pm"),
    ServiceSchedule(service_id=2, schedule_details="Daily: 8am - 8pm")
]
session.add_all(schedules)

# Adding discounts
discounts = [
    Discount(service_id=1, discount_amount=0.1, eligibility_criteria="Elderly"),
    Discount(service_id=2, discount_amount=0.2, eligibility_criteria="Disabled")
]
session.add_all(discounts)

# Adding drivers
drivers = [
    Driver(name="Alice Brown", license_number="B12345"),
    Driver(name="Bob White", license_number="W23456")
]
session.add_all(drivers)

# Linking services with drivers
service_drivers = [
    ServiceDriver(service_id=1, driver_id=1),
    ServiceDriver(service_id=2, driver_id=2)
]
session.add_all(service_drivers)

# Adding usage history
usage_histories = [
    ServiceUsageHistory(citizen_id=1, service_id=1, usage_date=datetime.datetime.now()),
    ServiceUsageHistory(citizen_id=2, service_id=2, usage_date=datetime.datetime.now())
]
session.add_all(usage_histories)

# Commit the session to save the data
session.commit()

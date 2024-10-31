# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Boolean, Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 31, 2024 17:52:20
# Database: sqlite:////tmp/tmp.Aaq6wmdsVU/Public_Transit_Free_Fare_System/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Citizen(SAFRSBaseX, Base):
    """
    description: Represents citizens registering for transport services
    """
    __tablename__ = 'citizen'
    _s_collection_name = 'Citizen'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    address = Column(String, nullable=False)
    household_income = Column(Float, nullable=False)
    qualifies_for_free_travel = Column(Boolean, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    CitizenFeedbackList : Mapped[List["CitizenFeedback"]] = relationship(back_populates="citizen")
    CitizenQualifyingReasonList : Mapped[List["CitizenQualifyingReason"]] = relationship(back_populates="citizen")
    RegistrationList : Mapped[List["Registration"]] = relationship(back_populates="citizen")
    ServiceUsageHistoryList : Mapped[List["ServiceUsageHistory"]] = relationship(back_populates="citizen")



class Driver(SAFRSBaseX, Base):
    """
    description: Represents drivers for transport services
    """
    __tablename__ = 'driver'
    _s_collection_name = 'Driver'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    license_number = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    ServiceDriverList : Mapped[List["ServiceDriver"]] = relationship(back_populates="driver")



class IncomeThreshold(SAFRSBaseX, Base):
    """
    description: Represents income thresholds for qualification
    """
    __tablename__ = 'income_threshold'
    _s_collection_name = 'IncomeThreshold'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    threshold_amount = Column(Float, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)



class QualifyingReason(SAFRSBaseX, Base):
    """
    description: Represents various reasons for qualification for free travel
    """
    __tablename__ = 'qualifying_reason'
    _s_collection_name = 'QualifyingReason'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    description = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    CitizenQualifyingReasonList : Mapped[List["CitizenQualifyingReason"]] = relationship(back_populates="qualifying_reason")



class TransportService(SAFRSBaseX, Base):
    """
    description: Represents different transport services available
    """
    __tablename__ = 'transport_service'
    _s_collection_name = 'TransportService'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    DiscountList : Mapped[List["Discount"]] = relationship(back_populates="service")
    RegistrationList : Mapped[List["Registration"]] = relationship(back_populates="service")
    ServiceDriverList : Mapped[List["ServiceDriver"]] = relationship(back_populates="service")
    ServiceScheduleList : Mapped[List["ServiceSchedule"]] = relationship(back_populates="service")
    ServiceUsageHistoryList : Mapped[List["ServiceUsageHistory"]] = relationship(back_populates="service")



class CitizenFeedback(SAFRSBaseX, Base):
    """
    description: Stores feedback from citizens regarding the services
    """
    __tablename__ = 'citizen_feedback'
    _s_collection_name = 'CitizenFeedback'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    citizen_id = Column(ForeignKey('citizen.id'), nullable=False)
    feedback = Column(String, nullable=False)
    feedback_date = Column(DateTime)

    # parent relationships (access parent)
    citizen : Mapped["Citizen"] = relationship(back_populates=("CitizenFeedbackList"))

    # child relationships (access children)



class CitizenQualifyingReason(SAFRSBaseX, Base):
    """
    description: Links citizens with their qualifying reasons
    """
    __tablename__ = 'citizen_qualifying_reason'
    _s_collection_name = 'CitizenQualifyingReason'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    citizen_id = Column(ForeignKey('citizen.id'), nullable=False)
    qualifying_reason_id = Column(ForeignKey('qualifying_reason.id'), nullable=False)

    # parent relationships (access parent)
    citizen : Mapped["Citizen"] = relationship(back_populates=("CitizenQualifyingReasonList"))
    qualifying_reason : Mapped["QualifyingReason"] = relationship(back_populates=("CitizenQualifyingReasonList"))

    # child relationships (access children)



class Discount(SAFRSBaseX, Base):
    """
    description: Represents discounts available on transport services
    """
    __tablename__ = 'discount'
    _s_collection_name = 'Discount'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    service_id = Column(ForeignKey('transport_service.id'), nullable=False)
    discount_amount = Column(Float, nullable=False)
    eligibility_criteria = Column(String, nullable=False)

    # parent relationships (access parent)
    service : Mapped["TransportService"] = relationship(back_populates=("DiscountList"))

    # child relationships (access children)



class Registration(SAFRSBaseX, Base):
    """
    description: Links citizens with the transport service registrations
    """
    __tablename__ = 'registration'
    _s_collection_name = 'Registration'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    citizen_id = Column(ForeignKey('citizen.id'), nullable=False)
    service_id = Column(ForeignKey('transport_service.id'), nullable=False)
    registration_date = Column(DateTime)

    # parent relationships (access parent)
    citizen : Mapped["Citizen"] = relationship(back_populates=("RegistrationList"))
    service : Mapped["TransportService"] = relationship(back_populates=("RegistrationList"))

    # child relationships (access children)



class ServiceDriver(SAFRSBaseX, Base):
    """
    description: Links services with their drivers
    """
    __tablename__ = 'service_driver'
    _s_collection_name = 'ServiceDriver'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    service_id = Column(ForeignKey('transport_service.id'), nullable=False)
    driver_id = Column(ForeignKey('driver.id'), nullable=False)

    # parent relationships (access parent)
    driver : Mapped["Driver"] = relationship(back_populates=("ServiceDriverList"))
    service : Mapped["TransportService"] = relationship(back_populates=("ServiceDriverList"))

    # child relationships (access children)



class ServiceSchedule(SAFRSBaseX, Base):
    """
    description: Represents the schedule for transport services
    """
    __tablename__ = 'service_schedule'
    _s_collection_name = 'ServiceSchedule'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    service_id = Column(ForeignKey('transport_service.id'), nullable=False)
    schedule_details = Column(String, nullable=False)

    # parent relationships (access parent)
    service : Mapped["TransportService"] = relationship(back_populates=("ServiceScheduleList"))

    # child relationships (access children)



class ServiceUsageHistory(SAFRSBaseX, Base):
    """
    description: Tracks the usage history of services by citizens
    """
    __tablename__ = 'service_usage_history'
    _s_collection_name = 'ServiceUsageHistory'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    citizen_id = Column(ForeignKey('citizen.id'), nullable=False)
    service_id = Column(ForeignKey('transport_service.id'), nullable=False)
    usage_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    citizen : Mapped["Citizen"] = relationship(back_populates=("ServiceUsageHistoryList"))
    service : Mapped["TransportService"] = relationship(back_populates=("ServiceUsageHistoryList"))

    # child relationships (access children)

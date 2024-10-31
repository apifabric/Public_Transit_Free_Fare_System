from safrs import SAFRSAPI
import safrs
import importlib
import pathlib
import logging as logging

# use absolute path import for easier multi-{app,model,db} support
database = __import__('database')

app_logger = logging.getLogger(__name__)

app_logger.debug("\napi/expose_api_models.py - endpoint for each table")


def expose_models(api, method_decorators = []): 
    """
        Declare API - on existing SAFRSAPI to expose each model - API automation 
        - Including get (filtering, pagination, related data access) 
        - And post/patch/update (including logic enforcement) 

        Invoked at server startup (api_logic_server_run) 

        You typically do not customize this file 
        - See https://apilogicserver.github.io/Docs/Tutorial/#customize-and-debug 
    """
    api.expose_object(database.models.Citizen, method_decorators= method_decorators)
    api.expose_object(database.models.CitizenFeedback, method_decorators= method_decorators)
    api.expose_object(database.models.CitizenQualifyingReason, method_decorators= method_decorators)
    api.expose_object(database.models.QualifyingReason, method_decorators= method_decorators)
    api.expose_object(database.models.Discount, method_decorators= method_decorators)
    api.expose_object(database.models.TransportService, method_decorators= method_decorators)
    api.expose_object(database.models.Driver, method_decorators= method_decorators)
    api.expose_object(database.models.IncomeThreshold, method_decorators= method_decorators)
    api.expose_object(database.models.Registration, method_decorators= method_decorators)
    api.expose_object(database.models.ServiceDriver, method_decorators= method_decorators)
    api.expose_object(database.models.ServiceSchedule, method_decorators= method_decorators)
    api.expose_object(database.models.ServiceUsageHistory, method_decorators= method_decorators)
    return api

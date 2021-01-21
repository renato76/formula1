from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status  

from rest_framework.exceptions import NotFound

from .models import Driver
from .serializers.common import DriverSerializer


class DriversListView(APIView):

    ''' Handles all requests to /drivers (Get-Index and Post-Create) '''

    def get(self, _request):
        # fetch all the drivers from the driver object
        drivers_list = Driver.objects.all()
        # run the data through serializer to turn into JSON
        serialized_drivers_list = DriverSerializer(drivers_list, many=True)
        # return a success response
        return Response(serialized_drivers_list.data, status=status.HTTP_200_OK)



    def post(self, request):
        driver_to_create = DriverSerializer(data=request.data)
        if driver_to_create.is_valid():
            driver_to_create.save()
            return Response(driver_to_create.data, status=status.HTTP_201_CREATED)
        return Response(driver_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        


class DriverDetailView(APIView):
    ''' Handles all requests to /drivers/driver-id (Get-Show, Put-Update and Delete-Delete) '''

    # a helper function as I will need to reuse it for other requests
    def get_driver(self, pk):
        try: 
            return Driver.objects.get(pk=pk)
        except Driver.DoesNotExist:
            raise NotFound(detail="Driver not found")

    def get(self, _request, pk):
    # fetch a single driver from the driver object using their pk (id)
        driver = self.get_driver(pk=pk)
        serialized_driver = DriverSerializer(driver)
        return Response(serialized_driver.data, status=status.HTTP_200_OK)
        







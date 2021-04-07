from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status  
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Driver
from .serializers.common import DriverSerializer
from .serializers.populated import  PopulatedDriverSerializer

class DriversListView(APIView):

    ''' Handles all requests to /drivers (Get-Index and Post-Create) '''

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request):
        # fetch all the drivers from the driver object
        drivers_list = Driver.objects.all().select_related('team')
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

    permission_classes = (IsAuthenticatedOrReadOnly, )

    # a helper function as I will need to reuse it for the other requests, GET, PUT AND DELETE
    def get_driver(self, pk):
        try: 
            return Driver.objects.get(pk=pk)
        except Driver.DoesNotExist:
            raise NotFound(detail="Driver not found")

    def get(self, _request, pk):
    # fetch a single driver from the driver object using their pk (id)
        driver = self.get_driver(pk=pk)
        serialized_driver = PopulatedDriverSerializer(driver)
        return Response(serialized_driver.data, status=status.HTTP_200_OK)
        
    def put(self, request, pk):
            driver_to_update = self.get_driver(pk=pk)
            updated_driver = DriverSerializer(driver_to_update, data=request.data)
            if updated_driver.is_valid():
                updated_driver.save()
                return Response(updated_driver.data, status=status.HTTP_202_ACCEPTED)
            return Response(updated_driver.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, _request, pk):
        driver_to_delete = self.get_driver(pk=pk)
        driver_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)






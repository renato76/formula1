from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status  

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

class DriverDetailView(APIView):

    def get(self, _request, pk):
        # fetch a single driver from the driver object using their pk (id)
        driver = Driver.objects.get(pk=pk)
        # run the data through serializer to turn into JSON
        serialized_driver = DriverSerializer(driver)
        # return a success response
        return Response(serialized_driver.data, status=status.HTTP_200_OK)







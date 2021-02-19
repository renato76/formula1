from rest_framework import serializers
from drivers.serializers.common import DriverSerializer
from ..models import Team

class TeamWithDriversSerializer(serializers.ModelSerializer):
    drivers = DriverSerializer(many=True)
    class Meta:
        model = Team
        fields = '__all__'
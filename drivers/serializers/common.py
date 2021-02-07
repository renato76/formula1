from rest_framework import serializers
from ..models import Driver

from teams.serializers.common import TeamSerializer

class DriverSerializer(serializers.ModelSerializer):
    team = TeamSerializer()

    class Meta:
        model = Driver
        fields = '__all__'

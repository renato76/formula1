from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Team
from .serializers.common import TeamSerializer


class TeamListView(APIView):

    ''' Handles all requests to /teams (Get-Index and Post-Create) '''

    def get(self, _request):
        teams_list = Team.objects.all()
        serialized_teams_list = TeamSerializer(teams_list, many=True)
        return Response(serialized_teams_list.data, status=status.HTTP_200_OK)

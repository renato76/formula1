from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Team
from .serializers.list_serializer import TeamWithDriversSerializer
# from .serializers.populated import  PopulatedTeamSerializer

class TeamListView(APIView):

    ''' Handles all requests to /teams (Get-Index and Post-Create) '''

    def get(self, _request):
        teams_list = Team.objects.all().prefetch_related('drivers')
        serialized_teams_list = TeamWithDriversSerializer(teams_list, many=True)
        return Response(serialized_teams_list.data, status=status.HTTP_200_OK)

class TeamDetailView(APIView):
    ''' Handles all requests to /teams/teamId (Get-Show, Put-Update and Delete/Delete) '''
    # helper function
    def get_team(self, pk):
        try:
            return Team.objects.get(pk=pk)
        except Team.DoesNotExist:
            raise NotFound(detail="Team not found")

    def get(self, _request, pk):
    # fetch a single team fdrom the Team object using their pk (id)
        team = self.get_team(pk=pk)
        serialized_team = TeamWithDriversSerializer(team)
        return Response(serialized_team.data, status=status.HTTP_200_OK)


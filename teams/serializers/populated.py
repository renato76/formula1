from comments.serializers.common import CommentSerializer
from ..serializers.common import TeamSerializer


class PopulatedTeamSerializer(TeamSerializer):

    comments = CommentSerializer(many=True)
from comments.serializers.common import CommentSerializer
# from teams.serializers.common import TeamSerializer
from ..serializers.common import DriverSerializer


class PopulatedDriverSerializer(DriverSerializer):

    comments = CommentSerializer(many=True)

from comments.serializers.common import CommentSerializer
from ..serializers.common import DriverSerializer


class PopulatedDriverSerializer(DriverSerializer):

    comments = CommentSerializer(many=True)

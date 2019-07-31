from rest_framework import serializers
from api.models import KickstarterCampaign

class ApiSerializer(serializers.ModelSerializer):
    class Meta:
        model = KickstarterCampaign
        fields = ['id','backers','blurb','pledged','created']
        